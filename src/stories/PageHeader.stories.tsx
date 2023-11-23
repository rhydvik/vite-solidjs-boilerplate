import { JSX } from 'solid-js';
import { Router } from '@solidjs/router';

import { PageHeader, Typography } from '../components';

export default {
  title: 'Components/PageHeader', // Define the story grouping and name
  component: PageHeader, // Specify the component for auto-generation of controls
};

// Define a template for creating stories
const Template: (
  args: JSX.Element & { children: JSX.Element },
) => JSX.Element = () => {
  return (
    <Router>
      <PageHeader
        title={<Typography variant="h4">Order #16534612</Typography>}
      />
    </Router>
  );
};

// Create the actual stories
export const Primary = Template.bind({});
