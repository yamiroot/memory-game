import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup, fireEvent } from '@testing-library/react';
import HashRouter from '../Router';


const renderWithRouter = (path) => {
  const history = createMemoryHistory();

  if (path) {
    history.push(path);
  }

  return {
    ...render(
      <Router history={history}>
        <HashRouter />
      </Router>,
    ),
  };
};


afterEach(cleanup);


it('Se renderiza como vista principal a Game Cards.', () => {
  const { container, getByTestId } = renderWithRouter(null);
  const header = getByTestId('header-game');
  const main = getByTestId('game');
  const footer = getByTestId('footer');

  // La página renderiza el componente Header que contiene el botón "Reglas del juego"
  expect(container).toContainElement(header);
  expect(getByTestId('rules-button').textContent).toBe('Reglas del juego');
  // La página renderiza la estructura main
  expect(container).toContainElement(main);
  // La página renderiza el componente Footer
  expect(container).toContainElement(footer);
});


it('Se renderiza la vista Game Rules al dar click en el botón "rules-button".', () => {
  const { container, getByTestId } = renderWithRouter('/gamecards');

  expect(container).toContainElement(getByTestId('view-game'));

  fireEvent.click(getByTestId('rules-link'));

  // La página renderiza las reglas del juego
  expect(container).toContainElement(getByTestId('view-rules'));
});


it('Se renderiza la vista Game Cards al dar click en el botón "game-button".', () => {
  const { container, getByTestId } = renderWithRouter('/gamerules');

  expect(container).toContainElement(getByTestId('view-rules'));

  fireEvent.click(getByTestId('game-link'));

  // La página renderiza el juego
  expect(getByTestId('view-game')).toBeTruthy();
});


it('Se renderiza la vista Game Cards al dar click al logo del juego.', () => {
  const { container, getByTestId } = renderWithRouter('/gamerules');

  expect(container).toContainElement(getByTestId('view-rules'));

  fireEvent.click(getByTestId('game-home-link'));

  // La página renderiza el juego
  expect(getByTestId('view-game')).toBeTruthy();
});


it('La página renderiza la vista de error 404.', () => {
  const { getByTestId } = renderWithRouter('/pagehhddhdhdh');

  // La página renderiza la vista de error
  expect(getByTestId('view-error')).toBeTruthy();
});
