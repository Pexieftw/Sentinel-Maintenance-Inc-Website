"use"

import React from 'react';

const SectionDivider = ({ className = '', height = "h-20" }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className={`relative ${height} overflow-hidden`}>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute w-full h-full rotate-180"
        >
          <path 
            d="M0,40 C150,100 350,0 500,40 C650,80 700,20 850,30 C1000,40 1100,80 1200,40 L1200,120 L0,120 Z" 
            className="fill-primary-300"
          />
          
        </svg>
      </div>
    </div>
  );
};

export default SectionDivider;