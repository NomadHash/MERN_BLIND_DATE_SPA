import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterContainer from './container/RegisterContainer';
import LobbyContainer from './container/LobbyContainer';
import InfoContainer from './container/InfoContainer';
import LandingPage from './components/systems/LandingPage';
import Background from './components/systems/background/Background';

function App() {
  return (
    <>
      <Background />
      <Router>
        <Switch>
          <Route path="/register" component={RegisterContainer} />
          <Route path="/lobby" component={LobbyContainer} />
          <Route path="/enterInfo" component={InfoContainer} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
