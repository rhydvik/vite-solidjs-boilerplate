import { Grid } from '../components/Grid';
import { GridProps } from '../components/Grid/Grid';
import { DUMMY_DATA } from '../constants';

export default {
  title: 'Components/Grid',
  component: Grid,
};

const Template = (args: GridProps) => <Grid {...args} />; // Use the args to pass data and height

export const Default = Template.bind({});

Default.args = {
  height: '500px',
  data: DUMMY_DATA.data,
};
