import type { Project, TechSkill } from '../types';

// Imports de imagens
import node from '../assets/images/tecnologias/node.webp';
import typescript from '../assets/images/tecnologias/typescript.png';
import react from '../assets/images/tecnologias/react.png';
import javascript from '../assets/images/tecnologias/javascript.png';
import html from '../assets/images/tecnologias/html.png';
import css from '../assets/images/tecnologias/css.png';

import telegramBot from '../assets/images/imagens-projetos/telegram-bot.gif';
import advice from '../assets/images/imagens-projetos/advice.gif';
import gitApi from '../assets/images/imagens-projetos/git-api.gif';

import ccna1 from '../assets/images/tecnologias/ccna1.png';
import networkSecurity from '../assets/images/tecnologias/network_security.png';

export const techImages: Record<string, string> = {
  node,
  typescript,
  react,
  javascript,
  html,
  css
};



export const projectsData: Project[] = [
  {
    title: "Teste Técnico Furia - Bot para Telegram",
    description: "Este projeto foi desenvolvido como parte de um desafio técnico para uma vaga de desenvolvedor na FURIA Esports. O bot funciona dentro do Telegram e traz informações em tempo real sobre o time de CS2 da FURIA — incluindo próximos e últimos jogos, lineup atual e notícias mais recentes. Por meio de integrações com APIs externas (PandaScore e Draft5), o bot consulta, processa e entrega as informações diretamente no chat, oferecendo uma experiência prática e rápida para os fãs do time. Todo o fluxo de mensagens foi estruturado com comandos e respostas dinâmicas.",
    technologies: ["node", "typescript"],
    liveLink: "https://github.com/ygor-ccarvalho/telegram-bot-furia",
    githubLink: "https://github.com/ygor-ccarvalho/telegram-bot-furia",
    imageSrc: telegramBot,
    imageAlt: "Gif mostando o projeto funcionando."
  },
  {
    title: "Advice Generator",
    description: "Nesse projeto utilizei a API Advice Generator onde busquei os conselhos utilizando JavaScript e com o HTML e CSS tornei o layout agradável e responsivo.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://ygor-ccarvalho.github.io/advice-generator-app/",
    githubLink: "https://github.com/ygor-ccarvalho/advice-generator-app",
    imageSrc: advice,
    imageAlt: "Gif mostando o projeto funcionando."
  },
  {
    title: "GitHub API",
    description: "Neste projeto, explorei a API GitHub API para extrair dados de usuário, incluindo o nome, a foto de perfil e os 10 últimos repositórios. Adotei certificações para proporcionar uma experiência mais robusta, como a exibição de mensagens personalizadas em diferentes cenários. Se o usuário não existir, uma mensagem informativa é apresentada. Em caso de campos vazios, é exibido um alerta solicitando o preenchimento adequado. Caso o usuário não possua nome ou descrição, uma mensagem específica é inserida. Além disso com HTML e CSS, busquei criar um layout agradável e responsivo.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://ygor-ccarvalho.github.io/GitHub-API/",
    githubLink: "https://github.com/ygor-ccarvalho/GitHub-API",
    imageSrc: gitApi,
    imageAlt: "Gif mostando o projeto funcionando."
  }
];

export const techSkillsData: TechSkill[] = [
  { name: "HTML", imageSrc: html, imageAlt: "logo HTML" },
  { name: "CSS", imageSrc: css, imageAlt: "logo CSS" },
  { name: "JavaScript", imageSrc: javascript, imageAlt: "logo JavaScript" },
  { name: "TypeScript", imageSrc: typescript, imageAlt: "logo TypeScript" },
  { name: "React", imageSrc: react, imageAlt: "logo React" },
  { name: "CCNA1", imageSrc: ccna1, imageAlt: "logo CCNA1", badgeLink: "https://www.credly.com/badges/d15b44b2-6d58-4455-8a71-2b3f89446348" },
  { name: "Network Security", imageSrc: networkSecurity, imageAlt: "logo Network Security", badgeLink: "https://www.credly.com/badges/4e2f1169-1c28-435c-a822-75972e33e68a" },
];

