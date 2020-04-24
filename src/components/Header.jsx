import React from 'react';
import ImgLogo from '../img/logoGame.png';

const Header = () => (
  <header className="Header">
    <a href="./" id="linkImgLogo">
      <img src={ImgLogo} alt="Logo de juego Memory Game" />
    </a>
    <a href="./">
      <button type="button">Instrucciones</button>
    </a>
  </header>
);


export default Header;
