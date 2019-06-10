import React from 'react';
import './landingCarousel.css'

const LandingCarousel = () => {

  

  return(
    <div className="carousel">
        <img src="../images/electrical.jpg" alt="Electrical" className="carousel-imgs" id="img-1"/>
        <img src="../images/nails.jpg" alt="Metal Work" className="carousel-imgs" id="img-2"/>
        <img src="../images/woodpile.jpg" alt="Wood" className="carousel-imgs" id="img-3"/>
    </div>
  )
};

export default LandingCarousel;