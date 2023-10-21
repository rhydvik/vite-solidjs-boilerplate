import { Router, Route, Routes } from '@solidjs/router';

import { Home, Offices } from './views';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/offices" component={Offices} />
      </Routes>
    </Router>
  );
}

export default App;
