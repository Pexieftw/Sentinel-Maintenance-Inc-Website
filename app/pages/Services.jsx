"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { serviceCategories } from '../utils/data'
import BreadCrumbsSection from '../utils/BreadCrumbsSection'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].category)

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    })
  }, [])

  // Update AOS when active category changes
  useEffect(() => {
    AOS.refresh()
  }, [activeCategory])

  return (
    <div className="bg-white text-gray-900 min-h-screen">

      <BreadCrumbsSection 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-5xl font-bold uppercase tracking-tight text-gray-900 mb-6">
            Cleaning Redefined
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Precision engineering meets cleanliness. We don't just clean, we transform.
          </p>
        </div>

        {/* Category Navigation */}
        <div 
          className="flex flex-col md:flex-row justify-center border-b border-gray-200 pb-4 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {serviceCategories.map((category, index) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`
                px-3 py-2 m-1 text-sm font-medium uppercase tracking-wide rounded
                transition-colors duration-200
                ${activeCategory === category.category 
                  ? 'bg-primary-300 text-white' 
                  : 'text-gray-500 hover:text-primary-500 hover:bg-gray-100'}
              `}
              data-aos="zoom-in"
              data-aos-delay={200 + (index * 50)}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          {serviceCategories
            .filter(category => category.category === activeCategory)
            .map((category) => (
              <motion.div 
                key={category.category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {category.services.map((service, index) => (
                  <Link 
                    href={`/services/${service.slug}`} 
                    key={service.name}
                    className="group"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="border border-gray-200 h-full flex flex-col 
                      transition-all duration-300 
                      hover:border-primary-300 
                      hover:shadow-lg">
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image 
                          src={service.image} 
                          alt={service.name} 
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      <div className="flex-grow p-8 flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                          <h3 className="text-2xl font-bold uppercase tracking-tight text-gray-900">
                            {service.name}
                          </h3>
                        </div>
                        
                        <p className="text-gray-600 mb-8 flex-grow line-clamp-3">
                          {service.description}
                        </p>
                        
                        <div className="border-t border-gray-200 pt-6 mt-6 flex justify-between items-center">
                          <span className="text-sm uppercase tracking-wider text-gray-500">
                            View Details
                          </span>
                          <div className="w-8 h-px bg-primary-300 transition-all duration-500 group-hover:w-16"></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  )
}