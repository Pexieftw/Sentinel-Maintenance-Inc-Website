'use client';

import { useState, useEffect } from 'react'; // Import useEffect
import { Mail } from 'lucide-react';
import SectionHeader from '../utils/SectionHeader';
import BreadCrumbsSection from '../utils/BreadCrumbsSection';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    number: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({
        name: '',
        address: '',
        number: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
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
        data-aos="fade-down" // Add AOS animation
      />

      <section className="px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white py-16 mb-16">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            icon={<Mail size={40} className="text-primary-500" />} 
            title="Contact Us"
            description="Get in touch with us"
            position="center"
            data-aos="fade-right"
          />
          <div className="lg:px-0 grid lg:grid-cols-2 gap-4 lg:gap-8 mt-16">
            {/* Contact Information Column */}
            <div className="container mx-auto max-w-6xl flex flex-col justify-between">
              {/* Introduction Text */}
              <div className="text-center md:text-left" data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold bg-primary-300 bg-clip-text text-transparent">Let's Connect</h2>
                <p className="text-gray-600 max-w-2xl text-lg py-4">
                  We're just a message away. Whether you have questions, feedback, or just say hello,
                  we'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" data-aos="fade-right" data-aos-delay="100">
                {/* Chat with Us */}
                <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-100 group shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-6 h-48 md:h-64">
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
                    <a href="mailto:team@calmerry.com" className="text-primary-300 font-medium hover:text-primary-400 inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      info@smi.ca
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Call Us */}
                <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-100 group shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-6 h-48 md:h-64">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary-300 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-600 mb-2">Toll-free support line available during business hours.</p>
                  </div>
                  <div className="mt-auto">
                    <a href="tel:18447402144" className="text-primary-300 font-medium hover:text-primary-400 inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      +1 416-918-4177
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Visit Us */}
                <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-100 group shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-6 h-48 md:h-64">
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
                    <p className="text-gray-600 mb-2">Located in the heart of Toronto’s creative district</p>
                  </div>
                  <div className="mt-auto">
                    <address className="text-primary-300 font-medium not-italic">
                      401 Richmond St W #222, Toronto, ON M5V 3A8, Canada
                    </address>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-100 group shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-6 h-48 md:h-64">
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
            <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-100 order-1 lg:order-2" data-aos="fade-left">
              <div className="shadow-sm hover:shadow-md p-6 md:p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                
                {formStatus.isSubmitted ? (
                  <div className="flex flex-col justify-center items-center">
                  <div className="bg-emerald-50 border border-primary-100 p-6 text-center">
                    <svg className="mx-auto h-12 w-12 text-primary-300 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="text-lg font-bold text-primary-400 mb-2">Message Sent Successfully!</h4>
                    <p className="text-primary-200">Thank you for reaching out. We'll get back to you shortly.</p>
                  </div>
                  <button 
                    className="w-fit cursor-pointer mt-4 px-4 py-2 bg-primary-300 text-white hover:bg-primary-400 transition duration-300"
                    onClick={() => setFormStatus({ isSubmitting: false, isSubmitted: false, error: null })}
                  >
                    Send Another Message
                  </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {formStatus.error && (
                      <div className="bg-red-50 border border-red-200 p-4  text-red-700 mb-4">
                        <p className="font-medium">Error: {formStatus.error}</p>
                      </div>
                    )}
                    
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          id="number"
                          name="number"
                          type="tel"
                          required
                          value={formData.number}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                        placeholder="123 Main St, City, Postal Code"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="privacy-policy"
                        name="privacy-policy"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-primary-300 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                        I agree to the <a href="#" className="text-primary-300 hover:text-indigo-800">Privacy Policy</a> and <a href="#" className="text-primary-300 hover:text-indigo-800">Terms of Service</a>
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={formStatus.isSubmitting}
                      className="cursor-pointer w-full px-6 py-3 bg-primary-300 text-white font-medium hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      {formStatus.isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;