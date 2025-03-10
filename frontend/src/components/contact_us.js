import React,{useState} from 'react';
import Navbar from './navbar';
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/contact_us.css"
import phone from "../images/phone.png"
import email from "../images/email.png"
import loc from "../images/Loc.jpg"
import axios from 'axios';

function ContactUs() {
    const [showForm, setShowForm] = useState(false);
    const [name,setName]=useState("");
    const [emailu, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [query, setQuery] = useState("");


  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      emailu,
      mobile,
      query,
  };

  try {
    const response = await axios.post('https://api.ocean-technology.org/sendMail', formData);

    if (response.status === 200) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMobile("");
        setQuery("");
        setShowForm(false);
    } else {
        alert(`Error: ${response.data.message}`);
    }
} catch (error) {
    alert(`Error: ${error.response ? error.response.data.message : error.message}`);
}
    // Handle form submission logic
  };
  const handleIconMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.1)';
    e.target.style.transition = 'transform 0.3s ease';
  };

  const handleIconMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <div className="background-image"></div>
                <div className="icons-container">
        <Icon icon={phone} text="Call us now at: +1 (210) 338-1028" onMouseEnter={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave} />
        <Icon icon={email} text="Send us an email: marketing@oceanitsol.in" onMouseEnter={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave} />
        <Icon icon={loc} text="Visit us at: 14900 Nacogdoches rd, San Antonio, Texas, United States" onMouseEnter={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave} />
      </div>
                <div className="chat-box">
                <button id="toggleFormButton" onClick={toggleForm}>{showForm ? 'Close Form' : 'Message Us'}</button>
                {showForm && (
                    <form onSubmit={handleFormSubmit}  id="contactForm" styles={"display: none;"}>
                        <label for="name">Name:</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />

                        <label for="email">Email:</label>
                        <input type="email" id="email" value={emailu} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />

                        <label for="mobile">Mobile:</label>
                        <input type="tel" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter your mobile number" required />

                        <label for="query">Query:</label>
                        <textarea id="query" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter your query" required></textarea>

                        <button type="submit" id="sendButton">Send Message</button>
                    </form>)}
                </div>
            </div>
        </div>
    );

}
function Icon({ icon, text, onMouseEnter, onMouseLeave }) {
    return (
      <div className="icon">
        <img src={icon} alt="Icon" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
        <p>{text}</p>
      </div>
    );
  }

export default ContactUs;
