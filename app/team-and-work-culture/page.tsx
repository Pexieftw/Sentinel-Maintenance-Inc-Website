"use client"

import React, { useEffect } from 'react';
import TeamworkCulture from "../pages/TeamworkCulture";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageTitle from '../utils/PageTitle';
const AreasWeServePage= () => {

  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: true,       
      easing: 'ease-out',
      offset: 100,  
    });
  }, []);
  

  return (
    <div className="">
      <PageTitle mytext="Teamwork & Work Culture" />
      <TeamworkCulture/>
    </div>
  );
};

export default AreasWeServePage;