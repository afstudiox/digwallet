import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import { GlobalStyle } from './styles/global';

class App extends Component {
  render() {
    return (
      <>
        < GlobalStyle />
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/carteira" component={ Wallet } />
        </Switch>
      </>
    );
  }
}

export default App;
