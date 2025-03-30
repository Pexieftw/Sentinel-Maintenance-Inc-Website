import React from 'react';
import Image from 'next/image';
import { Users, Award, Briefcase, Timer, User } from 'lucide-react';
import BreadCrumbsSection from '../utils/BreadCrumbsSection';
import aboutImage1 from "@/public/about1.jpg"; 

const AboutUs = () => {
  return (
    <div className="w-full">
      <BreadCrumbsSection 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about-us' },
        ]}
      />

      {/* SECTION 1: COMPANY BACKGROUND */}
      <section 
        className="mx-auto max-w-7xl pt-16 md:pt-20 relative overflow-hidden"
        data-aos="fade-up"
      >
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">
          <span className="mb-2">
            Your trust starts with {" "}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary-100 to-primary-300">
            Our Story
          </span>
        </h2>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {/* Left side image - stacks on mobile */}
            <div className="w-full md:w-2/5 mb-8 md:mb-0" data-aos="fade-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-primary-300/20 transform -rotate-3"></div>
                <div className="relative shadow-2xl w-full h-64 md:h-96 transform rotate-3 hover:rotate-0 transition-all duration-500 overflow-hidden">
                  <Image 
                    src={aboutImage1} 
                    alt="Office building" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute -bottom-8 left-[10] bg-white p-3 md:p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Timer className="text-primary-100" size={24} />
                    <span className="font-semibold text-gray-900 text-sm md:text-base">Since 1989</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side content */}
            <div className="w-full md:w-3/5" data-aos="fade-left">
              <div className="my-2 md:my-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-200 flex items-center">
                  <span className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-primary-200 text-white rounded-full mr-3 text-sm md:text-base">I</span>
                  <div className="w-4 h-1 mr-3 bg-primary-200"></div>
                  Introduction
                </h3>
                <div className="bg-gradient-to-r from-slate-50 to-white p-4 md:p-6 shadow-sm border border-slate-100">
                  <p className="text-slate-700 mb-4 leading-relaxed text-sm md:text-base">
                    Sentinel Maintenance Inc., (SMI), originated in Regina, Saskatchewan in 1989. In early 1991, the Toronto office was open followed by the Calgary office in 1993. In the years following, other satellite offices opened in cities like Vancouver, Las Vegas, Phoenix with the latest full-service office opening in Stamford, CT serving the greater New York City area.
                  </p>
                  <p className="text-slate-700 mb-4 leading-relaxed text-sm md:text-base">
                    SMI is a full-service <span className="font-bold text-primary-100">Property Services Company</span>. Our primary objective is to provide each of our clients with high quality, conscientious and reliable service. Our success is based on being able to achieve these objectives through a dedicated team of Owners, Managers, and Office and support staff.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    SMI specializes in several different areas to operate successfully as a full-service <span className="font-bold text-primary-100">Property Services Company</span>. These areas include contract janitorial, steam cleaning, window washing, construction clean-ups, plumbing, electrical, small construction and emergency services.
                  </p>
                </div>
                
                <div className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-4 justify-start">
                  <div className="bg-primary-300 p-2 md:p-3 shadow-sm text-center text-white font-medium text-xs md:text-sm">
                    Janitorial
                  </div>
                  <div className="bg-primary-300 p-2 md:p-3 shadow-sm text-center text-white font-medium text-xs md:text-sm">
                    Steam Cleaning
                  </div>
                  <div className="bg-primary-300 p-2 md:p-3 shadow-sm text-center text-white font-medium text-xs md:text-sm">
                    Window Washing
                  </div>
                  <div className="bg-primary-300 p-2 md:p-3 shadow-sm text-center text-white font-medium text-xs md:text-sm">
                    etc...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 2: ORGANIZATION */}
      <section 
        className="mx-auto max-w-7xl py-16 md:py-20 relative overflow-hidden"
        data-aos="fade-up"
      >
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900">
          <span className="block mb-2">
            A People-First Approach:
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary-100 to-primary-300">
            The Sentinel Maintenance Team
          </span>
        </h2>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {/* Left side content */}
            <div className="w-full md:w-3/5" data-aos="fade-right">
              <div className="mb-8 md:mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-200 flex items-center">
                  <span className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-primary-200 text-white rounded-full mr-3 text-sm md:text-base">II</span>
                  <div className="w-4 h-1 mr-3 bg-primary-200"></div>
                  Organization
                </h3>
                
                <div className="bg-gradient-to-r from-slate-50 to-white p-4 md:p-6 shadow-sm border border-slate-100">
                  <p className="text-slate-700 mb-4 leading-relaxed text-sm md:text-base">
                    SMI is a well-organized, people-oriented company that has a strong commitment to quality service. This commitment starts at the senior management level and continues through to all staff positions. We provide key management personnel at all levels to ensure the highest quality service to our clients.
                  </p>
                  <p className="text-slate-700 mb-4 leading-relaxed text-sm md:text-base">
                    SMI's high level of quality can be attributed to our <span className="font-bold text-primary-100">excellent staff of employees</span> and the pride they have in their work. This level of quality is maintained by providing continuous training and instruction. We conduct regular staff meetings where we coordinate, motivate and instruct our people on the latest techniques, methods, and equipment the industry has to offer.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Our management team ensures that all <span className="font-bold text-primary-100">quality standards</span> are met through regular inspections, client feedback sessions, and performance evaluations. This commitment to excellence is what sets SMI apart in the property services industry.
                  </p>
                </div>
                <div className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-4 justify-start">
                  <div className="bg-primary-300 p-2 md:p-3 shadow-sm text-center text-white font-medium text-xs md:text-sm">
                    Quality Service
                  </div>
                  <div className="bg-primary-300 p-2 md:p-3 shadow-sm text-center text-white font-medium text-xs md:text-sm">
                    Continuous Training
                  </div>
                  <div className="bg-primary-300 p-2 md:p-3 shadow-sm text-center text-white font-medium text-xs md:text-sm">
                    Regular Meetings
                  </div>
                  <div className="bg-primary-300 p-2 md:p-3 shadow-sm text-center text-white font-medium text-xs md:text-sm">
                    etc...
                  </div>
                </div>
              </div>
            </div>

            {/* Right side image - stacks on mobile */}
            <div className="w-full md:w-2/5 mb-8 md:mb-0 order-first md:order-last" data-aos="fade-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-primary-300/20 transform -rotate-3"></div>
                <div className="relative shadow-2xl w-full h-64 md:h-96 transform rotate-3 hover:rotate-0 transition-all duration-500 overflow-hidden">
                  <Image 
                    src={aboutImage1} 
                    alt="Team collaboration" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute -bottom-8 right-[10] bg-white p-3 md:p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="font-semibold text-gray-900 text-sm md:text-base">Quality Service Always</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 md:mb-12 pt-10">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">
              <span className="block mb-2">
                Our Personnel
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary-100 to-primary-300">
                Hierarchy
              </span>
            </h2>
            <div className="flex flex-col space-y-6 max-w-4xl mx-auto text-left">
              {/* Senior Management */}
              <div 
                className="h-auto md:h-[250px] bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                data-aos="fade-up"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-1/4 h-48 md:h-auto bg-primary-300 relative overflow-hidden">
                    <Image 
                      src={aboutImage1} 
                      alt="Senior Management" 
                      fill 
                      className="object-cover opacity-30" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Award size={40} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6 md:p-8 w-full md:w-3/4 flex flex-col items-start justify-center">
                    <div className="flex items-center mb-4">
                      <span className="uppercase bg-primary-100 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">i</span>
                      <div className="w-5 h-1 mr-3 bg-primary-300"></div>
                      <h4 className="text-xl font-bold text-primary-300">Senior Management</h4>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      The Senior Management team is responsible for all administrative and strategic decision making. The Senior Management also coordinates the firm's marketing as well as attending industry meetings and workshops to stay abreast of the changes and improvements occurring within the industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Area Supervisor */}
              <div 
                className="h-auto md:h-[250px] bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                data-aos="fade-up"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-1/4 h-48 md:h-auto bg-primary-300 relative overflow-hidden">
                    <Image 
                      src={aboutImage1} 
                      alt="Area Supervisor" 
                      fill 
                      className="object-cover opacity-30" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users size={40} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6 md:p-8 w-full md:w-3/4  flex flex-col items-start justify-center">
                    <div className="flex items-center mb-4">
                      <span className="uppercase bg-primary-100 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">ii</span>
                      <div className="w-5 h-1 mr-3 bg-primary-300"></div>
                      <h4 className="text-xl font-bold text-primary-300">Area Supervisor</h4>
                    </div>
                    <p className="text-slate-600 leading-relaxed  text-sm">
                      The Area Supervisors are responsible for projects within a defined geographical area, and they maintain daily contact with the Job Foreperson to ensure all activities at the job site are being performed at the highest level.
                    </p>
                  </div>
                </div>
              </div>

              {/* Job Foreperson */}
              <div 
                className="h-auto md:h-[250px] bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                data-aos="fade-up"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-1/4 h-48 md:h-auto bg-primary-300 relative overflow-hidden">
                    <Image 
                      src={aboutImage1} 
                      alt="Job Foreperson" 
                      fill 
                      className="object-cover opacity-30" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Briefcase size={40} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6 md:p-8 w-full md:w-3/4 flex flex-col items-start justify-center">
                    <div className="flex items-center mb-4">
                      <span className="uppercase bg-primary-100 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">iii</span>
                      <div className="w-5 h-1 mr-3 bg-primary-300"></div>
                      <h4 className="text-xl font-bold text-primary-300">Job Foreperson</h4>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      The Job Foreperson is responsible for the specific job site designated to them. They report directly to the area supervisor daily.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Cleaners */}
              <div 
                className="h-auto md:h-[250px] bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                data-aos="fade-up"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-1/4 h-48 md:h-auto bg-primary-300 relative overflow-hidden">
                    <Image 
                      src={aboutImage1} 
                      alt="Cleaners" 
                      fill 
                      className="object-cover opacity-30" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <User size={40} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6 md:p-8 w-full md:w-3/4 flex flex-col items-start justify-center">
                    <div className="flex items-center mb-4">
                      <span className="uppercase bg-primary-100 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">iv</span>
                      <div className="w-5 h-1 mr-3 bg-primary-300"></div>
                      <h4 className="text-xl font-bold text-primary-300">Cleaners</h4>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      The cleaners report to the Job Foreperson and perform the duties as detailed in the contract.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;