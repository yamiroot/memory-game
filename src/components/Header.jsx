import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ImgLogo from '../img/logoGame.png';


const Header = ({ hide }) => {
  if (hide) {
    return (
      <header role="banner" className="Header" data-testid="ViewRules">
        <Link to="/" data-testid="game-link">
          <img src={ImgLogo} alt="Logo de juego Memory Game" />
        </Link>
        <Link to="/gamecards" data-testid="game-link">
          <button type="button" className="btn">Volver al juego</button>
        </Link>
      </header>
    );
  }

  return (
    <header role="banner" className="Header" data-testid="ViewGame">
      <Link to="/" data-testid="game-link">
        <img src={ImgLogo} alt="Logo de juego Memory Game" />
      </Link>
      <Link to="/gamerules" data-testid="rules-link">
        <button type="button" className="btn">Reglas del juego</button>
      </Link>
    </header>
  );
};


Header.propTypes = {
  hide: PropTypes.bool.isRequired,
};


export default Header;
