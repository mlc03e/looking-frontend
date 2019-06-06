import React, { Component } from 'react';

class BackgroundImgs extends Component {
  // state= {
  //   active
  // }

  render() {
    return (
      <div id="carouselExampleInterval" className="carousel-slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="500">
            <img src="https://static1.squarespace.com/static/5442b6cce4b0cf00d1a3bef2/t/59c2f785c534a5cca7be265a/1505949689848/" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" data-interval="500">
            <img src="https://i.pinimg.com/474x/32/d1/87/32d187bae2e55fa8398f0a2f0b2b7359--fashion-shoot-fashion-beauty.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" data-interval="500">
            <img src="https://www.nadjapollack.com/large/Nadja_Pollack_Kids_fashion_photographer_Amsterdam_girl_art_black_hair_blouse.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>



    );
  }

}

export default BackgroundImgs;
