import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render, cleanup, act, fireEvent,
} from '@testing-library/react';
import ModalGame from '../components/ModalGame';


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


it('Renderiza el componente ModalGame de acuerdo al valor del prop recibido.', () => {
  const onHide = jest.fn();
  const { queryByTestId } = renderWithRouter(<ModalGame show={false} onHide={onHide} />);

  expect(queryByTestId('modal-game')).toBe(null);

  renderWithRouter(<ModalGame show onHide={onHide} />);

  expect(queryByTestId('modal-game')).toBeTruthy();
});


it('Se ejecuta la función al hacer click en el botón "Volver a jugar" del modal.', () => {
  const history = createMemoryHistory();
  const onHide = jest.fn();

  const container = render(<Router history={history}><ModalGame show onHide={onHide} /></Router>);

  expect(container.getByTestId('button-new-game')).toBeTruthy();

  act(() => {
    fireEvent.click(container.getByTestId('button-new-game'));
  });

  expect(onHide).toHaveBeenCalled();
});


it('Se ejecuta la función al hacer click en el botón "x".', () => {
  const history = createMemoryHistory();
  const onHide = jest.fn();

  act(() => {
    render(<Router history={history}><ModalGame show onHide={onHide} /></Router>);
  });

  expect(document.querySelector('.close')).toBeTruthy();

  act(() => {
    fireEvent.click(document.querySelector('.close'));
  });

  expect(onHide).toHaveBeenCalled();
});
