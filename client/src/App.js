import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// React-component
import LandingPage from './components/systems/LandingPage';
import LoginPage from './components/systems/LoginPage';
import RegisterContainer from './container/RegisterContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegisterContainer} />
        {/* <Route path="/login" component={LoginPage} /> */}
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
