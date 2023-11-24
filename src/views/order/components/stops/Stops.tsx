import DeleteIcon from '@suid/icons-material/Delete';
import LocationOn from '@suid/icons-material/LocationOn';
import EventOutlinedIcon from '@suid/icons-material/EventOutlined';
import ArrowCircleUpOutlinedIcon from '@suid/icons-material/ArrowCircleUpOutlined';
import AddCircleOutlineOutlinedIcon from '@suid/icons-material/AddCircleOutlineOutlined';
import { A } from '@solidjs/router';
import { Grid, Stack } from '@suid/material';
import { Edit } from '@suid/icons-material';

import { BasicTable, Card, Typography } from '../../../../components';
import { printLog } from '../../../../utils/utils';

type Row = Record<string, string | number>;

const iconStyles = {
  color: '#0070A2',
  cursor: 'pointer',
};

export const Stops = () => {
  const addRow = () => printLog('Added Row !!');
  const deleteRow = (id: number | string) => printLog(`${id} Row Deleted !!`);
  const editRow = (id: number | string) => printLog(`Edit  ${id} Row !!`);

  const columns = [
    {
      name: 'Date',
      key: 'date',
      minWidth: 180,
      renderCell: (rowData: Row) => (
        <Grid container gap={1} alignItems="center">
          <ArrowCircleUpOutlinedIcon sx={iconStyles} />
          <Typography component="p" variant="inherit">
            {rowData.date}
          </Typography>
          <EventOutlinedIcon sx={iconStyles} />
        </Grid>
      ),
    },
    {
      name: 'Time',
      key: 'time',
      renderCell: (rowData: Row) => rowData.time,
    },
    {
      name: 'Pick/Drop #',
      key: 'pickDrop',
      minWidth: 120,
      renderCell: (rowData: Row) => rowData.pickDrop,
    },
    {
      name: 'Location',
      key: 'location',
      minWidth: 200,
      renderCell: (rowData: Row) => {
        return (
          <Stack spacing={1}>
            <Typography component="p" variant="inherit">
              {rowData.location.address}
            </Typography>
            <Typography component="p" variant="inherit">
              {rowData.location.contactPersonName}
              <br />
              {rowData.location.contactNumber}
            </Typography>
          </Stack>
        );
      },
    },
    {
      name: 'Map',
      key: 'map',
      renderCell: (rowData: Row) => (
        <A href={rowData.map} target="blank">
          <LocationOn sx={iconStyles} />
        </A>
      ),
    },
    {
      name: 'Items',
      key: 'items',
      minWidth: 140,
      renderCell: (rowData: Row) => rowData.items,
    },
    {
      name: 'Stop Instructions',
      key: 'stopInstructions',
      minWidth: 200,
      renderCell: (rowData: Row) => rowData.stopInstructions,
    },
    {
      name: 'Actions',
      key: '#',
      minWidth: 100,
      renderCell: (rowData: Row) => (
        <Grid container gap={1}>
          <Edit
            onClick={() => editRow(rowData.id)}
            sx={{ ...iconStyles, fontSize: '1.5rem' }}
          />
          <DeleteIcon
            onClick={() => deleteRow(Number(rowData.id))}
            sx={{ ...iconStyles, fontSize: '1.5rem' }}
          />
        </Grid>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      date: 'JUN 22 2022',
      time: '9-12:00 Delivery Window',
      pickDrop: '126923002',
      location: {
        address: 'Planet Cookie 3785 Edgemont Drive Chambersburg,PA 17202',
        contactPersonName: 'Jamie Smithers',
        contactNumber: '800-555-1212',
      },
      map: 'http://maps.google.com',
      items: '14 pallets of cookie dough',
      stopInstructions:
        'Ring bill at dock Crew will load for you. Call Jamie with questions.',
    },
    {
      id: 2,
      date: 'JUN 22 2022',
      time: '9-12:00 Delivery Window',
      pickDrop: '126923002',
      location: {
        address: 'Planet Cookie 3785 Edgemont Drive Chambersburg,PA 17202',
        contactPersonName: 'Jamie Smithers',
        contactNumber: '800-555-1212',
      },
      map: 'http://maps.google.com',
      items: '14 pallets of cookie dough',
      stopInstructions:
        'Ring bill at dock Crew will load for you. Call Jamie with questions.',
    },
  ];

  const footerRow = [
    {
      renderCell: () => (
        <AddCircleOutlineOutlinedIcon
          onClick={() => addRow()}
          sx={{ color: '#0070A2', cursor: 'pointer' }}
        />
      ),
      key: 'ideaTitle',
    },
  ];

  return (
    <Card startTitle="Stops">
      <BasicTable
        column={columns}
        rows={rows}
        footerRow={footerRow}
        footerBorder={false}
      />
    </Card>
  );
};
