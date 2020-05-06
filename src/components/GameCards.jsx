import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ItemCard from './ItemCard';
import dataCards from '../data/cards';


const GameCards = () => {
/*   const [arrayCards, setArrayCards] = useState(dataCards); */
  const [pairOfCards, setPairCards] = useState([]);

  const flipCard = (id) => {
    const element = document.querySelector(`.${id}`);
    element.classList.add('flip');

    pairOfCards.push(element);

    setPairCards(pairOfCards);

    console.log(pairOfCards);

    if (pairOfCards.length === 2) {
      if (pairOfCards[0].dataset.card === pairOfCards[1].dataset.card) {
        console.log('Cartas pares');

        pairOfCards[0].removeEventListener('click', flipCard);
        pairOfCards[1].removeEventListener('click', flipCard);

        setTimeout(() => {
          pairOfCards[0].classList.add('hidden');
          pairOfCards[1].classList.add('hidden');
          setPairCards([]);
        }, 1500);
      } else {
        console.log('Cartas impares');

        setTimeout(() => {
          pairOfCards[0].classList.remove('flip');
          pairOfCards[1].classList.remove('flip');
          setPairCards([]);
        }, 1500);
      }
    }
  };

  return (
    <div>
      <Header hide={false} />
      <main role="main" className="Game">
        <section role="application" className="Cards">
          {dataCards/* .sort(() => (0.5 - Math.random())) */
            .map((card) => <ItemCard img={card} key={card.id} flipCard={flipCard} />)}
        </section>
      </main>
      <Footer />
    </div>
  );
};


export default GameCards;
