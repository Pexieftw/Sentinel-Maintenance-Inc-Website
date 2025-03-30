"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AreasWeServe from '../pages/AreasWeServe';
import PageTitle from '../utils/PageTitle';

const AreasWeServePage= () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,       
      easing: 'ease-out',
    });
  }, []);
  
  return (
    <div className="">
      <PageTitle mytext="Areas We Serve" />
      <AreasWeServe />
    </div>
  );
};

export default AreasWeServePage;