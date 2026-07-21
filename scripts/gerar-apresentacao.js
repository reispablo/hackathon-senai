import pptxgen from "pptxgenjs";

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "SENAI";
pptx.company = "SENAI";
pptx.subject = "Proposta para aprovação do Hackathon SENAI 2026";
pptx.title = "Hackathon SENAI 2026";
pptx.lang = "pt-BR";
pptx.theme = {
  headFontFace: "Aptos Display",
  bodyFontFace: "Aptos",
  lang: "pt-BR"
};

const W = 13.333;
const H = 7.5;
const blue = "108DFF";
const dark = "03152A";
const navy = "020912";
const white = "F6FBFF";
const muted = "B9D2EB";
const orange = "FF7417";
const line = "1B6FB8";

function bg(slide) {
  slide.background = { color: navy };
  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: W,
    h: H,
    fill: { color: navy },
    line: { color: navy }
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: W,
    h: H,
    fill: { color: dark, transparency: 12 },
    line: { color: dark, transparency: 100 }
  });
  slide.addShape(pptx.ShapeType.arc, {
    x: 9.55,
    y: -1.1,
    w: 4.8,
    h: 4.8,
    line: { color: blue, transparency: 34, width: 1.2 },
    adjustPoint: 0.5
  });
  slide.addShape(pptx.ShapeType.line, {
    x: 0.55,
    y: 6.98,
    w: 12.25,
    h: 0,
    line: { color: line, transparency: 52, width: 1 }
  });
}

function title(slide, text, subtitle) {
  slide.addText(text, {
    x: 0.65,
    y: 0.42,
    w: 9.4,
    h: 0.42,
    color: white,
    fontSize: 23,
    bold: true,
    margin: 0
  });
  slide.addShape(pptx.ShapeType.line, {
    x: 0.65,
    y: 0.93,
    w: 0.95,
    h: 0,
    line: { color: blue, width: 2 }
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 1.75,
      y: 0.8,
      w: 8.2,
      h: 0.3,
      color: muted,
      fontSize: 10,
      margin: 0
    });
  }
}

function footer(slide) {
  slide.addText("Hackathon SENAI 2026 | Proposta para aprovação", {
    x: 0.65,
    y: 7.08,
    w: 6.2,
    h: 0.22,
    color: muted,
    fontSize: 7.6,
    margin: 0
  });
}

function card(slide, x, y, w, h, heading, body, accent = blue) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x,
    y,
    w,
    h,
    rectRadius: 0.08,
    fill: { color: "06203F", transparency: 4 },
    line: { color: accent, transparency: 45, width: 1 }
  });
  slide.addText(heading, {
    x: x + 0.18,
    y: y + 0.16,
    w: w - 0.36,
    h: 0.28,
    color: accent,
    fontSize: 10.8,
    bold: true,
    margin: 0
  });
  slide.addText(body, {
    x: x + 0.18,
    y: y + 0.58,
    w: w - 0.36,
    h: h - 0.72,
    color: white,
    fontSize: 10.2,
    breakLine: false,
    fit: "shrink",
    margin: 0.02,
    valign: "top"
  });
}

function bullets(slide, items, x, y, w, h, opts = {}) {
  const runs = items.map((item) => ({
    text: item,
    options: { bullet: { indent: 13 }, hanging: 4, breakLine: true }
  }));
  slide.addText(runs, {
    x,
    y,
    w,
    h,
    color: opts.color || white,
    fontSize: opts.fontSize || 13,
    fit: "shrink",
    margin: 0,
    breakLine: false
  });
}

function addCover() {
  const slide = pptx.addSlide();
  bg(slide);
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.7,
    y: 0.55,
    w: 2.55,
    h: 0.9,
    rectRadius: 0.12,
    fill: { color: "0B58B7" },
    line: { color: blue, transparency: 15 }
  });
  slide.addText("SENAI", {
    x: 0.92,
    y: 0.73,
    w: 2.1,
    h: 0.45,
    color: white,
    fontSize: 30,
    bold: true,
    italic: true,
    margin: 0
  });
  slide.addText("HACKATHON", {
    x: 0.7,
    y: 2.2,
    w: 7.2,
    h: 0.72,
    color: white,
    fontSize: 42,
    bold: true,
    margin: 0
  });
  slide.addText("SENAI 2026", {
    x: 0.7,
    y: 2.96,
    w: 5.2,
    h: 0.5,
    color: blue,
    fontSize: 28,
    bold: true,
    margin: 0
  });
  slide.addText("Conectando clientes e profissionais do setor automotivo", {
    x: 0.72,
    y: 3.72,
    w: 5.6,
    h: 0.62,
    color: white,
    fontSize: 18,
    margin: 0
  });
  card(slide, 8.2, 1.18, 4.35, 4.55, "Proposta para aprovação", "Evento de 8 horas para estudantes de Tecnologia da Informação, com desenvolvimento de solução digital aplicada a uma necessidade real do mercado automotivo.", orange);
  slide.addText("Gerência / Supervisão", {
    x: 8.55,
    y: 5.15,
    w: 3.65,
    h: 0.3,
    color: muted,
    fontSize: 13,
    align: "center",
    margin: 0
  });
}

function addTitleBullets(titleText, subtitle, items) {
  const slide = pptx.addSlide();
  bg(slide);
  title(slide, titleText, subtitle);
  bullets(slide, items, 0.95, 1.58, 11.4, 4.8, { fontSize: 17 });
  footer(slide);
}

addCover();

addTitleBullets("Contexto", "Oportunidade real de mercado", [
  "Clientes têm dificuldade para encontrar profissionais automotivos confiáveis e disponíveis.",
  "Profissionais precisam de canais mais simples para divulgar serviços e conquistar clientes.",
  "O tema permite aos estudantes desenvolver uma solução próxima da realidade do mercado.",
  "A proposta conecta tecnologia, inovação, experiência do usuário e regras de negócio."
]);

addTitleBullets("Proposta do Evento", "Hackathon de 8 horas", [
  "Realizar um desafio prático com estudantes de Tecnologia da Informação do SENAI.",
  "As equipes deverão planejar, prototipar, desenvolver, documentar e apresentar uma solução.",
  "O produto final deve conectar clientes e profissionais do setor automotivo.",
  "A dinâmica simula pressão de prazo, colaboração e tomada de decisão presentes no mercado."
]);

addTitleBullets("Intenção Pedagógica", "Aprendizagem prática orientada a resultado", [
  "Estimular protagonismo, criatividade e resolução de problemas reais.",
  "Fortalecer competências técnicas em front-end, back-end, banco de dados e documentação.",
  "Desenvolver comunicação, colaboração, organização e apresentação de solução.",
  "Integrar conteúdos trabalhados em sala em uma experiência aplicada."
]);

addTitleBullets("Justificativa", "Por que realizar o hackathon", [
  "A atividade amplia o engajamento dos alunos por meio de um desafio concreto e mensurável.",
  "O tema automotivo é acessível, relevante e permite diferentes níveis de solução.",
  "O formato favorece avaliação integrada de competências técnicas e comportamentais.",
  "A proposta reforça a relação entre formação profissional, inovação e necessidade de mercado."
]);

{
  const slide = pptx.addSlide();
  bg(slide);
  title(slide, "Objetivo e Escopo", "O que as equipes deverão construir");
  card(slide, 0.8, 1.42, 5.85, 4.8, "Objetivo Geral", "Desenvolver uma solução tecnológica inovadora que conecte clientes e profissionais do setor automotivo de maneira prática, rápida e confiável.", orange);
  card(slide, 6.9, 1.42, 5.6, 4.8, "Escopo mínimo", "Nome do projeto\nObjetivo, tema e justificativa\nPúblico atendido\nFuncionalidades principais\nRegras de negócio\nEstrutura básica do banco de dados\nTecnologias utilizadas");
  footer(slide);
}

{
  const slide = pptx.addSlide();
  bg(slide);
  title(slide, "Formato e Organização", "Estrutura operacional proposta");
  card(slide, 0.8, 1.38, 2.8, 1.75, "Duração", "8 horas de evento, incluindo abertura, modelagem, desenvolvimento, preparação do pitch e avaliação.");
  card(slide, 3.82, 1.38, 2.8, 1.75, "Equipes", "Equipes pré-definidas, com quantidade de membros definida pela organização.");
  card(slide, 6.84, 1.38, 2.8, 1.75, "Público", "Estudantes de Tecnologia da Informação do SENAI.");
  card(slide, 9.86, 1.38, 2.8, 1.75, "Entrega", "Sistema funcionando, documentação, código organizado e pitch final.");
  card(slide, 0.8, 3.58, 11.86, 1.68, "Condução", "O evento será orientado por regras claras, controle de tempo, momentos de avaliação e acompanhamento das entregas previstas.", orange);
  footer(slide);
}

{
  const slide = pptx.addSlide();
  bg(slide);
  title(slide, "Cronograma", "Distribuição das atividades no dia");
  const rows = [
    ["08:00 - 08:20", "Abertura e apresentação do desafio"],
    ["08:20 - 10:20", "Modelagem e prototipagem em papel"],
    ["10:20 - 10:35", "Coffee break"],
    ["10:35 - 11:15", "Início do desenvolvimento"],
    ["11:15 - 11:25", "Janela IA #1"],
    ["11:25 - 12:05", "Desenvolvimento sem IA"],
    ["12:05 - 12:15", "Janela IA #2"],
    ["12:15 - 12:30", "Desenvolvimento e ajustes"],
    ["12:30 - 13:10", "Almoço"],
    ["13:10 - 13:40", "Retomada do desenvolvimento"],
    ["13:40 - 13:50", "Janela IA #3"],
    ["13:50 - 14:15", "Correções e integração"],
    ["14:15 - 14:25", "Janela IA #4"],
    ["14:25 - 14:35", "Fechamento da Fase 2"],
    ["14:35 - 15:00", "Preparação do pitch"],
    ["15:00 - 16:00", "Pitch e avaliação final"]
  ];
  rows.forEach((row, index) => {
    const y = 1.24 + index * 0.37;
    const isAi = row[1].includes("IA");
    slide.addText(row[0], { x: 0.95, y, w: 1.7, h: 0.22, color: isAi ? orange : blue, fontSize: 9.3, bold: true, margin: 0 });
    slide.addText(row[1], { x: 2.9, y, w: 8.8, h: 0.22, color: white, fontSize: 9.8, margin: 0 });
    slide.addShape(pptx.ShapeType.line, { x: 0.95, y: y + 0.29, w: 10.95, h: 0, line: { color: line, transparency: 74 } });
  });
  footer(slide);
}

addTitleBullets("Uso de Inteligência Artificial", "Uso controlado e consciente", [
  "A IA será permitida apenas em quatro janelas de 10 minutos.",
  "Janelas previstas: 11:15, 12:05, 13:40 e 14:15.",
  "Fora desses períodos, o uso de IA não será permitido.",
  "A regra incentiva pensamento crítico, autoria, planejamento e uso responsável da tecnologia."
]);

{
  const slide = pptx.addSlide();
  bg(slide);
  title(slide, "Tecnologias Permitidas", "Flexibilidade com governança técnica");
  card(slide, 0.85, 1.38, 2.85, 3.9, "Front-end", "HTML / CSS / JS\nReact\nVue.js\n.NET Blazor\nOutra aprovada previamente");
  card(slide, 3.95, 1.38, 2.85, 3.9, "Back-end", "Node.js\nPHP\nPython\nJava\n.NET");
  card(slide, 7.05, 1.38, 2.85, 3.9, "Banco de Dados", "SQLite\nPostgreSQL\nMySQL\nMariaDB\nSQL Server");
  card(slide, 10.15, 1.38, 2.35, 3.9, "Ambiente", "Docker\nXAMPP\nAmbiente local", orange);
  footer(slide);
}

{
  const slide = pptx.addSlide();
  bg(slide);
  title(slide, "Entregáveis", "Evidências ao final do evento");
  card(slide, 0.85, 1.42, 2.7, 3.35, "Protótipo", "Fluxos, regras e modelagem em papel.");
  card(slide, 3.75, 1.42, 2.7, 3.35, "Sistema", "Solução funcionando com front-end, back-end, banco e regras.");
  card(slide, 6.65, 1.42, 2.7, 3.35, "Código", "Repositório organizado, documentação e README.");
  card(slide, 9.55, 1.42, 2.7, 3.35, "Pitch", "Apresentação objetiva com duração de até 8 minutos.", orange);
  footer(slide);
}

{
  const slide = pptx.addSlide();
  bg(slide);
  title(slide, "Critérios de Avaliação", "Total de 100 pontos");
  const criteria = [
    ["Entendimento do problema", "10"],
    ["Qualidade da modelagem", "15"],
    ["Regras de negócio", "15"],
    ["Banco de dados", "10"],
    ["Front-end", "10"],
    ["Back-end", "15"],
    ["Organização do código", "10"],
    ["Uso inteligente da IA", "5"],
    ["Pitch", "10"]
  ];
  criteria.forEach((row, index) => {
    const col = index < 5 ? 0 : 1;
    const item = col === 0 ? index : index - 5;
    const x = col === 0 ? 0.95 : 6.82;
    const y = 1.42 + item * 0.78;
    slide.addText(row[0], { x, y, w: 3.25, h: 0.28, color: white, fontSize: 12.3, margin: 0 });
    slide.addShape(pptx.ShapeType.line, { x: x + 3.3, y: y + 0.16, w: 1.1, h: 0, line: { color: line, transparency: 40 } });
    slide.addShape(pptx.ShapeType.roundRect, { x: x + 4.5, y: y - 0.06, w: 0.45, h: 0.34, rectRadius: 0.04, fill: { color: blue }, line: { color: blue } });
    slide.addText(row[1], { x: x + 4.5, y: y + 0.01, w: 0.45, h: 0.16, color: white, fontSize: 9, bold: true, align: "center", margin: 0 });
  });
  footer(slide);
}

addTitleBullets("Benefícios Esperados", "Resultados para alunos e instituição", [
  "Maior engajamento dos estudantes em atividades práticas.",
  "Integração de conhecimentos técnicos em uma entrega única.",
  "Desenvolvimento de competências profissionais valorizadas pelo mercado.",
  "Geração de projetos demonstráveis para portfólio e avaliação.",
  "Fortalecimento da cultura de inovação no ambiente educacional."
]);

{
  const slide = pptx.addSlide();
  bg(slide);
  title(slide, "Solicitação de Aprovação", "Encaminhamento");
  slide.addText("Solicita-se a aprovação da gerência/supervisão para a realização do Hackathon SENAI 2026.", {
    x: 1.05,
    y: 1.55,
    w: 10.9,
    h: 0.75,
    color: white,
    fontSize: 22,
    bold: true,
    margin: 0,
    fit: "shrink"
  });
  slide.addText("A proposta está alinhada à formação prática dos estudantes, ao desenvolvimento de competências técnicas e profissionais e ao incentivo à inovação aplicada a uma necessidade real de mercado.", {
    x: 1.05,
    y: 2.65,
    w: 10.65,
    h: 1.35,
    color: muted,
    fontSize: 18,
    margin: 0,
    fit: "shrink"
  });
  card(slide, 1.05, 4.65, 10.95, 0.95, "Próximo passo", "Validação da proposta, definição da data, confirmação das equipes e alinhamento dos recursos necessários.", orange);
  footer(slide);
}

await pptx.writeFile({ fileName: "apresentacao-aprovacao-hackathon-senai-2026.pptx" });
