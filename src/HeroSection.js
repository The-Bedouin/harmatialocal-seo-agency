import React from 'react';
import { motion } from 'framer-motion';
import CardSwap, { Card } from './CardSwap';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>Grow Your Local Business with Harmatia</h1>
        <p>
          We help local businesses dominate search results and attract more customers with proven SEO strategies tailored for your area.
        </p>
        <motion.a
          href="https://calendly.com/harmatia/30min"
          className="cta-button"
          whileHover={{ scale: 1.08, boxShadow: '0 4px 24px #18391e55' }}
          whileTap={{ scale: 0.97 }}
        >
          Book a Call
        </motion.a>
      </div>
      <div className="hero-right">
        <div style={{ height: '600px', position: 'relative' }}>
          <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
            <Card>
              <h3>SEO Audit</h3>
              <p>Comprehensive analysis of your website's SEO health.</p>
            </Card>
            <Card>
              <h3>Local Citations</h3>
              <p>Boost your business visibility in local directories.</p>
            </Card>
            <Card>
              <h3>Reputation Management</h3>
              <p>Enhance and protect your online reputation.</p>
            </Card>
            <Card>
              <h3>Google Maps Ranking</h3>
              <p>Get found by more customers on Google Maps.</p>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 