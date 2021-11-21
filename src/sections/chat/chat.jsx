import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import ChatInput from './components/chat-input';
import ChatMessage from './components/chat-message';
import { landbotCore } from '../../lib/landbot-core';
import { messagesFilter, parseMessages, scrollBottom } from './utils';
import Message from '../../models/message-model';

const Chat = () => {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    landbotCore.pipelines.$readableSequence.subscribe((data) => {
      setMessages((messages) => ({
        ...messages,
        [data.key]: new Message(data).toJSON(),
      }));
    });

    landbotCore.init().then((data) => {
      setMessages(parseMessages(data.messages));
    });
  }, []);

  useEffect(() => {
    const container = document.getElementById('landbot-messages-container');
    scrollBottom(container);
  }, [messages]);

  return (
    <Layout id="chat">
      <div
        id="landbot-messages-container"
        className="landbot-messages-container"
      >
        {Object.values(messages)
          .filter(messagesFilter)
          .sort((a, b) => a.timestamp - b.timestamp)
          .map(({ key, ...message }) => (
            <ChatMessage key={key} {...message} />
          ))}
      </div>
      <ChatInput />
    </Layout>
  );
};

export default Chat;
