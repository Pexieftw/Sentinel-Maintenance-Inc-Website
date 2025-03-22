import React, { useEffect } from 'react';
import Image from 'next/image';
import { Lightbulb, FileText, Presentation, Info, Book } from 'lucide-react';
import BreadCrumbsSection from '../utils/BreadCrumbsSection';

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
        <div className="max-w-6xl mx-auto">
          <div 
            className="flex flex-col items-center mb-16 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">
              <span className="block mb-2">
                WHMIS-certified teams, ready to keep 
              </span>
              <span className="mb-2">
                your workplace {" "}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary-100 to-primary-300">
                Safe and Compliant
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left side with image */}
            <div 
              className="group relative aspect-video h-[400px] lg:aspect-auto lg:h-auto w-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              data-aos="fade-up" 
              data-aos-duration="500"
            >
              <Image 
                src="/about1.jpg" 
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
            <div className="space-y-8">
              {/* Understanding Card */}
              <div 
                className="bg-white p-6 transition-all duration-300 bg-gradient-to-r from-slate-50 to-white shadow-md border border-slate-100"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-300 p-2 mr-4">
                    <Lightbulb className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Understanding</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  SMI understands that WHMIS is integral to the day-to-day operations of every jobsite. This is
                  true not only from a legal standpoint but also from a personal one.
                </p>
                <p className="text-gray-600 mb-4">
                  The safety of all SMI employees as well as the protection and safety of the client's property and staff is a primary
                  concern of ours.
                </p>
                <p className="text-gray-600">
                  SMI will provide all the necessary labels, MSDS sheets and protective equipment needed to
                  adhere to the guidelines set out in WHMIS.
                </p>
              </div>
              
              {/* Training Card */}
              <div 
                className="bg-white p-6 transition-all duration-300 bg-gradient-to-r from-slate-50 to-white shadow-md border border-slate-100"
                data-aos="fade-left"
                data-aos-delay="400"
                style={{
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  animation: 'shadow-pulse 2s ',
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-300 p-2 mr-4">
                    <Presentation className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Training</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  All our employees are required to successfully complete the WHMIS training program with a
                  minimum 80% score. Each employee must fully understand how to read the MSDS sheets and
                  product labels, handle all potentially dangerous chemicals and know the proper attire that must
                  be worn to prevent personal injury.
                </p>
                <p className="text-gray-600 mb-4">
                  Each employee is presented with a "Certificate of Completion" upon their successfully passing
                  all sections of the training program. Copies of these Certificates will be made available to the
                  Management Co-Chair of Occupational Health & Safety and Facilities Management, Sciex.
                </p>
                <p className="text-gray-600">
                  In addition, all employees are given the required upgrade training to keep abreast with any
                  changes to the WHMIS program.
                </p>
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
              <h3 className=" text-3xl md:text-4xl font-bold text-center text-white mb-12">Our WHMIS Commitment</h3>
              
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
                    Full access to Material Safety Data Sheets for all materials used in our operations
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
                    Comprehensive training ensuring all staff exceed the 80% certification requirement
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