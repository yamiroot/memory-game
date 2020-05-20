import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ImgUno from '../img/assets/1.png';
import ImgTwo from '../img/assets/2.png';
import ImgThree from '../img/assets/3.png';


const GameRules = () => (
  <div data-testid="view-rules">
    <Header hide />
    <main role="main" className="GameRules" data-testid="rules">
      <h2 className="font-weight-bolder text-center" data-testid="title-rules">Reglas y especificaciones del juego</h2>
      <section role="list">
        <article role="listitem">
          <img src={ImgUno} alt="Step One" />
          <h4 className="text-center">Reglas generales</h4>
          <p className="text-center">
            Las cartas cargan aleatoriamente en cada partida. Siendo en total 16 cartas,
            8 pares idénticos. El objetivo del juego es encontrar cartas pares.
          </p>
        </article>
        <article role="listitem">
          <img src={ImgTwo} alt="Step Two" />
          <h4 className="text-center">Desarrollo del juego</h4>
          <p className="text-center">
            Seleccione dos cartas. Si las dos cartas son pares, éstas desaparecerán en
            su mismo sitio sin moverse las demás. Solo son pares las cartas que son
            idénticas.
          </p>
        </article>
        <article role="listitem">
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
