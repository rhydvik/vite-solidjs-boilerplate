import { JSX } from 'solid-js';
import { Meta } from '@storybook/addon-docs/blocks';

import { Notification, Props } from '../components/Notification';

export default {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    controls: { hideNoControlsWarning: true }, // To hide controls warning
    docs: {
      page: () => <Meta title="Notification" />,
    },
  },
};

const Template: (args: Props) => JSX.Element = (args) => (
  <Notification {...args} />
);

export const WarningNotification = Template.bind({});
WarningNotification.args = {
  type: 'warning',
  children: 'This is a warning message.',
};

export const ErrorNotification = Template.bind({});
ErrorNotification.args = {
  type: 'error',
  children: 'This is an error message.',
};

export const InfoNotification = Template.bind({});
InfoNotification.args = {
  type: 'info',
  children: 'This is an info message.',
};
