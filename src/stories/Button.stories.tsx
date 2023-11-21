import { JSX } from 'solid-js';
import { Meta, Story } from '@storybook/addon-docs/blocks';

import { Button } from '../components/Button';
import { printLog } from '../utils/utils';
import { Props } from '../components/Button/Button';

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

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  variant: 'outlined',
  label: 'CHECK',
  startIcon: (
    <span role="img" aria-label="icon">
      &#10003;
    </span>
  ),
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  variant: 'outlined',
  label: 'CHECK',
  endIcon: (
    <span role="img" aria-label="icon">
      &#10003;
    </span>
  ),
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
  onDropdownItemClick: (item: string) => printLog(`Clicked: ${item}`),
};

export const Sizes: Story<Props> = (args: Props) => (
  <>
    <Button {...args} size="small" label="Small Button" />
    <br />
    <br />
    <Button {...args} size="medium" label="Medium Button" />
    <br />
    <br />
    <Button {...args} size="large" label="Large Button" />
  </>
);
Sizes.args = {
  variant: 'contained',
  size: 'large',
};
