import type { Component } from 'solid-js';
import { Router, Route, Routes } from "@solidjs/router"
import { Home, Offices } from './views';


const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/offices" component={Offices} /> 
      </Routes>
    </Router>
  );
};

export default App;
