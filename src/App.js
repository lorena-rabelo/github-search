import React from 'react';
import Home from '../src/pages/Home';
import Result from '../src/pages/Result';
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/result" render={props => <Result {...props} />} />
      </Switch>
    </div>
  );
}

export default App;