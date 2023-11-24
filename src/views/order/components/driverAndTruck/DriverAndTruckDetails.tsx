import { Card, Notification } from '../../../../components';

export const DriverAndTruckDetails = () => {
  return (
    <Card startTitle="Driver and Truck Details">
      <Notification type="warning">
        This customer requires tracking.
      </Notification>
      <div class="p-4">
        <div>Comments</div>
        <div>Mooslookmeguntic, ME</div>
        <div>Temp</div>
        <div>
          <div>Angie Agent</div>
          <div>
            Temp good, driver sending BOL when he gets back to his truck.
          </div>
          <div>April 30 2022 2:52 PM</div>
          <div>32 F</div>
        </div>
        <div>
          <div>Angie Agent</div>
          <div>Temp good.</div>
        </div>
        <div>
          <div>Bobbi Frels</div>
          <div>Temp good, truck load on time.</div>
        </div>
      </div>
    </Card>
  );
};
