import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/SignUp" component={SignUp}></Route>
        </Switch>
     </BrowserRouter>
      </div>
    
    );
  }
}

export default App;
