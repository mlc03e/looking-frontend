import React, { Component } from 'react';
import DepartmentsContainer from './DepartmentsContainer'

class Navbar extends Component {
  state= {
    showCategories: false
  }

categoriesMouseOver=()=> {
  this.setState({showCategories: true})
}
categoriesMouseLeave=()=> {
  this.setState({showCategories: false})
}
  render() {
    const categories= this.props.departments.map(d => d.categories)
    console.log(categories);
    return (
      <div className= 'navBar'>
        <h1> Home </h1>
        <div className='women'>
          <h1 onMouseEnter= {this.categoriesMouseOver} onMouseLeave= {this.categoriesMouseLeave}> Womens </h1>
          {this.state.showCategories && <DepartmentsContainer categories={categories[0]}/>}
        </div>
        <div className='men'>
          <h1 onMouseEnter= {this.categoriesMouseOver} onMouseLeave= {this.categoriesMouseLeave}> Mens </h1>
          {this.state.showCategories && <DepartmentsContainer categories={categories[1]}/>}
        </div>

        <h1> Accessories </h1>
      </div>
    );
  }

}

export default Navbar;
