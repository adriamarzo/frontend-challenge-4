import Message from './message-model';

const DATA_MOCK = {
  key: 'key',
  title: 'The title',
  samurai: true,
  timestamp: 1637533924211,
  type: 'text',
};

describe('Message model', () => {
  it('should have the expected properties', () => {
    const message = new Message(DATA_MOCK);

    expect(message.toJSON()).toMatchSnapshot();
  });

  it('should have the text', () => {
    const message = new Message({
      ...DATA_MOCK,
      message: DATA_MOCK.title,
      title: null,
    });

    expect(message.toJSON().text).toBe(DATA_MOCK.title);
  });

  it('should be a user message', () => {
    const message = new Message({
      ...DATA_MOCK,
      samurai: undefined,
    });

    expect(message.toJSON().author).toBe('user');
  });
});
