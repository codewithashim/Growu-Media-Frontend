import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import OurResults from './OurResults/OurResults';
import EffectiveContent from './EffectiveContent/EffectiveContent';
import OurProjects from './OurProjects/OurProjects';
import Testimonial from './Testimonial/Testimonial';
import MonthlyPlan from './MonthlyPlan/MonthlyPlan';
import OurProcess from './OurProcess/OurProcess';
import SatisfactionSection from './SatisfactionSection/SatisfactionSection';
import Faq from './Faq/Faq';

const LandingPage = () => {
  return (
    <section>
      <HeroSection />
      <OurResults />
      <EffectiveContent />
      <OurProjects />
      <Testimonial />
      <MonthlyPlan />
      <SatisfactionSection />
      <OurProcess />
      <Faq/>
    </section>
  )
}

export default LandingPage;