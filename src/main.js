import "./styles.css";

const schedule = [
  { time: "08:00 - 08:20", title: "Abertura", text: "Boas-vindas, regras e apresentação do desafio", tag: "Todos" },
  { time: "08:20 - 10:20", title: "Fase 1 - Modelagem", text: "Prototipagem em papel e caneta sem internet e sem IA", tag: "Fase 1" },
  { time: "10:20 - 10:35", title: "Coffee Break", text: "", icon: "coffee" },
  { time: "10:35 - 14:35", title: "Fase 2 - Desenvolvimento", text: "Desenvolvimento do sistema com internet liberada e IA somente nas janelas", tag: "Fase 2" },
  { time: "11:15 - 11:25", title: "Janela IA #1", text: "Uso liberado de IA por 10 minutos", tag: "IA", ai: true },
  { time: "12:05 - 12:15", title: "Janela IA #2", text: "Uso liberado de IA por 10 minutos", tag: "IA", ai: true },
  { time: "12:30 - 13:10", title: "Almoço", text: "", icon: "utensils" },
  { time: "13:40 - 13:50", title: "Janela IA #3", text: "Uso liberado de IA por 10 minutos", tag: "IA", ai: true },
  { time: "14:15 - 14:25", title: "Janela IA #4", text: "Uso liberado de IA por 10 minutos", tag: "IA", ai: true },
  { time: "14:35 - 15:00", title: "Preparação do Pitch", text: "Finalização, testes e organização da apresentação", tag: "Todos" },
  { time: "15:00 - 16:00", title: "Pitch e Avaliação", text: "Apresentações das equipes e avaliação final", tag: "Todos", icon: "trophy" }
];

const scores = [
  ["Entendimento do problema", 10],
  ["Qualidade da modelagem", 15],
  ["Regras de negócio", 15],
  ["Banco de dados", 10],
  ["Front-end", 10],
  ["Back-end", 15],
  ["Organização do código", 10],
  ["Uso inteligente da IA", 5],
  ["Pitch", 10]
];

document.querySelector("#schedule").innerHTML = schedule.map((item) => `
  <article class="timeline-item ${item.ai ? "is-ai" : ""}">
    <time>${item.time}</time>
    <div class="timeline-dot"></div>
    <div class="timeline-copy">
      <h3>${item.title}</h3>
      ${item.text ? `<p>${item.text}</p>` : ""}
    </div>
    ${item.icon ? `<i class="timeline-icon" data-lucide="${item.icon}"></i>` : `<span class="tag">${item.tag}</span>`}
  </article>
`).join("");

document.querySelector("#scores").innerHTML = scores.map(([label, value]) => `
  <article>
    <span>${label}</span>
    <div class="score-line"></div>
    <strong>${value}</strong>
  </article>
`).join("");

lucide.createIcons({
  attrs: {
    "stroke-width": 1.8
  }
});
