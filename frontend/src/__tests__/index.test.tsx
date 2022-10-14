import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import Index from '../pages';

describe('Index', () => {
  it('renders the landing page correctly', () => {
    render(<Index />);

    const heroText = screen.getByText(/Becoming a Web 3 Developer is hard../i);
    expect(heroText).toBeVisible();

    const ctaText = screen.getByText(/How we will help you/i);
    expect(ctaText).toBeVisible();
  });
});
