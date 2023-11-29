import { Grid as MuiGrid } from '@suid/material';
import { ColDef, GridOptions } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import AgGridSolid from 'ag-grid-solid';
import { Component, createSignal } from 'solid-js';

import Pagination from './components/Pagination';

export type GridProps = {
  data: Record<string, string | number | unknown | boolean>[];
  height: string;
};

const Grid: Component<GridProps> = (props: GridProps) => {
  //Pagination Signals
  const [pagelimit, setPageLimit] = createSignal(10);
  const [pageNumber, setPageNumber] = createSignal(1);
  const [total, setTotal] = createSignal(0);
  const [showingCount, setShowingCount] = createSignal({
    start: 1,
    end: pagelimit(),
  });

  const obj = props.data.length > 0 ? props.data[0] : {};

  const columnDefs: Array<ColDef> = [];

  for (const key in obj) {
    columnDefs.push({
      field: key,
      minWidth: 100,
      resizable: true,
    });
  }

  function printPageDisplayedRows(gridOptions: GridOptions) {
    const rowCount = gridOptions.api!.getDisplayedRowCount();
    const lastGridIndex = rowCount - 1;
    const currentPage = pageNumber() - 1;
    const startPageIndex = currentPage * pagelimit();
    let endPageIndex = (currentPage + 1) * pagelimit() - 1;
    if (endPageIndex > lastGridIndex) {
      endPageIndex = lastGridIndex;
    }
    setShowingCount({
      start: startPageIndex + 1,
      end: endPageIndex + 1,
    });
  }

  function onPaginationChanged(gridOptions: GridOptions) {
    if (gridOptions.api) {
      setPageLimit(gridOptions.api.paginationGetPageSize());
      setPageNumber(gridOptions.api.paginationGetCurrentPage() + 1);
      setTotal(gridOptions.api.paginationGetTotalPages());
      printPageDisplayedRows(gridOptions);
    }
  }

  const gridOptions: GridOptions = {
    defaultColDef: {
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    },
    suppressRowClickSelection: true,
    columnDefs: columnDefs,
    suppressPaginationPanel: true,
    pagination: true,
    paginationPageSize: 10,
    suppressScrollOnNewData: true,
    onPaginationChanged: () => onPaginationChanged(gridOptions),
  };

  return (
    <MuiGrid
      class="ag-theme-alpine"
      sx={{ height: props.height ? props.height : '100%' }}
    >
      <AgGridSolid
        columnDefs={columnDefs}
        rowData={props.data}
        gridOptions={gridOptions}
      />
      <Pagination
        gridOptions={gridOptions}
        pageLimit={pagelimit()}
        pageNumber={pageNumber()}
        total={total()}
        showingCount={showingCount()}
        length={props.data.length}
      />
    </MuiGrid>
  );
};

export default Grid;
