import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getServiceBySlug, getAllServicePaths } from '../../utils/data'
import { CheckCircle2, Leaf, CloudSun, ArrowRight } from 'lucide-react'
import BreadCrumbsSection from '../../utils/BreadCrumbsSection'

import differentServices from "@/public/services.webp"; 
import leaf from "@/public/proud leaf.webp"; 

export async function generateStaticParams() {
  return getAllServicePaths()
}

export default async function ServiceDetailPage({ params }) {
  const { service: serviceSlug } = await params;
  
  const service = getServiceBySlug(serviceSlug); 
  
  if (!service) {
    notFound();
  }

  return (
    <>
      <BreadCrumbsSection 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.name, href: service.slug },
        ]}
      />
      
      {/* Modern Header Section */}
      <div className="bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
          <div className="text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Area */}
            <div className="space-y-8">
              <div className="inline-block px-5 py-2 bg-primary-300 border-l-4 border-primary-500 text-white text-sm font-medium shadow-sm">
                Professional Service
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                {service.header?.title}
              </h1>
              
              <p className="text-sm md:text:md lg:text-xl text-gray-700 leading-relaxed">
                {service.header?.description}
              </p>
              
              <div className="flex flex-wrap justify-center items-center lg:justify-start lg:items-start gap-6 pt-6">
                <a href="/contact-us" className="inline-flex items-center gap-2 bg-primary-300 hover:bg-primary-400 text-white px-8 py-4 font-medium transition-all shadow-md hover:shadow-lg">
                  Request Service
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/services" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 font-medium border border-gray-300 hover:border-primary-300 transition-all shadow-sm hover:shadow-md">
                  Explore Other Services
                </a>
              </div>
            </div>
            
            {/* New Vertical Stack Section */}
            <div className="h-full relative w-full space-y-8">
              <div className="h-full flex flex-col gap-8 justify-center items-center md:items-end"> 
                {/* Image */}
                <div className="relative h-auto">
                  <div className="relative h-full overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-primary-300/10"></div>
                    <Image 
                      src={service.image} 
                      alt={service.name} 
                      width={800}
                      height={600} 
                      className="w-full h-auto"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-primary-500/50">
                      <p className="text-white font-medium text-sm text-center">{service.name}</p>
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="bg-primary-300 p-12 shadow-xl flex items-center">
                  <div>
                    <div className="w-16 h-1 bg-primary-100 mb-8"></div>
                    <p className="text-left text-xl font-light text-white leading-relaxed">
                      {service.fullDescription}
                    </p>
                    <div className="mt-8 w-24 h-1 bg-primary-100 ml-auto"></div>
                  </div>
                </div>

                {/* Leaf */}
                <div className="flex justify-end">
                  <Image 
                    src={leaf} 
                    alt={"A proud canadian company"} 
                    priority 
                    sizes="100vw" 
                  />
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4 pb-24 max-w-7xl">
          <div className="space-y-32">

            {/* Key Features */}
            <div id="features">
              <div className="flex items-center mb-16">
                <div className="bg-primary-300 p-3 mr-4">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Key Features</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Features List - Left Side */}
                <div className="order-2 lg:order-1 grid grid-cols-1 gap-6 lg:gap-8">
                  {service.keyFeatures.map((feature, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-6 lg:p-8 flex items-center space-x-4 shadow-lg border-l-4 border-primary-300 hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] group"
                    >
                      <div className="p-2 bg-gray-50 rounded-full group-hover:bg-primary-300 text-primary-300 group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                      </div>
                      <span className="text-gray-800 font-medium text-sm lg:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Image - Right Side */}
                <div className="order-1 lg:order-2 relative w-full">
                  <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[3/4] xl:aspect-square lg:min-h-[500px]">
                    <Image 
                      src={differentServices} 
                      alt={service.name} 
                      priority 
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                      className="object-cover object-center"
                      quality={85}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid md:grid-cols-2 gap-16">
              {/* Aftercare Tips */}
              <div>
                <div className="flex items-center mb-16">
                  <div className="bg-primary-300 p-3 mr-4">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">Aftercare Tips</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {service.aftercareTips.map((tip, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-6 flex items-start space-x-4 shadow-lg border-l-4 border-primary-300 hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] group"
                    >
                      <div className="p-2 bg-gray-50 rounded-full group-hover:bg-primary-300 transition-colors">
                        <Leaf className="w-6 h-6 text-primary-300 flex-shrink-0 group-hover:text-white" />
                      </div>
                      <span className="text-gray-800">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seasonal Insights */}
              <div className="flex flex-col">
                <div className="flex items-center mb-16">
                  <div className="bg-primary-300 p-3 mr-4">
                    <CloudSun className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">Seasonal Insights</h2>
                </div>
                
                <div className="flex-1 bg-primary-300 p-12 shadow-xl flex flex-col justify-center items-center text-center gap-6 transition-colors">
                  <div className="p-4 bg-primary-400 rounded-full transition-colors">
                    <CloudSun className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-white font-medium text-xl leading-relaxed">
                    {service.seasonalNote}
                  </p>
                  <div className="w-24 h-1 bg-primary-100 mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}