import { JSX } from 'solid-js';
import { Router } from '@solidjs/router';

import { Offices } from '../views';

export default {
  title: 'Views/Office', // Define the story grouping and name
  component: Offices, // Specify the component for auto-generation of controls
};

// Define a template for creating stories
const Template: (
  args: JSX.Element & { children: JSX.Element },
) => JSX.Element = () => {
  return (
    <Router>
      <Offices />
    </Router>
  );
};

// Create the actual stories
export const Primary = Template.bind({});
