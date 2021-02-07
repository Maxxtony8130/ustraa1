import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.css";
function Slider() {
  return (
    <div className="slider">
      <Carousel indicators={false} controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="https://d1ebdenobygu5e.cloudfront.net/media/banners/resized/webp2/banners-des_1600x500_5.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="https://d1ebdenobygu5e.cloudfront.net/media/banners/resized/webp2/the-end-sale---banner-beard---1600x500_5.webp"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="https://d1ebdenobygu5e.cloudfront.net/media/banners/resized/webp2/banners-des_1600x500-2_13.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
