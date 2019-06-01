import React, { Component } from 'react';
import DepartmentsContainer from './DepartmentsContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BackgroundImgs from './BackgroundImgs'

class Navbar extends Component {
  state= {
    showWomen: false,
    showMen: false,
    showAccessories: false,

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
        <Link to= '/' style={{fontSize: "50px", color: "#000000", textDecoration: 'none' }}> Home </Link>
        <div className='women'>
          <Link to= "/Women's" style={{fontSize: "50px", color: "#000000", textDecoration: 'none' }} onMouseEnter= {this.womenMouseOver} onMouseLeave= {this.categoriesMouseLeave}> Womens </Link>
          {this.state.showWomen && <DepartmentsContainer departments={this.props.departments[0]} categories={categories[0]}/>}
        </div>
        <div className='men'>
          <Link to= "/Men's" style={{fontSize: "50px", color: "#000000", textDecoration: 'none' }} onMouseEnter= {this.menMouseOver} onMouseLeave= {this.categoriesMouseLeave}> Mens </Link>
          {this.state.showMen && <DepartmentsContainer departments={this.props.departments[1]} categories={categories[1]}/>}
        </div>
        <div className= 'accessoies'>
          <Link to= "/Accessories" style={{fontSize: "50px", color: "#000000", textDecoration: 'none' }} onMouseEnter= {this.accessoiesMouseOver} onMouseLeave= {this.categoriesMouseLeave}> Accessories </Link>
          {this.state.showAccessories && <DepartmentsContainer departments={this.props.departments[2]} categories={categories[2]}/>}
          
        </div>
      </div>

    );
  }

}

export default Navbar;
