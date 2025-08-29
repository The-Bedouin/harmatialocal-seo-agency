"use client";
import React from "react";
import { FaSearch, FaMapMarkerAlt, FaBullhorn } from "react-icons/fa";

const services = [
  {
    title: "Free Website Audit",
    icon: <FaSearch className="service-icon" />,
    desc: "Get a comprehensive, no-strings-attached analysis of your website’s SEO health, visibility, and conversion potential. Discover exactly what’s holding your business back from ranking and how to fix it—risk free!"
  },
  {
    title: "Local SEO (Website & GBP)",
    icon: <FaMapMarkerAlt className="service-icon" />,
    desc: "Boost your local search presence with expert optimization of your website and Google Business Profile. We help you dominate the map pack and attract more local customers."
  },
  {
    title: "PPC for Local Businesses",
    icon: <FaBullhorn className="service-icon" />,
    desc: "Drive instant, high-intent traffic to your brick-and-mortar or location-based business with targeted Google Ads campaigns—only for businesses with a physical location."
  }
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2 className="services-title">Our Services</h2>
        <p className="services-intro">
          Everything you need to grow your local business online—starting with a free, expert website audit.
        </p>
      </div>
      <div className="services-content">
        <div className="services-list-col">
          {services.map((service, idx) => (
            <div className="service-box" key={idx}>
              <span className="service-box-icon">{service.icon}</span>
              <div className="service-box-content">
                <span className="service-box-title">{service.title}</span>
                <span className="service-box-desc">{service.desc}</span>
              </div>
            </div>
          ))}
          <a
            href="https://calendly.com/harmatia/30min"
            className="see-what-btn"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '2rem',
              background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: 700,
              padding: '0.9rem 2.2rem',
              border: 'none',
              borderRadius: '32px',
              boxShadow: '0 4px 24px rgba(245, 158, 11, 0.33)',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
              outline: 'none',
              letterSpacing: '0.5px',
              textAlign: 'center',
            }}
          >
            See what we can do for you
          </a>
        </div>
        <div className="services-image-col">
          <img
            src="/audit.png"
            alt="Local SEO Services"
            className="services-image"
          />
        </div>
      </div>
    </section>
  );
}




