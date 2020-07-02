import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router,Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Link to='/'>HomePage</Link>
        <Link to='page2'>2</Link>

        <Switch>
          <Route exact path='/' component={() => { return <h1>HomePage works!!!</h1> }} />
          <Route exact Path='/page2' component={() => { return <h1> page 2 works</h1> }} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
