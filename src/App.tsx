import { Router, useRoutes } from '@solidjs/router';

import { CarrierRoute, HomeRoute, OfficeRoute } from './views';

const routes = [HomeRoute, OfficeRoute, CarrierRoute];

function App() {
  const RoutesComponent = useRoutes(routes);
  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
}

export default App;
