import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  alert("The value cannot exceed remaining funds : £" + Remaining)
  alert("You cannot reduce the budget value lower than the spending")
});
