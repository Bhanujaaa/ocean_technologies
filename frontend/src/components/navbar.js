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
        <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/mission">Mission</a>
          
          <div className="dropdown">
            <button className="dropbtn">Services
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="/service/1">Banking & Insurance</a>
              <a href="/service/2">Financial Services</a>
              <a href="/service/3">Airlines & Automobiles</a>
              <a href="/service/4">Education</a>
              <a href="/service/5">Engineering</a>
              <a href="/service/6">Technology & Telecom</a>
              <a href="/service/7">Retail & Consumer services</a>
              <a href="/service/8">New Application Development</a>
              <a href="/service/9">Manufacturing</a>
              <a href="/service/10">Careers</a>
            </div>
          </div>
          <a href="/jobs">Jobs</a>
          <a href="/we_do">We Do</a>
          
          <a href="/contactus">Contact Us</a>
    
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;