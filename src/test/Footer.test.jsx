import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from '../components/Footer';


afterEach(cleanup);


// Comparador de la librería @testing-library:
// - queryByTestId: Método de consulta por ID.


it('El componente Footer se encuentra renderizado en el documento.', () => {
  const { queryByTestId } = render(<Footer />);

  expect(queryByTestId('footer')).toBeInTheDocument();
});
