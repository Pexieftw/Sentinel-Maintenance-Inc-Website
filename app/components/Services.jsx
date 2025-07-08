'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ClipboardCheck } from 'lucide-react';
import SectionHeader from '../utils/SectionHeader';
import { serviceData } from '../utils/data';

const Services = () => {

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <section className="pt-10 md:pt-20 py-20 px-4 sm:px-6 lg:px-8 xl:px-0 bg-gradient-to-t from-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          {/* Icon */}
          <SectionHeader
            icon={<ClipboardCheck className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary-300" />} 
            title="Services"
            description="Explore our range of services below"
            position="center"
            color="primary-300"
          />
        </div>

        <div className="relative flex flex-wrap justify-between gap-y-8 md:gap-y-16">
          {serviceData.map((service, index) => (
            <Link
              href={service.link}
              key={service.id}
              className={`group relative overflow-hidden w-full md:w-[30%] shadow-lg hover:shadow-2xl`}
              data-aos="fade-up" 
              data-aos-delay={300 + index * 200}
            >
              <div className="transition-transform duration-300 hover:-translate-y-3">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={100}
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-100/0 to-primary-100/15"></div>
                  <div className={`absolute top-4 left-4 bg-primary-300 px-4 py-1 text-white text-sm font-medium`}>
                    {service.info}
                  </div>
                </div>
                
                <div className="p-8 relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-300 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center">
                    <span className="text-primary-300 font-semibold mr-2">Discover more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-300 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;