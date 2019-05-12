import React, { Component } from 'react';

class Navbar extends Component {
  state= {
    showWomen: false
  }

womenMouseOver=()=> {
  this.setState({showWomen: true})
}
womenMouseLeave=()=> {
  this.setState({showWomen: false})
}
  render() {
    return (
      <div className= 'navBar'>
        <h1> Home </h1>
        <div className='women'>
          <h1 onMouseEnter= {this.womenMouseOver} onMouseLeave= {this.womenMouseLeave}> Womens </h1>
          {this.state.showWomen && <ul><li>Shirts </li><li>Pants </li></ul>}
        </div>
        <h1> Mens </h1>
        <h1> Accessories </h1>
      </div>
    );
  }

}

export default Navbar;
