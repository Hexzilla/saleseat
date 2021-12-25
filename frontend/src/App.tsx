import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Help from './pages/Help';
import './App.css';

function App() {
  return (
    <MainLayout>
      <Router>
        <Switch>
          <Route path="/help" component={Help} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </MainLayout>
  );
}

export default App;
