import { JSX } from 'solid-js';
import { Meta } from '@storybook/addon-docs/blocks';

import { Card, Props } from '../components/Card';
import { Button } from '../components';
import { printLog } from '../utils/utils';

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
  childern: 'This is a card with an only title.',

  startIcon: undefined,
  endIcon: undefined,
};

export const ContainedCardWithIcon = Template.bind({});
ContainedCardWithIcon.args = {
  startTitle: 'Card Title',
  endTitle: '',
  childern: 'This is a card with title and icon.',
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
  childern: 'This is a card with title and icon at start and end',
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

export const ContainedCardWithAction = Template.bind({});
ContainedCardWithAction.args = {
  startTitle: 'Card Title',
  endTitle: '',
  childern: 'This is a card with action button',
  startIcon: undefined,
  endIcon: undefined,
  action: (
    <Button
      variant={'contained'}
      label={'Card Actions'}
      size="small"
      dropdownItems={['Item 1', 'Item 2', 'Item 3']}
      onDropdownItemClick={(item: string) => printLog(`Clicked: ${item}`)}
    ></Button>
  ),
};

export const ContainedCardWithAccordion = Template.bind({});
ContainedCardWithAccordion.args = {
  startTitle: 'Card Title',
  endTitle: '',
  childern: 'This is a card with an accordion option.',
  startIcon: undefined,
  endIcon: undefined,
  action: (
    <Button
      variant={'contained'}
      label={'Card Actions'}
      size="small"
      dropdownItems={['Item 1', 'Item 2', 'Item 3']}
      onDropdownItemClick={(item: string) => printLog(`Clicked: ${item}`)}
    ></Button>
  ),
  accordion: true,
  expanded: false,
};
