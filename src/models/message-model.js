class Message {
  constructor(data) {
    this.data = data || {};
  }

  get key() {
    return this.data.key;
  }

  get text() {
    return this.data.title || this.data.message;
  }

  get author() {
    return this.data.samurai === undefined ? 'user' : 'bot';
  }

  get timestamp() {
    return this.data.timestamp;
  }

  get type() {
    return this.data.type;
  }

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
