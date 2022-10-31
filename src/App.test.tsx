import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import App from './App';

describe('App.tsx', () => {
  it('should render Hello World', () => {
    render(<App />);

    const title = screen.getByRole('heading', {
      level: 1,
      name: 'Hello world',
    });
    expect(title).toBeInTheDocument();
  });
});
