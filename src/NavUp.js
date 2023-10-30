import React from "react";
import img1 from './images/slide1.png';
import img2 from './images/slide2.png';
import img3 from './images/slide3.png';
import img4 from './images/slide4.png';
import Carousel from "react-bootstrap/Carousel";


export default function NavUp() {
  return (
    <Carousel>
                <Carousel.Item interval={1500}>
                    <img src={img1} alt="logo1" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src={img2} alt="logo2" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src={img3} alt="logo3" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src={img4} alt="logo4" className="d-block w-100" />
                </Carousel.Item>
            </Carousel>
  )
}

