import { render } from '@testing-library/react';
import Icon from './icon';

const BASE_PROPS = {
  name: 'test',
};

const renderIcon = (props = {}) => render(<Icon {...BASE_PROPS} />);

describe('Icon component - structure', () => {
  it('should have the custom icon', () => {
    const { container } = renderIcon();
    expect(container.querySelector('span.icon.is-large')).toBeTruthy();
    expect(container.querySelector(`i.${BASE_PROPS.name}`)).toBeTruthy();
  });
});
