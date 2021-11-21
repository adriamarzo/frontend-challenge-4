import { render } from '@testing-library/react';
import ChatMessage from './chat-message';

const BASE_PROPS = {
  author: 'Me',
  text: 'Message text...',
};
const renderChatMessage = () => render(<ChatMessage {...BASE_PROPS} />);

describe('ChatMessage component - structure', () => {
  it('should have an article with the author', () => {
    const { container } = renderChatMessage();
    const article = container.querySelector('article');
    expect(article).toHaveAttribute('data-author', BASE_PROPS.author);
  });

  it('should have a static avatar', () => {
    const { container } = renderChatMessage();
    const avatar = container.querySelector('img.is-rounded');
    expect(avatar).toHaveAttribute('src', 'http://i.pravatar.cc/100');
  });

  it('should have the message text', () => {
    const { getByText } = renderChatMessage();
    expect(getByText(BASE_PROPS.text)).toBeTruthy();
  });
});
