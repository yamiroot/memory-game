import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import ItemCard from './ItemCard';
import ModalGame from './ModalGame';


const GameCards = ({ dataCards }) => {
  const [pairOfCards, setPairCards] = useState([]);
  const [idCard, setIdCard] = useState('');
  const [cardsFound, setCardsFound] = useState([]);
  const [modalShow, setModalShow] = useState(true);

  const flipCard = (id) => {
    setIdCard(id);

    if ((pairOfCards.length < 2) && (id !== idCard)) {
      const element = document.querySelector(`.${id}`);
      element.classList.add('flip');

      pairOfCards.push(element);
      setPairCards(pairOfCards);

      if (pairOfCards.length === 2) {
        if (pairOfCards[0].dataset.card === pairOfCards[1].dataset.card) {
          cardsFound.push(pairOfCards[0].dataset.card);

          setCardsFound(cardsFound);
          setIdCard('');

          setTimeout(() => {
            pairOfCards[0].classList.add('hidden');
            pairOfCards[1].classList.add('hidden');

            setPairCards([]);
          }, 1500);
        } else {
          setIdCard('');

          setTimeout(() => {
            pairOfCards[0].classList.remove('flip');
            pairOfCards[1].classList.remove('flip');

            setPairCards([]);
          }, 1500);
        }
      }
    }
  };

  return (
    <div data-testid="view-game">
      <Header hide={false} />
      <main role="main" className="Game" data-testid="game">
        <section role="application" className="Cards">
          {dataCards
            .map((card) => (<ItemCard img={card} key={card.id} flipCard={flipCard} />))}
          {(cardsFound.length === 8) && (
          <ModalGame
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          )}
        </section>
        <Link to="/">
          <button type="button" data-testid="new-game" className="btn">Nueva partida</button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};


GameCards.propTypes = {
  dataCards: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      id: PropTypes.string,
      alt: PropTypes.string,
    }),
  ).isRequired,
};


export default GameCards;
