// src/stores/store.ts
import { createStore, produce } from 'solid-js/store';

import { fetchOffices } from './services';
import { Office } from './types';

type OfficesState = {
  offices: Office[];
  isLoading: boolean;
  isError: boolean;
};
/*eslint-disable*/

const [officesStore, setOfficesStore] = createStore<OfficesState>({
  offices: [],
  isLoading: true,
  isError: false,
});

async function fetchAndSetOffices() {
  try {
    const offices: Office[] = await fetchOffices();
    setOfficesStore(
      produce((draft) => {
        draft.offices = offices;
        draft.isLoading = false;
      }),
    );
  } catch (error) {
    setOfficesStore(
      produce((draft) => {
        draft.isError = true;
        draft.isLoading = false;
      }),
    );
  }
}

export { officesStore, fetchAndSetOffices };
