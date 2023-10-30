import { JSX } from 'solid-js';

import { BasicModal } from '../components';

export default {
  title: 'Components/Modal',
  component: BasicModal,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/wRva5evT6jNNz8wYFTO2Xi/RevKit-Design-System-UI-Kit-(Community)?type=design&node-id=0-49&mode=design&t=eUPkYS3CIYsICv9y-4',
    },
  },
};

// Define a template for creating stories
const Template: (
  args: JSX.ButtonHTMLAttributes<HTMLButtonElement> & { children: JSX.Element },
) => JSX.Element = (args) => <BasicModal {...args} />;
// Create the actual stories
export const Primary = Template.bind({});
Primary.args = {
  title: 'Modal Title',
  open: true,
};
