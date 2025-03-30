"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HealthSafety from '../pages/HealthSafety';
import PageTitle from '../utils/PageTitle';

const HealthSafetyPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
      offset: 100,
    });
  }, []);

  return (
    <div className="">
      <PageTitle mytext="Health & Safety" />
      <HealthSafety/>
    </div>
  );
};

export default HealthSafetyPage;