"use client";
import React from 'react';
import { motion } from 'framer-motion';
import CardSwap, { Card } from './CardSwap';
import TrueFocus from './TrueFocus';
import '../app/globals.css';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>
          Grow Your Business with 
          <TrueFocus 
            sentence="Local SEO"
            manualMode={false}
            blurAmount={3}
            borderColor="#2563EB"
            animationDuration={3}
            pauseBetweenAnimations={1}
          />
        </h1>
        <p>
          We help local businesses dominate search results and attract more customers with proven SEO strategies tailored for your area.
        </p>
        <motion.a
          href="https://calendly.com/harmatia/30min"
          className="cta-button"
          whileHover={{ scale: 1.08, boxShadow: '0 6px 28px rgba(245, 158, 11, 0.5)' }}
          whileTap={{ scale: 0.97 }}
        >
          Book a Call
        </motion.a>
      </div>
      <div className="hero-right">
        <div style={{ height: '600px', position: 'relative' }}>
          <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false} width={650} height={500}>
            <Card>
              <Image src="/gbpmappack.png" alt="GBP Map Pack" width={1200} height={800} style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '1rem' }} />
              <h3>SEO Audit</h3>
              <p>Comprehensive analysis of your website&apos;s SEO health.</p>
            </Card>
            <Card>
              <Image src="/localcitation.png" alt="Local Citation" width={1200} height={800} style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '1rem' }} />
              <h3>Local Citations</h3>
              <p>Boost your business visibility in local directories.</p>
            </Card>
            <Card>
              <Image src="/ccbtargetedwebtraffic.png" alt="Targeted Web Traffic" width={1200} height={800} style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '1rem' }} />
              <h3>Reputation Management</h3>
              <p>Enhance and protect your online reputation.</p>
            </Card>
            <Card>
              <Image src="/localfalcon.png" alt="Local Falcon" width={1200} height={800} style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '1rem' }} />
              <h3>Google Maps Ranking</h3>
              <p>Get found by more customers on Google Maps.</p>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
}



