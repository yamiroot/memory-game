import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup } from '@testing-library/react';
import Header from '../components/Header';


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


it('Renderiza el componente Header de acuerdo al valor del prop recibido.', () => {
  const { queryByTestId } = renderWithRouter(<Header hide={false} />);

  expect(queryByTestId('rules-button').textContent).toBe('Reglas del juego');

  renderWithRouter(<Header hide />);

  expect(queryByTestId('game-button').textContent).toBe('Volver al juego');
});
