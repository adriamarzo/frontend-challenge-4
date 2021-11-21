import Message from '../../models/message-model';

export function parseMessages(messages) {
  return Object.values(messages).reduce((obj, next) => {
    obj[next.key] = new Message(next).toJSON();
    return obj;
  }, {});
}

export function messagesFilter(data) {
  /** Support for basic message types */
  return ['text', 'dialog'].includes(data.type);
}

export function scrollBottom(container) {
  if (!container) {
    return;
  }

  container.scrollTo({
    top: container.scrollHeight,
    behavior: 'smooth',
  });
}
