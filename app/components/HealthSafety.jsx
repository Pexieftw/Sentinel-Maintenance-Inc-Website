"use client"

import React, { useEffect } from 'react';
import { HeartPulse, AlertTriangle, BookOpen, CheckCircle, ChevronRight, Lightbulb, Presentation, ShieldCheck, UsersRound, Star } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import SectionHeader from '../utils/SectionHeader';
import Link from 'next/link';

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
      <div className="w-full max-w-7xl container mx-auto px-4 lg:px-0">
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
            <div className="rounded-t-xl bg-text overflow-hidden shadow-xl h-full">
              <div className="p-1 bg-gradient-to-r from-primary-400 to-primary-100"></div>
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center">
                  <Lightbulb className="w-12 h-12 text-primary-300" />
                  <div className="ml-4">
                    <span className="uppercase text-xs font-bold tracking-wider text-primary-400">Section 3.A</span>
                    <h3 className="text-3xl font-bold text-primary-300">Understanding</h3>
                  </div>
                </div>
                
                <div className="mt-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="flex items-start h-24">
                    <CheckCircle className="w-6 h-6 text-primary-300 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <span className="font-bold block text-lg text-primary-300">Thorough Training Programs</span>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        All on-site staff and subcontractors are trained in essential safety protocols, including WHMIS, Worker and Supervisor Health & Safety Awareness, and Working at Heights certification.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start h-24">
                    <CheckCircle className="w-6 h-6 text-primary-300 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <span className="font-bold block text-lg text-primary-300">Built-in Safety Culture</span>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Safety isn't just a checklist—it's a core part of our daily operations, embedded in our work culture to protect employees, clients, and every property we service.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start h-24">
                    <CheckCircle className="w-6 h-6 text-primary-300 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <span className="font-bold block text-lg text-primary-300">Specialized Safety Certifications</span>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Key team members receive additional training in lift operation, scaffold use, and other site-specific safety requirements.
                      </p>
                    </div>
                  </div>
                </div>
                                
                <div className="mt-8 flex justify-end">
                  <Link
                    href="/health-and-safety"
                    className="cursor-pointer flex items-center text-primary-300 font-semibold hover:underline"
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Training */}
          <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="300">
            <div className="rounded-t-xl bg-white overflow-hidden shadow-xl h-full">
              <div className="p-1 bg-gradient-to-r from-primary-100 to-primary-400"></div>
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center">
                  <Presentation className="w-12 h-12 text-primary-300" />
                  <div className="ml-4">
                    <span className="uppercase text-xs font-bold tracking-wider text-primary-400">Section 3.B</span>
                    <h3 className="text-3xl font-bold text-primary-300">Training</h3>
                  </div>
                </div>
                
                <div className="mt-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="flex items-start h-24">
                    <CheckCircle className="w-6 h-6 text-primary-300 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <span className="font-bold block text-lg text-primary-300">Mandatory Onboarding for All Staff</span>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Every team member and subcontractor begins with comprehensive safety training, including WHMIS, Worker and Supervisor Health & Safety Awareness, and Working at Heights (where applicable).
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start h-24">
                    <CheckCircle className="w-6 h-6 text-primary-300 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <span className="font-bold block text-lg text-primary-300">Proactive Certification Management</span>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        We monitor and renew all safety certifications on a strict schedule to ensure every worker remains up to date with evolving safety standards and legal requirements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start h-24">
                    <CheckCircle className="w-6 h-6 text-primary-300 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <span className="font-bold block text-lg text-primary-300">Centralized Tracking & Oversight</span>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Our leadership team uses a dedicated system to manage training records, track certification expiries.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <Link
                    href="/health-and-safety"
                    className="cursor-pointer flex items-center text-primary-300 font-semibold hover:underline"
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-primary-300 bg-opacity-20 backdrop-filter backdrop-blur-lg p-6">
            <div className="flex justify-between items-start">
              <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-white" />
              <span className="text-3xl md:text-4xl font-bold text-white">
                100%
              </span>
            </div>
            <p className="text-white mt-4 font-medium">Fully Compliant</p>
          </div>
          
          <div className="bg-primary-300 bg-opacity-20 backdrop-filter backdrop-blur-lg p-6">
            <div className="flex justify-between items-start">
              <UsersRound className="w-8 h-8 md:w-10 md:h-10 text-white" />
              <span className="text-3xl md:text-4xl font-bold text-white">
                50+
              </span>
            </div>
            <p className="text-white mt-4 font-medium">Certified & Qualified Staff</p>
          </div>
          
          <div className="bg-primary-300 bg-opacity-20 backdrop-filter backdrop-blur-lg p-6">
            <div className="flex justify-between items-start">
              <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-white" />
              <span className="text-3xl md:text-4xl font-bold text-white">
                24/7
              </span>
            </div>
            <p className="text-white mt-4 font-medium">Hazard Monitoring</p>
          </div>
          
          <div className="bg-primary-300 bg-opacity-20 backdrop-filter backdrop-blur-lg p-6">
            <div className="flex justify-between items-center">
              <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
              <span className="text-3xl md:text-4xl font-bold text-white">
                100%
              </span>
            </div>
            <p className="text-white mt-4 font-medium">Paperwork Compliance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthSafety;