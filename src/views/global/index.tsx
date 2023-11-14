import { globalState } from '../../store';
const ComponentA = () => {
  const buttonStyle = {
    'background-color': 'blue',
    color: 'white',
    padding: '8px 16px',
    border: '1px solid black',
    'border-radius': '4px',
    cursor: 'pointer',
    margin: '10px 0',
  };
  return (
    <div>
      <h2>Component A</h2>
      <p>Global Count: {globalState.globalState.count}</p>
      <button style={buttonStyle} onClick={globalState.incrementCount}>
        Increment Global Count
      </button>
    </div>
  );
};

// Component B
const ComponentB = () => {
  const inputStyle = {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };
  return (
    <div>
      <h2>Component B</h2>
      <p>Global Message: {globalState.globalState.message}</p>
      <input
        type="text"
        value={globalState.globalState.message}
        onInput={(e) =>
          globalState.updateMessage((e.target as HTMLInputElement).value)
        }
        style={inputStyle}
      />
    </div>
  );
};

const Global = () => {
  return (
    <div>
      <ComponentA />
      <ComponentB />
    </div>
  );
};

export const GlobalRoute = {
  path: '/global',
  component: Global,
};
