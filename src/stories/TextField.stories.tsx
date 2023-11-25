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

export const Primary = Template.bind({});
Primary.args = {
  variant: 'outlined',
  label: 'Primary Text Field',
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

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'filled',
  label: 'Secondary Text Field',
  required: true,
  disabled: false,
  helperText: 'some help text',
  error: false,
  multiline: false,
  rows: 1,
};

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
  label: 'Standard Text Field',
  required: true,
  disabled: false,
  helperText: 'some help text',
  error: false,
  multiline: false,
  rows: 1,
};
