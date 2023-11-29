import {
  Card,
  Notification,
  TextField,
  Checkbox,
} from '../../../../components';

export const DriverAndTruckDetails = () => {
  return (
    <Card startTitle="Driver and Truck Details">
      <Notification type="warning">
        This customer requires tracking.
      </Notification>
      <div class="flex pt-5">
        <div class="flex-grow mr-4">
          <TextField
            label="Driver Name"
            placeholder="Enter Driver Name"
            variant="outlined"
            id="driverNametxt"
          />
        </div>
        <div class="flex-grow mr-4">
          <TextField
            label="Driver Phone"
            placeholder="Enter Driver Phone"
            variant="outlined"
            id="driverPhonext"
          />
        </div>
        <div class="flex-grow mr-4">
          <Checkbox label="Enable Tracking" />
        </div>
        <div class="flex-grow mr-4">
          <TextField
            label="Truck Number"
            placeholder="Enter Truck Number"
            variant="outlined"
            id="truckNumberxt"
          />
        </div>
        <div class="flex-grow">
          <TextField
            label="Trailer Number"
            placeholder="Enter Trailer Number"
            variant="outlined"
            type="number"
            id="trailerNumberxt"
          />
        </div>
      </div>
    </Card>
  );
};
