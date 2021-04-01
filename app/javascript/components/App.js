import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Airline from './Airline/Airline';
import Airlines from './Airlines/Airlines';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Airlines} />
      <Route path="/airlines/:slug" component={Airline} />
    </Switch>
  );
};

export default App;
