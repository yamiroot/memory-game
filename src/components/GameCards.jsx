import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ItemCard from './ItemCard';
import cards from '../data/cards';


const GameCards = () => {
  const flipCard = (id) => {
    console.log(id);
    const element = document.querySelector(`.${id}`);

    element.classList.add('flip');

    console.log(element);

    console.log(element.dataset.card);
  };

  return (
    <div>
      <Header hide={false} />
      <main className="Game">
        <section className="Cards">
          {cards.sort(() => (0.5 - Math.random()))
            .map((card) => <ItemCard img={card} key={card.id} flipCard={flipCard} />)}
        </section>
      </main>
      <Footer />
    </div>
  );
};


export default GameCards;
