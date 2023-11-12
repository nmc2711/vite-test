import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import Homepage from './home';

function renderComponent() {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>,
  );
}

describe('home.tsx', () => {
  it('should display React + TypeScript Starter Template title', () => {
    renderComponent();
    const title = screen.getByRole('heading', { level: 1 });
    const subTitle = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('React + TypeScript');
    expect(subTitle).toHaveTextContent('Starter Template');
  });

  it('should display React and TypeScript logo and link', () => {
    renderComponent();

    const reactLink = screen.getByTestId('react-link');
    const reactLogo = within(reactLink).getByRole('img');
    const tsLink = screen.getByTestId('ts-link');
    const tsLogo = within(tsLink).getByRole('img');

    expect(reactLogo).toHaveAttribute('alt', 'React logo');
    expect(reactLink).toHaveAttribute('href', 'https://react.dev');
    expect(tsLogo).toHaveAttribute('alt', 'TS logo');
    expect(tsLink).toHaveAttribute('href', 'https://typescriptlang.org');
  });

  it('should render a count button', () => {
    renderComponent();

    const button = screen.getByRole('button', { name: /count is 0/ });

    expect(button).toBeInTheDocument();
  });

  it('should increment count button', async () => {
    const user = userEvent.setup();
    renderComponent();

    const countButton = screen.getByRole('button', { name: /count is 0/i });
    await user.click(countButton);
    expect(countButton).toHaveTextContent(/count is 1/i);

    await user.click(countButton);
    expect(countButton).toHaveTextContent(/count is 2/i);
  });
});
