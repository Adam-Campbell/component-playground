import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeRoute from './components/HomeRoute';
import ResultsRoute from './components/ResultsRoute';

import BusinessFactory from './datagen/BusinessFactory';

window.businessFactory = new BusinessFactory();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <HomeRoute />} />
          <Route 
            path="/results/:service/:locale" 
            render={({ match }) => (
              <ResultsRoute 
                currentSearchService={match.params.service}
                currentSearchLocation={match.params.locale}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;




/*

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <YellLogoFull src={YellLogo} alt="The Yell logo" />
          <LoginLink href="#">
            <FontAwesomeIcon icon={faUserCircle} />
            Log in
            <FontAwesomeIcon icon={faAngleRight} />
          </LoginLink>
        </Header>
        <main className="app-main">
          <BusinessCard businessId="a1" />
          <BusinessCard businessId="b2" />
        </main>
      </div>
    );
  }
}



*/
