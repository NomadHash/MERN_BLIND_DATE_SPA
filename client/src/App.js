import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// React-component
import AppFrame from './components/systems/AppFrame';
import RegisterContainer from './container/RegisterContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegisterContainer} />
        {/* <Route path="/login" component={LoginPage} /> */}
        <Route path="/" component={AppFrame} />
      </Switch>
    </Router>
  );
}

export default App;
