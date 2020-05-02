import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ItemCard from './ItemCard';
import dataCards from '../data/cards';


const GameCards = () => {
  let arrayCard = [];

  const flipCard = (id) => {
    console.log(id);
    const element = document.querySelector(`.${id}`);
    element.classList.add('flip');

    arrayCard.push(element);

    if (arrayCard.length === 2) {
      if (arrayCard[0].dataset.card === arrayCard[1].dataset.card) {
        console.log('Cartas pares');
        arrayCard[0].removeEventListener('click', flipCard);
        arrayCard[1].removeEventListener('click', flipCard);
        arrayCard = [];
      } else {
        console.log('Cartas impares');
        setTimeout(() => {
          console.log(arrayCard[0], 'acá ggggg');
          arrayCard[0].classList.remove('flip');
          arrayCard[1].classList.remove('flip');
          arrayCard = [];
        }, 1500);
      }
    }
  };

  return (
    <div>
      <Header hide={false} />
      <main className="Game">
        <section className="Cards">
          {dataCards.sort(() => (0.5 - Math.random()))
            .map((card) => <ItemCard img={card} key={card.id} flipCard={flipCard} />)}
        </section>
      </main>
      <Footer />
    </div>
  );
};


export default GameCards;
