"use client"

import React, { useEffect, useState, useRef } from 'react';
import { MessageSquare, Users, Handshake, Target, BriefcaseBusiness } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import SectionHeader from '../utils/SectionHeader';

const ModernTeamworkSection = () => {
  const teamworkPoints = [
    {
      icon: <MessageSquare className="w-8 h-8 text-primary-500" />,
      title: "Communication",
      content: "The single most important factor in our service. We maintain ongoing client contact, ensure daily employee communication, and remain accessible 24/7."
    },
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      title: "Management Back Up",
      content: "Experienced management provides immediate backup to our supervisory team, ensuring clients always have adequate labour and support."
    },
    {
      icon: <Handshake className="w-8 h-8 text-primary-500" />,
      title: "Cooperation",
      content: "We believe cooperation with site management is essential. We act immediately on concerns to maintain our long-term client relationships."
    },
    {
      icon: <Target className="w-8 h-8 text-primary-500" />,
      title: "Commitment",
      content: "We're all in this together, participating equally to provide continuous improvements and attain the highest possible standards."
    }
  ];

  // Line animation state
  const sectionRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);
  const maxLineHeightRef = useRef(0);

  // Handle scroll for line animation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled into the section
      const scrolledIntoSection = windowHeight - sectionTop;
      
      // Calculate percentage scrolled (0 to 1)
      let percentScrolled = scrolledIntoSection / sectionHeight;
      
      // Clamp values between 0 and 100
      percentScrolled = Math.max(0, Math.min(1, percentScrolled));
      
      // Only update if the new value is larger than the previous maximum
      if (percentScrolled > maxLineHeightRef.current) {
        maxLineHeightRef.current = percentScrolled;
        setLineHeight(percentScrolled * 100);
      }
    };

    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true, // This ensures AOS animations only happen once
    });

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-primary-300">
      <div className="container mx-auto px-4">

        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          {/* Icon */}
          <SectionHeader
            icon={<BriefcaseBusiness  className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />} 
            title="Teamwork & Work Culture"
            description="Explore our range of services below"
            position="center"
            color="white"
          />


        </div>
        
        {/* Teamwork Points Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div 
            className="absolute hidden md:block left-1/2 top-0 w-1 bg-white transform -translate-x-1/2 z-0 origin-top" 
            style={{ height: `${lineHeight}%`, transition: 'height 0.3s ease-out' }}
          ></div>
          
          {teamworkPoints.map((point, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center mb-24 last:mb-0 relative z-10`}>
              {/* For odd indexes (0, 2) - left side content */}
              {index % 2 === 0 ? (
                <>
                  <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12" data-aos="fade-right" data-aos-delay={index * 200} data-aos-once="true">
                    <div className="bg-white p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <div className="flex items-center mb-4">
                        {point.icon}
                        <h3 className="text-2xl font-bold ml-3 text-primary-500">{point.title}</h3>
                      </div>
                      <p className="text-gray-700">{point.content}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center items-center w-12 h-12 bg-white rounded-full" data-aos="zoom-in" data-aos-delay={index * 200 + 100} data-aos-once="true">
                    {index+1}
                  </div>
                  <div className="w-full md:w-1/2"></div>
                </>
              ) : (
                /* For even indexes (1, 3) - right side content */
                <>
                  <div className="w-full md:w-1/2"></div>
                  <div className="hidden md:flex justify-center items-center w-12 h-12 bg-white rounded-full" data-aos="zoom-in" data-aos-delay={index * 200 + 100} data-aos-once="true">
                    {index+1}
                  </div>
                  <div className="w-full md:w-1/2 md:pl-12" data-aos="fade-left" data-aos-delay={index * 200} data-aos-once="true">
                    <div className="bg-white p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <div className="flex items-center mb-4">
                        {point.icon}
                        <h3 className="text-2xl font-bold ml-3 text-primary-500">{point.title}</h3>
                      </div>
                      <p className="text-gray-700">{point.content}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Button Section */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-once="true">
          <Link href="/team-and-work-culture" className="flex justify-center items-center">
            <button className="flex justify-center items-center cursor-pointer bg-white text-primary-500 font-semibold py-3 px-8 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
              Learn More
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ModernTeamworkSection;