import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ItemCard from './ItemCard';
import cards from '../data/cards';


/* import ImgTerramar from '../img/cuentos-de-terramar.jpg';
import ImgCastillo from '../img/el-castillo-ambulante.jpg';
import ImgChijiro from '../img/el-viaje-de-chijiro.jpg';
import ImgMononoke from '../img/la-princesa-mononoke.jpg';
import ImgLuciernagas from '../img/la-tumba-de-las-luciernagas.jpg';
import ImgTotoro from '../img/mi-vecino-totoro.jpg';
import ImgYamada from '../img/mis-vecinos-los-yamada.jpg';
import ImgSusurros from '../img/susurros-del-corazon.jpg';


const cards = [
  { url: ImgTerramar, id: 'img01', alt: 'Cuentos de Terramar' },
  { url: ImgCastillo, id: 'img02', alt: 'El castillo ambulante' },
  { url: ImgChijiro, id: 'img03', alt: 'El viaje de Chijiro' },
  { url: ImgMononoke, id: 'img04', alt: 'La princesa Mononoke' },
  { url: ImgLuciernagas, id: 'img05', alt: 'La tumba de las luciérnagas' },
  { url: ImgTotoro, id: 'img06', alt: 'Mi vecino Totoro' },
  { url: ImgYamada, id: 'img07', alt: 'Mis vecinos Los Yamada' },
  { url: ImgSusurros, id: 'img08', alt: 'Susurros del corazón' },
  { url: ImgTerramar, id: 'img09', alt: 'Cuentos de Terramar' },
  { url: ImgCastillo, id: 'img10', alt: 'El castillo ambulante' },
  { url: ImgChijiro, id: 'img11', alt: 'El viaje de Chijiro' },
  { url: ImgMononoke, id: 'img12', alt: 'La princesa Mononoke' },
  { url: ImgLuciernagas, id: 'img13', alt: 'La tumba de las luciérnagas' },
  { url: ImgTotoro, id: 'img14', alt: 'Mi vecino Totoro' },
  { url: ImgYamada, id: 'img15', alt: 'Mis vecinos Los Yamada' },
  { url: ImgSusurros, id: 'img16', alt: 'Susurros del corazón' },
].sort(() => (0.5 - Math.random())); */


const GameCards = () => (
  <div>
    <Header hide={false} />
    <main className="Game">
      <section className="Cards">
        {cards.sort(() => (0.5 - Math.random()))
          .map((card) => <ItemCard img={card} key={card.id} />)}
      </section>
    </main>
    <Footer />
  </div>
);


export default GameCards;
