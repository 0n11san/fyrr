import React, { Component } from 'react';
import {Button, Card} from 'reactstrap'
import logo from './logo.svg';
import './App.css';
import API from './utils/API'


class App extends Component {
  state = {
    filters: []
  };

  getFilters = () => {
    API.getFilters
    .then(res => this.setState({'filters': res.data}))
    .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
