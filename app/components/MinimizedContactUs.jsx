"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const MinimizedContactUs = () => {
  return (
    <section className="bg-gradient-to-b from-slate-100 to-white pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="bg-primary-300 shadow-xl overflow-hidden">
          <div className="relative z-10 px-6 py-12 md:p-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between relative z-10">
              <div className="mb-8 md:mb-0 md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's discuss your project</h2>
                <p className="text-green-50 text-lg max-w-2xl">
                  Our dedicated team of property maintenance experts is ready to help you maintain 
                  your property to the highest standards. Get in touch today.
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <Link 
                  href="/contact-us" 
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-800 font-bold rounded-lg text-lg transition-all hover:bg-gray-100 hover:shadow-lg duration-300 group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimizedContactUs;