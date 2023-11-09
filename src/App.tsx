import { Router, useRoutes } from '@solidjs/router';

import { CarrierRoute, HomeRoute, OfficeRoute, SolidRoute } from './views';

const routes = [HomeRoute, OfficeRoute, CarrierRoute, SolidRoute];

function App() {
  const RoutesComponent = useRoutes(routes);
  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
}

export default App;
