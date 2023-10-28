import { A } from '@solidjs/router';
import { createEffect, createSignal } from 'solid-js';
import { AxiosResponse } from 'axios';

import { printLog } from '../../utils/utils';

type Office = {
  name: string;
  location: string;
};

export default function Offices() {
  // const [data, setData] = createSignal<Office[]>([]);
  // const [error, setError] = createSignal({ message: 'some' });
  const [loading, setLoading] = createSignal(true);

  createEffect(async () => {
    try {
      const response = await fetch('/api/data');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result: AxiosResponse<Office[]> = await response.json();
      printLog(result);
      // setData(result);
      setLoading(false);
    } catch (err) {
      // setError(err);
      setLoading(false);
    }
  });

  if (loading()) return <div>Loading...</div>;
  // if (error()) return <div>Error: {error().message}</div>;

  return (
    <div>
      <h1>Offices</h1>
      <A href="/">Home</A>
    </div>
  );
}
