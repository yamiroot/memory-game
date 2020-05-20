import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ImgLogo from '../img/assets/logoGame.png';


const Header = ({ hide }) => {
  if (hide) {
    return (
      <header role="banner" className="Header" data-testid="header-rules">
        <Link to="/" data-testid="game-home-link">
          <img src={ImgLogo} alt="Logo de juego Memory Game" />
        </Link>
        <Link to="/gamecards" data-testid="game-link">
          <button data-testid="game-button" type="button" className="btn">Volver al juego</button>
        </Link>
      </header>
    );
  }

  return (
    <header role="banner" className="Header" data-testid="header-game">
      <Link to="/" data-testid="game-home-link">
        <img src={ImgLogo} alt="Logo de juego Memory Game" />
      </Link>
      <Link to="/gamerules" data-testid="rules-link">
        <button data-testid="rules-button" type="button" className="btn">Reglas del juego</button>
      </Link>
    </header>
  );
};


Header.propTypes = {
  hide: PropTypes.bool.isRequired,
};


export default Header;
