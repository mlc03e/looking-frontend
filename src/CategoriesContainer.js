import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CategoriesContainer extends Component {

  render() {
    console.log(this.props.categories.id);
    return (
      <div className= "categories">
        {this.props.categories.categories.map(c =><div className= "categorieBox"> <Link to= {`/${this.props.categories.name}/${c.name}`} style={{fontSize: "30px", textDecoration: "none"}}>{`${c.name}`}</Link> </div>)}
      </div>
    );
  }

}

export default CategoriesContainer;
