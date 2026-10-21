import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
  Link: ({ children, ...props }) => <a {...props}>{children}</a>,
  useNavigate: () => () => {},
  useLocation: () => ({})
}), { virtual: true });

import LandingPage from './pages/LandingPage';

test('renders landing page text', () => {
  render(<LandingPage />);
  const heading = screen.getByRole('heading', { name: /Liam Kernan/i });
  expect(heading).toBeInTheDocument();
});
