import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import ItemCard from './ItemCard';


const GameCards = ({ dataCards }) => {
  const [pairOfCards, setPairCards] = useState([]);
  const [idCard, setIdCard] = useState('');

  const flipCard = (id) => {
    setIdCard(id);

    if ((pairOfCards.length < 2) && (id !== idCard)) {
      const element = document.querySelector(`.${id}`);
      element.classList.add('flip');

      pairOfCards.push(element);
      setPairCards(pairOfCards);

      if (pairOfCards.length === 2) {
        if (pairOfCards[0].dataset.card === pairOfCards[1].dataset.card) {
          setTimeout(() => {
            pairOfCards[0].classList.add('hidden');
            pairOfCards[1].classList.add('hidden');

            setPairCards([]);
          }, 1500);
        } else {
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
    <div>
      <Header hide={false} />
      <main role="main" className="Game">
        <section role="application" className="Cards">
          {dataCards
            .map((card) => <ItemCard img={card} key={card.id} flipCard={flipCard} />)}
        </section>
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
