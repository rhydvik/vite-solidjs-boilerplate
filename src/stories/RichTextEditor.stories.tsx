import { RichTextEditor } from '../components/RichTextEditor';

export default {
  title: 'Components/RichTextEditor',
  component: RichTextEditor,
};

const Template = () => <RichTextEditor content="Edit me" />;

export const Default = Template.bind({});

Default.args = {};
