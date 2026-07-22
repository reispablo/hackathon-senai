import { resolve } from "node:path";
import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  args: ["--no-sandbox", "--disable-setuid-sandbox"]
});

const page = await browser.newPage();
const flyerUrl = process.env.FLYER_URL || `file://${resolve("dist/flyer.html")}`;

await page.goto(flyerUrl, {
  waitUntil: "networkidle0"
});

await page.pdf({
  path: "export/flyer-hackathon-senai-2026-a4.pdf",
  format: "A4",
  printBackground: true,
  preferCSSPageSize: false,
  scale: 0.9,
  margin: {
    top: "8mm",
    right: "8mm",
    bottom: "8mm",
    left: "8mm"
  }
});

await browser.close();
