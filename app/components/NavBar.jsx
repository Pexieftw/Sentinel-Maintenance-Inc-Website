"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import smiLogo from '@/public/icons/SMI-NEW-FONT.svg';

import { services, navItems } from "../utils/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategoryTab, setActiveCategoryTab] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      const navbarPosition = currentScrollPos < 52 ? 52 : 0;
      
      // Set visibility based on scroll direction
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 52);
      
      // Update the navbar position style
      document.documentElement.style.setProperty('--navbar-top', `${navbarPosition}px`);
      
      setPrevScrollPos(currentScrollPos);
    };
  
    // Set initial position based on initial scroll position
    const initialScrollPos = window.scrollY;
    const initialPosition = initialScrollPos < 52 ? 52 : 0;
    document.documentElement.style.setProperty('--navbar-top', `${initialPosition}px`);
  
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  return (
    <>
      {!isMenuOpen && (
        <nav 
          className={`w-full bg-white shadow-md z-40 fixed left-0 right-0 transition-all duration-300 ease-in-out ${
            visible ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{ top: 'var(--navbar-top)' }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="relative flex items-center h-20 px-4 lg:px-0">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src={smiLogo}
                    alt="SMI Logo"
                    width={121}
                    height={56} 
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex flex-1 justify-end items-center h-full">
                {navItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="group h-full flex items-center"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.link}
                      className="flex text-gray-800 hover:text-primary-500 px-4 h-full items-center text-sm font-medium transition-colors duration-300 hover:bg-gray-50"
                    >
                      {item.label}
                      {item.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                    </Link>
                    {/* Dropdown for Services */}
                    {item.dropdown && activeDropdown === item.label && (
                      <div 
                        className="absolute left-0 top-20 w-6xl bg-white shadow-lg border border-gray-200"
                        style={{
                          animation: 'fadeIn 0.5s ease-out forwards'
                        }}
                      >
                        <div className="grid grid-cols-4 divide-x divide-gray-200">
                          {/* Cleaning Services Column */}
                          <div className="p-4">
                            <h3 className="text-xl uppercase font-bold text-primary-500 mb-3 text-center">Cleaning Services</h3>
                            <ul className="space-y-1">
                              {services['Cleaning Services'].map((service, index) => (
                                <li 
                                  key={index}
                                  style={{
                                    opacity: 0,
                                    animation: `slideIn 0.3s ease-out forwards ${0.1 + index * 0.05}s`
                                  }}
                                >
                                  <Link 
                                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                    className="flex justify-center items-center h-14 text-sm w-full text-center py-2 px-4 text-gray-700 bg-gray-50 hover:bg-primary-400 hover:text-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                                  >
                                    {service}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Specialized Services Column */}
                          <div className="p-4 col-span-2">
                            <h3 className="text-xl uppercase font-bold text-primary-500 mb-3 text-center">Specialized Services</h3>
                            <div className="grid grid-cols-2 gap-4">
                              <ul className="space-y-1">
                                {services['Specialized Services'].column1.map((service, index) => (
                                  <li 
                                    key={index}
                                    style={{
                                      opacity: 0,
                                      animation: `slideIn 0.3s ease-out forwards ${0.3 + index * 0.05}s`
                                    }}
                                  >
                                    <Link 
                                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                      className="flex justify-center items-center h-14 text-sm w-full text-center py-2 px-4 text-gray-700 bg-gray-50 hover:bg-primary-400 hover:text-white hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
                                    >
                                      {service}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              <ul className="space-y-1">
                                {services['Specialized Services'].column2.map((service, index) => (
                                  <li 
                                    key={index}
                                    style={{
                                      opacity: 0,
                                      animation: `slideIn 0.3s ease-out forwards ${0.3 + index * 0.05}s`
                                    }}
                                  >
                                    <Link 
                                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                      className="flex justify-center items-center h-14 text-sm w-full text-center py-2 px-4 text-gray-700 bg-gray-50 hover:bg-primary-400 hover:text-white hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
                                    >
                                      {service}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          {/* Restoration Column */}
                          <div className="p-4">
                            <h3 className="text-xl uppercase font-bold text-primary-500 mb-3 text-center">Restoration</h3>
                            <ul className="space-y-1">
                              {services['Restoration'].map((service, index) => (
                                <li 
                                  key={index}
                                  style={{
                                    opacity: 0,
                                    animation: `slideIn 0.3s ease-out forwards ${0.5 + index * 0.05}s`
                                  }}
                                >
                                  <Link 
                                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                    className="flex justify-center items-center h-14 text-sm w-full text-center py-2 px-4 text-gray-700 bg-gray-50 hover:bg-primary-400 hover:text-white hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
                                  >
                                    {service}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Menu Buttons*/}
              <div className="flex lg:hidden items-center gap-4 ml-auto">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-3 bg-primary-300 text-white hover:bg-primary-400 
                    focus:outline-none focus:ring-2 focus:ring-inset cursor-pointer"
                  aria-expanded={isMenuOpen}
                >
                  <a href="tel:+14169184177">
                    <Phone className="block h-6 w-6" aria-hidden="true" />
                  </a>
                </button>

                <button
                  onClick={() => setIsMenuOpen(true)}
                  type="button"
                  className="inline-flex items-center justify-center p-3 bg-primary-300 text-white hover:bg-primary-400 
                    focus:outline-none focus:ring-2 focus:ring-inset cursor-pointer"
                  aria-expanded={isMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden bg-white"
          style={{
            animation: 'slideInFromRight 0.3s ease-out forwards'
          }}
        >
          <div className="h-full flex flex-col">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Image
                    src={smiLogo}
                    alt="SMI Logo"
                    width={100}
                    height={46}
                  />
                </Link>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 hover:text-primary-500 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Content - Scrollable Area */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="border-b border-gray-200 py-2"
                    style={{
                      opacity: 0,
                      transform: 'translateX(20px)',
                      animation: `slideInFromRight 0.3s ease-out forwards ${index * 0.05}s`
                    }}
                  >
                    {item.dropdown ? (
                      <div>
                        <div
                          className="px-4 py-3 text-gray-800 flex justify-center items-center hover:bg-gray-100 cursor-pointer transition duration-200 rounded-md"
                          onClick={() => {
                            setActiveDropdown(activeDropdown === item.label ? null : item.label);
                            // Set first category as active by default when opening dropdown
                            if (activeDropdown !== item.label && item.dropdown) {
                              setActiveCategoryTab(Object.keys(item.dropdown)[0]);
                            }
                          }}
                        >
                          <span className="font-medium text-lg">{item.label}</span>
                          <ChevronDown
                            className={`ml-2 w-5 h-5 transform transition-transform duration-300 ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </div>

                        {activeDropdown === item.label && (
                          <div className="bg-gray-50 p-4 rounded-lg mt-2 overflow-x-hidden" 
                            style={{
                              animation: 'slideDown 0.4s ease-out forwards'
                            }}
                          >
                            <div className="grid grid-cols-3 gap-2 w-full mb-4 overflow-x-hidden">
                              {Object.keys(item.dropdown).map((category, catIndex) => (
                                <button
                                  key={category}
                                  className={`cursor-pointer py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 overflow-x-hidden ${
                                    activeCategoryTab === category
                                      ? 'bg-primary-500 text-white shadow-md'
                                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                  }`}
                                  onClick={() => setActiveCategoryTab(category)}
                                  style={{
                                    opacity: 0,
                                    animation: `fadeIn 0.3s ease-out forwards ${0.2 + catIndex * 0.1}s`
                                  }}
                                >
                                  {category}
                                </button>
                              ))}
                            </div>

                            <div className="">
                              {Object.entries(item.dropdown).map(([category, services]) => (
                                <div 
                                  key={category} 
                                  className={`w-full transition-all duration-300 ${activeCategoryTab === category ? 'block' : 'hidden'}`}
                                >
                                  <ul className="space-y-2 w-full">
                                    {category === 'Specialized Services' ? (
                                      <>
                                        {services.column1.map((service, serviceIndex) => (
                                          <li
                                            key={`col1-${serviceIndex}`}
                                            style={{
                                              opacity: 0,
                                              animation: `slideInRight 0.3s ease-out forwards ${serviceIndex * 0.05}s`
                                            }}
                                          >
                                            <Link 
                                              href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                              className="block w-full text-center py-3 px-4 text-gray-700 bg-white rounded-md hover:bg-primary-500 hover:text-white hover:shadow-md transition-all duration-200"
                                              onClick={() => setIsMenuOpen(false)}
                                            >
                                              {service}
                                            </Link>
                                          </li>
                                        ))}
                                        {services.column2.map((service, serviceIndex) => (
                                          <li
                                            key={`col2-${serviceIndex}`}
                                            className="w-full"
                                            style={{
                                              opacity: 0,
                                              animation: `slideInRight 0.3s ease-out forwards ${(services.column1.length + serviceIndex) * 0.05}s`
                                            }}
                                          >
                                            <Link 
                                              href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                              className="block w-full text-center py-3 px-4 text-gray-700 bg-white rounded-md hover:bg-primary-500 hover:text-white hover:shadow-md transition-all duration-200"
                                              onClick={() => setIsMenuOpen(false)}
                                            >
                                              {service}
                                            </Link>
                                          </li>
                                        ))}
                                      </>
                                    ) : (
                                      services.map((service, serviceIndex) => (
                                        <li
                                          key={serviceIndex}
                                          className="w-full"
                                          style={{
                                            opacity: 0,
                                            animation: `slideInRight 0.3s ease-out forwards ${serviceIndex * 0.05}s`
                                          }}
                                        >
                                          <Link 
                                            href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                            className="block w-full text-center py-3 px-4 text-gray-700 bg-white rounded-md hover:bg-primary-500 hover:text-white hover:shadow-md transition-all duration-200"
                                            onClick={() => setIsMenuOpen(false)}
                                          >
                                            {service}
                                          </Link>
                                        </li>
                                      ))
                                    )}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.link}
                        className="flex justify-center px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-100 transition duration-200 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;