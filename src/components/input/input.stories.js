import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Input from './input';

const storyDef = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
    onSubmit: {
      table: {
        disable: true,
      },
    },
  },
};

export default storyDef;

const Template = (args) => {
  const [value, setValue] = useState('');

  return <Input {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});

Default.args = {
  type: 'text',
  placeholder: 'Type here...',
  onSubmit: action('onSubmit triggered!'),
};
