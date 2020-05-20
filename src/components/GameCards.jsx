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
  const [cardsFound, setCardsFound] = useState(0);
  const [modalShow, setModalShow] = useState(true);

  const flipCard = (id) => {
    const pairCards = pairOfCards;
    setIdCard(id);

    if ((pairCards.length < 2) && (id !== idCard)) {
      const element = document.querySelector(`.${id}`);
      element.classList.add('flip');

      pairCards.push(element);
      setPairCards(pairCards);

      if (pairOfCards.length === 2) {
        if (pairCards[0].dataset.card === pairCards[1].dataset.card) {
          setCardsFound(cardsFound + 1);
          setIdCard('');

          setTimeout(() => {
            pairCards[0].classList.add('hidden');
            pairCards[1].classList.add('hidden');
          }, 1500);
        } else {
          setIdCard('');

          setTimeout(() => {
            pairCards[0].classList.remove('flip');
            pairCards[1].classList.remove('flip');
          }, 1500);
        }

        setPairCards([]);
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
          {(cardsFound === 8) && (
          <ModalGame
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          )}
        </section>
        <Link to="/" data-testid="link-new-game">
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
