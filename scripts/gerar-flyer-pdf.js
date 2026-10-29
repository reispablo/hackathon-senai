import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";
import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--allow-file-access-from-files"]
});

const page = await browser.newPage();
const flyerUrl = process.env.FLYER_URL || `file://${resolve("dist/flyer.html")}`;

await page.goto(flyerUrl, {
  waitUntil: "networkidle0"
});

await page.emulateMediaType("print");
await page.evaluate(async () => {
  await document.fonts.ready;
  await Promise.all(
    [...document.images]
      .filter((image) => !image.complete)
      .map((image) => new Promise((resolveImage) => {
        image.addEventListener("load", resolveImage, { once: true });
        image.addEventListener("error", resolveImage, { once: true });
      }))
  );
});

await page.pdf({
  path: "export/flyer-hackathon-senai-2026.pdf",
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  margin: 0
});

await copyFile(
  "export/flyer-hackathon-senai-2026.pdf",
  "export/flyer-hackathon-senai-2026-a4.pdf"
);

await browser.close();
