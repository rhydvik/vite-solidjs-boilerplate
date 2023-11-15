import { JSX } from 'solid-js';
import { Meta } from '@storybook/addon-docs/blocks';

import { Button, Props } from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: { hideNoControlsWarning: true }, // To hide controls warning
    docs: {
      page: () => <Meta title="Button" />,
    },
  },
};

const Template: (args: Props) => JSX.Element = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  label: 'Contained Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  label: 'Outlined Button',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  label: 'Text Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: 'contained',
  label: 'Button with Icon',
  icon: (
    <span role="img" aria-label="icon">
      &#10003;
    </span>
  ),
  iconAlignment: 'start',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'contained',
  label: 'Disabled Button',
  disabled: true,
};

export const WithDropdown = Template.bind({});
WithDropdown.args = {
  variant: 'contained',
  label: 'Button with Dropdown',
  dropdownItems: ['Item 1', 'Item 2', 'Item 3'],
  // eslint-disable-next-line no-console
  onDropdownItemClick: (item: string) => console.log(`Clicked: ${item}`),
};
