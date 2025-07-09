"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Building2 } from 'lucide-react';
import Image from 'next/image';
import SectionHeader from '../utils/SectionHeader';
import Link from 'next/link';

import aboutUs1 from "@/public/pages/home/aboutUs1.webp"; 
import aboutUs2 from "@/public/pages/home/aboutUs2.webp"; 
import aboutUs3 from "@/public/pages/home/aboutUs3.webp"; 
import aboutUs4 from "@/public/pages/home/aboutUs4.webp"; 

import MapleLeaf from '@/public/svg-ui/MapleLeaf.svg'; 

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true
    });
  }, []);

  return (
    <section className="pt-4 md:pt-4 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="relative mb-4 flex items-center gap-4 justify-center md:justify-start"  data-aos="fade-up">
          <div className="relative">
            <Image 
              src={MapleLeaf}
              alt="Canadian Maple Leaf"
              width={96}
              height={96}
              className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20"
              priority
            />
          </div>
          <div className=" text-primary-300 font-bold text-[16px] md:text-[24px] lg:text-[32px] text-center">
            A Proudly Canadian Company
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-stretch gap-12" data-aos="fade-up">
          {/* Images Section */}
          <div className="md:w-1/2 h-auto flex flex-col">

            {/* Custom Grid */}
            <div className="grid grid-cols-2 gap-6 h-[50vh] md:h-full w-full">
              {/* Left column */}
              <div className="grid grid-rows-3 gap-6 h-full">
                  <div className="row-span-2 relative overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-300">
                    <Image
                      src={aboutUs1}
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
                      src={aboutUs2}
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
                    src={aboutUs3}
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
                    src={aboutUs4}
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

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
                  A Full-Service <span className="text-primary-300">Property Services Company</span> 
                </h2>
              </div>

              <div className="text-gray-700 space-y-4 text-md md:text-lg text-center md:text-left">
                <p>
                  <span className="font-bold">Sentinel Maintenance Inc. (SMI)</span>, a proudly Canadian-owned property services company, is headquartered in Toronto, originally founded in Regina in 1989. Now operating across North America,  <span className="font-bold"> SMI delivers reliable, high-quality services including daily janitorial solutions, specialized cleaning, post-construction cleanups, and 24/7 emergency response.</span> With a focus on integrity, professionalism, and attention to detail, our experienced team ensures safe, clean, and well-maintained spaces, consistently upholding the values of reliability, quality, and integrity.
                </p>
                <p>
                  SMI takes pride in building long-term client relationships through consistent performance and personalized service. No matter the size or scope of the project, SMI brings the same commitment to excellence across every location they serve.
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="flex justify-center md:block">
                <Link href="/about-us" passHref>
                  <button 
                    className="cursor-pointer relative overflow-hidden group px-8 py-4 bg-primary-300 text-white font-medium shadow-lg transform transition-all duration-300 hover:scale-110"
                  >
                    <span className="relative z-10 flex items-center">
                      Learn More
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;