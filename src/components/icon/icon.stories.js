import React from 'react';
import Icon from './icon';

const storyDef = {
  title: 'Components/Icon',
  component: Icon,
};

export default storyDef;

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'fa-paper-plane',
};
