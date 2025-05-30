"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import skyScraper from "@/public/skyScraper.webp"; 


const Hero = () => {
  return (
    <div className=" relative py-8 w-full lg:h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={skyScraper}
          alt="Modern Cleaning Interior"
          className="w-full h-full object-cover"
          width={1920} 
          height={1080} 
          priority 
        />
        <div className="absolute inset-0 bg-primary-500 opacity-75"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          <h1 className="uppercase text-sm md:text-xl font-bold leading-tight mb-2 md:mb-4 text-emerald-500">
            A Property Services Company
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold px-2 leading-tight mb-6">
            Your Trusted Commerical Cleaning Partner Serving Toronto and the GTA
          </h1>
          <p className="text-lg md:text-xl mb-10 text-blue-100">
            Providing dependable, professional janitorial solutions, facility services, and emergency response—delivered with care since 1989.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
            <Link href="/services" className="w-[80%] md:w-auto border-2 border-primary-100 hover:border-primary-200 bg-primary-100 text-white hover:bg-primary-200 font-semibold py-3 px-6 transition-all duration-300 shadow-lg">
              Explore Our Services
            </Link>
            <Link href="/contact-us" className="w-[80%] md:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-800 font-semibold py-3 px-6 transition-all duration-300">
              Get A Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;