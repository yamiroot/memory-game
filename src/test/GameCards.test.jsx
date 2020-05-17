import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render, screen, cleanup, fireEvent, act,
} from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import dataCards from '../data/cards';
import GameCards from '../components/GameCards';


afterEach(cleanup);


it('Se renderiza el componente Game Cards con 16 cartas.', () => {
  const history = createMemoryHistory();
  history.push('/gamecards');

  const container = render(
    <Router history={history}>
      <GameCards dataCards={dataCards} />
    </Router>,
  );

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


it('Al dar click a un card se le añade la clase "flip", con ello ocurre el efecto flip.', () => {
  const history = createMemoryHistory();
  const { container, getByTestId } = render(
    <Router history={history}>
      <GameCards name="Juego de cartas" dataCards={dataCards} />
    </Router>,
  );

  // El componente Game Cards contiene al card de class "img01"
  expect(container).toContainElement(getByTestId('img01'));
  expect(getByTestId('img01')).toHaveClass('img01');

  // Damos click al card
  act(() => {
    fireEvent.click(getByTestId('img01'));
  });

  // Se le añade la clase "flip"
  expect(getByTestId('img01')).toHaveAttribute('class', 'img01 flip');
});


it('Al dar click a dos cards pares se les añade la clase "hide", con ello desaparecen.', (async () => {
  const history = createMemoryHistory();
  const { container, getByTestId } = render(
    <Router history={history}>
      <GameCards name="Juego de cartas" dataCards={dataCards} />
    </Router>,
  );

  // El componente Game Cards contiene a los cards de class "img01" y "img09"
  expect(container).toContainElement(getByTestId('img01'));
  expect(container).toContainElement(getByTestId('img09'));

  // Damos click al card "img01"
  await act(async () => {
    fireEvent.click(getByTestId('img01'));
  });

  // Se le añade la clase "flip"
  expect(getByTestId('img01')).toHaveAttribute('class', 'img01 flip');

  // Damos click al card "img09"
  await act(async () => {
    fireEvent.click(getByTestId('img09'));
  });

  // Se le añade la clase "flip"
  expect(getByTestId('img09')).toHaveAttribute('class', 'img09 flip');

  // Después de 1.5 segundos ambos cards pares desaparecen
  await waitFor(() => {
    expect(getByTestId('img01')).toHaveAttribute('class', 'img01 flip hidden');
    expect(getByTestId('img09')).toHaveAttribute('class', 'img09 flip hidden');
  });
}));


it('Al dar click a dos cards impares se les añade la clase "flip", y luego se remueve esa misma clase.', (async () => {
  const history = createMemoryHistory();
  const { container, getByTestId } = render(
    <Router history={history}>
      <GameCards name="Juego de cartas" dataCards={dataCards} />
    </Router>,
  );

  // El componente Game Cards contiene a los cards de class "img01" y "img09"
  expect(container).toContainElement(getByTestId('img01'));
  expect(container).toContainElement(getByTestId('img07'));

  // Damos click al card "img01"
  act(() => {
    fireEvent.click(getByTestId('img01'));
  });

  // Se le añade la clase "flip"
  expect(getByTestId('img01')).toHaveAttribute('class', 'img01 flip');

  // Damos click al card "img07"
  act(() => {
    fireEvent.click(getByTestId('img07'));
  });

  // Se le añade la clase "flip"
  expect(getByTestId('img07')).toHaveAttribute('class', 'img07 flip');

  // Después de 1.5 segundos se remueve el efecto flip a ambos cards
  await waitFor(() => {
    expect(getByTestId('img01')).toHaveAttribute('class', 'img01');
    expect(getByTestId('img07')).toHaveAttribute('class', 'img07');
  });
}));
