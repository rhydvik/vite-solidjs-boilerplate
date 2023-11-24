import { JSX } from 'solid-js';
import { Meta } from '@storybook/addon-docs/blocks';

import { Radio, Props } from '../components/Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      page: () => <Meta title="Radio" />,
    },
  },
};
const Template: (args: Props) => JSX.Element = (args) => <Radio {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  disabled: false,
  label: 'Checked Checkbox',
  options: [
    { label: 'Yes', value: true, checked: true },
    { label: 'No', value: false },
  ],
};

export const VerticallyAlign = Template.bind({});
VerticallyAlign.args = {
  disabled: true,
  label: 'Vertically Align Checkbox',
  flowDirection: 'column',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2', checked: true },
    { label: 'Option 3', value: '3' },
  ],
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: 'success',
  disabled: false,
  label: 'Custom Color Checkbox',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2', checked: true },
    { label: 'Option 3', value: '3' },
  ],
};
