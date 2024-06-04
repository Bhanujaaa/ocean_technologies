import React from 'react';
import "../styling/navbar.css"
import "../styling/home.css"
import Navbar from './navbar';
import CarouselComponent from './CarouselComponent';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Airlines_Automobiles from "../images/Airlines & Automobiles.jpeg"
import Banking_Insurance from "../images/Banking and Insurance.jpeg"
import Careers from "../images/Careers.png"
import Education from "../images/Education.jpeg"
import Engineering from "../images/Engineering.webp"
import Financial_Services from "../images/Financial Services.avif"
import Manufacturing from "../images/Manufacturing.jpeg"
import New_Application_Developement from "../images/New Application Developement.jpeg"
import Retail_ConsumerServices from "../images/Retail & Consumer services.png"
import Technology_Telecom from "../images/Technology & Telecom.jpeg"
import ContactUs from './contact_us';

const images = [
  { src: Banking_Insurance, alt: 'Service Image 1', overlayText: 'Banking And Insurance' },
  { src: Financial_Services, alt: 'Service Image 2', overlayText: 'Financial Services' },
  { src: Airlines_Automobiles, alt: 'Service Image 3', overlayText: 'Airlines & Automobiles' },
  { src: Education, alt: 'Service Image 4', overlayText: 'Education' },
  { src: Engineering, alt: 'Service Image 5', overlayText: 'Engineering' },
  { src: Technology_Telecom, alt: 'Service Image 6', overlayText: 'Technology & Telecom' },
  { src: Retail_ConsumerServices, alt: 'Service Image 7', overlayText: 'Retail & Consumer services' },
  { src: New_Application_Developement, alt: 'Service Image 8', overlayText: 'New Application Development' },
  { src: Manufacturing, alt: 'Service Image 9', overlayText: 'Manufacturing' },
  { src:Careers, alt: 'Service Image 10', overlayText: 'Careers' },
];

function Home() {
    
    return (
        <div className="App">

            <div>
                <header className="App-header">
                    <Navbar /> {/* Render the Navbar component */}
                    <h1>Ocean Technologies</h1>
                    <p>Your gateway to maritime industry jobs</p>
                </header>
                <main>
                    <CarouselComponent />
                    <br></br>
                    <div className='home_details section'>
                        <h2 className='home_heading'>WHO WE ARE</h2>
                        Ocean Technologies Whether you need services for manufacturing, banking & finance, education, insurance, medical & health care, multimedia & entertainment, real estate, retail stores, travel & hospitality, or any other industry, this global provider of software development, process outsourcing, and corporate consulting is ready to meet your needs.
                    </div>
                    <section id="about" className="section">
                        <h2 className='home_heading'>About Us</h2>
                        <p>Software development, process outsourcing, and corporate consulting are all offered globally by Ocean Technologies, a company that is prepared to serve small, medium, and large businesses as well as government agencies in the fields of manufacturing, banking and finance, education, insurance, healthcare, medical & wellness, multimedia & entertainment, real estate, retail stores, travel, and hospitality.
                            We are here to provide top-notch services in project management, application development, staffing, workforce management, IT consulting, outsourcing, and business consulting, among many other areas.
                            Our only goal is to maximize client returns through offshoring and outsourcing. Our vast experience encompasses both real-time management of sizable IT applications and high-end services related to packaged corporate applications.
                        </p>
                    </section>
                    <section id="services" className="section">
                        <h2 className='home_heading'>Services</h2>
                        <div className="gallery-container">
      <div className="gallery">
        {images.map((image, index) => (
          <div className="image-container" key={index}>
             <Link to={`/service/${index+1}`}>
            <img src={image.src} alt={image.alt} />
            <div className="overlay">{image.overlayText}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
                    </section>
                    <section>
                        {/* <ContactUs/> */}
                    </section>
                    {/* Add more sections as needed */}
                </main>
                <footer>
                    <p>&copy; 2024 Ocean Technologies. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}

export default Home;