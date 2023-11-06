/* eslint-disable  */
import { A, Link } from '@solidjs/router';
import { createEffect, createSignal, onMount } from 'solid-js';

import { printLog } from '../../utils/utils';
import { BasicModal } from '../../components';
import { OfficeState } from '../../store';
export default function Offices() {
  const [showModal, setShowModal] = createSignal(false);
  // this kind of conditions messes up with solid reactivity
  // if (loading()) {
  //   return <p>Loading...</p>;
  // }
  //Destucturing not possible as the function does not update for solid Js 
  const { fetchAndSetOffices } = OfficeState;

  onMount(() => {
    fetchAndSetOffices();
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
      <Link href="/">Home</Link>
      <BasicModal open={showModal()} title="Modal Title" handleClose={() => setShowModal(false)}/>
    </div>
  );
}
