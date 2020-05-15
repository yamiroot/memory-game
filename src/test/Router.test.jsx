/* eslint-disable no-undef */
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import HashRouter from '../Router';


afterEach(cleanup);


const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={history}>
        {component}
      </Router>,
    ),
  };
};


it('Se renderiza como vista principal a Game Cards.', () => {
  const { container, getByTestId } = renderWithRouter(<HashRouter />);
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
  const { container, getByTestId } = renderWithRouter(<HashRouter />);

  fireEvent.click(getByTestId('rules-link'));

  // La página renderiza el componente GameRules
  expect(container).toContainElement(getByTestId('rules'));
});


it('Se renderiza la vista Game Cards al dar click en el botón "game-button".', () => {
  const { container, getByTestId } = renderWithRouter(<HashRouter />);

  fireEvent.click(getByTestId('game-link'));

  // La página renderiza el componente Header que tiene la clase "Header" cuyo texto
  // del botón es "Reglas del juego"
  expect(getByTestId('header-game')).toHaveClass('Header');
  expect(screen.getByText('Reglas del juego')).toBeTruthy();
  // La página renderiza el componente GameCards
  expect(container).toContainElement(getByTestId('game'));
  // La página renderiza el componente Footer
  expect(screen.getByRole('contentinfo')).not.toBeEmpty();
});


it('La página renderiza la vista de error 404.', () => {
  const history = createMemoryHistory();
  history.push('/pagehhddhdhdh');
  console.log('aquí ppues', history.location.pathname);

  const { getByTestId } = render(
    <Router history={history}>
      <HashRouter />
    </Router>,
  );

  expect(getByTestId('view-error')).toBeTruthy();
});
