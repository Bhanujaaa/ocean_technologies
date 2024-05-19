import React, { useState } from 'react';
import '../styling/what_we_do.css'; // Assuming you have a CSS file for styling
import Navbar from './navbar';


const WhatWeDo = () => {
    const Service = ({ title, content }) => {
        const [expanded, setExpanded] = useState(false);

        const toggleExpanded = () => {
            setExpanded(!expanded);
        }

        return (
            <div className={`service ${expanded ? 'expanded' : ''}`} onMouseEnter={toggleExpanded} onMouseLeave={toggleExpanded} >
                <h2>{!expanded && title}</h2>
                {expanded && title == "IT Consulting" && <ITConsulting />}
                {expanded && title == "Software Development" && <SoftwareDevelopment />}
                {expanded && title == "Mobile Apps Development" && <MobileAppsDevelopment />}
                {expanded && title == "Web Development" && <WebDevelopment />}
                {expanded && title == "Cloud" && <Cloud />}
                {expanded && title == "ManagementSolutions" && <ManagementSolutions />}
                {expanded && title == "Quality Assurance" && <QualityAssurance />}
                {expanded && title == "Data Warehousing & BI" && <DataWarehousingAndBI />}
                {expanded && title == "Outsourcing" && <Outsourcing />}
            </div>
        );
    }

    return (
        <div className="what-we-do">
            <div>
                <Navbar />
            </div>
            <WeDoHeader />
            <ServicesList />
            <div className="services-container">
                <Service title="IT Consulting" />
                <Service title="Software Development" />
                <Service title="Mobile Apps Development" />
                <Service title="Web Development" />
                <Service title="Cloud" />
                <Service title="ManagementSolutions" />
                <Service title="Quality Assurance" />
                <Service title="Data Warehousing & BI" />
                <Service title="Outsourcing" />
            </div>
        </div>
    );
}


const WeDoHeader = () => {
    return <h1 className="we-do-header">WE DO</h1>;
}

const ServicesList = () => {
    return (
        <div className="services-list">
            {/* <h2>Our Services</h2>
            <ul>
                <li>IT Consulting</li>
                <li>IT Staffing</li>
                <li>Software Development</li>
                <li>Mobile Apps Development</li>
                <li>Web Development</li>
                <li>Cloud</li>
                <li>Quality Assurance</li>
                <li>Data Warehousing & BI</li>
                <li>Outsourcing</li>
            </ul> */}
        </div>
    );
}


const ITConsulting = () => {
    return (
        <div className="services">
            <div>
                <p>Ocean Technologies IT Staffing Services</p>
                <p>
                    Recruiters at Ocean Technologies have access to hundreds of highly skilled IT consultants as well as a large number of temporary positions. Ocean Technologies is the ideal partner whether you're a consultant searching for your next assignment or an employer wishing to add personnel for a crucial project.
                </p>
                <h3>Ocean Technologies Knows Tech</h3>
                <p>
                    We provide our customers in a variety of industries IT staff augmentation services. Typical positions we fill consist of:
                </p>
                <ul>
                    <li>Developers (SaaS, Mobile Applications, Java, PHP, Oracle, and SQL).</li>
                    <li>A cloud strategist.</li>
                    <li>SaaS Architect.</li>
                    <li>Specializing in Application Support.</li>
                    <li>DBAs, or database administrators.</li>
                    <li>Architects and engineers of software.</li>
                    <li>Administrators of networks and systems engineers.</li>
                </ul>
            </div>
        </div>
    );
}

const SoftwareDevelopment = () => {
    return (
        <div className="services">
            <p>
                Today's organizations constantly come up with new ideas to keep ahead of the competition; yet, turning those concepts into applications can be difficult because it takes the necessary resources and talents. It is now essential for companies to seek out solutions providers who can help them turn their brilliant ideas into practical applications at a reasonable price.
            </p>
            <p>
                At Ocean Technologies, we're committed to collaborating closely with our clients to fully understand their ideas, assess available technology, and create net-centric applications that will give them a competitive advantage in the market today while also helping them grow. We give our clients the tools they need to establish innovative e-business plans that will significantly advance their new projects. We also have a horde of fresh professionals in application development on staff that can help you with every step of the process. You may turn your ideas into applications while controlling expenses by utilizing our solutions and experience, freeing you more time for your other crucial business operations.
            </p>
        </div>
    );
}
const MobileAppsDevelopment = () => {
    return (
        <div className="services">
            <p>
                Interactions between individuals and the environment have changed as a result of mobile computing. Even with their mobile strategies in place, many businesses are frequently caught off guard by how rapidly their plans must adapt.
           <br></br>
           <br></br>
                Development, implementation, and delivery of mobility initiatives by Ocean Technologies will boost worker productivity, open up new income opportunities, and foster a more cohesive workforce. In collaboration with you, our mobility specialists will create your company's mobile strategy and execute it on a variety of mobile platforms and gadgets.
            </p>
        </div>
    );
}

const WebDevelopment = () => {
    return (
        <div className="services">
            <p>
                The art of producing presentations of content (often hypertext or hypermedia) for delivery to end users over the World Wide Web via Web browsers or other Web-enabled applications such as RSS readers, Internet television clients, and microblogging clients is known as web design.
            </p>
        </div>
    );
}

const Cloud = () => {
    return (
        <div className="services">
            <p>
                Companies are adopting cloud computing in order to take advantage of its scalability, reactivity, and cost-effectiveness. The move to a cloud environment is a big enterprise project that will change how IT companies run and how business users receive services.
                <br></br>
                <br></br>
                According to Ocean Technologies, the cloud represents a paradigm shift that improves operational efficiency for enterprises and facilitates the adoption of a service-based approach to IT delivery, which enhances responsiveness to business requirements.
            </p>
        </div>
    );
}

const ManagementSolutions = () => {
    return (
        <div className="services">
            <p>
                <b>Infrastructure Management Solutions :</b>
                Event management for the IT enterprise infrastructure components can be managed effectively and comprehensively by providing preemptive alerts and historical reports. These automatically detect, identify, and fix issues while informing IT workers of the necessary steps. They are intended for use by network and systems administrators, as well as service desk employees. Business service clients can access, be available, and receive performance from Ocean Technologies' IT Infrastructure Management solutions, which also guarantee service performance.

                <br></br>
                <b>Small Business Solutions :</b>
                They are the primary source of innovation and employment development at the same time, with enterprises from all across the nation. Though most companies have a less than stellar track record when it comes to providing IT services for small businesses, those are still quite respectable statistics. Few things small business owners frequently criticize about IT consulting businesses they encounter are that they are costly, limited, inflexible, and uneducated. Small businesses, however, now have a partner in Ocean Technologies IT that can combine great technical know-how and sound guidance with excellent customer service.

                Few businesses are as big or have as much experience as Ocean Technologies IT in offering the ideal mix of personnel, procedures, and technologies to satisfy all of your IT demands. We are one of the fastest growing business and technology consulting firms. That elusive benefit known as VALUE, which is lacking in many other IT firms, is combined with an inexpensive price point designed especially for small enterprises.

                Planning, developing, and managing all of our clients' computing and IT needs is made possible by Ocean Technologies' small business IT solutions, which are made to act as a one source solution provider. We recognize that you require more from a software professional than just having them install new gear or software and then leave your place of business. To guarantee that technology expenditures are in line with company objectives, the foundation of all of our small business solutions is built around strong, well-developed procedures. If you want the assurance that every technology investment you make will increase your revenue, Ocean Technologies IT is the only option.


                <br></br>
                <b>Applications Management Solutions :</b>
                Discuss the business issues that every organization's IT managers face. SeaTech In order to accommodate evolving enterprise conditions, it offers solutions for organizing, prioritizing, measuring, and improving application portfolio delivery. Organizations can approach their ongoing application portfolio management from a comprehensive perspective thanks to the best practices, technology, and derived KPIs of applications management solutions.


                <br></br>
                <b>IT Strategy Planning & Deployment Solutions :</b>
                Our area of expertise is organizing, directing, and recording IT goals and objectives. Key performance indicators, competitive advantage, and technology-focused IT strategy are all things we generate. Our goal is to provide well-organized IT strategy plans and techniques, as well as program and project overviews, specified targets, and key performance indicators.

                <br></br>
                <b>Strategy & Execution Management Solutions :</b>
                Provide creative, customized solutions to meet the demands of your company. Our advisors create technological solutions that strengthen your business, organization, IT strategy, and technological procedures. Our experts ensure that programs and project deadlines are completed on schedule and within budget.

                <br></br>
                <b>Project Management:</b>

                We employ a methodical and tried-and-true approach to oversee several business automation initiatives. Different automation tools are available depending on the technological analysis. Project management is mostly dependent on well-documented project plans and well-defined scope. Effective communication with your internal IT team can be achieved by combining well-organized status reports with appropriate reporting systems.

                <br></br>
                <b>Enterprise Business Solutions:</b>
                A strong enterprise architecture serves as the cornerstone of any company capacity. Enterprise architecture is consequently a crucial component of successful and efficient IT operations inside every information technology (IT) firm.

                A dynamic corporate environment can be enabled by information technology through the use of enterprise architecture, which serves as the master plan. It outlines the goals, tenets, guidelines, and schedule that direct an organization's choices, implementation, management, safeguarding, and modernization of its technological infrastructure. If proper funding is not made, the dangers associated with technology operations increase over time. An information technology environment that is adaptable and economical can only be achieved via persistent, long-term dedication to enterprise design.

                Furthermore, our strategically designed enterprise architecture combines IT with business skills to create a unified work environment that helps the company achieve high performance.

                However, when financial and operational limitations lead to sporadic and uneven architectural upgrades without a clear end goal in sight, the foundation crumbles and organizations are unable to realize the intended gains in effectiveness and efficiency.
                <br></br>
                <b>Business Operation Management Solutions:</b>
                Having a sizable and devoted user base as well as an increasing number of new clients. All sizes of businesses and industry verticals are covered by these solutions. Customers may move to Enterprise Workload Management and IT Workload Automation with confidence thanks to the breadth, depth, and unrivaled levels of expertise offered by the integrated Operations Management portfolio. Enterprise workloads can be enabled, planned, automated, and delivered with the help of our wide range of solutions.

                Additionally, we simplify the management of even the most difficult IT settings. SeaTech In every important area of operations management, it offers a wide range of industry-leading product solutions. For operations decision makers and IT managers, our solutions streamline complicated daily and long-term operational activities.

            </p>
        </div>
    );
}

const QualityAssurance = () => {
    return (
        <div className="services">
            <p>
                Customers care about the quality of the service supply process as much as the quality of the services provided, therefore managing the quality process becomes crucial for service-related enterprises.

                Ocean Technologies is constantly seeking methods to enhance the caliber of its operations and narrow its attention on customer service. With our assistance, you may create an assurance and testing plan that will revolutionize your industry, save a substantial amount of money on testing, and shorten time-to-market by streamlining your test procedures.

            </p>
        </div>
    );
}

const DataWarehousingAndBI = () => {
    return (
        <div className="services">
            <p>
                Businesses are forced to diversify even as competition heats up due to the unstable and unpredictable nature of today's markets. All of the tools and strategies are vital in this cycle. What makes the most strategic company models work or fail is the data and information extracted from it.

                Big data difficulties can be better understood by your company with the help of Ocean Technologies' expertise in data warehousing and business intelligence solutions.

            </p>
            {/* Add more details about Data Warehousing & BI */}
        </div>
    );
}

const Outsourcing = () => {
    return (
        <div className="services">
            <p>
                Enhancing productivity and operational efficiency while operating on ever-tinier budgets is a challenge facing organizations today. Nevertheless, it lacks the time and resources necessary to adequately manage resource-intensive, non-core tasks.
            </p>
        </div>
    );
}

// export { MobileAppsDevelopment, WebDevelopment, Cloud, ManagementSolutions, QualityAssurance, DataWarehousingAndBI, Outsourcing,ITConsulting, SoftwareDevelopment };


export default WhatWeDo;
