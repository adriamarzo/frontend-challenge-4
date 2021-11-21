import React from 'react';
import { action } from '@storybook/addon-actions';
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
  onClick: action('click!'),
  icon: 'fa-paper-plane',
};
