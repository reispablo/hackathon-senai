# Hackathon SENAI 2026

Projeto visual e documental para apresentação do **Hackathon SENAI 2026**, com foco no desenvolvimento de uma solução tecnológica que conecte clientes e profissionais do setor automotivo.

## Sobre o Projeto

Este repositório contém uma landing page editável, documentos de estruturação do evento e uma apresentação executiva para envio à gerência/supervisão.

A proposta do hackathon é desafiar estudantes de Tecnologia da Informação a desenvolverem, em 8 horas, uma solução digital prática, rápida e confiável para aproximar clientes de profissionais automotivos.

## Objetivo

Desenvolver uma solução tecnológica inovadora que conecte clientes e profissionais do setor automotivo, promovendo aprendizagem prática, trabalho em equipe, criatividade, organização técnica e apresentação de solução.

## Conteúdo do Repositório

- `index.html`: página principal do projeto.
- `src/styles.css`: estilos da landing page.
- `src/main.js`: dados editáveis do cronograma e critérios de avaliação.
- `src/assets/reference.png`: imagem de referência usada no layout.
- `ESTRUTURA_EVENTO.md`: documento com escopo, intenção, justificativa e regras do evento.
- `APRESENTACAO_APROVACAO.md`: roteiro textual da apresentação para aprovação.
- `apresentacao-aprovacao-hackathon-senai-2026.pptx`: apresentação editável.
- `export/apresentacao-aprovacao-hackathon-senai-2026.pdf`: versão PDF da apresentação.
- `scripts/gerar-apresentacao.js`: script usado para gerar o arquivo PPTX.

## Tecnologias Utilizadas

- Vite
- Tailwind CSS
- HTML
- CSS
- JavaScript
- Lucide Icons
- PptxGenJS

## Como Rodar Localmente

Instale as dependências:

```bash
npm install
```

Inicie o servidor local:

```bash
npm run dev
```

Acesse no navegador:

```text
http://localhost:5173/
```

## Gerar Build de Produção

```bash
npm run build
```

O resultado será gerado na pasta `dist/`.

## Gerar a Apresentação

Para recriar o arquivo `.pptx` da apresentação:

```bash
node scripts/gerar-apresentacao.js
```

O arquivo será gerado como:

```text
apresentacao-aprovacao-hackathon-senai-2026.pptx
```

## Escopo do Hackathon

Cada equipe deverá apresentar:

- Nome do projeto.
- Objetivo do projeto.
- Tema e justificativa.
- Público atendido.
- Funcionalidades principais.
- Regras de negócio.
- Estrutura básica de banco de dados.
- Tecnologias utilizadas.

## Entregáveis das Equipes

- Protótipo em papel.
- Sistema funcionando.
- Código organizado.
- Documentação do projeto.
- README no repositório.
- Pitch de até 8 minutos.

## Critérios de Avaliação

Total: **100 pontos**.

- Entendimento do problema: 10 pontos.
- Qualidade da modelagem: 15 pontos.
- Regras de negócio: 15 pontos.
- Banco de dados: 10 pontos.
- Front-end: 10 pontos.
- Back-end: 15 pontos.
- Organização do código: 10 pontos.
- Uso inteligente da IA: 5 pontos.
- Pitch: 10 pontos.

## Uso de Inteligência Artificial

O uso de ferramentas de IA será permitido apenas em janelas controladas de 10 minutos:

- IA #1: 11:15 - 11:25.
- IA #2: 12:05 - 12:15.
- IA #3: 13:40 - 13:50.
- IA #4: 14:15 - 14:25.

Fora desses horários, o uso de IA não será permitido.

## Finalidade

Este material foi preparado para apoiar a aprovação, organização e comunicação do Hackathon SENAI 2026 junto à gerência, supervisão, docentes e equipes participantes.
