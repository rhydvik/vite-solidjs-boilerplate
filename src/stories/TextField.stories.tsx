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
  required: true,
  disabled: true,
  helperText: 'some help text',
  error: true,
  multiline: true,
  rows: 3,
  startAdornmentFlag: true,
  InputAdornmentPostion: 'start',
  InputAdornmentText: 'kg',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'outlined',
  label: 'Secondary Text Field',
  required: false,
  disabled: false,
  helperText: 'some help text',
  error: false,
  multiline: false,
  rows: 0,
  startAdornmentFlag: false,
  InputAdornmentPostion: 'start',
  InputAdornmentText: 'ltr',
};
