import React, { Component } from 'react';

class DepartmentsContainer extends Component {

  render() {
    console.log(this.props.departments);
    return (
      <div>
        {this.props.departments.map(department => <h1>{department.name}</h1>)}
      </div>
    );
  }

}

export default DepartmentsContainer;
