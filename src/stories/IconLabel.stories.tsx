// src/stories/IconLabel.stories.tsx
import { JSX } from 'solid-js';
import { Meta } from '@storybook/addon-docs/blocks';

import { IconLabel, Props } from '../components/IconLabel';

export default {
  title: 'Components/IconLabel',
  component: IconLabel,
  parameters: {
    controls: { hideNoControlsWarning: true }, // To hide controls warning
    docs: {
      page: () => <Meta title="IconLabel" />,
    },
  },
};

const Template: (args: Props) => JSX.Element = (args) => (
  <IconLabel {...args} />
);

export const DefaultIconLabel = Template.bind({});
DefaultIconLabel.args = {
  label: 'Default Label',
  content: 'Default Text',
  textColorCondition: true,
};

export const IconLabelWithIcon = Template.bind({});
IconLabelWithIcon.args = {
  label: 'Label with icon text',
  content: 'Text with Icon',
  icon: (
    <span role="img" aria-label="icon">
      &#9728;
    </span>
  ),
  textColorCondition: false,
};

export const IconLabelWithIconChildren = Template.bind({});
IconLabelWithIconChildren.args = {
  label: 'Label with icon children',
  icon: (
    <span role="img" aria-label="icon">
      &#9728;
    </span>
  ),
  content: (
    <span role="img" aria-label="child">
      &#128516; children
    </span>
  ),
};

export const IconLabelWithChildren = Template.bind({});
IconLabelWithChildren.args = {
  label: 'Label with Children',
  content: (
    <span role="img" aria-label="child">
      &#128516;
    </span>
  ),
};
