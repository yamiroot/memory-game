import React from 'react';
import ImgLogo from '../img/MemoryGame.png';

const Header = () => (
  <header className="Header">
    <img src={ImgLogo} alt="Logo de juego Memory Game" />
    <button type="button">Instrucciones</button>
  </header>
);


export default Header;
