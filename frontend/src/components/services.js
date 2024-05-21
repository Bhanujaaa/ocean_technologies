import React from 'react';
import Navbar from './navbar';
import { useParams, useNavigate } from "react-router-dom";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/services.css"

function ServiceDetails() {
    const { id } = useParams()
    const slideDirection = (id % 2 === 0) ? 'animate__slideInRight' : 'animate__slideInLeft';
    const delayClass = `animate__delay-${id % 1}s`; // stagger delay up to 4 seconds

    return (
        <div className='services_page'>
         <div>
                <Navbar />
            </div>
            <div>
            <div className='page_left'>
                {id == 1 ? <>
                    <h2 className='service_heading'>Banking and Insurance</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src="https://swisscognitive.ch/wp-content/uploads/2021/07/ai-in-banking-and-insurance-use-cases.jpeg" alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 2 ? <>
                    <h2 className='service_heading'>Financial Services</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src="https://img.freepik.com/premium-photo/finance-money-transaction-technology-concept_31965-11341.jpg" alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 3 ? <>
                    <h2 className='service_heading'>Airlines & Automobiles</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src="https://ca-times.brightspotcdn.com/dims4/default/fcf2189/2147483647/strip/true/crop/4200x2363+0+267/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd2%2F08%2Faa2e983042ee848eb578aacc4343%2F463924-airport-carbon-021.jpg" alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 4 ? <>
                    <h2 className='service_heading'>Education</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src="https://www.strath.ac.uk/media/1newwebsite/departmentsubject/education/1600x600/education_title_2.jpg" alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 5 ? <>
                    <h2 className='service_heading'>Engineering</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src="https://thumbs.dreamstime.com/b/gears-cogwheel-engineering-automation-solution-teamwork-cooperation-business-concept-city-view-website-header-banner-207049810.jpg" alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 6 ? <>
                    <h2 className='service_heading'>Technology & Telecom</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src="https://dist.neo4j.com/wp-content/uploads/20170920205520/telecom-banner-2017.jpg" alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 7 ? <>
                    <h2 className='service_heading'>Retail & Consumer services</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src="https://www.prophia.com/hs-fs/hubfs/HEADER-NO%20BOX.png?width=4001&height=1648&name=HEADER-NO%20BOX.png" alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 8 ? <>
                    <h2 className='service_heading'>New Application Development</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src="https://ncube.com/wp-content/uploads/2020/02/Top-8-Software-Development-Models.jpg" alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 9 ? <>
                    <h2 className='service_heading'>Manufacturing</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src="https://as1.ftcdn.net/v2/jpg/02/96/11/58/1000_F_296115877_cCemh1wq3aFPeB240V00CQRW3f11820a.jpg" alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 10 ? <>
                    <h2 className='service_heading'>Careers</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src="https://libertyhospitalfoundation.org/wp-content/uploads/2023/03/careers-header.png" alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
       
            <div className='service_details'>


                    <div className="container">
                        {id == 1 ? <><div className="row">

                        </div>
                            <div>
                                <div>
                                    <div className="service-details animate__animated animate__slideInDown">
                                        <br></br>
                                        <p>The standards, regulations, practices, and administrative requirements of the banking and insurance industries are always changing. A cost-controlled structure and new services were added to the banking and insurance industries' portfolios as a result of these shifting needs.
                                 They now want multiskilled resources who are willing to adapt to changes in the industry due to the dynamic and ever-changing conditions in the field.
                                            The greatest HRC acquisition solutions are provided by Ocean Technologies, which will enable you to efficiently and successfully manage your resources
                                        </p>
                                    </div>
                                </div>
                            </div></> : <></>}
                        {id == 2 ? <><div className="row">
                            <div >
                               
                            </div>
                        </div>
                            <div>
                                <div >
                                    <div className="service-details animate__animated animate__slideInDown">
                                        <br></br>
                                        <p>The financial and accounting fields are growing in importance due to the daily changes in business dynamics, and as a result, this industry has begun hiring well-known individuals who are adaptable and willing to change.

                                            For corporate accounting, corporate finance, and the financial services sector, Ocean Technologies offers top-notch resources with a goal-oriented mindset.

                                            The financial services and legal sector began imposing a few complicated regulatory and compliance standards adoption mandates on the firms for the benefit of the organization and society. This created the chance for the appropriate legal and advising experts to work with the functionaries.

                                            The talent accusation team at Ocean Technologies Finance and Legal Services offers you high-quality tools and solutions.
                                        </p>
                                    </div>
                                </div>
                            </div></> : <></>}
                        {id == 3 ? <><div className="row">
                            <div >
                               
                            </div>
                        </div>
                            <div>
                                <div >
                                    <div className="service-details animate__animated animate__slideInDown">
                                        <br></br>
                                        <p>Due to the large number of competitors, the automotive and airline industries must constantly reinvent themselves to provide better travel experiences, services, and affordable prices.

                                            Ocean Technologies Airline Services helps you locate the best Human Capital for a variety of tasks in sales, CRM, SCM, cargo, travel, and other areas for top-notch operations and management. For top-notch workforce solutions, get in touch.

                                            A result of the constant advancements in the automotive industry, there is an increasing demand for talented and creative workers at both mid- and high-level management positions.

                                            Talent with creative thinking and experience in change management is needed in this field. The resource needs of Ocean Technologies Automotive Services include finding and assigning qualified personnel, including R&D specialists, across divisions. Get in touch for more Automotive Human Capital Solutions.
                                        </p>
                                    </div>
                                </div>
                            </div></> : <></>}
                        {id == 4 ? <><div className="row">
                            <div >
                                
                            </div>
                        </div>
                            <div>
                                <div >
                                    <div className="service-details animate__animated animate__slideInDown">
                                        <br></br>
                                        <p>The quantity of talented individuals in many fields including engineering, management, healthcare, hospitality, technology, and many more is a major factor in the nation's economic success. Yet, there is a sharp increase in the need for these service providers in terms of personnel for government mandates, corporate training needs, and educational institutions.

                                            In order to provide qualified consultants and staff to any company in modern economic environment, Ocean Technologies Learning & Development services are continuously looking at sector dynamic requirements.
                                        </p>
                                    </div>
                                </div>
                            </div></> : <></>}
                        {id == 5 ? <><div className="row">
                            <div >
                               
                            </div>
                        </div>
                            <div>
                                <div >
                                    <div className="service-details animate__animated animate__slideInDown">
                                        <br></br>
                                        <p>Economic studies is one of the broadest fields of study, with subfields including mining, oil and gas, mechanical engineering, chemical, civil, electrical, automotive, and industrial. Enterprises face challenges due to a variety of factors, including evolving technology, increasingly complicated engineering and construction projects, a shortage of trained labor, fragmented business and processes, shifting expectations, and shifting regulatory environments. To build and create systems, structures, processes, and instruments, companies in this industry use engineering principles.
                                            Businesses are mostly seeking for qualified experts or consultants who can offer technical, quality, environmental, and planning and assessment services, as well as design and management and quality assurance. <br></br>In the present era of scientific and technological advancements, all services are being merged into a social environment without boundaries. With the RIGHT human resources that can manage to enhance innovation and process efficiency while minimizing operating costs, Ocean Technologies' integrated engineering services may help you achieve your company goals.
                                        </p>
                                    </div>
                                </div>
                            </div></> : <></>}
                        {id == 6 ? <><div className="row">
                            <div >
                               
                            </div>
                        </div>
                            <div>
                                <div>
                                    <div className="service-details animate__animated animate__slideInDown">
                                        <br></br>
                                        <p>Modern business is characterized by rapid technological change. In order to remain competitive and expand, businesses must adapt to changes in trends and innovations. Businesses must comprehend the effects that major trends have on their operations and find ways to overcome them by switching to creative revenue streams, cutting expenses, and yes, even creating new business models. Businesses face numerous obstacles in their quest to implement the changes that the technology industry requests.
                                            The world is heading toward a fully smarter planet as a result of advances in technology and communication. Big Data, cloud computing, social media, mobile, and the internet of things are all recent innovations that are intended to help us make wiser decisions. A multitude of issues surround the following: consumer trends, cost vs. complexity, convergence of products, data privacy, intellectual property, security, and disruptive technologies.
                                            Technology and communication companies are readjusting capital and applying various cost optimization techniques to satisfy the ever-changing industry demands in today's marketplace. Businesses must carefully consider human capital solutions that draw, keep, and develop people in priority areas in light of these trends. There is a growing need for a highly trained workforce pool due to the industry's dynamic market, which has complicated needs and a highly competitive environment. With its readymade and bespoke HR solutions and strong industry experience, Ocean Technologies Technology & Telecom Services Wing offers extensive industry and functional expertise along with insights that assist our clients in locating the best personnel available.
                                        </p>
                                    </div>
                                </div>
                            </div></> : <></>}
                        {id == 7 ? <><div className="row">
                            <div>
                               
                            </div>
                        </div>
                            <div>
                                <div >
                                    <div className="service-details animate__animated animate__slideInDown">
                                        <br></br>
                                        <p>Customers are purchasing goods through a variety of channels, and the retail sector is growing more dynamic as a result of expanding product catalogs, a global increase in target markets, and an increase in consumer diversity. Consumers want better experiences from shops at the same speed in the rapidly evolving digital marketplace. The retail industry requires a higher labor force and indirectly contributes to the labor shortages in emerging nations. A large pool of human resource, particularly seasoned experts in middle and senior management, is more desperately needed in the retail and consumer services industries. You may find, evaluate, and hire competent professionals with outstanding backgrounds with the aid of Ocean Technologies Retail & Consumer Services.</p>
                                    </div>
                                </div>
                            </div></> : <></>}
                        {id == 8 ? <><div className="row">
                            <div >
                                
                            </div>
                        </div>
                            <div>
                                <div >
                                    <div className="service-details animate__animated animate__slideInDown">
                                        <br></br>
                                        <p>For the IT industry, new application development reflects our commitment to creating ground-breaking solutions that propel digital change. We are experts at creating custom software programs that are suited to the changing requirements of companies operating in the digital era, with an emphasis on creativity and cutting-edge technology. To create scalable, secure, and user-friendly apps that enable businesses to improve productivity, streamline processes, and maintain an advantage in the current competitive market, our skilled team makes use of the newest development frameworks and tools. Our commitment to providing unmatched quality and value to our clients drives their success in the constantly changing IT market, whether we are creating cloud-based platforms, mobile applications, or custom corporate solutions</p>
                                    </div>
                                </div>
                            </div></> : <></>}
                        {id == 9 ? <><div className="row">
                            <div >
                               
                            </div>
                        </div>
                            <div>
                                <div>
                                    <div className="service-details animate__animated animate__slideInDown">
                                        <br></br>
                                        <p>
                                            The sector that has strong ties to industrial design, engineering, and electricity. In any economy, it is a sector that generates wealth. New developments and technology have opened up new growth paths for advanced manufacturing and manufacturing execution systems, which have in turn produced job possibilities in all global economies. The world is searching for greener, more ecologically friendly manufacturing facilities that produce less hazardous waste and foster industrial symbiosis. For instance, there is a chance to lessen the environmental effect of making finished goods thanks to the recent surge in the marketing of 3D printing.
                                            To maximize the benefits of resources and technological improvements, an increasing number of dispersed production units are integrating. We at Ocean Technologies Manufacturing Services offer comprehensive human capital solutions to businesses and economies for any manufacturing service they require.
                                        </p>
                                    </div>
                                </div>
                            </div></> : <></>}
                        {id == 10 ? <><div className="row">
                            <div>
                              
                            </div>
                        </div>
                            <div>
                                <div >
                                    <div className="service-details animate__animated animate__slideInDown">
                                        <br></br>
                                        <p>Produce. Invent. Try your hardest. You are the boss of your own universe. You aim to uphold the standards that you have established for yourself. Each member of the team is a valuable asset, and Ocean Technologies understands that it can only become the best business with the best employees. People that delve into their business, comprehend it, and translate it for the worldwide web environment are necessary to provide clients with flawless services.</p>
                                    </div>
                                </div>
                            </div></> : <></>}

                    </div>
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
