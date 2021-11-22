/**
 * @typedef {Object} Message
 * @property {string} key - The unique key of the message
 * @property {string} text - The text of the message
 * @property {string} author - The author of the message
 * @property {Number} timestamp - The message creation time in ms
 * @property {string} type - The message type
 */

/** Class representing a chat message. */
class Message {
  /**
   * Create a message.
   * @param {Object} data - The x value.
   */
  constructor(data) {
    this.data = data || {};
  }

  /**
   * Get the key.
   * @return {string} The unique key of the message.
   */
  get key() {
    return this.data.key;
  }

  /**
   * Get the text.
   * @return {string} The text of the message.
   */
  get text() {
    return this.data.title || this.data.message;
  }

  /**
   * Get the author.
   * @return {string} The author of the message.
   */
  get author() {
    return this.data.samurai === undefined ? 'user' : 'bot';
  }

  /**
   * Get the message creation time.
   * @return {Number} The message creation time in ms.
   */
  get timestamp() {
    return this.data.timestamp;
  }

  /**
   * Get the message type.
   * @return {string} The message type.
   */
  get type() {
    return this.data.type;
  }

  /**
   * Convert this message object class to a simple javascript object.
   * @return {Message} The message javascript object.
   */
  toJSON() {
    return {
      key: this.key,
      text: this.text,
      author: this.author,
      timestamp: this.timestamp,
      type: this.type,
    };
  }
}

export default Message;
