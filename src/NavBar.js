import React from 'react';
import logo from './logo.svg';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Harmatia Local SEO Agency Logo" />
        <span className="navbar-title">harmatialocal-seo-agency</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#case-study">Case Study</a></li>
        <li><a href="#processes">Processes</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar; 