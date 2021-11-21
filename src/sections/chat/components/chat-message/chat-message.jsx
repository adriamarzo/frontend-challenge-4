const ChatMessage = ({ author, text }) => {
  return (
    <article data-author={author} className="media landbot-message">
      <figure className="media-left landbot-message-avatar">
        <p className="image is-64x64">
          <img className="is-rounded" src="http://i.pravatar.cc/100" alt="" />
        </p>
      </figure>
      <div className="media-content landbot-message-content">
        <div className="content">
          <p>{text}</p>
        </div>
      </div>
    </article>
  );
};

export default ChatMessage;
