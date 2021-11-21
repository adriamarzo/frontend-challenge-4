import React from 'react';
import Button from './button';

const storyDef = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
};

export default storyDef;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  onClick: () => console.log('click!'),
  icon: 'fa-paper-plane',
};
