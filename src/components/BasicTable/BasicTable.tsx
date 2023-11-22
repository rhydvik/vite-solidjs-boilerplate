import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@suid/material';
import { Component, For, JSXElement } from 'solid-js';

export type Row = Record<string, string>;

export type Column = {
  name: string;
  key: string;
  renderCell?: (arg?: Row) => string | JSXElement;
  minWidth?: number;
  textAlign?:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent';
};

export type FooterType = {
  key: string;
  renderCell?: (arg?: FooterType) => string | JSXElement;
  textAlign?:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent';
  minWidth?: number;
};

export interface Props {
  column: Column[];
  rows: Row[];
  footerRow: FooterType[];
}

export const BasicTable: Component<Props> = (props) => {
  const headers = (array: Column[]) => {
    return (
      <For each={array}>
        {(item) => (
          <TableCell
            sx={{
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '24px',
              letterSpacing: '0.17px',
              color: '#000000', // use from theme
            }}
          >
            {item.name}
          </TableCell>
        )}
      </For>
    );
  };

  const footers = (footerArray: FooterType[]) => {
    return (
      <For each={footerArray}>
        {(item) => (
          <TableCell
            sx={{
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '20.02px',
              letterSpacing: '0.17px',
              color: '#000000', // use from theme
            }}
          >
            {item.renderCell ? item.renderCell(item) : ''}
          </TableCell>
        )}
      </For>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead class="head">
          <TableRow>{headers(props.column)}</TableRow>
        </TableHead>
        <TableBody>
          <For each={props.rows}>
            {(rowItem) => (
              <TableRow
                sx={{
                  '&:hover': {
                    '& .MuiSvgIcon-root': {
                      visibility: 'visible',
                    },
                  },
                }}
              >
                <For each={props.column}>
                  {(columnItem) => (
                    <TableCell
                      sx={{
                        textAlign: columnItem.textAlign
                          ? columnItem.textAlign
                          : 'left',
                        minWidth: columnItem.minWidth ?? columnItem.minWidth,
                        fontSize: 14,
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '20.02px',
                        letterSpacing: '0.17px',
                        color: '#000000', // use from theme
                        borderBottom:
                          '1px solid var(--divider, rgba(0, 0, 0, 0.12))',
                      }}
                    >
                      {columnItem.renderCell
                        ? columnItem.renderCell(rowItem)
                        : rowItem[columnItem.key]}
                    </TableCell>
                  )}
                </For>
              </TableRow>
            )}
          </For>
        </TableBody>
        <TableFooter>
          <TableRow>{footers(props.footerRow)}</TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
