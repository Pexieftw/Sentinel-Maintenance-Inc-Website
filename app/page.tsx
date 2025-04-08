import React from 'react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import TeamworkCulture from './components/TeamworkCulture';
import HealthSafety from './components/HealthSafety';
import AreasWeServe from './components/AreasWeServe';
import MinimizedContactUs from './components/MinimizedContactUs';
import SectionDivider from './utils/SectionDivider'
import PageTitle from './utils/PageTitle';

const Home = () => {
  return (
    <div className="">
      <PageTitle mytext="Home" />
      <Hero />
      <AboutUs />
      <Services />
      <TeamworkCulture/>
      <SectionDivider/>
      <HealthSafety />
      <AreasWeServe />
      <MinimizedContactUs />
    </div>
  );
};

export default Home;