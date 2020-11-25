import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LobbyContainer from './container/LobbyContainer';
import InfoContainer from './container/InfoContainer';
import LandingPage from './components/systems/LandingPage';
import Background from './components/systems/background/Background';
import Agreement from './components/systems/user_agreement/Agreement';
function App() {
  return (
    <>
      <Background />
      <Router>
        <Switch>
          <Route path="/lobby" component={LobbyContainer} />
          <Route path="/enterInfo" component={InfoContainer} />
          <Route path="/agreement" component={Agreement} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
