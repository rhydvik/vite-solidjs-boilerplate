import { Router, useRoutes } from '@solidjs/router';

import { HomeRoute, OfficeRoute } from './views';

const routes = [HomeRoute, OfficeRoute];

function App() {
  const RoutesComponent = useRoutes(routes);
  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
}

export default App;
