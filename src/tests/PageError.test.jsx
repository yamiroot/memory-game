import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup } from '@testing-library/react';
import PageError from '../components/PageError';


afterEach(cleanup);


it('Se renderiza el componente PageError.', () => {
  const history = createMemoryHistory();
  history.push('/pageerrorgg');

  const container = render(<Router history={history}><PageError /></Router>);

  // La página renderiza la vista de error
  expect(container.getByTestId('view-error')).toBeTruthy();
  expect(container.queryByRole('document')).toBeTruthy();
  expect(container.queryByText('404')).toBeTruthy();
});
