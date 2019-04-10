import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeRoute from './components/HomeRoute';
import ResultsRoute from './components/ResultsRoute';
import ShortlistRoute from './components/ShortlistRoute';

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
          <Route path="/shortlist" render={() => <ShortlistRoute />}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
