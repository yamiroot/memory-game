import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ImgUno from '../img/1.png';
import ImgTwo from '../img/2.png';
import ImgThree from '../img/3.png';


const GameRules = () => (
  <div>
    <Header hide />
    <main className="GameRules">
      <h2 className="font-weight-bolder">Reglas y especificaciones del juego</h2>
      <section>
        <article>
          <img src={ImgUno} alt="Step One" />
          <h4 className="text-center">Reglas generales</h4>
          <ul>
            <li>Un jugador permitido.</li>
            <li>16 cartas. 8 pares idénticas.</li>
            <li>Las cartas cargan aleatoriamente en cada partida.</li>
          </ul>
        </article>
        <article>
          <img src={ImgTwo} alt="Step Two" />
          <h4 className="text-center">Desarrollo del juego</h4>
          <p className="text-center">
            Seleccione dos cartas. Si las dos cartas son pares, éstas desaparecerán en
            su mismo sitio sin moverse las demás. Solo son pares las cartas que son
            idénticas.
          </p>
        </article>
        <article>
          <img src={ImgThree} alt="Step Three" />
          <h4 className="text-center">Fin del juego</h4>
          <p className="text-center">
            Cuando ya no haya más cartas, se sobreentenderá que logró hallar todos los
            pares idénticos. Por lo tanto, el juego se dará por terminado.
          </p>
        </article>
      </section>
    </main>
    <Footer />
  </div>
);


export default GameRules;
