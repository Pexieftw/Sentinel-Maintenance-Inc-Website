// pages/index.js
import React from 'react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import AreasWeServe from './components/AreasWeServe';
import TeamworkCulture from './components/TeamworkCulture';
import HealthSafety from './components/HealthSafety';
import SectionDivider from './utils/SectionDivider'

const Home = () => {
  return (
    <div className="">
      <Hero />
      <AboutUs />
      <Services />
      <AreasWeServe />
      <TeamworkCulture/>
      <SectionDivider/>
      <HealthSafety />
    </div>
  );
};

export default Home;