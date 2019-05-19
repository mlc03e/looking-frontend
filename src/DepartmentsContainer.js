import React, { Component } from 'react';

class DepartmentsContainer extends Component {

  render() {
    console.log(this.props.categories[0].map(c => c.name));

    return (
      <div>
        <ul>
          <li>{this.props.categories[0].map(c => `${c.name}`)}</li>
        </ul>

      </div>
    );
  }

}

export default DepartmentsContainer;
