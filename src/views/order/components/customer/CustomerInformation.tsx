import { Card } from '../../../../components';

export const CustomerInformation = () => {
  return (
    <Card startTitle="Customer Information">
      <div class="p-4">
        <div class="flex flex-row justify-between">
          <div>
            <h1 class="text-lg font-bold">Lulu the Customer</h1>
            <div>ORDER SHEET CUSTOMER CONFIRMATION INVOICE</div>
            <div class="text-sm">Available Credit/Credit</div>
            <div>$990,000.99 / $1,000,000.00</div>
            <p>This customer has 3rd Party Billing</p>
            <div>
              <strong>Contact</strong>
              <p>Lulu Freight (Freight)</p>
              <p>Phone: (555)-555-5555</p>
              <p>Email: jamestloyd@gmail.com</p>
              <p>Account Manager: Tiffany Ladish</p>
              <p>Sales Manager: Mike Edmondson</p>
              <p>Order Rep: Mike Dutra [REASSIGN]</p>
              <div>Bid Type: Spot Contract</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
