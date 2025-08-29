import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CaseStudySection from '../components/CaseStudySection';
import ProcessesSection from '../components/ProcessesSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

export default function Page() {
  return (
    <main>
      <HeroSection />
      <CaseStudySection />
      <ProcessesSection />
      <ServicesSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}


