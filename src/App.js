
import React, { Component,Suspense } from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import routers from './routers/index';

function App() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<h1>lodaing..</h1>}>
      {
        routers.map(route => (
          <Route key={route.path} {...route}></Route>
        ))
      }
      </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
