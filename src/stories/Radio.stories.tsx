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
  checked: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  checked: true,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: 'success',
  disabled: false,
};
