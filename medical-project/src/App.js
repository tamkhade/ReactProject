import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import './App.css';
import MainRouter from './mainrouter';
import History from './history';

class App extends Component {
  render() {
    return (
      <Router history={History}>
        <MainRouter/>
      </Router>
     
    );
  }
}

export default App;
