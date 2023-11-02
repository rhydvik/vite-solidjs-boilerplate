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
  onMount(() => {
    OfficeState.fetchAndSetOffices();
  });

  return (
    <div>
      <h1>Offices</h1>
      <A href="/">Home</A>
      {OfficeState.officesStore.isLoading && <p>Loading...</p>}
      <ul>
        {OfficeState.officesStore.offices.map((item:any) => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <BasicModal open={true} title="Modal Title" />
    </div>
  );
}
