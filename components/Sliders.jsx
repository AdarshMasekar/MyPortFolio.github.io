import React from 'react'

import ExpCard from "./ExpCard.js";
import Slider from "react-slick";

const Sliders = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000
      };
  return (
   <Slider {...settings} >
         <ExpCard/>
         <ExpCard/>

   </Slider>
  )
}

export default Sliders
