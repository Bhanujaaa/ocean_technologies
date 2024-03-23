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
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
        <a href="#services">Services</a>
        <a href="#industry">Industry</a>
        {/* Add more links as needed */}
      </div>
    </div>
  </nav>
  );
}

export default Navbar;