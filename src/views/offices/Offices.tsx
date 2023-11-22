import { A } from '@solidjs/router';
import { createEffect, createSignal } from 'solid-js';
import { Grid } from '@suid/material';

import { printLog } from '../../utils/utils';
import { OrderPageHeader } from '../order/components/orderPageHeader/OrderPageHeader';
import { BasicModal, Button, Notification, LTLQuote } from '../../components';

type Office = {
  name: string;
  location: string;
};

export default function Offices() {
  const [data, setData] = createSignal<Office[]>([]);
  const [loading, setLoading] = createSignal(true);
  const [showModal, setShowModal] = createSignal(false);

  const toggleModel = () => {
    printLog('toggleModel');
    setShowModal(!showModal());
  };

  async function fetchData() {
    try {
      const response = await fetch('/api/offices');
      const result = (await response.json()) as { offices: Office[] | [] };
      setData(result.offices);
      setLoading(false);
    } catch (err) {
      printLog('Error fetching data', err);
      setLoading(false);
    }
  }

  createEffect(async () => {
    await fetchData();
  });

  return (
    <div>
      <OrderPageHeader />
      {}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card
            startTitle="Card Info"
            endTitle="Filter Date"
            content="Hello"
            raised
          />
        </Grid>
        <Grid item xs={6}>
          <Card
            startTitle="Card Info"
            endTitle="Filter Date"
            content="Hello"
            raised
          />
        </Grid>
      </Grid>
      <h1>Offices</h1>
      <h2>Offices</h2>

      <A href="/">Home</A>
      {loading() && <p>Loading...</p>}
      <ul>
        {data().map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <Button
        variant="outlined"
        label="Open Model"
        onClick={() => toggleModel()}
      />
      {showModal() && (
        <BasicModal
          open={true}
          title="Modal Title"
          handleClose={() => toggleModel()}
        />
      )}
      <Notification type="warning">Warning Message</Notification>
      <LTLQuote />
    </div>
  );
}
