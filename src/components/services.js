import React from 'react';
import Navbar from './navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/services.css"

function ServiceDetails() {
    return (
        <div className='services_page'>
            <div>
                <Navbar />
            </div>
            <div className='service_details'>
            <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2>Banking and Insurance</h2>
            <div className="service-image-container">
              <img src="https://swisscognitive.ch/wp-content/uploads/2021/07/ai-in-banking-and-insurance-use-cases.jpeg" alt="Service" className="img-fluid" />
            </div>
            {/* <img src="https://swisscognitive.ch/wp-content/uploads/2021/07/ai-in-banking-and-insurance-use-cases.jpeg" alt="Service" className="img-fluid" /> */}
          </div>
          </div>
          <div>
          <div className="col-md-6">
          <div className="service-details">
              <h2>Service Title</h2>
              <p>Service details description goes here...</p>
            </div>
          </div>
        </div>
      </div>
            </div>
        </div>
    );
}

export default ServiceDetails;
