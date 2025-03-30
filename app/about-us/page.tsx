"use client"

import React, { useEffect } from 'react';
import AboutUs from '../pages/AboutUs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageTitle from '../utils/PageTitle';

const AboutUsPage= () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);


  return (
    <div className="">
      <PageTitle mytext="About Us" />
      <AboutUs />
    </div>
  );
};

export default AboutUsPage;