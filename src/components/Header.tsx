import React, { useState } from 'react';
import '../styles/Header.css';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" id="header">
      <div className="header-container">
        <a href="/">
          <h1 className="logo">Ygor Carvalho</h1>
        </a>

        <nav>
          <button className="menu-button" onClick={toggleMenu}>
            <div className="menu">
              <span className={`hamburguer ${isMenuOpen ? 'open' : ''}`}></span>
            </div>
          </button>

          <ul className={isMenuOpen ? 'open' : ''}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
            <li><a href="#projetos" onClick={() => setIsMenuOpen(false)}>Projetos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
