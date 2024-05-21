import React from 'react';
import Navbar from './navbar'; // Assuming you have a Navbar component
import '../styling/about_us.css'

const AboutUsPage = () => {
    return (
<div className="about-us-page">
            <Navbar />
            <div className="content">
                <h1 className="about-us">About Us</h1>
                <div className="card animate__animated animate__fadeInUp">
                    <p className="animate__animated animate__fadeInLeft">Software development, process outsourcing, and corporate consulting are all offered globally by Ocean Technologies, a company that is prepared to serve small, medium, and large businesses as well as government agencies in the fields of manufacturing, banking and finance, education, insurance, healthcare, medical & wellness, multimedia & entertainment, real estate, retail stores, travel, and hospitality.</p>
                    <p className="animate__animated animate__fadeInLeft">We are here to provide top-notch services in project management, application development, staffing, workforce management, IT consulting, outsourcing, and business consulting, among many other areas.</p>
                    <p className="animate__animated animate__fadeInLeft">Our only goal is to maximize client returns through offshoring and outsourcing. Our vast experience encompasses both real-time management of sizable IT applications and high-end services related to packaged corporate applications.</p>
                </div>
                <div className="vision card animate__animated animate__fadeInUp">
                    <h2 className="animate__animated animate__fadeInLeft">Vision</h2>
                    <p className="animate__animated animate__fadeInLeft">
                        With its advanced technological platforms, real-time software environment models, and utilization of pertinent tools, techniques, and applications, Ocean Technologies is well-positioned to provide IT consulting services. To fulfill its mission, we prioritize the following:
                    </p>
                    <ul>
                        <li className="animate__animated animate__fadeInLeft">To offer superior IT development and consulting services</li>
                        <li className="animate__animated animate__fadeInLeft">To supply complete assistance with IT integrations, implementations, and upkeep</li>
                        <li className="animate__animated animate__fadeInLeft">To offer cutting-edge tools and apps to create solutions and guarantee 100%</li>
                        <li className="animate__animated animate__fadeInLeft">To assist customers in improving the performance of their businesses</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutUsPage;
