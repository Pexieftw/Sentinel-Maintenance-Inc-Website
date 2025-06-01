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
  const stats = { clients: 30 , support: 24, staff: 15 };

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
      <div className="max-w-7xl mx-auto min-h-screen md:min-h-auto overflow-hidden py-16">
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
                At SMI, we believe effective teamwork starts with clear, open communication. Our teams operate with transparency—both internally and with clients—ensuring expectations are aligned, updates are timely, and any concerns are addressed proactively. This approach builds trust and keeps everyone on the same page
              </p>

              <div className="space-y-8 mt-8">
                {[
                  {
                    label: "Client Contact",
                    content: "We prioritize transparent communication with our clients to align expectations, share timely updates, and proactively address any concerns. This ongoing dialogue helps build lasting trust and ensures clients remain fully informed every step of the way."
                  },
                  {
                    label: "Employee Communication",
                    content: "Open, clear communication across our teams promotes aligned goals and a shared understanding of expectations. By fostering transparency internally, we empower employees to proactively resolve issues and maintain consistent service excellence."
                  },
                  {
                    label: "Accessibility",
                    content: "We maintain open lines of communication around the clock, ensuring that both clients and employees can reach us when needed. This accessibility strengthens accountability, encourages swift issue resolution, and keeps everyone on the same page."
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

          {/* Accountability & Reliability */}
          <Section icon={Users} title="Accountability & Reliability" animationDirection="right">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg">
                Every member of our team is held to high standards of personal accountability and professional responsibility. At SMI, we don't just get the job done—we take ownership of our work. Clients can count on us to deliver consistent service, resolve issues efficiently, and stand behind our commitments.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                {[
                  { value: stats.clients, label: "Proven Industry Experience", suffix: " Years", icon: (
                    <div className="h-8 w-8 relative">
                      <Image 
                        src={Expert} 
                        alt="Expert" 
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) },
                  { value: stats.support, label: "Team Support", suffix: "/7", icon: (
                    <div className="h-8 w-8 relative">
                      <Image 
                        src={Support} 
                        alt="Support" 
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) },
                  { value: stats.staff, label: "Experienced Management", suffix: "+", icon: <CircleUserRound className="h-8 w-8" /> }
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

          {/* Respect & Inclusion Section */}
          <Section icon={Handshake} title="Respect & Inclusion" animationDirection="left">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg">
                Our work culture is rooted in mutual respect, where every individual—regardless of role—is valued. We foster an inclusive environment where diverse perspectives are welcomed and collaboration thrives. This respectful culture reflects in how we work together and in how we serve our clients.
              </p>
              
              <div 
                className="bg-primary-300 p-6 shadow-lg my-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p className="text-white italic text-lg font-medium">
                  "Inclusion is not just a value—it's how we operate. When every voice is heard and every perspective is respected, collaboration becomes second nature and success becomes a shared achievement."
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

          {/* Continuous Improvement & Training Section */}
          <Section icon={Target} title="Continuous Improvement & Training" animationDirection="right">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg">
                We're committed to ongoing learning and development. Through regular training sessions, safety refreshers, and team meetings, our staff stay up to date with the latest best practices and innovations in the industry. This culture of continuous improvement ensures the highest level of service for our clients.
              </p>
              
              <div 
                className="mt-8 bg-primary-300 p-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h4 className="text-xl font-semibold text-white mb-5">Our Approach to Excellence</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Routine Training and Developement',
                    'Innovation and Industry Insights',
                    'Safety and Compliance Refreshers',
                    'Client-centered Service Mindset'
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