import { JSX } from 'solid-js';
import { Meta } from '@storybook/addon-docs/blocks';

import { Card, Props } from '../components/Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    controls: { hideNoControlsWarning: true }, // To hide controls warning
    docs: {
      page: () => <Meta title="Card" />,
    },
  },
};

const Template: (args: Props) => JSX.Element = (args) => <Card {...args} />;

export const ContainedCard = Template.bind({});
ContainedCard.args = {
  startTitle: 'Card Title',
  endTitle: '',
  content: 'This is a contained card with an only title.',
  variant: 'contained',
  startIcon: undefined,
  endIcon: undefined,
};

export const ContainedCardWithIcon = Template.bind({});
ContainedCardWithIcon.args = {
  startTitle: 'Card Title',
  endTitle: '',
  content: 'This is a contained card with title and icon.',
  variant: 'contained',
  startIcon: (
    <span role="img" aria-label="icon">
      &#9728;
    </span>
  ),
  endIcon: undefined,
};

export const ContainedCardWithIconAtEnd = Template.bind({});
ContainedCardWithIconAtEnd.args = {
  startTitle: 'Card Title',
  endTitle: new Date().toDateString(),
  content: 'This is a contained card with title and icon at start and end',
  variant: 'contained',
  startIcon: (
    <span role="img" aria-label="icon">
      &#9728;
    </span>
  ),
  endIcon: (
    <span role="img" aria-label="icon">
      &#9843;
    </span>
  ),
};
