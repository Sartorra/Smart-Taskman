import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Hello world!/i);
  expect(linkElement).toBeInTheDocument();
});
