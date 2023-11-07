// test-utils.tsx
import { Router } from '@solidjs/router';
import { render } from '@solidjs/testing-library';

const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(() => <Router>{ui}</Router>);
};

export { renderWithRouter };
