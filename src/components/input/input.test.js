import { render, fireEvent } from '@testing-library/react';
import { ENTER_KEY_CODE } from './constants';
import Input from './input';

const BASE_PROPS = {
  onChange: jest.fn(),
};

const renderInput = (props = {}) =>
  render(<Input {...BASE_PROPS} {...props} />);

describe('Input component - structure', () => {
  it('should have an input', () => {
    const { getByPlaceholderText } = renderInput();
    const input = getByPlaceholderText('Type here...');
    expect(input).toHaveClass('landbot-input');
    expect(input).toHaveAttribute('type', 'text');
  });
});

describe('Button component - conditional', () => {
  it('should have a custom placeholder', () => {
    const { getByPlaceholderText } = renderInput({ placeholder: 'test' });
    expect(getByPlaceholderText('test')).toBeTruthy();
  });
});

describe('Button component - behaviour', () => {
  afterEach(jest.clearAllMocks);

  it('should call onChange when user types in the input', () => {
    const newValue = 'new';
    const { getByPlaceholderText } = renderInput();
    const input = getByPlaceholderText('Type here...');

    fireEvent.change(input, { target: { value: newValue } });

    expect(BASE_PROPS.onChange).toBeCalledWith(newValue);
  });

  it('should call onSubmit when user press enter and the callback is defined', () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText } = renderInput({ onSubmit });
    const input = getByPlaceholderText('Type here...');

    fireEvent.keyUp(input, { key: ENTER_KEY_CODE });

    expect(onSubmit).toBeCalled();
  });
});
