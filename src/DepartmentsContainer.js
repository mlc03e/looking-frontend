import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DepartmentsContainer extends Component {

  goToCategory=()=> {


  }
  render() {
    console.log(this.props.categories);

    return (
      <div>
        <ul>
          {this.props.categories.map(c =>  <Link to= {`/${c.name}`}>{`${c.name}`}</Link>)}
        </ul>

      </div>
    );
  }

}

export default DepartmentsContainer;
