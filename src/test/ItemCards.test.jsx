import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render, cleanup, fireEvent, act,
} from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import dataCards from '../data/cards';
import GameCards from '../components/GameCards';
import ItemCard from '../components/ItemCard';


afterEach(cleanup);


const card = {
  url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hobbyconsolas.com%2Freviews%2Fcritica-haru-reino-gatos-pelicula-animacion-studio-ghibli-591431&psig=AOvVaw2EM1PyApyTUL8dX6igbABG&ust=1589671445839000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjqnOWBt-kCFQAAAAAdAAAAABAD',
  id: 'img01',
  alt: 'Haru en el reino de los gatos',
};


const renderWithRouter = (newimg, flipCard) => {
  const history = createMemoryHistory();

  return {
    ...render(
      <Router history={history}>
        <ItemCard img={newimg} flipCard={() => flipCard(newimg.id)} />
      </Router>,
    ),
  };
};


it('Se renderiza una carta del juego.', (async () => {
  const history = createMemoryHistory();
  const flipCard = jest.fn();
  const { container, getByTestId } = render(
    <Router history={history}>
      <ItemCard img={card} key={card.id} flipCard={flipCard} />
    </Router>,
  );

  expect(container).toContainElement(getByTestId('img01'));
  expect(getByTestId('img01')).toHaveClass('img01');

  console.log(getByTestId('img01'));
  act(() => {
    fireEvent.click(getByTestId('img01'));
  });

  console.log(getByTestId('img01'));

  await waitFor(() => {
    expect(getByTestId('img01')).toHaveAttribute('class', 'img01 flip');
  });
}));


/* it('Se renderiza una carta del juego.', (async () => {
  const history = createMemoryHistory();
  const flipCard = jest.fn();
  const { container, getByTestId } = render(
    <Router history={history}>
      <GameCards dataCards={dataCards} />
    </Router>,
  );

  expect(container).toContainElement(getByTestId('img01'));
  expect(getByTestId('img01')).toHaveClass('img01');

  console.log(getByTestId('img01'));
  act(() => {
    fireEvent.click(getByTestId('img01'));
  });

  await waitFor(() => {
    expect(getByTestId('img01')).toHaveAttribute('class', 'img01 flip');
  });
}));
 */
