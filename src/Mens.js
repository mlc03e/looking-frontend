import React, { Component } from 'react';

class Mens extends Component {

  render() {
    console.log(this.props.categories.id);
    return (
      <div className= "categories">
        {this.props.categories.categories.map(c =><div className= "categorieBox"> {c.name} </div>)}
      </div>
    );
  }

}

export default Mens;
