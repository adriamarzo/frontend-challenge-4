import { render } from '@testing-library/react';

import Header from './header';

const BASE_PROPS = {
  title: 'This is a test',
};

describe('Header component', () => {
  it('should have a wrapped title', () => {
    const { container, getByText } = render(<Header {...BASE_PROPS} />);
    const wrapper = container.firstChild;

    expect(wrapper).toHaveClass('landbot-header');
    expect(
      getByText(BASE_PROPS.title).classList.contains('subtitle')
    ).toBeTruthy();
  });
});
