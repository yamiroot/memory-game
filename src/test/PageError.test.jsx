/* eslint-disable no-undef */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PageError from '../components/PageError';


afterEach(cleanup);


// toContainHTML: Afirma si una cadena que representa un elemento HTML está contenida
// en otro elemento.


it('El componente PageError se encuentra renderizado en el documento.', () => {
  const { queryByTestId } = render(<PageError />);

  expect(queryByTestId('pageerror')).toBeInTheDocument();

  expect(queryByTestId('pageerror')).toContainHTML('<a href="/"></a>');
});
