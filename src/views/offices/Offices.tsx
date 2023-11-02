/* eslint-disable  */
import { A } from '@solidjs/router';
import { createEffect, onMount } from 'solid-js';

import { printLog } from '../../utils/utils';
import { BasicModal } from '../../components';
import { OfficeState } from '../../store';
export default function Offices() {
  
  // this kind of conditions messes up with solid reactivity
  // if (loading()) {
  //   return <p>Loading...</p>;
  // }
  const { fetchAndSetOffices, officesStore: { offices, isLoading } } = OfficeState;

  onMount(() => {
    OfficeState.fetchAndSetOffices();
  });

  return (
    <div>
      <h1>Offices</h1>
      <A href="/">Home</A>
      {isLoading && <p>Loading...</p>}
      <ul>
        {offices.map((item:any) => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <BasicModal open={true} title="Modal Title" />
    </div>
  );
}
