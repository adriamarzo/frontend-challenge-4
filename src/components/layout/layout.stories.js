import React from 'react';
import Layout from './layout';

const storyDef = {
  title: 'Components/Layout',
  component: Layout,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default storyDef;

const Template = (args) => <Layout {...args}>I'm the content</Layout>;

export const ChatLayout = Template.bind({});

ChatLayout.args = {
  title: "I'm the title",
  id: 'chat',
};
