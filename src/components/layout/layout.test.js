import { render } from '@testing-library/react';

import Layout from './layout';

const BASE_PROPS = {
  children: <div data-testid="test" />,
  id: 'test',
};

describe('Layout component - structure', () => {
  it('should have a specific section, body and content wrappers', () => {
    const { container } = render(<Layout {...BASE_PROPS} />);

    const section = container.querySelector('section');
    expect(section).toHaveClass('hero is-fullheight is-dark');
    expect(section.id).toBe('landbot-app');

    const body = section.firstChild;
    expect(body).toHaveClass('hero-body');

    const contentWrapper = body.firstChild;
    expect(contentWrapper).toHaveClass(`${BASE_PROPS.id}-container`);
    expect(contentWrapper.firstChild).toHaveClass(`landbot-${BASE_PROPS.id}`);
  });

  it('should have a default title', () => {
    const { getByText } = render(<Layout {...BASE_PROPS} />);
    expect(getByText('Landbot')).toBeTruthy();
  });

  it('should have the custom content', () => {
    const { getByTestId } = render(<Layout {...BASE_PROPS} />);
    expect(getByTestId('test')).toBeTruthy();
  });
});

describe('Layout component - conditional', () => {
  it('should have a custom title', () => {
    const { getByText } = render(<Layout {...BASE_PROPS} title="TEST!" />);
    expect(getByText('TEST!')).toBeTruthy();
  });

  it('should not have any title', () => {
    const { container } = render(<Layout {...BASE_PROPS} title={null} />);
    expect(container.querySelector('.landbot-header')).toBeFalsy();
  });
});
