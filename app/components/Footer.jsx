"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '../utils/data'; 

import SmiLogoMini from '@/public/icons/SMI-LOGO-MINI.svg';
import MapleLeaf from '@/public/svg-ui/MapleLeaf.svg'; 
const Footer = () => {
  const locations = [
    "Toronto", "North York", "Scarborough", "Etobicoke", "Vaughan", 
    "Thornhill", "Richmond Hill", "Markham", "Mississauga", "Brampton"
  ];

  const [showAllServices, setShowAllServices] = useState({
    'Cleaning Services': false,
    'Specialized Services': false,
    'Restoration': false,
  });

  const toggleShowMore = (category) => {
    setShowAllServices((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const getServices = (category, serviceList) => {
    if (category === 'Specialized Services') {
      return [...serviceList.column1, ...serviceList.column2];
    }
    return serviceList;
  };

  return (
    <footer className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-6 xl:px-0">
        {/* Company Info and Services Grid */}
        <div className="flex flex-col text-center md:grid md:grid-cols-6 md:gap-8 md:text-left">
          {/* Company Info - Left Side*/}
          <div className="md:col-span-2">
            <div className="md:pr-4 text-4xl font-bold flex items-center justify-center mb-6 md:justify-between gap-3">
              <Image
                src={SmiLogoMini}
                alt="Logo"
                width={96}
                height={40}
                className="brightness-0 invert"
              />
              <Image
                src={MapleLeaf}
                alt="Canadian Maple Leaf"
                width={40}
                height={40}
                className="hidden md:block brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Sentinel Maintenance Inc. (SMI) is a proudly 100% Canadian, full-service Property Services Company established in 1989. 
              Based in Canada and serving Canadian communities for over three decades
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
              <Link href="/blogs" className="text-gray-400 hover:text-white text-sm">
                Blogs
              </Link>
              <Link href="/faq" className="text-gray-400 hover:text-white text-sm">
                FAQ
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/contact-us" className="text-gray-400 hover:text-white text-sm">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-500 text-xs">
            <a target="_blank" href="https://www.smi.ca" className="hover:text-primary-100 transition-colors">SMI</a> | A Property Service Company Powered by <a target="_blank" href="https://miravisions.com" className="hover:text-primary-100 transition-colors">Mira Visions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;