import React from 'react';
import "../styling/navbar.css"
import logo from "../images/frame6white.png"

function Navbar() {
  return (
    <nav className="navbar navbar-fixed-top">
      <div className="container">
        <div className="navbar-logo">
          <img src={logo} alt="Ocean Technologies Logo" />
        </div>
        <div className="navbar-links">
          <a href="about">About Us</a>
          <a href="contact">Contact Us</a>
          <a href="we_do">We Do</a>
          <div className="dropdown">
            <button className="dropbtn">Services
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">Banking & Insurance</a>
              <a href="#">Financial Services</a>
              <a href="#">Airlines & Automobiles</a>
              <a href="#">Education</a>
              <a href="#">Engineering</a>
              <a href="#">Technology & Telecom</a>
              <a href="#">Retail & Consumer services</a>
              <a href="#">New Application Development</a>
              <a href="#">Manufacturing</a>
              <a href="#">Careers</a>
            </div>
          </div>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;