import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Footer.css';
import hlsalogo from '../../hlsalogo.png';

const AGENCY_EMAIL = 'services@harmatialocalseoagency.com';
const CALENDLY_LINK = 'https://calendly.com/harmatia/30min';

const sectionLinks = [
  { label: 'Case Study', href: '#case-study' },
  { label: 'Processes', href: '#processes' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
];

const actionLinks = [
  { label: 'Book a Call', href: CALENDLY_LINK, external: true },
  { label: 'Get a Quote', href: `mailto:${AGENCY_EMAIL}?subject=Quote%20Request`, external: true },
  { label: 'Get a Free Audit', href: `mailto:${AGENCY_EMAIL}?subject=Free%20Audit%20Request`, external: true },
  { label: 'Email Us', href: `mailto:${AGENCY_EMAIL}`, external: true },
];

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: <FaLinkedin /> },
  { label: 'Email', href: `mailto:${AGENCY_EMAIL}`, icon: <MdEmail /> },
];

export default function Footer() {
  return (
    <motion.footer
      className="footer-glass"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="footer-main-grid">
        <div className="footer-row-wrap">
          {/* Left: Navigation */}
          <div className="footer-col footer-nav">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <img src={hlsalogo} alt="Harmatia Local SEO Agency Logo" style={{ height: '36px', marginRight: '10px' }} />
              <h3 style={{ margin: 0 }}>Sections</h3>
            </div>
            <ul>
              {sectionLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Center: Actions */}
          <div className="footer-col footer-actions">
            <h3>Quick Actions</h3>
            <div className="footer-actions-btns">
              {actionLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="footer-action-btn"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Right: Contact & Socials */}
        <div className="footer-col footer-contact">
          <h3>Contact</h3>
          <a href={`mailto:${AGENCY_EMAIL}`} className="footer-email">{AGENCY_EMAIL}</a>
          <div className="footer-socials">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label} className="footer-social-link">
                {s.icon}
              </a>
            ))}
          </div>
          <div className="footer-credit">Made by <b>The SEO Beduin</b></div>
        </div>
      </div>
      <div className="footer-bottom-row">
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <span className="footer-dot">&bull;</span>
          <a href="#terms">Terms of Service</a>
          <span className="footer-dot">&bull;</span>
          <a href="/sitemap">Sitemap</a>
        </div>
        <div className="footer-copyright">
          <img src={hlsalogo} alt="Harmatia Local SEO Agency Logo" style={{ height: '32px', verticalAlign: 'middle', marginRight: '8px' }} />
          &copy; {new Date().getFullYear()} Harmatia Local SEO Agency. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
} 