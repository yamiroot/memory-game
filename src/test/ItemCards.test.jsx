import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render, cleanup, fireEvent, act,
} from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import ItemCard from '../components/ItemCard';


afterEach(cleanup);


const card = {
  url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hobbyconsolas.com%2Freviews%2Fcritica-haru-reino-gatos-pelicula-animacion-studio-ghibli-591431&psig=AOvVaw2EM1PyApyTUL8dX6igbABG&ust=1589671445839000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjqnOWBt-kCFQAAAAAdAAAAABAD',
  id: 'img01',
  alt: 'Haru en el reino de los gatos',
};


it('Se renderiza un card del juego.', () => {
  const history = createMemoryHistory();
  const flipCard = jest.fn();

  const { container, queryByTestId } = render(
    <Router history={history}>
      <ItemCard img={card} key={card.id} flipCard={flipCard} />
    </Router>,
  );

  expect(container).toContainElement(queryByTestId('img01'));
  expect(queryByTestId('img01')).toHaveClass('img01');
});


it('Al dar click a un card se le añade la clase "flip", con ello ocurre el efecto flip.', (async () => {
  const history = createMemoryHistory();
  const flipCard = jest.fn();

  const { container, queryByTestId } = render(
    <Router history={history}>
      <ItemCard img={card} key={card.id} flipCard={flipCard} />
    </Router>,
  );

  expect(container).toContainElement(queryByTestId('img01'));
  expect(queryByTestId('img01')).toHaveClass('img01');

  await act(async () => {
    fireEvent.click(queryByTestId('img01'));
  });

  expect(flipCard).toHaveBeenCalled();

  waitFor(() => {
    expect(queryByTestId('img01')).toHaveAttribute('class', 'img01 flip');
  });
}));
