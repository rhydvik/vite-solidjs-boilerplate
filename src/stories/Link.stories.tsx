import { JSX } from 'solid-js';
import { Meta } from '@storybook/addon-docs/blocks';

import LinkComponent, { LinkProps } from '../components/Link/Link';

export default {
  title: 'Components/Link',
  component: LinkComponent,
  parameters: {
    controls: { hideNoControlsWarning: true }, // To hide controls warning
    docs: {
      page: () => <Meta title="LinkComponent" />,
    },
  },
};

const Template: (args: LinkProps) => JSX.Element = (args) => (
  <LinkComponent {...args} />
);

export const DefaultLink = Template.bind({});
DefaultLink.args = {
  title: 'Default Title',
  url: 'https://example.com',
};
