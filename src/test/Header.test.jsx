/* eslint-disable no-undef */
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
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


it('Al dar click en el logo del juego debería renderizar el botón "Reglas del juego" en el Header.', () => {
  const { getByTestId } = renderWithRouter(<Header hide={false} />);

  act(() => {
    fireEvent.click(getByTestId('game-home-link'));
  });

  expect(getByTestId('rules-button').textContent).toBe('Reglas del juego');
});


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
