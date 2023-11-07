import { render } from '@solidjs/testing-library';
import { describe, it } from 'vitest';
import '@testing-library/jest-dom';

import App from '../App';

describe('App', () => {
  it('should render the app', () => {
    render(() => <App />);
    // expect(getByText('Learn Solid')).toBeInTheDocument();
  });
});
