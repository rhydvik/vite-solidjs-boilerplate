import { A } from '@solidjs/router';
import { createEffect, createSignal } from 'solid-js';

import { printLog } from '../../utils/utils';
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

  // this kind of conditions messes up with solid reactivity
  // if (loading()) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <h1>Offices</h1>
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
