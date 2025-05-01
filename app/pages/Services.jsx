"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { serviceCategories } from '../utils/data'
import BreadCrumbsSection from '../utils/BreadCrumbsSection'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRouter, useSearchParams } from 'next/navigation'

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const allCategories = [
    {
      category: 'All',
      services: serviceCategories.flatMap(category => category.services)
    },
    ...serviceCategories
  ]

  // Handle URL hash for category selection
  useEffect(() => {
    // Check if we're running on the client side
    if (typeof window !== 'undefined') {
      // Get the hash from the URL (removing the # character)
      const hash = window.location.hash.replace('#', '')
      
      if (hash) {
        // Convert hash to proper category name format by converting kebab-case to normal text
        // For example, 'cleaning-services' becomes 'Cleaning Services'
        const formattedHash = hash
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
        
        // Find the matching category
        const matchingCategory = allCategories.find(
          cat => cat.category.toLowerCase() === formattedHash.toLowerCase()
        )
        
        if (matchingCategory) {
          setActiveCategory(matchingCategory.category)
        }
      }
    }
  }, []) // Empty dependency array ensures this only runs on mount

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    })
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [activeCategory])

  // Update URL hash when category changes
  useEffect(() => {
    if (typeof window !== 'undefined' && activeCategory !== 'All') {
      // Convert category name to kebab-case for the URL
      // For example, 'Cleaning Services' becomes 'cleaning-services'
      const hash = activeCategory.toLowerCase().replace(/\s+/g, '-')
      // Update URL without triggering page reload
      window.history.replaceState(null, '', `/services#${hash}`)
    } else if (typeof window !== 'undefined') {
      // Remove hash when 'All' is selected
      window.history.replaceState(null, '', '/services')
    }
  }, [activeCategory])

  const filteredServices = allCategories
    .filter(category => category.category === activeCategory)[0]
    .services.filter(service => 
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <div className="bg-white text-gray-900 min-h-screen">

      <BreadCrumbsSection 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-16" data-aos="fade-down">
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight text-gray-900 mb-4 sm:mb-6">
            Cleaning Redefined
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Precision engineering meets cleanliness. We don't just clean, we transform.
          </p>
        </div>

        {/* Category Navigation and Search */}
        <div 
          className="flex flex-col md:flex-col lg:flex-row lg:justify-between lg:items-center mb-8 sm:mb-12 border-b border-gray-200 pb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Search Filter */}
          <div className="relative w-full lg:w-96 mb-6 lg:mb-0 order-first lg:order-last" data-aos="fade-up">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search services..."
              className="block w-full pl-10 pr-4 py-2 border border-gray-300 shadow-sm
                focus:ring focus:ring-primary-200 focus:border-primary-500 focus:outline-none
                text-sm"
            />
          </div>

          {/* Mobile-friendly Category Tabs */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-0 order-last lg:order-first">
            {allCategories.map((category, index) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`
                  px-4 sm:px-6 py-3 text-sm font-medium uppercase tracking-wide
                  transition-all duration-300 relative cursor-pointer
                  border-2 
                  ${activeCategory === category.category 
                    ? 'bg-primary-300 text-white font-semibold border-primary-300' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-primary-300 hover:bg-gray-50'}
                `}
                data-aos="zoom-in"
                data-aos-delay={200 + (index * 50)}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {activeCategory} Services
            {searchTerm && (
              <span className="text-lg font-normal text-gray-500 ml-2">
                • Filtered by "{searchTerm}"
              </span>
            )}
          </h2>
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory + searchTerm}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
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
                    <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                      <Image 
                        src={service.image} 
                        alt={service.name} 
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="flex-grow p-4 sm:p-6 md:p-8 flex flex-col">
                      <div className="flex justify-between items-start mb-4 sm:mb-6">
                        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-gray-900">
                          {service.name}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 mb-6 sm:mb-8 flex-grow text-sm sm:text-base line-clamp-3">
                        {service.description}
                      </p>
                      
                      <div className="border-t border-gray-200 pt-4 sm:pt-6 mt-auto flex justify-between items-center">
                        <span className="text-xs sm:text-sm uppercase tracking-wider text-gray-500">
                          View Details
                        </span>
                        <div className="w-6 sm:w-8 h-px bg-primary-300 transition-all duration-500 group-hover:w-12 sm:group-hover:w-16"></div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-10 sm:py-16">
                <p className="text-lg text-gray-500">No services found matching your search.</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="mt-4 text-primary-500 hover:text-primary-700"
                >
                  Clear search
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}