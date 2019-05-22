import React, { Component } from 'react';

class DepartmentsContainer extends Component {

  render() {
    console.log(this.props.categories);

    return (
      <div>
        <ul>
          {this.props.categories.map(c => <li>`${c.name}`</li>)}
        </ul>

      </div>
    );
  }

}

export default DepartmentsContainer;
