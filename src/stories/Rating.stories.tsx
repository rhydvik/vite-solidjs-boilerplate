import { JSX } from 'solid-js';
import { Meta } from '@storybook/addon-docs/blocks';

import { Rating } from '../components';
import { RatingProps } from '../components/Rating/Rating';

export default {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    controls: { hideNoControlsWarning: true }, // To hide controls warning
    docs: {
      page: () => <Meta title="Rating" />,
    },
  },
};

const Template: (args: RatingProps) => JSX.Element = (args) => (
  <Rating {...args} />
);

export const DefaultRating = Template.bind({});
DefaultRating.args = {
  readOnly: false,
  currentRating: 3.5, // Example of using decimal rating
  totalRatings: 100,
};
