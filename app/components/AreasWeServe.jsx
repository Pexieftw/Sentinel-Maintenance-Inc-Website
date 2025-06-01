"use client";

import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapPin, Navigation } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GTA_CITIES } from "../utils/data";
import dynamic from "next/dynamic";
import SectionHeader from '../utils/SectionHeader';

const CanadaMap = dynamic(() => import("../utils/CanadaMap"), {
  ssr: false, 
});

const cities = GTA_CITIES.map(city => city.name);

const AreasWeServe = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);


  return (
    <div className="h-7xl bg-gradient-to-b from-white to-slate-100 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-0 max-w-7xl md:max-w-7xl relative z-10">

        {/* Icon */}
        <SectionHeader
          icon={<MapPin className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary-300" />} 
          title="Areas We Serve"
          description="Serving the Greater Toronto Area"
          position="center"
          color="primary-300"
        />

        {/* Scrolling cities */}
        <div className="my-8 overflow-hidden bg-primary-300 shadow-lg" data-aos="fade-up" data-aos-delay="600">
          <div className="relative flex py-4">
            <div className="animate-marquee whitespace-nowrap flex items-center">
              {[...cities, ...cities].map((city, index) => (
                <span key={index} className="mx-4 text-white font-medium">
                  {city} <span className="text-primary-100 ml-6">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div data-aos="zoom-in" data-aos-delay="400">
          <CanadaMap />
        </div>
        
        <div className="mt-4 text-md text-gray-500 text-center" data-aos="fade-up" data-aos-delay="500">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Navigation size={16} className="text-primary-300" />
            <span>Click on any marker to see location details</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AreasWeServe;