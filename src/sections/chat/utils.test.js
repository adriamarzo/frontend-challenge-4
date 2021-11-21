import { messagesFilter, parseMessages, scrollBottom } from './utils';

describe('Chat utils', () => {
  describe('messagesFilter', () => {
    it('should return true when the message type is supported', () => {
      expect(messagesFilter({ type: 'text' })).toBe(true);
      expect(messagesFilter({ type: 'dialog' })).toBe(true);
    });

    it('Should return false when the message type is not supported', () => {
      expect(messagesFilter({ type: 'unknown' })).toBe(false);
    });
  });

  describe('parseMessages', () => {
    it('should parse the messages object using the Message Model', () => {
      const messages = {
        x: {
          key: 'key',
          title: 'The title',
          samurai: true,
          timestamp: 1637533924211,
          type: 'text',
        },
        y: {
          key: 'key 2',
          title: 'The title 2',
          timestamp: 1637533924221,
          type: 'text',
        },
      };
      expect(parseMessages(messages)).toMatchSnapshot();
    });
  });

  describe('scrollBottom', () => {
    it('should call scrollTo with the expected arguments', () => {
      const mockDOMElement = {
        scrollTo: jest.fn(),
        scrollHeight: 1,
      };

      scrollBottom(mockDOMElement);
      expect(mockDOMElement.scrollTo).toBeCalledWith({
        behavior: 'smooth',
        top: 1,
      });
    });
  });
});
