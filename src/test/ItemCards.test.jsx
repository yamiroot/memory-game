import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render, cleanup, fireEvent, act,
} from '@testing-library/react';
import ItemCard from '../components/ItemCard';


// jest

// - jest.fn(): Devuelve una nueva función simulada no utilizada (espía de
// prueba).
// Invocado sin ningún argumento, jest.fn() devuelve el objeto jest espía
// básico "no operativo". Cuando se invoca este objeto espía, devuelve
// undefined(es decir, lo mismo que invocar function () {}).
// Esto puede resultar eficaz para evitar que algunos tipos de invocaciones
// de dependencia generen efectos secundarios no deseados, por ejemplo
// evitar que las invocaciones de los métodos de la biblioteca del registrador
// generen registros durante la ejecución de la prueba.
// Si se pasa una función como argumento, el objeto espía devuelto se comportará
// como la función pasada en la invocación.
// - toHaveBeenCalled(): Otro nombre: toBeCalled(). Úselo para asegurarse de que
// se llamó a una función simulada.


afterEach(cleanup);


const card = {
  url: 'https://i.pinimg.com/originals/5f/90/e7/5f90e70ae684e34047bae3f81228c84c.jpg',
  id: 'img01',
  alt: 'Haru en el reino de los gatos',
};


const renderWithRouter = (flipCard) => {
  const history = createMemoryHistory();

  return {
    ...render(
      <Router history={history}>
        <ItemCard img={card} key={card.id} flipCard={flipCard} />
      </Router>,
    ),
  };
};


it('Se renderiza un card del juego.', () => {
  const flipCard = jest.fn();
  const { container, queryByTestId } = renderWithRouter(flipCard);

  expect(container).toContainElement(queryByTestId('img01'));
  expect(queryByTestId('img01')).toHaveClass('img01');
});


it('Al dar click a un card se ejecuta la función recibida como prop.', () => {
  const flipCard = jest.fn();
  const { container, queryByTestId } = renderWithRouter(flipCard);

  expect(container).toContainElement(queryByTestId('img01'));
  expect(queryByTestId('img01')).toHaveClass('img01');

  act(() => {
    fireEvent.click(queryByTestId('img01'));
  });

  expect(flipCard).toHaveBeenCalled();
});
