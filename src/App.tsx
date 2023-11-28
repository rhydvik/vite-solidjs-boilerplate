import { Router } from '@solidjs/router';
import { ThemeProvider } from '@suid/material';

import theme from './utils/theme';
import { RouteWrapper } from './Routes';

function App() {
  const RoutesComponent = RouteWrapper();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <RoutesComponent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
