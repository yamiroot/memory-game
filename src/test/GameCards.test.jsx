import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import HashRouter from '../Router';
import dataCards from '../data/cards';
import GameCards from '../components/GameCards';


afterEach(cleanup);

/*
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
  const main = getByTestId('game');

  // La página renderiza el componente GameCards
  expect(container).toContainElement(main);
});
 */


it('Se renderiza la vista Game Cards al dar click en el botón "game-button".', () => {
  const history = createMemoryHistory();
  history.push('/gamerules');

  const { container, getByTestId } = render(<Router history={history}><HashRouter /></Router>);

  expect(container).toContainElement(getByTestId('rules'));

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


it('Se renderiza la vista Game Cards con cada una de sus cartas.', () => {
  const history = createMemoryHistory();
  const { container, getByRole, getAllByRole } = render(
    <Router history={history}>
      <GameCards dataCards={dataCards} />
    </Router>,
  );

  expect(container).toContainElement(getByRole('application'));
  expect(getAllByRole('presentation')).toBeTruthy();
});
