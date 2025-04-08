"use client"

import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Users, 
  CircleUserRound, 
  Target, 
  CheckCircle, 
  Award,
  Handshake
} from 'lucide-react';
import Image from 'next/image';
import Support from "@/public/svg-ui/Support.svg";
import Expert from "@/public/svg-ui/Expert.svg";

import BreadCrumbsSection from '../utils/BreadCrumbsSection';

const TeamworkCulture = () => {
  // Animation for stats with proper target values
  const stats = { clients: 98, support: 24, staff: 25 };

  const Section = ({ icon: Icon, title, children, animationDirection }) => (
    <div 
      className="mb-12 bg-gradient-to-r from-slate-50 to-white rounded-tr-xl rounded-tl-xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-300"
      data-aos={`fade-${animationDirection}`}
      data-aos-duration="1000"
      data-aos-delay="150"
    >
      <div className="relative">
        {/* Top accent bar */}
        <div className="h-2 bg-gradient-to-r from-primary-300 to-primary-500"></div>
        
        <div className="p-8">
          <div className="flex items-center mb-6">
            <div className="p-4 bg-primary-300 shadow-lg mr-5 transform transition-transform duration-300">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 pb-2">{title}</h3>
          </div>
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <BreadCrumbsSection 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Team & Work Culture', href: '/team-and-work-culture' },
        ]}
        imageSrc="/breadcrumbs-bg.jpg"
        imageAlt="Custom Cleaning Background"
      />
      <div className="max-w-6xl mx-auto min-h-screen md:min-h-auto overflow-hidden py-16">
        <div className="px-4 md:px-8 lg:px-0 relative">
        <div 
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">
              <span className="block mb-2">
                Building successful client relationships
              </span>
              
              <span className="mb-2">
              through exceptional{" "}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary-100 to-primary-300">
                Teamwork
              </span>
            </h2>
          </div>

          {/* Communication Section */}
          <Section icon={MessageCircle} title="Communication" animationDirection="left">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg">
                The single most important factor in our ability to offer high quality, conscientious and reliable
                service to our clients is communication. We classify this communication into three categories:
              </p>

              <div className="space-y-8 mt-8">
                {[
                  {
                    label: "Client Contact",
                    content: "By maintaining ongoing communication with our clients, we are able to listen to and learn of their concerns. This communication is maintained by regular telephone conversations and, if convenient for the Client, through on-site meetings with the contract representative."
                  },
                  {
                    label: "Employee Communication",
                    content: "On a daily basis, we communicate the needs of our clients to our employees. Each job site is visited on a regular basis to ensure that our employees are undertaking the details of our commitment to the client."
                  },
                  {
                    label: "Accessibility",
                    content: "At all times both SMI management and supervisory staff will be accessible to the client. We utilize a system of Pagers and Cellular phones to remain accessible 24 hours a day, 7 days a week. In most cases, any cleaning issues will be corrected during the next shift, however if there is ever the need to have a cleaning issue rectified immediately, we will usually be able to provide the necessary staff within 2 to 3 hours."
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col group bg-primary-300 p-6 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={100 + (index * 100)}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 transition-all duration-300">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-primary-300 shadow-md text-lg font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h4 className="ml-5 text-2xl font-semibold text-white transition-colors duration-300">
                        {item.label}
                      </h4>
                    </div>
                    <p className="text-center md:text-left pl-0 md:pl-16 mt-3 text-gray-200">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Management Back Up Section */}
          <Section icon={Users} title="Management Back Up" animationDirection="right">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg">
                A well-experienced management group who can offer immediate and thorough backup to the
                local supervisory team controls SMI's large work force. At no time will our clients be without
                adequate labour and supervisory control.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                {[
                  { value: stats.clients, label: "Expert Response", suffix: "%", icon: (
                    <div className="h-8 w-8 relative">
                      <Image 
                        src={Expert} 
                        alt="Expert" 
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) },
                  { value: stats.support, label: "Day Support", suffix: "/7", icon: (
                    <div className="h-8 w-8 relative">
                      <Image 
                        src={Support} 
                        alt="Support" 
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) },
                  { value: stats.staff, label: "Trained Staff", suffix: "+", icon: <CircleUserRound className="h-8 w-8" /> }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-primary-300 p-6 text-center transform transition-transform shadow-md"
                    data-aos="fade-up"
                    data-aos-delay={100 + (index * 150)}
                  >
                    <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                      {stat.icon}
                    </div>
                    <p className="text-4xl text-white font-bold text-priamry-300 mb-1">
                      {stat.value}{stat.suffix}
                    </p>
                    <p className=" text-gray-200 text-sm font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Cooperation Section */}
          <Section icon={Handshake} title="Cooperation" animationDirection="left">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg">
                SMI always feels that cooperation with the site management is essential to the quality of service
                provided. It is our firm belief that if we immediately act upon any concerns brought to our
                attention, our job of maintaining the building will be easier and our efforts more appreciated.
              </p>
              
              <div 
                className="bg-primary-300 p-6 shadow-lg my-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p className="text-white italic text-lg font-medium">
                  "Our success in establishing long-term working relationships with our clients is based on this
                  interaction with the management. Our goal is to establish the same long-term relationship with
                  all of our clients."
                </p>
              </div>
              
                <h4 className="text-xl font-semibold text-gray-900 mb-5 flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  Our Cooperative Values
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Responsive', 'Attentive', 'Thorough', 'Reliable', 'Dedicated', 'Proactive', 'Solution-Oriented'].map((value, i) => (
                    <span 
                      key={i} 
                      className="select-none px-4 py-2 bg-primary-300 text-white text-sm font-medium transition-all duration-300 shadow-sm"
                      data-aos="fade-up"
                      data-aos-delay={100 + (i * 100)}
                    >
                      {value}
                    </span>
                  ))}
                </div>
            </div>
          </Section>

          {/* Commitment Section */}
          <Section icon={Target} title="Commitment" animationDirection="right">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg">
                SMI firmly believes that we are all in this together and participate at equal levels to provide
                ideas and input for continuous improvements in the quality of service we provide. Our
                involvement with our clients allows us the ability to attain the highest possible standards in the
                work we provide.
              </p>
              
              <div 
                className="mt-8 bg-primary-300 p-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h4 className="text-xl font-semibold text-white mb-5">Our Commitment to Excellence</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Regular quality assurance checks',
                    'Ongoing staff training programs',
                    'Environmental sustainability practices',
                    'Client-focused approach'
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center p-3 transition-colors duration-300 bg-white shadow-sm"
                      data-aos="fade-up"
                      data-aos-delay={100 + (i * 100)}
                    >
                      <CheckCircle className="h-6 w-6 text-primary-300 mr-4 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
};

export default TeamworkCulture;