import { Card } from '../../../../components';

export const CarrierPayments = () => {
  return (
    <Card startTitle="Customer Payments" expanded={true} accordion={true}>
      <div class="p-4">
        <div>Date: JUN 22 2022</div>
        <div>Reference: 432659336</div>
        <div>Description: Lumper at shipper</div>
        <div>Amount: $10,000.00</div>
        <div>Total: $10,982.50</div>
      </div>
    </Card>
  );
};
