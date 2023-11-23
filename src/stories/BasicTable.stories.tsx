import { JSX } from 'solid-js';
import AddCircleOutlineOutlinedIcon from '@suid/icons-material/AddCircleOutlineOutlined';
import DeleteIcon from '@suid/icons-material/Delete';

import { BasicTable, Props, Row } from '../components/BasicTable/BasicTable';

export default {
  title: 'Components/BasicTable',
  component: BasicTable,
};

const Template: (args: Props) => JSX.Element = (args) => (
  <BasicTable {...args} />
);

// Create the actual stories
export const Primary = Template.bind({});

Primary.args = {
  column: [
    {
      name: 'Idea Title',
      key: 'ideaTitle',
      renderCell: (rowData: Row) => rowData.ideaTitle,
    },
    {
      name: 'Reference Link',
      key: 'link',
      renderCell: (rowData: Row) => rowData.link,
    },
    {
      name: 'Uploaded Doc',
      key: 'uploadedDoc',
      renderCell: (rowData: Row) => rowData.uploadedDoc,
    },
    {
      name: 'Upload Doc',
      key: 'uploadDoc',
      renderCell: (rowData: Row) => rowData.uploadDoc,
    },
    {
      name: '',
      key: '#',
      renderCell: () => (
        <DeleteIcon
          sx={{
            color: '#0070A2', // use from theme
            cursor: 'pointer',
            visibility: 'hidden',
            fontSize: 30,
          }}
        />
      ),
    },
  ],
  rows: [
    {
      ideaTitle: 'test',
      link: 'test',
      uploadedDoc: 'test',
      uploadDoc: 'test',
    },
    {
      ideaTitle: 'test',
      link: 'test',
      uploadedDoc: 'test',
      uploadDoc: 'test',
    },
    {
      ideaTitle: 'test',
      link: 'test',
      uploadedDoc: 'test',
      uploadDoc: 'test',
    },
    {
      ideaTitle: 'test',
      link: 'test',
      uploadedDoc: 'test',
      uploadDoc: 'test',
    },
  ],
  footerRow: [
    {
      renderCell: () => (
        <AddCircleOutlineOutlinedIcon
          sx={{ color: '#0070A2', cursor: 'pointer' }}
        />
      ),
      key: 'ideaTitle',
    },
    {
      key: 'link',
    },
    {
      renderCell: () => 'Total',
      key: 'uploadedDoc',
    },
    {
      renderCell: () => 67456754,
      key: 'uploadDoc',
    },
    {
      key: '#',
    },
  ],
};
