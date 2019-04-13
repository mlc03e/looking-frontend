import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state= {
    departments: []
  }
  componentDidMount () {
    fetch('http://localhost:3000/api/v1/departments', {mode: 'cors'})
    .then(response => response.json())
    .then(departments => console.log(departments))
  }
  render() {
    return (
      <div className="App">
        <h1>Looking</h1>

      </div>
    );
  }
}

export default App;
