"use client"

import React, { useState } from 'react';
import Link from 'next/link'; 
import { Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const toggleAll = (expand) => {
    setExpandedSection(expand ? 'all' : null);
  };

  const sections = [
    {
      title: "Collection of Personal Information",
      content: "When you submit a request through our website forms, we collect personal information including your name, phone number, and home address. This information is essential for us to provide our property maintenance and cleaning services at your location. We may also collect additional details about your property and specific service requirements to better address your needs. All information is collected with your consent when you complete our service request forms."
    },
    {
      title: "Use of Personal Information",
      content: "SMI uses the contact information you provide (name, phone number, and address) to schedule service visits, provide accurate quotes, dispatch our cleaning teams to your location, and follow up on completed services. Your address information helps us assign the appropriate Area Supervisor based on your location within our GTA service area. We may also use your contact information to notify you about service updates or recommend maintenance schedules appropriate for your property type."
    },
    {
      title: "Sharing Personal Information",
      content: "The personal information collected through our forms is shared only with SMI staff directly involved in providing services to your property. This includes our scheduling team, Area Supervisors, and service personnel. Your name, phone number and address are not shared with external third parties except where required by law or where necessary to complete a specific service you've requested (such as specialized restoration services)."
    },
    {
      title: "Storage Period of Personal Information",
      content: "SMI will securely store the personal information collected through our forms (including your name, phone number, and address) for the duration of our service relationship plus an additional period as required for business and legal purposes. For one-time service clients, we typically retain information for up to 2 years. For ongoing contract clients, we maintain records for the contract duration plus 3 years."
    },
    {
      title: "Hosting of Personal Information",
      content: "All form submissions containing your name, phone number, and address are processed and stored on secure servers located exclusively in Canada. Our website forms use encryption technology to protect your information during transmission, and we implement appropriate security measures to protect stored data from unauthorized access."
    },
    {
      title: "Data Security Measures",
      content: "SMI implements multiple security measures to protect your personal information. This includes secure form processing, encrypted data storage, access controls limiting which employees can view your information, regular security audits, and staff training on privacy protection. We regularly review and update our security protocols to maintain the highest standards of data protection."
    },
    {
      title: "Controller",
      content: "The 'Controller' of your personal information is Sentinel Maintenance Inc. (SMI), established in 1989. We are responsible for the secure collection, processing, and storage of all data submitted through our website forms. You can contact our data controller at info@smi.ca with any questions about how we handle your information."
    },
    {
      title: "Right of Objection and Withdrawal",
      content: "You have the right to object to our processing of your personal information and can withdraw consent for us to store or use your details. If you wish to have your name, phone number, or address removed from our systems, please contact us at info@smi.ca with 'Privacy Request' in the subject line, and we will process your request within 30 days."
    },
    {
      title: "Right of Access, Rectification and Removal",
      content: "You can request access to all personal information we have stored about you, including form submissions containing your name, phone number, and address. You also have the right to correct any inaccurate information or request complete deletion of your data from our systems. To exercise these rights, please email info@smi.ca with your specific request."
    },
    {
      title: "Changes to Our Privacy Policy",
      content: "Our Privacy Policy may be updated periodically to reflect changes in our practices or services. The current version can always be found at smi.ca/privacy-policy. Significant changes to how we handle your name, phone number, or address information will be communicated directly to active clients where possible."
    },
    {
      title: "Acceptance of Our Privacy Policy",
      content: "By submitting our service request forms with your name, phone number, and address, you acknowledge that you have read and understood this Privacy Policy and consent to the collection and processing of your information as described herein. If you do not agree with our privacy practices, please do not submit personal information through our website."
    },
    {
      title: "Applicable Law",
      content: "As a property service company operating primarily in the Greater Toronto Area, we are committed to complying with Canadian privacy legislation, including the Personal Information Protection and Electronic Documents Act, SC 2000, c 5; and/or Act Respecting the Protection of Personal Information in the Private Sector, CQLR cP-39.1. Our handling of your name, phone number, and address information adheres to these legal requirements."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-0">
      <div className="mb-12 text-center">

        <h2 className="text-4xl font-extrabold text-primary-300 mb-4">Privacy Policy</h2>
        <p className="text-primary-200 font-medium">Last updated: March 24, 2025</p>
        
        <div className="mt-8 max-w-6xl mx-autop-6">
          <p className="text-gray-700 leading-relaxed">
            The respect of your private life is of the utmost importance for Sentinel Maintenance Inc. (SMI). 
            This Privacy Policy explains how we handle the personal information you provide through our 
            website forms, including your name, phone number, and home address, when requesting our 
            cleaning and property maintenance services throughout the Greater Toronto Area.
          </p>
        </div>
      </div>

      <div className="flex justify-end mb-4 space-x-3">
        <button 
          onClick={() => toggleAll(true)}
          className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-primary-300 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-150"
        >
          Expand All
        </button>
        <button 
          onClick={() => toggleAll(false)}
          className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-primary-300 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-150"
        >
          Collapse All
        </button>
      </div>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className="border border-priamry-400 overflow-hidden transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
          >
            <button 
              onClick={() => toggleSection(index)}
              className="cursor-pointer w-full px-6 py-5 text-left bg-primary-300 hover:bg-primary-400 duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 flex justify-between items-center"
            >
              <span className="text-lg font-semibold text-white">{index + 1}. {section.title}</span>
              <svg 
                className={`w-6 h-6 text-white transform transition-transform duration-200 ${expandedSection === index || expandedSection === 'all' ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedSection === index || expandedSection === 'all' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 py-5 bg-white border-t border-primary-500">
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-primary-400">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <Mail className="w-8 h-8 text-primary-300 mr-3" />
            <div>
              <p className="text-gray-800 font-medium">Questions about this policy?</p>
              <Link href="/contact-us" className="text-primary-300 hover:text-primary-400 font-bold">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <Phone className="w-8 h-8 text-primary-300 mr-3" />
            <div>
              <p className="text-gray-800 font-medium">Need immediate assistance?</p>
              <a href="tel:+14169184122" className="text-primary-300 hover:text-primary-400 font-bold">
                Call our Privacy Office
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;