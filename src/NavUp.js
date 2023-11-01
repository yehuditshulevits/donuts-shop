import React from "react";
import "./NavUp.css";
import img1 from './images/logo.png';
import img2 from './images/slide1.jpg';
import img3 from './images/slide2.jpg';
import img4 from './images/slide3.webp';
import Carousel from "react-bootstrap/Carousel";


export default function NavUp() {
    return (
        <Carousel >
            <Carousel.Item interval={1500}>
                <img src={img1} alt="logo1" className="d-block w-100" style={{ width: '100%', height:'400px', display: "inline-block", margin: 5 , cursor:'pointer'}} />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img src={img2} alt="logo2" className="d-block w-100" style={{ width: '100%', height:'400px', display: "inline-block", margin: 5 , cursor:'pointer'}}/>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img src={img3} alt="logo3" className="d-block w-100" style={{ width: '100%', height:'400px', display: "inline-block", margin: 5 , cursor:'pointer'}}/>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img src={img4} alt="logo4" className="d-block w-100" style={{ width: '100%', height:'400px', display: "inline-block", margin: 5 , cursor:'pointer'}}/>
            </Carousel.Item>
        </Carousel>
    )
}

