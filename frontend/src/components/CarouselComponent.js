import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.create.vista.com/api/media/medium/428425046/stock-photo-man-searching-job-internet-looking-job-online-search-button-virtual?token="
          alt="First slide"
          style={{ maxHeight: '400px' }}
        />
        <Carousel.Caption>
          <h3>Find Your Dream Job</h3>
          <p>Search through thousands of maritime industry job listings.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.create.vista.com/api/media/medium/45221957/stock-photo-businessman-choosing-the-right-person?token="
          alt="Second slide"
          style={{ maxHeight: '400px' }}
        />
        <Carousel.Caption>
          <h3>Hire Top Talent</h3>
          <p>Connect with skilled professionals to fill your staffing needs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/600x400"
          alt="Third slide"
          style={{ maxHeight: '600px' }}
        />
        <Carousel.Caption>
          <h3>Streamlined Recruitment Process</h3>
          <p>Efficiently manage job applications and hire the best candidates.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default CarouselComponent;
