export const styles = {
  container: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    height: '100vh',
    'max-width': '100vw',
    'margin-top': '40px',
  },
  addressContainer: {
    display: 'grid',
    'grid-template-columns': '1fr 1fr',
    'grid-gap': '10px',
    border: '1px solid #ccc',
    padding: '12px 24px',
    margin: '12px 0',
    'border-radius': '5px',
  },
  form: {
    width: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    'border-radius': '8px',
    'background-color': '#f5f5f5',
  },
  label: {
    display: 'block',
    'margin-bottom': '5px',
    'font-weight': 'bold',
  },
  input: {
    width: '100%',
    padding: '8px 2px',
    margin: '5px 0',
    'border-radius': '5px',
    border: '1px solid #ccc',
  },
  error: {
    color: 'red',
    'font-size': '0.8rem',
    margin: '5px 0',
  },
  button: {
    'background-color': 'blue',
    color: 'white',
    padding: '10px 15px',
    'border-radius': '5px',
    border: 'none',
    cursor: 'pointer',
  },
  tabsContainer: {
    display: 'flex',
    margin: '10px 0',
  },
  tab: {
    padding: '10px 15px',
    'border-radius': '5px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    'margin-right': '5px',
  },
  tabActive: {
    'background-color': 'blue',
    color: 'white',
  },
};
