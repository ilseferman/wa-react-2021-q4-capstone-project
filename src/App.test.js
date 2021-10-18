import { render, screen } from '@testing-library/react';
import Header from './UI/Header';

test('Ecommerce Store logo/name appears correctly in the Header.', () => {
  render(<Header />);
  const brandName = screen.getByText(/Brand/i);
  expect(brandName).toBeInTheDocument();
});
