import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import CaseStudySection from './CaseStudySection';
import ProcessesSection from './ProcessesSection';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import FAQSection from './FAQSection';
import Footer from './components/ui/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <CaseStudySection />
      <ProcessesSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
