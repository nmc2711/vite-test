import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import LearnMorePage from './learn-more';

function renderComponent() {
  render(
    <MemoryRouter>
      <LearnMorePage />
    </MemoryRouter>,
  );
}

describe('learn-more.tsx', () => {
  it('should render page title', () => {
    renderComponent();

    const pageTitle = screen.getByRole('heading', {
      level: 1,
    });

    expect(pageTitle).toHaveTextContent("What's inside?");
  });

  it('should render list of technologies list item', () => {
    renderComponent();

    const list = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(14);
  });

  it('should render a learn more button with a link', () => {
    renderComponent();

    const button = screen.getByRole('button');
    const link = within(button).getByRole('link');

    expect(button).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      'https://github.com/hanstanawi/react-ts-starter-template',
    );
  });
});
