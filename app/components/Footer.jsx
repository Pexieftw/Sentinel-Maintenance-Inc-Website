"use client";

import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Import Lucide icons
import Link from 'next/link';
import Image from 'next/image';
import { services } from '../utils/data'; // Import the services object

const Footer = () => {
  const locations = [
    "Toronto", "North York", "Scarborough", "Etobicoke", "Vaughan", 
    "Thornhill", "Richmond Hill", "Markham", "Mississauga", "Brampton"
  ];

  // State to track whether to show all services for each category
  const [showAllServices, setShowAllServices] = useState({
    'Cleaning Services': false,
    'Specialized Services': false,
    'Restoration': false,
  });

  // Function to toggle "Show More" for a specific category
  const toggleShowMore = (category) => {
    setShowAllServices((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Helper function to get services for a category
  const getServices = (category, serviceList) => {
    if (category === 'Specialized Services') {
      // Combine column1 and column2 for Specialized Services
      return [...serviceList.column1, ...serviceList.column2];
    }
    return serviceList; // For other categories, return the array directly
  };

  return (
    <footer className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        {/* Company Info and Services Grid */}
        <div className="flex flex-col text-center md:grid md:grid-cols-6 md:gap-8 md:text-left">
          {/* Company Info - Left Side (2 columns on md screens) */}
          <div className="md:col-span-2">
            <div className="text-4xl font-bold flex items-center justify-center mb-6 md:justify-start">
              <Image
                src="/icons/SMI-LOGO-MINI.svg" // Path to your green logo
                alt="Logo"
                width={96} // Set the width
                height={96} // Set the height
                className="brightness-0 invert" // Apply Tailwind filters
              />
            </div>
            <p className="text-gray-300 mb-4">
              Sentinel Maintenance Inc. (SMI) is a full-service Property Services Company established in 1989. 
              We provide high quality, conscientious and reliable service through our dedicated team.
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">Areas Serviced</h3>
              <div className="grid grid-cols-3 gap-2">
                {locations.slice(0, 6).map((location, index) => (
                  <span key={index} className="text-gray-400 text-sm mb-2">
                    {location}
                  </span>
                ))}
              </div>
              <Link href="/areas-we-serve" className="font-bold text-primary-100 text-sm hover:underline mt-2 inline-block">
                View all locations →
              </Link>
            </div>
          </div>

          {/* Services - Right Side (3 columns on md screens) */}
          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 md:mt-0">
            {Object.entries(services).map(([category, serviceList]) => {
              // Get the services for the category
              const allServices = getServices(category, serviceList);

              // Determine whether to show all services or only the first 6
              const servicesToShow = showAllServices[category]
                ? allServices
                : allServices.slice(0, 8);

              return (
                <div key={category} className="text-center md:text-left">
                  <h3 className="text-lg font-semibold mb-4 text-gray-100">{category}</h3>
                  <ul>
                    {servicesToShow.map((service, index) => (
                      <li key={index} className="mb-2">
                        <Link href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-primary-100 text-sm transition-colors">
                          {service}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {allServices.length > 8 && (
                    <button
                      onClick={() => toggleShowMore(category)}
                      className="cursor-pointer text-primary-100 font-bold text-sm hover:underline mt-2"
                    >
                      {showAllServices[category] ? 'Show Less' : 'Show More'}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Sentinel Maintenance Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/contact-us" className="text-gray-400 hover:text-white text-sm">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-500 text-xs">
            <a href="https://www.smi.ca" className="hover:text-primary-100 transition-colors">www.smi.ca</a> | A Property Service Company Powered by Mira Visions
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;