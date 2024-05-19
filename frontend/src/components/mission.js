import React from 'react';
import Navbar from './navbar';
import commitement from "../images/commitment.webp";
import customer from "../images/customer.webp";
import value from "../images/value.webp";
import quality from "../images/Quality.png";
import "../styling/mission.css"


function Mission() {
    return (
        <div className="App">
            <div>
                <Navbar />
            </div>
            <div className="title">
                <h1> Our Mission </h1>
            </div>
            <div className='parent_div'>
                <div className="container">
                    <div className="flip-card commitment">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={commitement} alt="Customization Commitment" />
                                <p><b>Customization Commitment</b></p>
                            </div>
                            <div className="flip-card-back">
                                <p styles="text-align: center;">We dedicate ourselves to becoming a bespoke IT service provider,
                                    tailoring our services to perfectly match each client's unique needs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card client-centric">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={customer} alt="Client-Centric Approach" />
                                <p><b>Client-Centric Approach</b></p>
                            </div>
                            <div className="flip-card-back">
                                <p styles="text-align: center;">Our top priority is to exceed client expectations,
                                    ensuring that every interaction and solution offered
                                    significantly contributes to their success.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card value-driven">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={value} alt="Value-Driven Solutions" />
                                <p><b>Value-Driven Solutions</b></p>
                            </div>
                            <div className="flip-card-back">
                                <p styles="text-align: center;">We offer an innovative selection of IT services
                                    that are not only cost-effective but also aligned with
                                    current market trends to deliver maximum value.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card quality">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={quality} alt="Uncompromising Quality" />
                                <p><b>Uncompromising Quality</b></p>
                            </div>
                            <div className="flip-card-back">
                                <p styles="text-align: center;">We maintain rigorous standards of quality across all our services
                                    and supports, confirming our commitment to excellence in every
                                    project we undertake.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Mission;