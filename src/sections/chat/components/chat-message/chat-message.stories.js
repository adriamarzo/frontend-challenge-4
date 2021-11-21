import ChatMessage from './chat-message';

const storyDef = {
  title: 'Components/ChatMessage',
  component: ChatMessage,
};

export default storyDef;

const Template = (args) => <ChatMessage {...args} />;

export const Default = Template.bind({});

Default.args = {
  author: 'Author name',
  text: 'Hey! How are you?',
};
