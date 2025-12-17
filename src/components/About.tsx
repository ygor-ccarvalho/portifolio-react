import React from 'react';
import '../styles/About.css';

// Dados das skills (já vêm com imagens importadas corretamente)
import { techSkillsData } from '../data/portfolioData';

// Imagem de perfil IMPORTADA (Vite resolve o caminho no build)
import profile from '../assets/images/perfil/perfil.jpg';

/**
 * Componente About
 * Responsável por exibir:
 * - Foto de perfil
 * - Descrição pessoal
 * - Lista de Tech Skills
 */
const About: React.FC = () => {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-container">

        {/* ===== Foto de perfil ===== */}
        <div className="perfil">
          {/* 
            Usar diretamente a imagem importada é o jeito correto.
            O Vite transforma isso em um caminho válido no build.
          */}
          <img
            src={profile}
            alt="Imagem de perfil"
            loading="lazy"
          />
        </div>

        {/* ===== Informações ===== */}
        <div className="sobre-informacao">
          <h3>Ygor César de Carvalho</h3>

          <p>
            Estudante de Análise e Desenvolvimento de Sistemas (ADS) apaixonado
            por desenvolvimento front-end. Ao longo da minha formação, conduzi
            diversos projetos utilizando HTML, CSS, JavaScript, TypeScript e
            React, além de cursos voltados a redes com a Cisco, possuindo as
            certificações CCNA: Introduction to Networks e Network Security.
            Estou ansioso para iniciar minha jornada profissional na área,
            oferecendo uma perspectiva diferenciada baseada em experiência
            prática e aprendizado contínuo.
          </p>

          <h2>Tech Skills</h2>

          {/* ===== Lista de skills ===== */}
          <div className="hard-skills">
            {techSkillsData.map((skill) => (
              skill.badgeLink ? (
                // Quando existe badgeLink, a imagem vira link
                <a
                  key={skill.name}
                  href={skill.badgeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Certificação ${skill.name}`}
                >
                  <img
                    src={skill.imageSrc}
                    alt={skill.imageAlt}
                    loading="lazy"
                  />
                </a>
              ) : (
                // Quando não existe badgeLink, só renderiza a imagem
                <img
                  key={skill.name}
                  src={skill.imageSrc}
                  alt={skill.imageAlt}
                  loading="lazy"
                />
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
