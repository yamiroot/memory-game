/* eslint-disable no-undef */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Router from './src/Router';


afterEach(cleanup);

/*
test('renders learn react link', () => {
  const { getByText } = render(<Router />);
  const linkElement = getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
}); */

/* 
it('El componente Router se encuentra renderizado en el documento.', () => {
  const { getByTestId } = render(<Router />);
  const component = getByTestId('app');

  expect(component).toBeInTheDocument();
}); */
