import { Router, useRoutes } from '@solidjs/router';
import { ThemeProvider } from '@suid/material';

import { CarrierRoute, HomeRoute, OfficeRoute } from './views';
import theme from './utils/theme';

const routes = [HomeRoute, OfficeRoute, CarrierRoute];

function App() {
  const RoutesComponent = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <RoutesComponent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
