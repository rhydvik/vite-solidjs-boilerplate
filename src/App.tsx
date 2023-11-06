import { Router, useRoutes } from '@solidjs/router';

import { HomeRoute, OfficeRoute, SolidRoute } from './views';

const routes = [HomeRoute, OfficeRoute, SolidRoute];

function App() {
  const RoutesComponent = useRoutes(routes);
  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
}

export default App;
