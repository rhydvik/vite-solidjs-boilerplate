import { A } from '@solidjs/router';
import { Match, Suspense, Switch, createEffect, createSignal } from 'solid-js';
import { Grid } from '@suid/material';

import { printLog } from '../../utils/utils';
import { OrderPageHeader } from '../order/components/orderPageHeader/OrderPageHeader';
import {
  BasicModal,
  Button,
  Notification,
  LTLQuote,
  Card,
  TabsComponent,
} from '../../components';

type Office = {
  name: string;
  location: string;
};

export default function Offices() {
  const [data, setData] = createSignal<Office[]>([]);
  const [loading, setLoading] = createSignal(true);
  const [showModal, setShowModal] = createSignal(false);
  const [activeTab, updateActiveTab] = createSignal(0);

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
    } catch (err: unknown) {
      printLog('Error fetching data');
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
          <Card startTitle="Card Info" endTitle="Filter Date" raised>
            Card1
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card startTitle="Card Info" endTitle="Filter Date" raised>
            Card2
          </Card>
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
        >
          <div>Modal Content</div>
        </BasicModal>
      )}
      <Notification type="warning">Warning Message</Notification>
      <LTLQuote />
      <TabsComponent
        activeTab={activeTab()}
        tabs={[
          'CROSS COUNTRY FREIGHT SERVICE INC.$2,1500.00',
          'asddd',
          'sssssss',
          'akash',
          'pandey',
          'shaktiman',
          'ssssssss',
          'ssssdffsfs',
        ]}
        onTabClick={(index: number) => updateActiveTab(index)}
      />
      <Suspense fallback={<div class="loader">Loading...</div>}>
        <Switch>
          <Match when={activeTab() === 0}>
            <div>Tab 0</div>
          </Match>
          <Match when={activeTab() === 1}>
            <div>Tab 1</div>
          </Match>
          <Match when={activeTab() === 2}>
            <div>Tab 3</div>
          </Match>
          <Match when={activeTab() > 2}>
            <div>Tab 4+</div>
          </Match>
        </Switch>
      </Suspense>
    </div>
  );
}
