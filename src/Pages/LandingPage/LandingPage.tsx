import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import OurResults from './OurResults/OurResults';
import EffectiveContent from './EffectiveContent/EffectiveContent';

const LandingPage = () => {
  return (
    <section>
      <HeroSection />
      <OurResults/>
      <EffectiveContent />
    </section>
  )
}

export default LandingPage;