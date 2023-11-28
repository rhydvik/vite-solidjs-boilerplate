import KeyboardArrowLeftIcon from '@suid/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@suid/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowLeftIcon from '@suid/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@suid/icons-material/KeyboardDoubleArrowRight';
import { FormControl, Grid, MenuItem } from '@suid/material';
import Select, { SelectChangeEvent } from '@suid/material/Select';
import { GridOptions } from 'ag-grid-community';
import { Component, For } from 'solid-js';

import { TextField } from '../../TextField';
import { Typography } from '../../Typography';

type PaginationProps = {
  gridOptions: GridOptions;
  total: number;
  pageLimit: number;
  pageNumber: number;
  length: number;
  showingCount: { start: number; end: number };
};

const pageSizes = [
  {
    label: 'Show 10',
    value: 10,
  },
  {
    label: 'Show 25',
    value: 25,
  },
  {
    label: 'Show 50',
    value: 50,
  },
  {
    label: 'Show 100',
    value: 100,
  },
];

const Pagination: Component<PaginationProps> = (props: PaginationProps) => {
  const handlePageLimitChange = (event: SelectChangeEvent) => {
    props.gridOptions.api!.paginationSetPageSize(Number(event.target.value));
  };

  const goToNextPage = () => props.gridOptions.api!.paginationGoToNextPage();

  const goToPreviousPage = () =>
    props.gridOptions.api!.paginationGoToPreviousPage();

  const jumpFivePage = () => props.gridOptions.api!.paginationGoToPage(5);

  const goBackFivePage = () =>
    props.gridOptions.api!.paginationGoToPage(
      props.gridOptions.api!.paginationGetCurrentPage() - 5,
    );
  return (
    <Grid
      container
      justifyContent="space-between"
      class="bg-white p-2 flex-wrap"
    >
      <Grid class="flex items-center">
        <Typography variant="caption" component="p">
          Showing {props.showingCount.start} to {props.showingCount.end} of{' '}
          {props.length}
        </Typography>
      </Grid>
      <Grid class="flex" gap={2}>
        <Grid class="flex items-center" gap={0.5}>
          <KeyboardDoubleArrowLeftIcon
            onClick={goBackFivePage}
            class="text-gray-300 cursor-pointer"
          />
          <KeyboardArrowLeftIcon
            onClick={goToPreviousPage}
            class="text-gray-300 cursor-pointer"
          />
          <Typography
            variant="caption"
            component="p"
            sxProps={{
              fontWeight: 'bold',
              width: 'max-content',
              display: 'flex',
              gap: '5px',
            }}
          >
            <span class="text-gray-600">Page</span>
            {props.pageNumber} of {props.total}
          </Typography>
          <KeyboardArrowRightIcon
            onClick={goToNextPage}
            class="text-gray-300 cursor-pointer"
          />
          <KeyboardDoubleArrowRightIcon
            onClick={jumpFivePage}
            class="text-gray-300 cursor-pointer"
          />
        </Grid>
        <Grid container gap={1} alignItems="center">
          <Typography variant="caption" component="p">
            Go to Page :
          </Typography>
          <TextField
            variant="standard"
            type="number"
            id="pageNumberId"
            label=""
          />
        </Grid>
        <FormControl
          variant="standard"
          sx={{
            minWidth: 100,
          }}
        >
          <Select
            value={props.pageLimit}
            onChange={handlePageLimitChange}
            label="pageLimit"
          >
            <For each={pageSizes}>
              {(pageSize) => (
                <MenuItem value={pageSize.value}>{pageSize.label}</MenuItem>
              )}
            </For>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Pagination;
