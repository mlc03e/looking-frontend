import React, { Component } from 'react';

class Womens extends Component {

  render() {
    console.log(this.props.categories.id);
    return (
      <div>
        {this.props.categories.categories.map(c =><div> {c.name} </div>)} 
      </div>
    );
  }

}

export default Womens;
