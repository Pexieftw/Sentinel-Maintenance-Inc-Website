"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { areas } from "../utils/data";
import BreadCrumbsSection from '../utils/BreadCrumbsSection';



const AreasWeServe = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const totalSlides = areas.length;

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, totalSlides]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    pauseAutoPlay();
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    pauseAutoPlay();
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    pauseAutoPlay();
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  return (
    <>
      <BreadCrumbsSection 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Areas We Serve', href: '/areas-we-serve' },
        ]}
        imageSrc="/breadcrumbs-bg.jpg"
        imageAlt="Custom Cleaning Background"
      />
      <section className="py-16 bg-gradient-to-br">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">
              <span className="block mb-2">
                Wherever you are
              </span>
              
              <span className="mb-2">
                we're here to {" "}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary-100 to-primary-300">
                Help Out!
              </span>
            </h2>
          </div>

          <div 
            className="relative mb-4 overflow-hidden shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {areas.map((area, index) => (
                  <div key={index} className="min-w-full relative">
                    <div className="w-full h-72 md:h-96 lg:h-112 relative">
                      <Image
                        src={area.imageSrc}
                        alt={`${area.name} service area`}
                        fill
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                        className="brightness-90"
                        priority={index === activeIndex}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-primary-500/15"></div>
                    </div>

                    {/* Map Pin and Text */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="flex justify-center items-center gap-2 md:gap-4">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-200 text-white">
                          <MapPin size={24} />
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-white">{area.name}</h3>
                      </div>
                      <p className="text-sm md:text-lg text-white/90 mt-2">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows (Left and Right) */}
            <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
              <button
                onClick={handlePrev}
                className="cursor-pointer w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-primary-300 hover:bg-primary-300 hover:text-white transition-all duration-300 pointer-events-auto ml-4"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={handleNext}
                className="cursor-pointer w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-primary-300 hover:bg-primary-300 hover:text-white transition-all duration-300 pointer-events-auto mr-4"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots Container (Bottom) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
              {areas.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-10 bg-primary-100' : 'w-2 bg-gray-200'
                  }`}
                  aria-label={`Go to ${areas[index].name} slide`}
                />
              ))}
            </div>
          </div>

          {/* Cities Overview with Images */}
          <div 
            className="mt-16"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div 
              className="text-center mb-16"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">
                <span className="block mb-2">
                  Serving your area with a smile
                </span>
                
                <span className="mb-2">
                  because {" "}
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary-100 to-primary-300">
                  You Matter!
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area) => (
                <div 
                  key={area.name} 
                  className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-offset="200"
                >
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={area.imageSrc}
                      alt={`${area.name} service area`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-500/25 to-primary-300/0"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-300/40 to-transparent group-hover:from-primary-400/40 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/50 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-200 text-white mr-3 group-hover:scale-110 transition-transform duration-300">
                        <MapPin size={16} />
                      </div>
                      <h4 className="text-xl font-bold text-white group-hover:translate-x-1 transition-transform duration-300">{area.name}</h4>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AreasWeServe;