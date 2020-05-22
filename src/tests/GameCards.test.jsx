import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render, screen, cleanup, fireEvent, act, getNodeText,
} from '@testing-library/react';
import dataCards from '../data/cards';
import GameCards from '../components/GameCards';


// jest

// - jest: El objeto jest está automáticamente dentro del alcance de cada archivo
// de prueba. Los métodos del objeto jest ayudan a crear simulacros y le permiten
// controlar el comportamiento general de Jest.

// - jest.useFakeTimers(): Habilita temporizadores falsos.
// - jest.runAllTimers(): Ejecuta todos los temporizadores.
// - beforeEach: Permite ejecutar una acción antes de cada una de las pruebas.
// Se aplica a cada prueba en un archivo.
// - toBeTruthy: Asegura que un valor sea verdadero en un contexto booleano.
// - toBe(value): Compara valores primitivos o verificar la identidad referencial
// de instancias de objetos.


// history

// - createMemoryHistory: Permite agregar navegación basada en la ubicación
// actual.
// El método push le permite ir a una nueva ubicación. Esto agregará una nueva
// ubicación a la matriz después de la ubicación actual.


// @testing-library/react

// - getByRole: Devuelve el primer nodo coincidente de acuerdo al rol dado y arroja
// un error si ningún elemento coincide.
// - getAllByRole: Devuelve una matriz de todos los nodos coincidentes de acuerdo
// al rol dado y arroja un error si ningún elemento coincide.
// - getByTestId: Devuelve el primer nodo coincidente al id y arrojan un error si
// ningún elemento coincide.
// - getByText: Devuelve el primer nodo de texto coincidente y arroja un error si
// ningún elemento coincide.
// - screen: Objeto que tiene todas las consultas que están vinculadas previamente
// a document.body.
// - act: Permite aseverar la ejecuciń de actualizaciones realizadas por el código
// que envuelve.
// - fireEvent: Dispara eventos del DOM.
// - getNodeText: Devuelve el contenido de texto completo de un elemento HTML,
// eliminando cualquier espacio en blanco adicional.


// @testing-library/jest-dom

// - toHaveClass: Permite verificar si el elemento dado tiene ciertas clases
// dentro de su atributo de clase.
// - toHaveAttributte: Permite verificar si el elemento dado tiene un atributo
// o no.
// - toBeEmpty: Permite afirmar si un elemento tiene contenido o no.
// - toContainElement: Permite afirmar si un elemento contiene otro elemento como
// descendiente o no.


// js
// - async: Define una función asíncrona.
// - await: Pausa la ejecución de la función asíncrona y espera la resolución de
// la promesa pasada.


afterEach(cleanup);
beforeEach(() => jest.useFakeTimers());


const renderWithRouter = (path) => {
  const history = createMemoryHistory();

  if (path) {
    history.push(path);
  }

  return {
    ...render(
      <Router history={history}>
        <GameCards name="Juego de cartas" dataCards={dataCards} />
      </Router>,
    ),
  };
};


it('Se renderiza el componente Game Cards con 16 cartas.', () => {
  const container = renderWithRouter(null);

  const nodeList = container.getAllByRole('presentation');

  // Renderiza el componente Game Cards
  expect(container.getByTestId('view-game')).toBeInTheDocument();

  // Renderiza el componente Header que tiene la clase "Header" cuyo texto
  // del botón es "Reglas del juego"
  expect(container.getByTestId('header-game')).toHaveClass('Header');
  expect(screen.getByText('Reglas del juego')).toBeTruthy();
  // Renderiza las 16 cartas
  expect(nodeList.length).toBe(16);
  expect(nodeList[2]).toHaveAttribute('class', 'img03');
  // Renderiza el componente Footer
  expect(screen.getByRole('contentinfo')).not.toBeEmpty();
});


it('Al dar click dos veces a un mismo card se le añade la clase "flip", pero no la clase "hidden".', () => {
  const { container, getByTestId } = renderWithRouter(null);

  // El componente Game Cards contiene al card de class "img01"
  expect(container).toContainElement(getByTestId('img01'));
  expect(getByTestId('img01')).toHaveClass('img01');

  // Damos click al card
  act(() => {
    fireEvent.click(getByTestId('img01'));
  });

  // Se le añade la clase "flip"
  expect(getByTestId('img01')).toHaveAttribute('class', 'img01 flip');

  // Volvemos a dar click al card
  act(() => {
    fireEvent.click(getByTestId('img01'));
  });

  // No se le añade la clase "hidden"
  expect(getByTestId('img01')).not.toHaveAttribute('class', 'img01 flip hidden');
});


it('Al dar click a dos cards pares se les añade la clase "hidden", con ello desaparecen.', () => {
  const { container, getByTestId } = renderWithRouter(null);

  // El componente Game Cards contiene a los cards de class "img01" y "img09"
  expect(container).toContainElement(getByTestId('img01'));
  expect(container).toContainElement(getByTestId('img09'));

  // Damos click al card "img01" e "img09"
  act(() => {
    fireEvent.click(getByTestId('img01'));
    fireEvent.click(getByTestId('img09'));

    // Ejecutamos los temporizadores
    jest.runAllTimers();
  });

  // Se les agrega la clase "hidden"
  expect(getByTestId('img01')).toHaveAttribute('class', 'img01 flip hidden');
  expect(getByTestId('img09')).toHaveAttribute('class', 'img09 flip hidden');
});


it('Al dar click a dos cards impares se les añade la clase "flip", y luego se remueve esa misma clase.', () => {
  const { container, getByTestId } = renderWithRouter(null);

  // El componente Game Cards contiene a los cards de class "img01" y "img07"
  expect(container).toContainElement(getByTestId('img01'));
  expect(container).toContainElement(getByTestId('img07'));

  // Damos click al card "img01" y al card "img07"
  act(() => {
    fireEvent.click(getByTestId('img01'));
    fireEvent.click(getByTestId('img07'));

    // Ejecutamos los temporizadores
    jest.runAllTimers();
  });

  // Después de 1.5 segundos se remueve el efecto flip a ambos cards
  expect(getByTestId('img01')).toHaveAttribute('class', 'img01');
  expect(getByTestId('img07')).toHaveAttribute('class', 'img07');
});


it('Cuando todos los cards pares sean encontrados, se renderiza el modal y se desmonta al dar click en el botón "Aceptar" del mismo.', () => {
  const container = renderWithRouter('/gamecards');

  const modalGame = screen.queryByTestId('modal-game');

  // Renderiza el componente Game Cards
  expect(container.queryByTestId('view-game')).toBeInTheDocument();
  // Al renderizar no existe el componente ModalGame
  expect(modalGame).toBe(null);

  // Damos click al card "img01" e "img09"
  act(() => {
    fireEvent.click(container.queryByTestId('img01'));
    fireEvent.click(container.queryByTestId('img09'));

    jest.runAllTimers();
  });

  // Después de 1.5 segundos desaparecen los dos cards
  expect(container.queryByTestId('img01')).toHaveAttribute('class', 'img01 flip hidden');
  expect(container.queryByTestId('img09')).toHaveAttribute('class', 'img09 flip hidden');

  // Damos click al card "img02" e "img10"
  act(() => {
    fireEvent.click(container.queryByTestId('img02'));
    fireEvent.click(container.queryByTestId('img10'));

    jest.runAllTimers();
  });

  // Después de 1.5 segundos desaparecen los dos cards
  expect(container.queryByTestId('img02')).toHaveAttribute('class', 'img02 flip hidden');
  expect(container.queryByTestId('img10')).toHaveAttribute('class', 'img10 flip hidden');

  // Damos click al card "img03" e "img11"
  act(() => {
    fireEvent.click(container.queryByTestId('img03'));
    fireEvent.click(container.queryByTestId('img11'));

    jest.runAllTimers();
  });

  // Después de 1.5 segundos desaparecen los dos cards
  expect(container.queryByTestId('img03')).toHaveAttribute('class', 'img03 flip hidden');
  expect(container.queryByTestId('img11')).toHaveAttribute('class', 'img11 flip hidden');

  // Damos click al card "img04" e "img12"
  act(() => {
    fireEvent.click(container.queryByTestId('img04'));
    fireEvent.click(container.queryByTestId('img12'));

    jest.runAllTimers();
  });

  // Después de 1.5 segundos desaparecen los dos cards
  expect(container.queryByTestId('img04')).toHaveAttribute('class', 'img04 flip hidden');
  expect(container.queryByTestId('img12')).toHaveAttribute('class', 'img12 flip hidden');

  // Damos click al card "img05" e "img13"
  act(() => {
    fireEvent.click(container.queryByTestId('img05'));
    fireEvent.click(container.queryByTestId('img13'));

    jest.runAllTimers();
  });

  // Después de 1.5 segundos desaparecen los dos cards
  expect(container.queryByTestId('img05')).toHaveAttribute('class', 'img05 flip hidden');
  expect(container.queryByTestId('img13')).toHaveAttribute('class', 'img13 flip hidden');

  // Damos click al card "img06" e "img14"
  act(() => {
    fireEvent.click(container.queryByTestId('img06'));
    fireEvent.click(container.queryByTestId('img14'));

    jest.runAllTimers();
  });

  // Después de 1.5 segundos desaparecen los dos cards
  expect(container.queryByTestId('img06')).toHaveAttribute('class', 'img06 flip hidden');
  expect(container.queryByTestId('img14')).toHaveAttribute('class', 'img14 flip hidden');

  // Damos click al card "img07" e "img15"
  act(() => {
    fireEvent.click(container.queryByTestId('img07'));
    fireEvent.click(container.queryByTestId('img15'));

    jest.runAllTimers();
  });

  // Después de 1.5 segundos desaparecen los dos cards
  expect(container.queryByTestId('img07')).toHaveAttribute('class', 'img07 flip hidden');
  expect(container.queryByTestId('img15')).toHaveAttribute('class', 'img15 flip hidden');

  // Damos click al card "img08" e "img16"
  act(() => {
    fireEvent.click(container.queryByTestId('img08'));
    fireEvent.click(container.queryByTestId('img16'));

    jest.runAllTimers();
  });

  // Después de 1.5 segundos desaparecen los dos cards
  expect(container.queryByTestId('img08')).toHaveAttribute('class', 'img08 flip hidden');
  expect(container.queryByTestId('img16')).toHaveAttribute('class', 'img16 flip hidden');

  // Desaparecieron todos los cards, el modal debería mostrarse
  expect(container.queryByTestId('modal-game')).toBeInTheDocument();
  // Así también comprobamos el renderizado del botón del modal
  expect(container.getByTestId('button-new-game')).toBeTruthy();

  // Accionamos la ejecución del evento click en el botón del modal
  act(() => {
    fireEvent.click(container.getByTestId('button-new-game'));

    // Ocurre un cambio de estado, con ello se vuelve a renderizar View Game. Para ello deben
    // de haberse ejecutado todos los temporizadores, ya que todos los cards fueron encontrados.
    jest.runAllTimers();
  });

  // El modal dejo de mostrarse
  expect(container.queryByTestId('modal-game')).not.toBeInTheDocument();
});


it('Se renderiza nuevamente el componente Game Cards al dar click al botón "Nueva partida".', () => {
  const history = createMemoryHistory();
  history.push('/gamecards');

  const { getByTestId } = render(
    <Router history={history}>
      <GameCards dataCards={dataCards} />
    </Router>,
  );

  // Renderiza el componente Game Cards
  expect(getByTestId('link-new-game')).toBeTruthy();
  expect(getNodeText(getByTestId('new-game'))).toBe('Nueva partida');

  act(() => {
    fireEvent.click(getByTestId('link-new-game'));
  });

  // Validamos la ruta del juego nuevo
  expect(history.location.pathname).toBe('/');
});
