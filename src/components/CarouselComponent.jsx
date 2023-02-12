import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function CarouselComponent() {
  return (
    <div>
        <Carousel autoPlay={true}>
          <div>
            <img src="https://m.media-amazon.com/images/I/616SqgdNgLL._SX3000.jpg" alt='banner'/>
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/61dCP8bufeL._SX3000.jpg" alt='banner'/>
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/81NTpbZ58lL._SX3000.jpg" alt='banner'/>
          </div>
        </Carousel>
    </div>
  )
}

export default CarouselComponent;