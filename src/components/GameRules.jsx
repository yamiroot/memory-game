import React from 'react';


const GameRules = () => (
  <main className="GameRules">
    <article>
      <h4>Especificaciones generales</h4>
      <ul>
        <li>Un jugador permitido.</li>
        <li>16 cartas. 8 pares idénticos.</li>
        <li>Las cartas cargan aleatoriamente en cada partida.</li>
        <li>La temática del juego no es electiva.</li>
        <li>El objetivo del juego es reconstruir pares.</li>
      </ul>
    </article>
    <article>
      <h4>Desarrollo del juego</h4>
      <p>
        Seleccione dos cartas. Si las dos cartas son pares, éstas desaparecerán en
        su mismo sitio sin moverse las demás. Solo son pares las cartas que son
        idénticas.
      </p>
    </article>
    <article>
      <h4>Fin del juego</h4>
      <p>
        Cuando ya no haya más cartas, se sobreentenderá que logró hallar todos los
        pares idénticos. Por lo tanto, el juego se dará por terminado.
      </p>
    </article>
  </main>
);


export default GameRules;
