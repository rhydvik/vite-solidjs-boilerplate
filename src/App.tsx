import { Router, useRoutes } from '@solidjs/router';

import { Offices, Home } from './views';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/offices',
    component: Offices,
  },
];

function App() {
  const RoutesComponent = useRoutes(routes);
  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
}

export default App;
