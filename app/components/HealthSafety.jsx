"use client"

import React, { useEffect } from 'react';
import { HeartPulse, Award, AlertTriangle, BookOpen, CheckCircle, ChevronRight, Lightbulb, Presentation, ShieldCheck } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import SectionHeader from '../utils/SectionHeader';

const HealthSafety = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="py-10 md:py-20" data-aos="fade-up">
      <div className="w-full max-w-7xl container mx-auto px-4">
        {/* Icon */}
        <SectionHeader
          icon={<HeartPulse className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary-300" />} 
          title="Health & Safety"
          description="Ensuring Safety and Compliance"
          position="center"
          color="primary-300"
        />
        
        {/* Main content area */}
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          {/* Left column - Understanding */}
          <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="300">
            <div className="rounded-t-xl  bg-text overflow-hidden shadow-xl h-full">
              <div className="p-1 bg-gradient-to-r from-primary-400 to-primary-100"></div>
              <div className="p-8">
                <div className="flex items-center">
                  <Lightbulb className="w-12 h-12 text-primary-300" />
                  <div className="ml-4">
                    <span className="uppercase text-xs font-bold tracking-wider text-primary-400">Section 3.A</span>
                    <h3 className="text-3xl font-bold text-primary-300">Understanding</h3>
                  </div>
                </div>
                
                <div className="mt-8 space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-300 mt-1 flex-shrink-0" />
                    <p className="ml-4 text-gray-700 ">
                      WHMIS is integral to the day-to-day operations of every jobsite, both legally and personally.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-300 mt-1 flex-shrink-0" />
                    <p className="ml-4 text-gray-700 ">
                      The safety of all SMI employees and the protection of client's property and staff is our primary concern.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-300 mt-1 flex-shrink-0" />
                    <p className="ml-4 text-gray-700 ">
                      We provide all necessary labels, MSDS sheets, and protective equipment to adhere to WHMIS guidelines.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button className="cursor-pointer flex items-center text-primary-300 font-semibold hover:underline">
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Training */}
          <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="300">
            <div className="rounded-t-xl  bg-white overflow-hidden shadow-xl h-full">
              <div className="p-1 bg-gradient-to-r from-primary-100 to-primary-400"></div>
              <div className="p-8">
                <div className="flex items-center">
                  <Presentation className="w-12 h-12 text-primary-300" />
                  <div className="ml-4">
                    <span className="uppercase text-xs font-bold tracking-wider text-primary-400">Section 3.B</span>
                    <h3 className="text-3xl font-bold text-primary-300">Training</h3>
                  </div>
                </div>
                
                <div className="mt-8 space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-300 mt-1 flex-shrink-0" />
                    <p className="ml-4 text-gray-700">
                      All employees must complete WHMIS training with a minimum 80% score.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-300 mt-1 flex-shrink-0" />
                    <p className="ml-4 text-gray-700">
                      Each employee must understand MSDS sheets, product labels, chemical handling, and proper protective attire.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-300 mt-1 flex-shrink-0" />
                    <p className="ml-4 text-gray-700">
                      Employees receive a "Certificate of Completion" with copies available to Management and Occupational Health & Safety.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button className="cursor-pointer flex items-center text-primary-300 font-semibold hover:underline">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-primary-300 bg-opacity-20 backdrop-filter backdrop-blur-lg p-6">
            <div className="flex justify-between items-start">
              <ShieldCheck className="w-10 h-10 text-white" />
              <span className="text-4xl font-bold text-white">
                100%
              </span>
            </div>
            <p className="text-white mt-4 font-medium">Safety Compliance</p>
          </div>
          
          <div className="bg-primary-300 bg-opacity-20 backdrop-filter backdrop-blur-lg p-6">
            <div className="flex justify-between items-start">
              <Award className="w-10 h-10 text-white" />
              <span className="text-4xl font-bold text-white">
                80%
              </span>
            </div>
            <p className="text-white mt-4 font-medium">Minimum Score Required</p>
          </div>
          
          <div className="bg-primary-300 bg-opacity-20 backdrop-filter backdrop-blur-lg p-6">
            <div className="flex justify-between items-start">
              <AlertTriangle className="w-10 h-10 text-white" />
              <span className="text-4xl font-bold text-white">
                24/7
              </span>
            </div>
            <p className="text-white mt-4 font-medium">Hazard Prevention</p>
          </div>
          
          <div className="bg-primary-300 bg-opacity-20 backdrop-filter backdrop-blur-lg p-6">
            <div className="flex justify-between items-start">
              <BookOpen className="w-10 h-10 text-white" />
              <span className="text-4xl font-bold text-white">
                100%
              </span>
            </div>
            <p className="text-white mt-4 font-medium">Documentation Coverage</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthSafety;