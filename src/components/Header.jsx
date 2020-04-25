import React from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../img/logoGame.png';


const Header = () => (
  <header className="Header">
    <a href="./" id="linkImgLogo">
      <img src={ImgLogo} alt="Logo de juego Memory Game" />
    </a>
    <Link to="/gamerules">
      <button type="button">Reglas del juego</button>
    </Link>
  </header>
);


export default Header;
