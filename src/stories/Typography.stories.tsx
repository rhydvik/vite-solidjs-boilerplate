import { Typography, TypographyProps } from '../components/Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: ['body1', 'h1', 'h2', 'h6'],
      control: { type: 'select' },
    },
  },
};

const Template = (args: TypographyProps) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'body1',
  component: 'div',
  children: <span>Your text goes here</span>,
};

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
  component: 'h1',
  children: <span>Your heading text</span>,
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  variant: 'body2',
  component: 'div',
  sxProps: {
    color: 'blue',
  },
  children: <span>Your custom-styled text</span>,
};
