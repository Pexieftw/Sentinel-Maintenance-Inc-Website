import React from 'react';
import Image from 'next/image';
import { Lightbulb, FileText, Presentation, Info, Book } from 'lucide-react';
import BreadCrumbsSection from '../utils/BreadCrumbsSection';

import healthSafety from "@/public/pages/health-safety/healthSafety.webp"; 
import healthSafety2 from "@/public/pages/health-safety/healthSafety2.webp"; 

const HealthSafety = () => {
  return (
    <>
      <BreadCrumbsSection 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Health & Safety', href: '/health-and-safety' },
        ]}
        imageSrc="/breadcrumbs-bg.jpg"
        imageAlt="Custom Cleaning Background"
      />
      <section className="bg-white py-20 px-4 md:px-8 lg:px-0 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div 
            className="flex flex-col items-center mb-16 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">
              <span className="mb-2">
                Workplace {" "}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary-100 to-primary-300">
                Safety and Compliance
              </span>
            </h2>
          </div>
                
          <div className="space-y-16">
            {/* Understanding Section - Image first, then text */}
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Left side with image */}
              <div 
                className="group relative aspect-video h-[600px] lg:aspect-auto lg:h-full w-full max-w-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                data-aos="fade-up" 
                data-aos-duration="500"
              >
                <Image 
                  src={healthSafety}
                  alt="Safety equipment and WHMIS training" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 w-full p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Safety First</h3>
                    <p className="text-gray-200 text-sm md:text-base">Protecting our team and your facilities</p>
                  </div>
                </div>
              </div>
              
              {/* Right side with content */}
              <div className="flex items-center">
                <div 
                  className="bg-white p-6 transition-all duration-300 bg-gradient-to-r from-slate-50 to-white shadow-md border border-slate-100 w-full"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-300 p-2 mr-4">
                      <Lightbulb className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">Understanding</h3>
                  </div>
                  
                  <div className="text-gray-600 space-y-4">
                    <p className="font-semibold text-gray-800">Health & Safety Commitment</p>
                    <p>
                      At SMI, safety is a top priority across all operations—for our staff, subcontractors, and clients. Our approach includes:
                    </p>
                    
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Comprehensive Safety Training</p>
                      <p className="ml-2 mb-2">All on-site staff and subcontractors receive training in key safety programs, including:</p>
                      <ul className="ml-4 space-y-1">
                        <li>- WHMIS (Workplace Hazardous Materials Information System)</li>
                        <li>- Worker Health and Safety Awareness in 4 Steps</li>
                        <li>- Supervisor Health and Safety Awareness in 5 Steps</li>
                        <li>- Working at Heights certification</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Specialized Certifications</p>
                      <p className="ml-2 mb-2">Select team members are additionally trained in:</p>
                      <ul className="ml-4 space-y-1">
                        <li>- Asbestos awareness</li>
                        <li>- Scaffold and lift operation</li>
                        <li>- Job-specific safety certifications as required</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Ongoing Safety Integration</p>
                      <p className="ml-4">Safety training is not only a legal requirement—it's integral to our daily operations and work culture.</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Commitment to Protection</p>
                      <p className="ml-4">We are dedicated to protecting the well-being of our team and the people and property of every client we serve.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Training Section - Text first on desktop, image first on mobile */}
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Content - First on desktop, second on mobile */}
              <div className="flex items-center order-2 lg:order-1">
                <div 
                  className="bg-white p-6 transition-all duration-300 bg-gradient-to-r from-slate-50 to-white shadow-md border border-slate-100 w-full"
                  data-aos="fade-right"
                  data-aos-delay="400"
                  style={{
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    animation: 'shadow-pulse 2s',
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-300 p-2 mr-4">
                      <Presentation className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">Training</h3>
                  </div>
                  
                  <div className="text-gray-600 space-y-4">
                    <p>
                      At SMI, we take the safety of our staff, subcontractors, and clients with the utmost seriousness. As part of our commitment to maintaining a safe and compliant work environment, <span className="font-semibold">every new team member undergoes mandatory safety training from day one</span>. This includes the four core safety programs:
                    </p>
                    
                    <ul className="ml-2 space-y-1">
                      <li>- WHMIS (Workplace Hazardous Materials Information System)</li>
                      <li>- Worker Health and Safety Awareness in 4 Steps</li>
                      <li>- Supervisor Health and Safety Awareness in 5 Steps (where applicable)</li>
                      <li>- Working at Heights (for applicable roles)</li>
                    </ul>

                    <p>
                      We believe safety training is not just a formality—it's a responsibility. That's why we go beyond initial onboarding. <span className="font-semibold">All safety certifications for staff and subcontractors are closely monitored and renewed on a scheduled basis</span>. This ensures that every individual working under the SMI name remains fully informed of evolving safety protocols, legal updates, and best practices.
                    </p>
                    
                    <p>
                      Our leadership team maintains a centralized tracking system to manage training records and certification expiry dates. We take pride in our proactive, no-compromise approach to safety compliance—because a safe workplace protects not only our teams, but also the clients and communities we serve.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image - Second on desktop, first on mobile */}
              <div 
                className="group relative aspect-video h-[600px] lg:aspect-auto lg:h-full w-full max-w-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl lg:order-2"
                data-aos="fade-up" 
                data-aos-duration="500"
              >
                <Image 
                  src={healthSafety2}
                  alt="Safety equipment and WHMIS training" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 w-full p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Expert Training</h3>
                    <p className="text-gray-200 text-sm md:text-base">Comprehensive safety certification programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
                
          {/* Improved bottom section with AOS animations */}
          <div 
            className="mt-16 relative"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="absolute inset-0 bg-primary-300"></div>
            <div className="relative py-10 px-10">
              <h3 className=" text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Safety Commitment</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div 
                  className="bg-white p-6 shadow-md flex flex-col items-center text-center"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  style={{
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    animation: 'shadow-pulse 2s ',
                  }}
                >
                  <div className="bg-primary-300 p-3 rounded-full mb-4">
                    <FileText className="text-white" size={28} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Documentation</h4>
                  <p className="text-gray-600">
                    Full access to Material Safety Data Sheets for all products used in our operations
                  </p>
                </div>
                
                <div 
                  className="bg-white p-6 shadow-md flex flex-col items-center text-center"
                  data-aos="fade-up"
                  data-aos-delay="700"
                  style={{
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    animation: 'shadow-pulse 2s ',
                  }}
                >
                  <div className="bg-primary-300 p-3 rounded-full mb-4">
                    <Book className="text-white" size={28} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Education</h4>
                  <p className="text-gray-600">
                    Comprehensive training ensuring all staff met certification requirement
                  </p>
                </div>
                
                <div 
                  className="bg-white p-6 shadow-md flex flex-col items-center text-center"
                  data-aos="fade-up"
                  data-aos-delay="800"
                  style={{
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    animation: 'shadow-pulse 2s ',
                  }}
                >
                  <div className="bg-primary-300 p-3 rounded-full mb-4">
                    <Info className="text-white" size={28} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Updates</h4>
                  <p className="text-gray-600">
                    Regular training refreshers to keep all team members current with changing regulations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthSafety;