import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Search from './components/Search'
import Results from './components/Results'
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
          <Route exact path="/Search" component={Search}></Route>
          <Route exact path="/Results" component={Results}></Route>
        </Switch>
     </BrowserRouter>
      </div>
    
    );
  }
}

export default App;
