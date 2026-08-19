import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatStrip from './components/StatStrip';
import About from './components/About';
import Programs from './components/Programs';
import ImpactPillars from './components/ImpactPillars';
import InvolveCTA from './components/InvolveCTA';
import Testimonials from './components/Testimonials';
import ProjectsGallery from './components/ProjectsGallery';
import DonateSection from './components/DonateSection';
import VolunteerPartner from './components/VolunteerPartner';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import BackToTop from './components/BackToTop';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 4000);
  };

  return (
    <div className="tbn-app">
      <Navbar onDonateClick={() => {}} />
      <main>
        <Hero />
        <StatStrip />
        <About />
        <Programs />
        <ImpactPillars />
        <InvolveCTA />
        <Testimonials />
        <ProjectsGallery />
        <DonateSection onDonateSubmit={showToast} />
        <VolunteerPartner onSubmitFeedback={showToast} />
        <FAQ />
        <Contact onSubmitFeedback={showToast} />
      </main>
      <Footer onNewsletterSubmit={showToast} />
      <Toast message={toastMessage} visible={toastVisible} />
      <BackToTop />
    </div>
  );
}
