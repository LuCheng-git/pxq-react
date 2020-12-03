
import React, { Component,Suspense } from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import routers from './routers/index';

function App() {
  return (
    <Router>
      
        <Suspense fallback={<h1>loading..</h1>}>
        <Switch>
      {
        routers.map(route => (
          <Route key={route.path} {...route}></Route>
        ))
      }
      <Redirect to="/"></Redirect>
      </Switch>
      </Suspense>
      
      
    </Router>
  );
}

export default App;
