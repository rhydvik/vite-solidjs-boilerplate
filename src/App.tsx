import { Router, useRoutes } from '@solidjs/router';
import { ThemeProvider } from '@suid/material';

import theme from './utils/theme';
import {
  CarrierRoute,
  GlobalRoute,
  HomeRoute,
  OfficeRoute,
  OrderRoute,
  SolidRoute,
} from './views';

const routes = [
  HomeRoute,
  OfficeRoute,
  CarrierRoute,
  SolidRoute,
  GlobalRoute,
  OrderRoute,
];

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
