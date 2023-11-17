import { createStore, SetStoreFunction } from 'solid-js/store';

interface GlobalState {
  count: number;
  message: string;
}

type GlobalStoreType = [GlobalState, SetStoreFunction<GlobalState>];

// Create a global store
const [globalState, setGlobalState]: GlobalStoreType = createStore<GlobalState>(
  {
    count: 0,
    message: 'Hello, Solid!',
  },
);

// Functions to update global state
const incrementCount = () => {
  setGlobalState((prev) => ({ count: prev.count + 1 }));
};

const updateMessage = (newMessage: string) => {
  setGlobalState((_) => ({ message: newMessage }));
};

export { globalState, incrementCount, updateMessage };
