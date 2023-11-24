import { MonetizationOnOutlined } from '@suid/icons-material';
import AddCircleOutlineOutlinedIcon from '@suid/icons-material/AddCircleOutlineOutlined';
import DeleteIcon from '@suid/icons-material/Delete';
import { Grid } from '@suid/material';

import { BasicTable, Card } from '../../../../components';
import { Row } from '../../../../components/BasicTable/BasicTable';
import { printLog } from '../../../../utils/utils';

const iconStyles = {
  color: '#0070A2',
  cursor: 'pointer',
};

export const CarrierPayments = () => {
  const addRow = () => printLog('Added Row !!');
  const deleteRow = (id: number | string) => printLog(`${id} Row Deleted !!`);
  const columns = [
    {
      name: 'Date',
      key: 'date',
      renderCell: (rowData: Row) => rowData.date,
    },
    {
      name: 'Description',
      key: 'description',
      renderCell: (rowData: Row) => rowData.description,
    },
    {
      name: 'Reference',
      key: 'reference',
      renderCell: (rowData: Row) => rowData.reference,
    },

    {
      name: 'Amount',
      key: 'amount',
      renderCell: (rowData: Row) => rowData.amount,
    },
    {
      name: 'Payment #',
      key: 'payment',
      renderCell: (rowData: Row) => rowData.payment,
    },

    {
      name: '$',
      key: '#',
      minWidth: 100,
      renderCell: (rowData: Row) => (
        <Grid container gap={1}>
          <MonetizationOnOutlined sx={{ ...iconStyles, fontSize: '1.5rem' }} />
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
      description: 'Fuel Advance',
      reference: '126923002',
      payment: '63633326',
      amount: '$10,000.00',
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
    {
      key: '#',
    },
    {
      renderCell: () => 'Outstanding',
      key: 'Outstanding',
    },
    {
      renderCell: () => '$982.50',
      key: '#',
    },
    {
      renderCell: () => 'Total Paid   $0.00',
      key: '#',
    },
    {
      key: '#',
    },
  ];
  return (
    <Card startTitle="Customer Payments">
      <BasicTable
        column={columns}
        rows={rows}
        footerRow={footerRow}
        footerBorder={false}
      />
    </Card>
  );
};
