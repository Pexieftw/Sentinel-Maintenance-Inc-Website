"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Building2 } from 'lucide-react';
import Image from 'next/image';
import SectionHeader from '../utils/SectionHeader';

import aboutImage1 from "@/public/about1.jpg"; 
import aboutImage2 from "@/public/about2.jpg"; 
import aboutImage3 from "@/public/about3.jpg"; 
import aboutImage4 from "@/public/about4.jpg"; 


const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true
    });
  }, []);

  const handleReadMore = () => {
    window.location.href = '/about';
  };

  return (
    <section className="pt-10 md:pt-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-stretch gap-12" data-aos="fade-up">
          {/* Images Section */}
          <div className="md:w-1/2 h-auto flex">
            {/* Custom Grid */}
            <div className="grid grid-cols-2 gap-6 h-[50vh] md:h-full w-full">
              {/* Left column */}
              <div className="grid grid-rows-3 gap-6 h-full">
                <div className="row-span-2 relative overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-300">
                  <Image
                    src={aboutImage1}
                    alt="Modern Cleaning Interior"
                    placeholder="blur"
                    quality={100}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Third Image */}
                <div className="row-span-1 relative overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-300">
                  <Image
                    src={aboutImage3}
                    alt="Additional Cleaning Service"
                    placeholder="blur"
                    quality={100}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>

              {/* Right column */}
              <div className="grid grid-rows-3 gap-6 h-full">
                {/* Second Image */}
                <div className="row-span-1 relative overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-300">
                  <Image
                    src={aboutImage2}
                    alt="SMI Property Service"
                    placeholder="blur"
                    quality={100}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Fourth Image */}
                <div className="row-span-2 relative overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-300">
                  <Image
                    src={aboutImage4}
                    alt="Additional Cleaning Service"
                    placeholder="blur"
                    quality={100}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col h-full gap-4 lg:gap-8">
              <div>
                {/* Icon */}
                <SectionHeader
                  icon={<Building2 className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary-300" />} 
                  title="About Us"
                  description=""
                  position="start"
                  color="primary-300"
                />

                {/* Big text briefing */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
                  A Full-Service <span className="text-primary-300">Property Services Company</span> 
                </h2>
              </div>

              {/* Smaller text with details */}
              <div className="text-gray-700 space-y-4 text-md md:text-lg text-center md:text-left">
                <p>
                  Sentinel Maintenance Inc. (SMI) originated in Regina, Saskatchewan in 1989, with the Toronto office opening in 1991 and the Calgary office in 1993. Our network has expanded to include Vancouver, Las Vegas, Phoenix, and Stamford, CT serving the greater New York City area.
                </p>
                <p>
                  Our primary objective is to provide each client with high quality, conscientious and reliable service through our dedicated team of Owners, Managers, and support staff. We specialize in{' '}
                  <span className="font-bold">contract janitorial</span>,{' '}
                  <span className="font-bold">steam cleaning</span>,{' '}
                  <span className="font-bold">window washing</span>,{' '}
                  <span className="font-bold">construction clean-ups</span>,{' '}
                  <span className="font-bold">plumbing</span>,{' '}
                  <span className="font-bold">electrical</span>,{' '}
                  <span className="font-bold">small construction</span>, and{' '}
                  <span className="font-bold">emergency services</span>.
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="flex justify-center md:block">
                <button 
                  onClick={handleReadMore}
                  className="cursor-pointer relative overflow-hidden group px-8 py-4 bg-primary-300 text-white font-medium shadow-lg transform transition-all duration-300 hover:scale-110"
                >
                  <span className="relative z-10 flex items-center">
                    Learn More
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;