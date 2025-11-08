import React from 'react';
import '../styles/Home.css';
import {
  FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub
} from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <section className="home" id="home">
      <div className="informacao">
        <p>Olá Mundo,<br /><span> eu sou um <br />desenvolvedor web Jr</span><br />bem-vindo ao meu portfólio</p>
        <section className="social">
          <div className="social-sobre">
            <a href="#sobre">Mais sobre mim</a>
          </div>

          <div className="icone-social">
            {}
            <a href="https://www.linkedin.com/in/ygorcarvalhodev/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Ygor-CCarvalho" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:ygorcarvalhodev@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            <a href="https://wa.me/5535984134774" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </section>
      </div>
      {}
      <img src="./src/assets/images/principal/image.svg" alt="Ilustração de um computador" />
    </section>
  );
};

export default Home;
