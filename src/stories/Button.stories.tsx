import { JSX } from 'solid-js';

import { Button } from '../components/Button';

export default {
  title: 'Components/Button', // Define the story grouping and name
  component: Button, // Specify the component for auto-generation of controls
};

// Define a template for creating stories
const Template: (
  args: JSX.ButtonHTMLAttributes<HTMLButtonElement> & { children: JSX.Element },
) => JSX.Element = (args) => <Button {...args} />;

// Create the actual stories
export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'text',
  label: 'Secondary Button',
};
