import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import DepartmentsContainer from './DepartmentsContainer'
import BackgroundImgs from './BackgroundImgs'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Womens from './Womens'
import Mens from './Mens'

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
          <Route path="/Women's" exact component={()=><Womens categories={this.state.departments[0]}/>}/>
          <Route path="/Men's" exact component={()=><Womens categories={this.state.departments[1]}/>}/>
          <Route path="/Home" exact component={BackgroundImgs}/>
        </>
      </div>
    );
  }
}

export default App;
