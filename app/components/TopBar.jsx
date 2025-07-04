"use client";

import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
  
export const topBarSections = [
  { 
    icon: <Phone className="stroke-current" size={16} />, 
    text: "+1 416-340-8765",
    href: "tel:+14163408765"
  },
  { 
    icon: <MapPin className="stroke-current" size={16} />, 
    text: "401 Richmond St W",
    href: "https://maps.google.com/?q=401+Richmond+St+W+%23222,+Toronto,+ON+M5V+3A8,+Canada"
  },
  { 
    icon: <Mail className="stroke-current" size={16} />, 
    text: "info@smi.ca",
    href: "mailto:info@smi.ca"
  }
];

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
                      {section.href ? (
                        <a 
                          href={section.href}
                          target={section.href.startsWith('https://maps.google.com') ? "_blank" : undefined}
                          rel={section.href.startsWith('https://maps.google.com') ? "noopener noreferrer" : undefined}
                          className={`text-xs font-medium ${isActive ? 'text-gray-800 hover:underline' : 'text-white'} transition-colors duration-300`}
                        >
                          {section.text}
                        </a>
                      ) : (
                        <span className={`text-xs font-medium ${isActive ? 'text-gray-800' : 'text-white'}`}>
                          {section.text}
                        </span>
                      )}
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
                  {section.href ? (
                    <a 
                      href={section.href}
                      target={section.href.startsWith('https://maps.google.com') ? "_blank" : undefined}
                      rel={section.href.startsWith('https://maps.google.com') ? "noopener noreferrer" : undefined}
                      className="ml-2 hover:underline transition-colors duration-300"
                    >
                      {section.text}
                    </a>
                  ) : (
                    <span className="ml-2">{section.text}</span>
                  )}
                </div>
                {index < topBarSections.length - 1 && (
                  <div className="h-4 w-px bg-white bg-opacity-50 mx-4"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Call us now button */}
          <a 
            href="tel:+14163408765" 
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