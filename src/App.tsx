import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import './App.css'; 

const App: React.FC = () => {
  return (
    <main>
      <Header />
      <Home />
      <About />
      <Projects />
      {}
    </main>
  );
};

export default App;
