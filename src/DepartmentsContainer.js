import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DepartmentsContainer extends Component {

  goToCategory=()=> {
    console.log('hi');

  }
  render() {
    console.log(this.props.categories);

    return (
      <div>
        <ul>
          {this.props.categories.map(c => <li onClick={this.goToCategory}>{`${c.name}`}</li>)}
        </ul>

      </div>
    );
  }

}

export default DepartmentsContainer;
