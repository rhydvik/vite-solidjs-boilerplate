import { Grid } from '@suid/material';

import { Notification } from '../../components';
import {
  AdditionalLoadDetails,
  CarrierInstructions,
  CustomerInformation,
  CustomerPayments,
  DriverAndTruckDetails,
  LoadInformation,
  NewATGOnlyNote,
  PreviousNotes,
  OrderPageHeader,
  Tracking,
  Stops,
  CarrierPayments,
} from './components';
import { CargoValue } from './components/cargoValue';

const Order = () => {
  return (
    <div class="border-2 bg-gray-200 h-screen flex flex-col">
      <div class="h-24 mb-4">
        <OrderPageHeader />
      </div>

      <div class="flex-1 overflow-y-auto p-4">
        <div class="bg-white p-4">
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <div class="">
                <CustomerInformation />

                <CustomerPayments />

                <NewATGOnlyNote />

                <PreviousNotes />
              </div>
            </Grid>
            <Grid item xs={7}>
              <div class="rounded shadow p-4">
                <Notification type="warning">
                  <p class="text-sm">
                    This order is currently in transit and cannot be edited.
                  </p>
                </Notification>

                <Notification type="info">
                  <p class="text-sm">
                    This order is currently in transit and cannot be edited.
                  </p>
                </Notification>

                <LoadInformation />

                <DriverAndTruckDetails />

                <AdditionalLoadDetails />

                <CarrierInstructions />

                <CarrierPayments />

                <Stops />
                <Tracking />
                <CargoValue />
                <DriverAndTruckDetails />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Order;
