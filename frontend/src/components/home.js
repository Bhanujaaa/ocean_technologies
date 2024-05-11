import React from 'react';
import "../styling/navbar.css"
import "../styling/home.css"
import Navbar from './navbar';
import CarouselComponent from './CarouselComponent';

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
                    <div className='home_details'>
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
                    <section id="contact" className="section">
                        <h2 className='home_heading'>Contact Us</h2>
                        <p>Add your Contact Us content here...</p>
                    </section>
                    <section id="services" className="section">
                        <h2 className='home_heading'>Services</h2>
                        <p>Add your Services content here...</p>
                    </section>
                    <section id="industry" className="section">
                        <h2 className='home_heading'>Industry</h2>
                        <p>Add your Industry content here...</p>
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