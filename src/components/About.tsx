import React from 'react';
import '../styles/About.css';
import { techSkillsData } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-container">
        <div className="perfil">
          {/* A imagem será tratada como um asset */}
          <img src="./src/assets/images/perfil/perfil.jpg" alt="Foto de perfil" />
        </div>

        <div className="sobre-informacao">
          <h3>Ygor César de Carvalho</h3>

          <p>Estudante de Análise e Desenvolvimento de Sistemas (ADS) apaixonado por desenvolvimento front-end. Ao longo da minha formação, conduzi diversos projetos utilizando HTML, CSS, JavaScript,Typescript e React alem de cursos voltados a redes com a cisco, tendo certificado CCNA: Introduction to Networks e Network Security. Estou ansioso para iniciar minha jornada profissional na área, oferecendo uma perspectiva diferenciada baseada em experiência prática e um compromisso contínuo com aprendizado e evolução. Pronto para aplicar meus conhecimentos em projetos desafiadores e crescer junto com a equipe.</p>

          <h2>Tech Skills</h2>

          <div className="hard-skills">
            {techSkillsData.map((skill) =>
              skill.badgeLink ? (
                <a
                  key={skill.name}
                  href={skill.badgeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={skill.imageSrc} alt={skill.imageAlt} />
                </a>
              ) : (
                <img key={skill.name} src={skill.imageSrc} alt={skill.imageAlt} />
              )
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
