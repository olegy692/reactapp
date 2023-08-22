import React from "react";
import { Carousel, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselCss.css';



function CarouselSection() {
    return (
      <Carousel className="fixed-carousel">
        <Carousel.Item>
          <Row className="carousel-row">
          <Col xs={12} md={9}>
              <div className="image-container1">
                <img
                  className="full-size-image"
                  src="https://via.placeholder.com/800x400"
                  alt="First slide"
                />
              </div>
            </Col>
            <Col xs={12} md={3} className="carousel-text">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Col>
           
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="carousel-row">
          <Col xs={12} md={9}>
              <div className="image-container1">
                <img
                  className="full-size-image"
                  src="https://via.placeholder.com/800x400"
                  alt="First slide"
                />
              </div>
            </Col>
            <Col xs={12} md={3} className="carousel-text">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Col>
           
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="carousel-row">
          <Col xs={12} md={9}>
              <div className="image-container1">
                <img
                  className="full-size-image"
                  src="https://via.placeholder.com/800x400"
                  alt="First slide"
                />
              </div>
            </Col>
            <Col xs={12} md={3} className="carousel-text">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Col>
           
          </Row>
        </Carousel.Item>
        {/* Add more Carousel.Item components with similar structure */}
      </Carousel>
    );
  }

  export default CarouselSection;