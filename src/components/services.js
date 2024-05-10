import React from 'react';
import Navbar from './navbar';
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/services.css"

function ServiceDetails() {
    const { id } = useParams()
    const id_int = parseInt(id)
    return (
        <div className='services_page'>
            <div>
                <Navbar />
            </div>
            <div className='service_details'>
              
                <div className='page_left'>
                    <div className="container">
                        {id == 1 ? <><div className="row">
                            <div className="col-md-6">
                                <h2>Banking and Insurance</h2>
                                <div className="service-image-container">
                                    <img src="https://swisscognitive.ch/wp-content/uploads/2021/07/ai-in-banking-and-insurance-use-cases.jpeg" alt="Service" className="img-fluid" />
                                </div>
                                {/* <p>The standards, regulations, practices, and administrative requirements of the banking and insurance industries are always changing. A cost-controlled structure and new services were added to the banking and insurance industries' portfolios as a result of these shifting needs.
                                        They now want multiskilled resources who are willing to adapt to changes in the industry due to the dynamic and ever-changing conditions in the field.
                                        The greatest HRC acquisition solutions are provided by Ocean Technologies, which will enable you to efficiently and successfully manage your resources
                                    </p> */}
                            </div>
                        </div>
                            <div>
                                <div className="col-md-6">
                                    <div className="service-details">
                                        <p>The standards, regulations, practices, and administrative requirements of the banking and insurance industries are always changing.<br></br> A cost-controlled structure and new services were added to the banking and insurance industries' portfolios as a result of these shifting needs.
                                           <br></br> They now want multiskilled resources who are willing to adapt to changes in the industry due to the dynamic and ever-changing conditions in the field.<br></br>
                                            The greatest HRC acquisition solutions are provided by Ocean Technologies, which will enable you to efficiently and successfully manage your resources
                                        </p>
                                    </div>
                                </div>
                            </div></> : <></>}

                    </div>
                </div>
                <div className='page_right'>
                    <div className='dropdown_content'>
                        <li>
                        <a href="/service/1">Banking & Insurance</a></li>
                        <li>
                        <a href="/service/2">Financial Services</a></li>
                        <li>
                        <a href="/service/3">Airlines & Automobiles</a></li>
                        <li>
                        <a href="/service/4">Education</a></li>
                        <li>
                        <a href="/service/5">Engineering</a></li>
                        <li>
                        <a href="/service/6">Technology & Telecom</a></li>
                        <li>
                        <a href="/service/7">Retail & Consumer services</a></li>
                        <li>
                        <a href="/service/8">New Application Development</a></li>
                        <li>
                        <a href="/service/9">Manufacturing</a></li>
                        <li>
                        <a href="/service/10">Careers</a></li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetails;
