import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/AuthPages/Dashboard';
import Terms from '../src/components/Terms'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/" component={Home}></Route>
          <div className="container">
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/Dashboard" component={Dashboard}></Route>
            <Route exact path="/Terms" component={Terms}></Route>
          </div>
        </div>
     </Router>
    );
  }
}

export default App;
