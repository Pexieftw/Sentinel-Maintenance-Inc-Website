'use client';

import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import SectionHeader from '../utils/SectionHeader';
import BreadCrumbsSection from '../utils/BreadCrumbsSection';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import Link from 'next/link';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    try {
      // Determine the correct endpoint based on environment
      const isDevelopment = process.env.NODE_ENV === 'development';
      const isLocalhost = typeof window !== 'undefined' && 
        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
      
      let phpEndpoint;
      
      if (isDevelopment || isLocalhost) {
        phpEndpoint = window.location.hostname === 'localhost' 
          ? 'http://localhost:8000/contact-form-handler.php'  // Separate PHP server
          : '/php/contact-form-handler.php';  // Same server (if using Next.js API routes proxy)
      } else {
        // Production - use relative path
        phpEndpoint = '/php/contact-form-handler.php';
      }
      
      // Only log in development
      if (isDevelopment) {
        console.log('Environment:', process.env.NODE_ENV);
        console.log('Sending to:', phpEndpoint);
        console.log('Form data:', formData);
      }
      
      const response = await fetch(phpEndpoint, {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      
      // Only log in development
      if (isDevelopment) {
        console.log('Response status:', response.status);
        console.log('Response headers:', [...response.headers.entries()]);
      }
      
      // Get the response text first to see what we're actually receiving
      const responseText = await response.text();
      
      // Only log in development
      if (isDevelopment) {
        console.log('Raw response:', responseText);
      }
      
      // Try to parse as JSON
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        if (isDevelopment) {
          console.error('JSON parse error:', parseError);
          console.error('Response was:', responseText);
        }
        
        // Check if it's an HTML error page (common server error)
        if (responseText.includes('<!DOCTYPE html>') || responseText.includes('<html>')) {
          throw new Error('Server returned an HTML error page. Please check server configuration.');
        }
        
        throw new Error('Server returned invalid response. Please try again later.');
      }
      
      if (!response.ok) {
        throw new Error(result.error || `HTTP ${response.status}: ${response.statusText}`);
      }
      
      // Only log in development
      if (isDevelopment) {
        console.log('Success result:', result);
      }
      
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: true, 
        error: null,
        successMessage: result.message || 'Form submitted successfully!'
      });
      
      setFormData({
        name: '',
        address: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setPrivacyAccepted(false);
      
    } catch (error) {
      // Only log detailed errors in development
      if (isDevelopment) {
        console.error('Error submitting form:', error);
      }
      
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: error.message || 'Failed to submit form. Please try again.' 
      });
    }
  };

  return (
    <>
      <BreadCrumbsSection 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us', href: '/contact-us' },
        ]}
        imageSrc="/breadcrumbs-bg.jpg"
        imageAlt="Custom Cleaning Background"
        data-aos="fade-down"
      />

      <section className="px-4 sm:px-6 lg:px-8 xl:px-0 bg-gradient-to-b from-gray-50 to-white py-16 mb-16">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader
            icon={<Mail size={40} className="text-primary-500" />} 
            title="Contact Us"
            description="Get in touch with us"
            position="center"
            data-aos="fade-right"
          />
          
          <div className="lg:px-0 grid lg:grid-cols-2 gap-8 mt-16">
            {/* Contact Information Column */}
            <div className="container mx-auto max-w-7xl flex flex-col justify-between">
              {/* Introduction Text */}
              <div className="text-center md:text-left mb-4" data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold bg-primary-300 bg-clip-text text-transparent">Let's Connect</h2>
                <p className="text-gray-600 max-w-2xl text-lg py-4">
                  We're just a message away. Whether you have questions, feedback, or just say hello,
                  we'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-right" data-aos-delay="100">
                {/* Email Us */}
                <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-100 group shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-6 min-h-64">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary-300 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-600 mb-2">Our friendly team is here to help with any questions.</p>
                  </div>
                  <div className="mt-auto">
                    <a href="mailto:info@smi.ca" target="_blank" className="text-primary-300 font-medium hover:text-primary-400 inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      info@smi.ca
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Call Us */}
                <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-100 group shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-6 min-h-64">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary-300 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-600 mb-2">Our support line is available 24/7</p>
                  </div>
                  <div className="mt-auto">
                    <a href="tel:14163408765" className="text-primary-300 font-medium hover:text-primary-400 inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      +1 416-340-8765
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Visit Us */}
                <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-100 group shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-6 min-h-64">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary-300 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Corporate Headquarters</h3>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-600 mb-2">Located in the heart of Toronto's fashion district</p>
                  </div>
                  <div className="hover:underline decoration-primary-300 mt-auto">
                    <Link
                      href="https://maps.app.goo.gl/vMmQjFnYygDge6og6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <address className="text-primary-300 font-medium not-italic">
                        401 Richmond St W #222, Toronto, ON M5V 3A8, Canada
                      </address>
                    </Link>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-100 group shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-6 min-h-64">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary-300 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-600 mb-2">We're available:</p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-primary-300 font-medium">24 hours a day <br/> 7 days a week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 border border-slate-200 order-1 lg:order-2" data-aos="fade-left">
              <div className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                {/* Fixed Header */}
                <div className="p-6 border-b border-slate-200">
                  <h3 className="text-2xl font-bold text-gray-900">Send us a message</h3>
                  <p className="text-gray-600 mt-1">Fill out the form below and we'll get back to you soon</p>
                </div>

                {/* Form Content - Fixed Height Container */}
                <div className="p-6 h-[calc(100%-120px)] min-h-[600px] flex flex-col">
                  {/* Error Message - Fixed Position */}
                  {formStatus.error && (
                    <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-4 mb-6 text-red-800">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <p className="font-medium text-sm">{formStatus.error}</p>
                      </div>
                    </div>
                  )}

                  {formStatus.isSubmitted ? (
                    <div className="flex flex-col justify-center items-center h-full text-center">
                      <div className="bg-emerald-50 border-2 border-emerald-200 p-8 w-full h-full flex flex-col justify-center items-center">
                        <div className="bg-primary-300 p-4 mb-6 shadow-lg">
                          <svg className="h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-emerald-800 mb-4">Message Sent Successfully!</h4>
                        <p className="text-emerald-700 mb-6 max-w-md">Thank you for reaching out to us. We've received your message and will get back to you shortly.</p>
                        <button 
                          className="px-6 py-3 bg-primary-300 text-white font-semibold hover:bg-emerald-700 active:bg-emerald-800 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-300"
                          onClick={() => setFormStatus({ isSubmitting: false, isSubmitted: false, error: null })}
                        >
                          Send Another Message
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                      {/* Debug info - only show in development */}
                      {process.env.NODE_ENV === 'development' && (
                        <div className="p-2 bg-yellow-50 border border-yellow-200 text-xs text-yellow-700">
                          <p>Debug: Form data = {JSON.stringify(formData)}</p>
                        </div>
                      )}
                      
                      {/* Form Fields */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-800">Full Name</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-3 border-2 border-gray-200 focus:ring-2 focus:ring-primary-200 focus:border-primary-400 focus:outline-none shadow-sm hover:border-gray-300 transition-all duration-200 text-sm"
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div className="space-y-1">
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Email Address</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-3 border-2 border-gray-200 focus:ring-2 focus:ring-primary-200 focus:border-primary-400 focus:outline-none shadow-sm hover:border-gray-300 transition-all duration-200 text-sm"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <label htmlFor="address" className="block text-sm font-semibold text-gray-800">Address</label>
                        <input
                          id="address"
                          name="address"
                          type="text"
                          required
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full px-3 py-3 border-2 border-gray-200 focus:ring-2 focus:ring-primary-200 focus:border-primary-400 focus:outline-none shadow-sm hover:border-gray-300 transition-all duration-200 text-sm"
                          placeholder="123 Main St, City, Postal Code"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-800">Subject</label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3 py-3 border-2 border-gray-200 focus:ring-2 focus:ring-primary-200 focus:border-primary-400 focus:outline-none shadow-sm hover:border-gray-300 transition-all duration-200 text-sm"
                          placeholder="How can we help you?"
                        />
                      </div>
                      
                      <div className="space-y-1 flex-1">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-800">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-3 py-3 border-2 border-gray-200 focus:ring-2 focus:ring-primary-200 focus:border-primary-400 focus:outline-none shadow-sm hover:border-gray-300 transition-all duration-200 resize-none text-sm"
                          placeholder="Please provide details about your inquiry..."
                        />
                      </div>
                      
                      {/* Privacy Policy - Enhanced with light up effect */}
                      <div 
                        className={`flex items-start space-x-3 p-3 border-l-4 transition-all duration-300 ${
                          privacyAccepted 
                            ? 'bg-primary-50 border-primary-300 shadow-sm' 
                            : 'bg-gray-50 border-gray-300'
                        }`}
                      >
                        <input
                          id="privacy-policy"
                          name="privacy-policy"
                          type="checkbox"
                          required
                          checked={privacyAccepted}
                          onChange={(e) => setPrivacyAccepted(e.target.checked)}
                          className="h-4 w-4 text-primary-500 focus:ring-primary-400 border-gray-300 mt-0.5"
                        />
                        <label htmlFor="privacy-policy" className="text-sm text-gray-700 leading-relaxed">
                          I agree to the{' '}
                          <Link 
                            href="/privacy-policy" 
                            className="text-primary-300 hover:text-primary-500 font-medium hover:underline decoration-2 underline-offset-4"
                            target="_blank"
                          >
                            Privacy Policy
                          </Link>
                          {' '}and consent to being contacted regarding my inquiry, or email us directly at {' '}
                          <a 
                            href="mailto:info@smi.ca" 
                            className="text-primary-300 hover:text-primary-500 font-medium hover:underline decoration-2 underline-offset-4"
                          >
                            info@smi.ca
                          </a>
                          .
                        </label>
                      </div>
                                      
                      <button
                        type="submit"
                        disabled={formStatus.isSubmitting}
                        className="w-full px-6 py-3 bg-primary-300 text-white font-semibold hover:from-primary-600 hover:to-primary-700 active:from-primary-700 active:to-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                      >
                        {formStatus.isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending Message...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            Send Message
                            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </span>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;