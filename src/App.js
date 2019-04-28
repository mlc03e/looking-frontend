import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import DepartmentsContainer from './DepartmentsContainer'
import BackgroundImgs from './BackgroundImgs'

class App extends Component {
  state= {
    departments: []
  }
  componentDidMount () {
    fetch('http://localhost:3000/api/v1/departments')
    .then(response => response.json())
    .then(departments => this.setState({departments}))
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <DepartmentsContainer departments={this.state.departments}/>
        <BackgroundImgs />
      </div>
    );
  }
}

export default App;
