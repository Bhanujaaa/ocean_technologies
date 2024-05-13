import React from 'react';
import Navbar from './navbar'; // Assuming you have a Navbar component
import '../styling/about_us.css'

const AboutUsPage = () => {
    return (
        <div className="about-us-page">
            <Navbar />
            <div className="content">
                <h1>About Us</h1>
                <p>Software development, process outsourcing, and corporate consulting are all offered globally by Ocean Technologies, a company that is prepared to serve small, medium, and large businesses as well as government agencies in the fields of manufacturing, banking and finance, education, insurance, healthcare, medical & wellness, multimedia & entertainment, real estate, retail stores, travel, and hospitality.</p>
                <p>We are here to provide top-notch services in project management, application development, staffing, workforce management, IT consulting, outsourcing, and business consulting, among many other areas.</p>
                <p>Our only goal is to maximize client returns through offshoring and outsourcing. Our vast experience encompasses both real-time management of sizable IT applications and high-end services related to packaged corporate applications.</p>
                <div className="vision">
                    <h2>Vision</h2>
                    <p>
                        With its advanced technological platforms, real-time software environment models, and utilization of pertinent tools, techniques, and applications, Ocean Technologies is well-positioned to provide IT consulting services. To fulfill its mission, we prioritize the following:
                    </p>
                    <ul>
                        <li>To offer superior IT development and consulting services</li>
                        <li>To supply complete assistance with IT integrations, implementations, and upkeep</li>
                        <li>To offer cutting-edge tools and apps to create solutions and guarantee 100%</li>
                        <li>To assist customers in improving the performance of their businesses</li>
                    </ul>
                </div>
                <div className="mission">
                    <h2>Mission</h2>
                    <p>
                        Our vision is to develop into a fully customized IT service provider that is dedicated to exceeding client expectations by providing a cutting-edge array of price-effective, market-driven services and support that meet the highest standards of quality.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUsPage;
