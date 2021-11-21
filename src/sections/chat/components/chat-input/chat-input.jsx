import { useState } from 'react';
import Input from '../../../../components/input';
import Button from '../../../../components/button';
import { landbotCore } from '../../../../lib/landbot-core';

const ChatInput = () => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input !== '') {
      landbotCore.sendMessage({ message: input });
      setInput('');
    }
  };

  return (
    <div className="landbot-input-container">
      <div className="field">
        <div className="control">
          <Input value={input} onChange={setInput} onSubmit={handleSubmit} />
          <Button
            className="landbot-input-send"
            onClick={handleSubmit}
            disabled={!input}
            icon="fa-paper-plane"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
