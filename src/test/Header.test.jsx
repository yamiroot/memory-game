/* eslint-disable no-undef */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from '../components/Header';


afterEach(cleanup);


it('Debería retornar el componente Header como un valor verdadero de acuerdo al id ViewRules.', () => {
  const { getByTestId } = render(<Header hide />);
  const component = getByTestId('ViewRules');

  expect(component).toBeTruthy();
});

it('Debería retornar el componente Header como un valor verdadero de acuerdo al id ViewGame.', () => {
  const { getByTestId } = render(<Header hide={false} />);
  const component = getByTestId('ViewGame');

  expect(component).toBeTruthy();
});
