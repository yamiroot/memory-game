/* eslint-disable no-undef */
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
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


/* it('should render the home page', () => {
  const { container, getByTestId } = renderWithRouter(<TestRouter />);
  const navbar = getByTestId('navbar');
  const link = getByTestId('home-link');

  expect(container.innerHTML).toMatch('Home page');
  expect(navbar).toContainElement(link);
}); */


it('should navigate to the about page', () => {
  const { container, getByTestId } = renderWithRouter(<TestRouter />);

  fireEvent.click(getByTestId('about-link'));

  expect(container.innerHTML).toMatch('About page');
});

it('should navigate to the contact page with the params', () => {
  const { container, getByTestId } = renderWithRouter(<TestRouter />);

  fireEvent.click(getByTestId('contact-link'));

  expect(container.innerHTML).toMatch('John Doe');
});
