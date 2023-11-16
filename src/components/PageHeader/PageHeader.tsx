import { JSX } from 'solid-js';
import { Box } from '@suid/material';

export interface Props {
  title: string | JSX.Element;
  headerControls?: JSX.Element;
}

const PageHeader = ({ title, headerControls }: Props) => {
  return (
    <Box class="flex flex-row items-center shadow-md justify-between h-24 bg-white p-8">
      <div>{title}</div>
      <Box class="flex justify-end">{headerControls}</Box>
    </Box>
  );
};

export default PageHeader;
