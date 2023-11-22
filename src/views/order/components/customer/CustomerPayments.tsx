import DeleteIcon from '@suid/icons-material/Delete';
import AddCircleOutlineOutlinedIcon from '@suid/icons-material/AddCircleOutlineOutlined';

import { Card, BasicTable } from '../../../../components';

type Row = Record<string, string>;

export const CustomerPayments = () => {
  const columns = [
    {
      name: 'Date',
      key: 'date',
      renderCell: (rowData: Row) => rowData.date,
    },
    {
      name: 'Reference',
      key: 'reference',
      renderCell: (rowData: Row) => rowData.reference,
    },
    {
      name: 'Description',
      key: 'description',
      renderCell: (rowData: Row) => rowData.description,
    },
    {
      name: 'Amount',
      key: 'amount',
      renderCell: (rowData: Row) => rowData.amount,
    },
    {
      name: '',
      key: '#',
      renderCell: () => (
        <DeleteIcon
          sx={{
            color: '#0070A2',
            cursor: 'pointer',
            visibility: 'hidden',
            fontSize: 30,
          }}
        />
      ),
    },
  ];

  const rows = [
    {
      date: 'JUN 22 2022',
      reference: '432659336',
      description: 'Lumper at shipper',
      amount: '$10,000.00',
    },
    // Additional rows with similar data
    {
      date: 'JUN 23 2022',
      reference: '432659337',
      description: 'Freight charge',
      amount: '$982.50',
    },
    {
      date: 'JUN 24 2022',
      reference: '432659338',
      description: 'Service fee',
      amount: '$500.00',
    },
    {
      date: 'JUN 25 2022',
      reference: '432659339',
      description: 'Storage',
      amount: '$1,500.00',
    },
  ];

  const footerRow = [
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
  ];

  return (
    <Card startTitle="Customer Payments">
      <div class="p-4">
        <BasicTable column={columns} rows={rows} footerRow={footerRow} />
      </div>
    </Card>
  );
};
