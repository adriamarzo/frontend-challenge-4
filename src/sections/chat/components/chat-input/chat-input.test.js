import { render, fireEvent } from '@testing-library/react';
import ChatInput from './chat-input';
import { landbotCore } from '../../../../lib/landbot-core';

jest.mock('../../../../lib/landbot-core', () => ({
  landbotCore: { sendMessage: jest.fn() },
}));

const renderChatInput = () => render(<ChatInput />);

describe('ChatInput component - structure', () => {
  it('should have specific wrappers', () => {
    const { container } = renderChatInput();
    expect(container.querySelector('.landbot-input-container')).toBeTruthy();
    expect(container.querySelector('.field')).toBeTruthy();
    expect(container.querySelector('.control')).toBeTruthy();
  });

  it('should have an input', () => {
    const { getByPlaceholderText } = renderChatInput();
    expect(getByPlaceholderText('Type here...')).toBeTruthy();
  });

  it('should have a button', () => {
    const { container } = renderChatInput();
    expect(container.querySelector('button.landbot-input-send')).toBeTruthy();
  });
});

describe('Button component - behaviour', () => {
  afterEach(jest.clearAllMocks);

  it('should not call sendMessage landbot core method on submit without message', () => {
    const { container } = renderChatInput();

    const button = container.querySelector('button.landbot-input-send');
    fireEvent.click(button);

    expect(landbotCore.sendMessage).not.toBeCalled();
  });

  it('should call sendMessage landbot core method on submit', () => {
    const newValue = 'New!';
    const { container, getByPlaceholderText } = renderChatInput();
    const input = getByPlaceholderText('Type here...');
    fireEvent.change(input, { target: { value: newValue } });

    const button = container.querySelector('button.landbot-input-send');
    fireEvent.click(button);

    expect(landbotCore.sendMessage).toBeCalled();
  });
});
