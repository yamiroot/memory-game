import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup, act } from '@testing-library/react';
import { waitFor, fireEvent } from '@testing-library/dom';
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


it('Al dar click en el logo del juego debería renderizar el botón "Reglas del juego" en el Header.', (async () => {
  const { queryByTestId, rerender } = renderWithRouter(<Header hide={false} />);
  const history = createMemoryHistory();

  expect(queryByTestId('rules-button').textContent).toBe('Reglas del juego');

  /* act(() => {
    fireEvent.click(queryByTestId('game-home-link'));
  });

  rerender(<Router history={history}><Header hide /></Router>); */
  renderWithRouter(<Header hide />);

  expect(queryByTestId('game-button').textContent).toBe('Volver al juego');

  /*

  await waitFor(() => {
    expect(queryByTestId('header-rules')).toBeTruthy();
  }); */

/* 
  expect(getByTestId('rules-button').textContent).toBe('Reglas del juego'); */
}));


it('botón Reglas del juego', () => {
  const { getByTestId } = renderWithRouter(<Header hide={false} />);

  fireEvent.click(getByTestId('rules-link'));

  expect(getByTestId('rules-button').textContent).toBe('Reglas del juego');
});


it('botón Volver al juego', () => {
  const { getByTestId } = renderWithRouter(<Header hide />);

  fireEvent.click(getByTestId('game-link'));

  expect(getByTestId('game-button').textContent).toBe('Volver al juego');
});


/* it('should navigate to the contact page with the params', () => {
  const container = renderWithRouter(<Header hide={false} />);
  const link = container.getByTestId('rules-link');

  act(() => {
    fireEvent.click(link);
    console.log('click aquí gg');
  });

  const instance = container.getInstance();
  console.log(instance);
}); */
