"use client"

import React, { useEffect } from 'react';
import AboutUs from '../pages/AboutUs';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutUsPage= () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);


  return (
    <div className="">
      <AboutUs />
    </div>
  );
};

export default AboutUsPage;