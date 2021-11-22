import Message from '../../models/message-model';

/**
 * parseMessages: Get an object with all the messages.
 *
 * @param {Object} messages API Messages model object.
 * @returns {Object} Object with all the messages using Message model object.
 */
export function parseMessages(messages) {
  return Object.values(messages).reduce((obj, next) => {
    obj[next.key] = new Message(next).toJSON();
    return obj;
  }, {});
}

/**
 * messagesFilter: Determines if it is a basic message type.
 *
 * @param {Object} data Message model object.
 * @returns {Object} True if the message type is basic ('text' or 'dialog').
 */
export function messagesFilter(data) {
  /** Support for basic message types */
  return ['text', 'dialog'].includes(data.type);
}

/**
 * scrollBottom: Scrolls a DOM element to its bottom position.
 *
 * @param {Object} container DOM element.
 */
export function scrollBottom(container) {
  if (!container) {
    return;
  }

  container.scrollTo({
    top: container.scrollHeight,
    behavior: 'smooth',
  });
}
