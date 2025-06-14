import React from 'react';
import Image from 'next/image';
import { Timer } from 'lucide-react';
import Link from 'next/link';
import BreadCrumbsSection from '../utils/BreadCrumbsSection';
import main from "@/public/pages/about-us/main.webp"; 
import secondary from "@/public/pages/about-us/secondary.webp"; 
import MapleLeaf from '@/public/svg-ui/MapleLeaf.svg'; 
import { teamStructureData } from "../utils/data";

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Left side image - stacks on mobile */}
          <div className="relative w-full md:w-2/5 mb-8 md:mb-0" data-aos="fade-right">
            <div className="">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-primary-300/20 transform -rotate-3"></div>
              <div className="shadow-2xl w-full h-64 md:h-96 transform rotate-3 hover:rotate-0 transition-all duration-500 overflow-hidden">
                <Image 
                  src={main} 
                  alt="Office building" 
                  fill
                  loading="lazy"
                  placeholder="blur" 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 z-10 w-12 h-auto shadow-lg rounded-sm overflow-hidden">
                  <Image 
                    src={MapleLeaf}
                    alt="Canadian Flag"
                    className="w-full h-full"
                  />
                </div>
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

                  <span className="font-bold">Sentinel Maintenance Inc. (SMI) </span>
                  is a proudly Canadian-owned and operated property services company, headquartered in Toronto, Ontario. Founded in Regina, Saskatchewan in 1989, SMI has grown from its Prairie roots into an international presence, with established operations across North America.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed text-sm md:text-base">
                  We take pride in delivering dependable, high-quality services built on integrity, professionalism, and attention to detail. Our experienced team—from local managers to on-site staff—is committed to maintaining safe, clean, and well-functioning spaces for the clients and communities we serve. 
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed text-sm md:text-base">
                  SMI offers a comprehensive range of property {" "}
                  <Link href="/services" className="font-bold text-primary-100 hover:underline">
                    services
                  </Link>
                  . These range from daily janitorial solutions to a variety of specialized services including carpet and upholstery cleaning, window washing, post-construction clean-ups as well as various property requirements including 24 hour emergency responses.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed text-sm md:text-base">
                  Whether it's day-to-day upkeep or urgent support, we bring the same level of care and reliability to every project—backed by decades of proven performance.
                </p>
                <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                  From the beginning, SMI has embodied the values Canadians are known for: reliability, quality, and integrity. These principles guide our experienced team of owners, managers, and support staff from coast to coast—ensuring consistent, high-quality service on every site, every time. 
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
                  Junk Removal
                </div>
                <div className="bg-primary-300 p-2 md:p-3 shadow-sm text-center text-white font-medium text-xs md:text-sm">
                  And More
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
                  <span className="font-bold">SMI</span> embodies the Canadian values of integrity, reliability, and teamwork in our well-organized, people-oriented approach. True to our roots, our commitment to quality service begins with senior management and extends through every position in our organization. We provide key management personnel across our offices nationwide to ensure consistent, high-quality service that our clients have come to expect from a leading enterprise.
                  </p>
                  <p className="text-slate-700 mb-4 leading-relaxed text-sm md:text-base">
                  Our exceptional quality standards reflect the strong work ethic embraced by our dedicated staff. Throughout North America, our team takes tremendous pride in their work. We maintain these standards through continuous training and instruction, including regular staff meetings where we share innovations developed in our research facilities alongside the latest industry techniques, methods, and equipment.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                  With our well-known focus on quality, our management team ensures that all standards are met through regular inspections, client feedback sessions, and performance evaluations. This unwavering commitment to excellence—combining meticulous attention to detail with genuine care for our clients' needs—is what distinguishes SMI as a proudly Canadian leader in the North American property services industry.
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
                    Client Communication
                  </div>
                </div>
              </div>
            </div>

            {/* Right side image - stacks on mobile */}
            <div className="relative w-full md:w-2/5 mb-8 md:mb-0 order-first md:order-last" data-aos="fade-left">
              <div className="">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-primary-300/20 transform -rotate-3"></div>
                <div className="shadow-2xl w-full h-64 md:h-96 transform rotate-3 hover:rotate-0 transition-all duration-500 overflow-hidden">
                  <Image 
                    src={secondary} 
                    alt="Team collaboration" 
                    fill
                    loading="lazy"
                    placeholder="blur" 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 z-10 w-12 h-auto shadow-lg rounded-sm overflow-hidden">
                    <Image 
                      src={MapleLeaf}
                      alt="Canadian Flag"
                      className="w-full h-full"
                    />
                  </div>
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
              <span className="mb-2">
                Our Team {" "}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary-100 to-primary-300">
                Structure
              </span>
            </h2>
            <div className="flex flex-col space-y-6 max-w-7xl mx-auto text-left">
              {/* Dynamic Team Structure */}
              {teamStructureData.map((item) => (
                <div 
                  key={item.id}
                  className="h-auto md:h-[250px] bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                  data-aos="fade-up"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-1/4 h-48 md:h-full bg-primary-300 relative overflow-hidden aspect-square">
                      <Image 
                        src={item.image} 
                        alt={item.imageAlt} 
                        fill 
                        loading="lazy"
                        placeholder="blur" 
                        className="object-cover opacity-70" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <div className="p-6 md:p-8 w-full md:w-3/4 flex flex-col items-start justify-center">
                      <div className="flex items-center mb-4">
                        <span className="uppercase bg-primary-100 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">{item.positionNumber}</span>
                        <div className="w-5 h-1 mr-3 bg-primary-300"></div>
                        <h4 className="text-xl font-bold text-primary-300">{item.title}</h4>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;