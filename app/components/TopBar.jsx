"use client";

import React, { useState, useEffect } from 'react';
import { topBarSections } from '../utils/data';

const TopBar = () => {
  const [activeSection, setActiveSection] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary-300 text-white text-sm">
      <div className="w-full max-w-7xl mx-auto">
        {/* Mobile View */}
        <div className="md:hidden w-full">
          <div className="flex items-center justify-between">
            {topBarSections.map((section, index) => {
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
                      w-full h-8
                      ${isActive 
                        ? `bg-white px-2 pb-7 pt-6 text-gray-800` 
                        : 'bg-primary-300 px-2 pb-7 pt-6 text-white'
                      }
                      transition-all duration-500
                    `}
                  >
                    <div className={`
                      flex-shrink-0 rounded-full
                      ${isActive ? 'text-gray-800' : 'text-white'}
                      ${isActive ? '' : 'scale-90'}
                      transition-transform duration-300
                    `}>
                      {section.icon}
                    </div>
                    
                    <div className={`
                      ml-2 whitespace-nowrap overflow-hidden transition-all duration-500
                      ${isActive ? 'max-w-full opacity-100' : 'max-w-0 opacity-0'}
                    `}>
                      <span className={`text-xs font-medium ${isActive ? 'text-gray-800' : 'text-white'}`}>
                        {section.text}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center px-4 lg:px-0">
          <div className="flex items-center">
            {topBarSections.map((section, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center py-4">
                  {section.icon}
                  <span className="ml-2">{section.text}</span>
                </div>
                {index < topBarSections.length - 1 && (
                  <div className="h-4 w-px bg-white bg-opacity-50 mx-4"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Call us now button */}

          <a 
            href="tel:+14169184122" 
            className="border-2 border-white text-white hover:bg-white hover:text-gray-800 font-medium transition-all duration-300 py-1.5 px-4 "
          >
            Call us now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;