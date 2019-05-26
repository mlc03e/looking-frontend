import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DepartmentsContainer extends Component {

  goToCategory=()=> {


  }
  render() {
    console.log(this.props.departments);

    return (
      <div>
        <ul>
          {this.props.categories.map(c =>  <Link to= {`/${this.props.departments.name}/${c.name}`}>{`${c.name}`}</Link>)}
        </ul>

      </div>
    );
  }

}
// <Link to= {`/${this.props.categories}/${names}`}>{`${names}`}</Link>
export default DepartmentsContainer;
