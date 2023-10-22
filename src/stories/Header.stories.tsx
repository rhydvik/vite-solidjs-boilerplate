import { JSX } from 'solid-js';
import { Router } from '@solidjs/router';

import { Header } from '../components';

export default {
  title: 'Components/Header', // Define the story grouping and name
  component: Header, // Specify the component for auto-generation of controls
};

// Define a template for creating stories
const Template: (
  args: JSX.Element & { children: JSX.Element },
) => JSX.Element = (args) => {
  return (
    <Router>
      <Header {...args} />
    </Router>
  );
};

// Create the actual stories
export const Primary = Template.bind({});
Primary.args = {
  links: [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/users',
      name: 'Users',
    },
  ],
};
