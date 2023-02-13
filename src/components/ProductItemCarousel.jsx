import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ProductItemCarousel({first,second,third}) {
  return (
    <div>
        <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
          <div>
            <img src={first} alt='banner'/>
          </div>
          <div>
            <img src={second} alt='banner'/>
          </div>
          <div>
            <img src={third} alt='banner'/>
          </div>
        </Carousel>
    </div>
  )
}

export default ProductItemCarousel;