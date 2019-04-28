import React, { Component } from 'react';

class DepartmentsContainer extends Component {

  render() {
    console.log(this.props.departments);
    return (
      <div>
        <h1> Departments </h1>
        {this.props.departments.map(department => <h1>{department.name}</h1>)}

      </div>
    );
  }

}

export default DepartmentsContainer;
