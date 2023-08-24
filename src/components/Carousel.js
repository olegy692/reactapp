import React from "react";

import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselCss.css';
import testImg from "./images/testimg.jpg";
import testImg2 from "./images/testimg2.png";

const images = [
  {
    title: "testImg",
    imgSrc: testImg,
    alt: "test image",
    description: "this is a test image",
  },
  {
    title: "testImg",
    imgSrc: testImg2,
    alt: "test image",
    description: "this is a test image",
  },
];
function CarouselSection() {
  return (
    <div className="container-fluid" style={{ padding: 5, margin: 0, backgroundColor: 'orange', position: "relative", overflow: "hidden", display: "inline-block" }}>
      <div className="row"  >
        <div className="col-md-8" style={{ padding: 15, backgroundColor: 'red' }}>
          <div className="col-md-8 mx-auto" style={{ overflow: 'hidden'}}>
            <Carousel>
              {images.map((image, index) => (
                <Carousel.Item key={index} interval={1500}>
                  <img
                    className="d-block w-100"
                    src={image.imgSrc}
                    alt={image.alt}
                    style={{ maxHeight: '100%', objectFit: 'cover' }}
                  />
                  <Carousel.Caption>
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="text-area col-md-4" style={{ padding: 15, backgroundColor: 'blue', color: 'white' }}>
          <h3>Static Text</h3>
          <p>This text remains fixed while images slide.</p>
        </div>
      </div>
    </div>
  );
}

export default CarouselSection;
