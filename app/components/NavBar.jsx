"use client";
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import Link from 'next/link';

import { services, navItems } from "../utils/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategoryTab, setActiveCategoryTab] = useState(null);

  return (
  <nav className="w-full max-w-6xl mx-auto bg-primary-300 shadow-md z-50 lg:absolute left-0 right-0 top-[66px] lg:top-[128px]">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between lg:justify-center h-20">


          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-4 items-center">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.link}
                  className="lg:flex text-white hover:bg-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>
                
                {/* Dropdown for Services */}
                {item.dropdown && activeDropdown === item.label && (
                  <div 
                    className="absolute left-[-316px] top-[36px] w-6xl bg-white shadow-lg"
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
                                href={`/services#service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                                className="flex justify-center items-center h-14 text-sm w-full text-center py-2 px-4 text-gray-700 bg-gray-100 rounded-md hover:bg-primary-400 hover:text-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
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
                                  href={`/services#service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="flex justify-center items-center h-14 text-sm w-full text-center py-2 px-4 text-gray-700 bg-gray-100 rounded-md hover:bg-primary-400 hover:text-white hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
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
                                  href={`/services#service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="flex justify-center items-center h-14 text-sm w-full text-center py-2 px-4 text-gray-700 bg-gray-100 rounded-md hover:bg-primary-400 hover:text-white hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
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
                                href={`/services#service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                                className="flex justify-center items-center h-14 text-sm w-full text-center py-2 px-4 text-gray-700 bg-gray-100 rounded-md hover:bg-primary-400 hover:text-white hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
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

          {/* Mobile Menu Button */}

          <div className="cursor-pointer lg:hidden items-center">
            <Link href="/">
              <img
                src="/icons/SMI-LOGO-MINI.svg"
                alt="SMI Logo"
                className="h-10 w-auto filter brightness-0 invert" 
              />
            </Link>
          </div>
          
          <div className="flex gap-4">

          <div className="lg:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-primary-300 bg-white hover:bg-gray-200 
                  focus:outline-none focus:ring-2 focus:ring-inset  cursor-pointer"
                aria-expanded={isMenuOpen}
              >
                <a href="tel:+14169184177">
                  <Phone className="block h-6 w-6" aria-hidden="true" />
                </a>
              </button>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-primary-300 bg-white hover:bg-gray-200 
                  focus:outline-none focus:ring-2 focus:ring-inset  cursor-pointer"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

          </div>


        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="h-full lg:hidden bg-primary-300 w-full top-42 left-0 right-0 shadow-lg">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className={`border-b border-primary-400 ${index === 0 ? 'border-t' : ''}`}
              style={{
                opacity: 0,
                animation: `fadeIn 0.3s ease-out forwards ${0.1 + index * 0.1}s`,
                transform: 'translateY(10px)',
                animationFillMode: 'forwards'
              }}
            >
              {item.dropdown ? (
                <div>
                  <div
                    className="px-4 py-3 text-white flex justify-center items-center hover:bg-primary-400 cursor-pointer transition duration-200"
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`ml-2 w-5 h-5 transform transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {activeDropdown === item.label && (
                    <div className="min-h-fit flex flex-col justify-center items-center bg-gray-50 p-4" 
                      style={{
                        animation: 'slideDown 0.3s ease-out forwards'
                      }}
                    >
                      {/* Service Categories */}
                      <div className="grid grid-cols-3 gap-2 w-full my-2">
                        {Object.keys(item.dropdown).map((category, catIndex) => (
                          <button
                            key={category}
                            className={`cursor-pointer py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 ${
                              activeCategoryTab === category
                                ? 'bg-primary-300 text-white shadow-md'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                            onClick={() => setActiveCategoryTab(activeCategoryTab === category ? null : category)}
                            style={{
                              animation: `fadeIn 0.3s ease-out forwards ${0.1 + catIndex * 0.1}s`
                            }}
                          >
                            {category}
                          </button>
                        ))}
                      </div>

                      {/* Service Items by Category */}
                      {Object.entries(item.dropdown).map(([category, services]) => (
                        <div 
                          key={category} 
                          className={`flex flex-col justify-center items-center transition-all duration-500`}
                        >
                          {activeCategoryTab === category && (
                            <ul className="space-y-2 w-full mt-4">
                              {/* Handle Specialized Services differently */}
                              {category === 'Specialized Services' ? (
                                <>
                                  {/* Render column1 */}
                                  {services.column1.map((service, serviceIndex) => (
                                    <li
                                      key={`col1-${serviceIndex}`}
                                      style={{
                                        opacity: 0,
                                        animation: `slideInRight 0.3s ease-out forwards ${serviceIndex * 0.05}s`
                                      }}
                                    >
                                      <Link 
                                        href={`/services#service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="block w-full text-center py-2 px-4 text-gray-700 bg-gray-100 rounded-md hover:bg-primary-400 hover:text-white hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {service}
                                      </Link>
                                    </li>
                                  ))}
                                  {/* Render column2 */}
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
                                        href={`/services#service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="block w-full text-center py-2 px-4 text-gray-700 bg-gray-100 rounded-md hover:bg-primary-400 hover:text-white hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {service}
                                      </Link>
                                    </li>
                                  ))}
                                </>
                              ) : (
                                // Handle other categories (Cleaning Services, Restoration)
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
                                      href={`/services#service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                                      className="block w-full text-center py-2 px-4 text-gray-700 bg-gray-100 rounded-md hover:bg-primary-400 hover:text-white hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {service}
                                    </Link>
                                  </li>
                                ))
                              )}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.link}
                  className="flex justify-center px-4 py-3 text-white hover:bg-primary-400 transition duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;