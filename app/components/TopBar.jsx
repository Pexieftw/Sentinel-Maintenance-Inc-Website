"use client";

import React, { useState, useEffect } from 'react';
import { Building2, Info, MapPin, Mail } from 'lucide-react';

const TopBar = () => {

  const [activeSection, setActiveSection] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3);
    }, 3000); // Change active section every 3 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const sections = [
    { 
      icon: <Building2 className="stroke-current" />, 
      text: "Sentinel Maintenance Inc", 
    },
    { 
      icon: <MapPin className="stroke-current" />, 
      text: "401 Richemond St", 
    },
    { 
      icon: <Mail className="stroke-current" />, 
      text: "info@smi.ca", 
    }
  ];

  return (
    <div className="flex justify-center items-center lg:mb-[40px] py-0 md:py-6 lg:py-10 lg:px-0">
      <div className="w-full max-w-6xl mx-auto flex justify-center lg:justify-between items-center">
        
        {/* Logo Section */}
        <div className="hidden lg:flex items-center">
          <img
            src="/SMI-LOGO-MINI.svg" 
            alt="SMI Logo"
            className="h-12 w-auto" 
          />
        </div>

        {/* Informations Section */}
        <div className="hidden md:flex justify-center items-center space-x-4 ">
          <div className="flex items-center space-x-2">
            <Info className="w-5 h-5 text-primary-200" />
            <span className="text-sm">Sentinel Maintenance Inc</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-primary-200" />
            <span className="text-sm">401 Richemond St</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-primary-200" />
            <span className="text-sm">info@smi.ca</span>
          </div>
        </div>


        <div className="md:hidden w-full border-b-2 border-primary-400 shadow-lg">
          <div className="flex items-center justify-between">
            {sections.map((section, index) => {
              const isActive = activeSection === index;
              return (
                <div 
                  key={index} 
                  className={`relative transition-all duration-700 ease-out flex items-center ${
                    isActive ? 'w-3/5' : 'w-1/5'
                  }`}
                >
                  <div 
                    className={`
                      relative flex items-center justify-center
                      w-full h-16
                      ${isActive 
                        ? `bg-primary-300 pl-3 pr-4` 
                        : 'bg-white px-3'
                      }
                      transition-all duration-500
                    `}
                  >
                    <div className={`
                      flex-shrink-0 rounded-full ${isActive ? 'text-white' : 'text-gray-800'}
                      ${isActive ? '' : 'scale-90'}
                      transition-transform duration-300
                    `}>
                      {section.icon}
                    </div>
                    
                    <div className={`
                      ml-2 whitespace-nowrap overflow-hidden transition-all duration-500
                      ${isActive ? 'max-w-full opacity-100' : 'max-w-0 opacity-0'}
                    `}>
                      <span className="text-sm font-medium text-white">{section.text}</span>
                    </div>
      
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* CTA Button - Hidden on Mobile */}
        <div className="hidden lg:flex items-center">
          <a
            href="tel:+14169184122"
            className="bg-primary-200 text-white px-6 py-2 hover:bg-primary-300 transition"
          >
            Call us now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;