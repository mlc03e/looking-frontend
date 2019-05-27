import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import DepartmentsContainer from './DepartmentsContainer'

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Department from './Department'

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
    const departmentNames = this.state.departments.map(d => d.name)
    console.log(departmentNames);
    return (
      <div className="App">
        <>
          <Route path="/" component={()=><Navbar departments={this.state.departments}/>}/>
          <Route path="/Women's" exact component={Department}/>

        </>
      </div>
    );
  }
}

export default App;
