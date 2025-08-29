import React, { useState, useEffect } from 'react';
import './NavBar.css';
import hlsalogo from './hlsalogo.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 40) {
        setShowNav(true);
        setLastScrollY(window.scrollY);
        return;
      }
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar${showNav ? '' : ' navbar-hidden'}`}>
      <div className="navbar-logo">
        <img src={hlsalogo} alt="Harmatia Local SEO Agency Logo" />
        <span className="navbar-title">HarmatiaLocal-SEO Agency</span>
      </div>
      <button className="burger" onClick={() => setMenuOpen(m => !m)} aria-label="Toggle menu">
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
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