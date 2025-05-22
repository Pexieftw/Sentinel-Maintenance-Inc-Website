"use client"

import React, { useState } from 'react';
import Link from 'next/link'; 
import { Mail, Phone } from 'lucide-react';

import { faqs } from "../utils/data";

const FAQ = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const toggleAll = (expand) => {
    setExpandedSection(expand ? 'all' : null);
  };

  return (
    <div className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-0">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-primary-300 mb-4">Frequently Asked Questions</h2>
        <p className="text-primary-200 font-medium">Get answers to common questions about our services</p>
        
        <div className="mt-8 max-w-6xl mx-auto p-6">
          <p className="text-gray-700 leading-relaxed">
            Find quick answers to the most common questions about Sentinel Maintenance Inc.'s 
            cleaning and property maintenance services throughout the Greater Toronto Area. 
            Can't find what you're looking for? Contact us directly for personalized assistance.
          </p>
        </div>
      </div>

      <div className="flex justify-end mb-4 space-x-3">
        <button 
          onClick={() => toggleAll(true)}
          className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-primary-300 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-150"
        >
          Expand All
        </button>
        <button 
          onClick={() => toggleAll(false)}
          className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-primary-300 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-150"
        >
          Collapse All
        </button>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-primary-400 overflow-hidden transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
          >
            <button 
              onClick={() => toggleSection(index)}
              className="cursor-pointer w-full px-6 py-5 text-left bg-primary-300 hover:bg-primary-400 duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 flex justify-between items-center"
            >
              <span className="text-lg font-semibold text-white">{faq.question}</span>
              <svg 
                className={`w-6 h-6 text-white transform transition-transform duration-200 ${expandedSection === index || expandedSection === 'all' ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedSection === index || expandedSection === 'all' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 py-5 bg-white border-t border-primary-500">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-primary-400">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <Mail className="w-8 h-8 text-primary-300 mr-3" />
            <div>
              <p className="text-gray-800 font-medium">Still have questions?</p>
              <Link href="/contact-us" className="text-primary-300 hover:text-primary-400 font-bold">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <Phone className="w-8 h-8 text-primary-300 mr-3" />
            <div>
              <p className="text-gray-800 font-medium">Need immediate assistance?</p>
              <a href="tel:+14169184122" className="text-primary-300 hover:text-primary-400 font-bold">
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;