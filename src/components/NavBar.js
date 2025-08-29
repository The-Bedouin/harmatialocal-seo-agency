"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 40) {
        setShowNav(true);
        setLastScrollY(currentY);
        return;
      }
      if (currentY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar${showNav ? '' : ' navbar-hidden'}`}>
      <div className="navbar-logo">
        <Image src="/hlsalogo.png" alt="Harmatia Local SEO Agency Logo" width={180} height={54} />
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
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}



