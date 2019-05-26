import React, { Component } from 'react';
import DepartmentsContainer from './DepartmentsContainer'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends Component {
  state= {
    showWomen: false,
    showMen: false,
    showAccessories: false
  }

womenMouseOver=()=> {
  const womens= this.props.departments.filter(d=> d.name === "Women's")

  // console.log(womens[0].n);
  if (womens[0].name === "Women's") {
   this.setState({showWomen: true})
  }

}
menMouseOver= ()=> {
  const mens= this.props.departments.filter(d=> d.name === "Men's")
   if (mens[0].name=== "Men's") {
   this.setState({showMen: true})
  }
}
accessoiesMouseOver= ()=> {
  const accessoies= this.props.departments.filter(d=> d.name === "Accessories")
   if (accessoies[0].name=== "Accessories") {
   this.setState({showAccessories: true})
  }
}
categoriesMouseLeave=()=> {
  setTimeout(()=>{
    this.setState({showWomen: false})
  }, 2300)
  setTimeout(()=>{
    this.setState({showMen: false})
  }, 2300)
  setTimeout(()=>{
    this.setState({showAccessories: false})
  }, 2300)

}
  render() {
    const categories= this.props.departments.map(d => d.categories)
    console.log(this.props.departments);
    return (

      <div className= 'navBar'>
        <h1> Home </h1>
        <div className='women'>
          <h1 onMouseEnter= {this.womenMouseOver} onMouseLeave= {this.categoriesMouseLeave}> Womens </h1>
          {this.state.showWomen && <DepartmentsContainer departments={this.props.departments[0]} categories={categories[0]}/>}
        </div>
        <div className='men'>
          <h1 onMouseEnter= {this.menMouseOver} onMouseLeave= {this.categoriesMouseLeave}> Mens </h1>
          {this.state.showMen && <DepartmentsContainer departments={this.props.departments[1]} categories={categories[1]}/>}
        </div>
        <div className= 'accessoies'>
          <h1 onMouseEnter= {this.accessoiesMouseOver} onMouseLeave= {this.categoriesMouseLeave}> Accessories </h1>
          {this.state.showAccessories && <DepartmentsContainer departments={this.props.departments[2]} categories={categories[2]}/>}
        </div>
      </div>

    );
  }

}

export default Navbar;
