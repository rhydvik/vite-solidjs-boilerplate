import { JSX } from 'solid-js';
import { Meta } from '@storybook/react';
import { Box } from '@suid/material';

import { BasicModal, ModalProps } from '../components';

export default {
  title: 'Components/Modal',
  component: BasicModal,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/wRva5evT6jNNz8wYFTO2Xi/RevKit-Design-System-UI-Kit-(Community)?type=design&node-id=0-49&mode=design&t=eUPkYS3CIYsICv9y-4',
    },
  },
} as Meta;

// Define a template for creating stories
const Template: (args: ModalProps) => JSX.Element = (args) => (
  <BasicModal {...args} />
);
// Create the actual stories

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const Default = Template.bind({});
Default.args = {
  title: 'Default Modal',
  description: 'Content will go here!',
  open: true,
};

export const Customized = Template.bind({});
Customized.args = {
  title: 'Customized Modal',
  description: 'With Disabled Escape Key Down and Disabled Backdrop Click',
  open: true,
  additionalModalProps: {
    maxWidth: 'md',
    disableEscapeKeyDown: false,
    disableBackdropClick: false,
    // Add more Modal props as needed
  },
  children: undefined,
};

export const WithChildElement = Template.bind({});
WithChildElement.args = {
  title: 'Modal with Child Element',
  open: true,
  additionalModalProps: {
    hideCloseButton: true, // Add a custom prop to hide the close button
  },
  children: (
    <Box
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 2,
        p: 2,
        minWidth: 300,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        98.3 K
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'bold',
          mx: 0.5,
          fontSize: 14,
        }}
      >
        +18.77%
      </Box>
      <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
        vs. last week
      </Box>
    </Box>
  ),
};
