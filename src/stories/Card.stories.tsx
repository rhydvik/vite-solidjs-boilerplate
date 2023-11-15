import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { JSX } from 'solid-js';

import { Card, Props } from '../components/Card';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
  },
} as Meta;

const Template: (args: Props) => JSX.Element = (args) => <Card {...args} />;

export const Contained: Story<Props> = Template.bind({});
Contained.args = {
  title: 'Contained Card',
  content: 'This is a contained card.',
  variant: 'contained',
};

export const Outlined: Story<Props> = Template.bind({});
Outlined.args = {
  title: 'Outlined Card',
  content: 'This is an outlined card.',
  variant: 'outlined',
};

export const Text: Story<Props> = Template.bind({});
Text.args = {
  title: 'Text Card',
  content: 'This is a text card.',
  variant: 'text',
};

export const WithChildren: Story<Props> = Template.bind({});
WithChildren.args = {
  title: 'Card with Children',
  content: 'This card has children.',
  variant: 'contained',
  children: <div>Additional content goes here.</div>,
};

// Optionally, you can add some actions to test interactions
export const ContainedWithAction: Story<Props> = Template.bind({});
ContainedWithAction.args = {
  title: 'Contained Card with Action',
  content: 'Click me!',
  variant: 'contained',
  onClick: action('Card Clicked'),
};
