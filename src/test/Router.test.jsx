import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup, fireEvent } from '@testing-library/react';
import HashRouter from '../Router';


afterEach(cleanup);


it('Se renderiza como vista principal a Game Cards.', () => {
  const history = createMemoryHistory();
  const { container, getByTestId } = render(<Router history={history}><HashRouter /></Router>);
  const header = getByTestId('header-game');
  const main = getByTestId('game');
  const footer = getByTestId('footer');

  // La página renderiza el componente Header que contiene el botón "Reglas del juego"
  expect(container).toContainElement(header);
  expect(getByTestId('rules-button').textContent).toBe('Reglas del juego');
  // La página renderiza el componente GameCards
  expect(container).toContainElement(main);
  // La página renderiza el componente Footer
  expect(container).toContainElement(footer);
});


it('Se renderiza la vista Game Rules al dar click en el botón "rules-button".', () => {
  const history = createMemoryHistory();
  history.push('/gamecards');
  const { container, getByTestId } = render(<Router history={history}><HashRouter /></Router>);

  expect(container).toContainElement(getByTestId('view-game'));

  fireEvent.click(getByTestId('rules-link'));
  console.log('Ruta activada: ', history.location.pathname);

  // La página renderiza las reglas del juego
  expect(container).toContainElement(getByTestId('view-rules'));
});


it('Se renderiza la vista Game Cards al dar click en el botón "game-button".', () => {
  const history = createMemoryHistory();
  history.push('/gamerules');

  const { container, getByTestId } = render(<Router history={history}><HashRouter /></Router>);

  expect(container).toContainElement(getByTestId('view-rules'));

  fireEvent.click(getByTestId('game-link'));
  console.log('Ruta activada: ', history.location.pathname);

  // La página renderiza el juego
  expect(getByTestId('view-game')).toBeTruthy();
});


it('La página renderiza la vista de error 404.', () => {
  const history = createMemoryHistory();
  history.push('/pagehhddhdhdh');

  console.log('Ruta activada:', history.location.pathname);

  const { getByTestId } = render(<Router history={history}><HashRouter /></Router>);

  // La página renderiza la vista de error
  expect(getByTestId('view-error')).toBeTruthy();
});
