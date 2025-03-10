import React from 'react';
import Navbar from './navbar';
import { useParams, useNavigate } from "react-router-dom";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/services.css"
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
import QualityAssurance from "../images/quality.jpg"
import BiomedicalRegulatory from "../images/biomedical.jpg"


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
                        <img src={Banking_Insurance} alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 2 ? <>
                    <h2 className='service_heading'>Financial Services</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src={Financial_Services} alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 3 ? <>
                    <h2 className='service_heading'>Airlines & Automobiles</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src={Airlines_Automobiles} alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 4 ? <>
                    <h2 className='service_heading'>Education</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src={Education} alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 5 ? <>
                    <h2 className='service_heading'>Engineering</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src={Engineering} alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 6 ? <>
                    <h2 className='service_heading'>Technology & Telecom</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src={Technology_Telecom} alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 7 ? <>
                    <h2 className='service_heading'>Retail & Consumer services</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src={Retail_ConsumerServices} alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 8 ? <>
                    <h2 className='service_heading'>New Application Development</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src={New_Application_Developement} alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 9 ? <>
                    <h2 className='service_heading'>Manufacturing</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src={Manufacturing} alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 10 ? <>
                    <h2 className='service_heading'>Quality Assurance</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src={QualityAssurance} alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 11 ? <>
                    <h2 className='service_heading'>Biomedical Regulatory Affairs</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src={BiomedicalRegulatory} alt="Service" className="img-fluid" />
                    </div>
                </> : <></>}
                {id == 12 ? <>
                    <h2 className='service_heading'>Careers</h2>
                    <div className={`service-image-container animate__animated ${slideDirection} ${delayClass}`}>
                        <img src={Careers} alt="Service" className="img-fluid" />
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
                                        <p>We provide comprehensive quality assurance (QA) services designed to ensure your products consistently meet the highest industry standards.
Recognizing the pivotal role of quality in the pharmaceutical, biologics, medical devices, and cell and gene therapy sectors, we adopt a thorough and tailored approach to QA.
Our solutions are customized to address your specific needs, offering expert QA professionals skilled in maintaining strict regulatory compliance while upholding exceptional quality standards.
Our team consists of seasoned experts proficient in quality management systems, regulatory frameworks, and industry best practices, dedicated to safeguarding the integrity of your products and processes.</p>
                                    </div>
                                </div>
                            </div></> : <></>}
                            {id == 11 ? <><div className="row">
                            <div>
                              
                            </div>
                        </div>
                            <div>
                                <div >
                                    <div className="service-details animate__animated animate__slideInDown">
                                        <br></br>
                                        <p>The rapid evolution of technology is revolutionizing the healthcare and life sciences sectors, enabling groundbreaking achievements that were once deemed impossible. This technological shift creates exciting opportunities while introducing complex challenges.
Simplify your regulatory compliance processes with our specialized staffing solutions in regulatory affairs and biostatistics. We provide highly qualified professionals who excel in navigating complex regulatory frameworks and delivering critical project support. Our experts ensure precision in execution, helping you meet compliance standards and accelerate your time to market.
By partnering with us, you gain access to top-tier talent dedicated to refining your regulatory strategies and enhancing operational efficiency. Let us help you achieve seamless compliance and operational excellence through our customized staffing solutions tailored to your unique needs.</p>
                                    </div>
                                </div>
                            </div></> : <></>}

                        {id == 12 ? <><div className="row">
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
                            <a href="/service/10">Quality Assurance</a></li>
                            <li>
                            <a href="/service/11">Biomedical Regulatory Affairs</a></li>
                        <li>
                            <a href="/service/12">Careers</a></li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetails;
