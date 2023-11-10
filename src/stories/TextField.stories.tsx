import { JSX } from 'solid-js';

import { TextField } from '../components/TextField';

export default {
  title: 'Components/TextField', // Define the story grouping and name
  component: TextField, // Specify the component for auto-generation of controls
};

// Define a template for creating stories
const Template: (
  args: JSX.ButtonHTMLAttributes<HTMLButtonElement> & { children: JSX.Element },
) => JSX.Element = (args) => <TextField {...args} />;

// Create the actual stories
export const Primary = Template.bind({});
Primary.args = {
  variant: 'filled',
  label: 'Primary Text Field',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'outlined',
  label: 'Secondary Text Field',
};
