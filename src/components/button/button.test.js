import { render, fireEvent } from '@testing-library/react';
import Button from './button';

const BASE_PROPS = {
  onClick: jest.fn(),
  children: 'Test button',
};

const renderButton = (props = {}) =>
  render(<Button {...BASE_PROPS} {...props} />);

describe('Button component - structure', () => {
  it('should have button', () => {
    const { container, getByText } = renderButton();
    expect(container.querySelector('button.button')).toBeTruthy();
    expect(getByText(BASE_PROPS.children)).toBeTruthy();
  });

  it('should not have an icon', () => {
    const { container } = renderButton();
    expect(container.querySelector('span.icon')).toBeFalsy();
  });
});

describe('Button component - conditional', () => {
  it('should have a custom icon', () => {
    const { container } = renderButton({ icon: 'fa-test' });
    expect(container.querySelector('i.fa-test')).toBeTruthy();
  });

  it('should have a custom css class', () => {
    const { container } = renderButton({ className: 'test' });
    expect(container.querySelector('button.test')).toBeTruthy();
  });
});

describe('Button component - behaviour', () => {
  afterEach(jest.clearAllMocks);

  it('should call onClick when the enabled button is clicked', () => {
    const { container } = renderButton();

    const button = container.querySelector('button.button');
    fireEvent.click(button);
    expect(BASE_PROPS.onClick).toBeCalled();
  });

  it('should not call onClick when the disabled button is clicked', () => {
    const { container } = renderButton({ disabled: true });

    const button = container.querySelector('button.button');
    fireEvent.click(button);
    expect(BASE_PROPS.onClick).not.toBeCalled();
  });
});
