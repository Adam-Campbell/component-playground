import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeRoute from './components/HomeRoute';
import ResultsRoute from './components/ResultsRoute';
import ShortlistRoute from './components/ShortlistRoute';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
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
            <Route path="/shortlist" render={() => <ShortlistRoute />}/>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
