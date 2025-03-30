import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getServiceBySlug, getAllServicePaths } from '../../utils/data'
import { CheckCircle2, Leaf, Calendar, CloudSun } from 'lucide-react'
import BreadCrumbsSection from '../../utils/BreadCrumbsSection'

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
      <div className="container mx-auto px-4 py-0 md:py-4 pb-4 md:pb-8 max-w-6xl">
        <div className="space-y-16">
          <div className="relative overflow-hidden mb-12">
            {/* Grid container */}
            <div className="pt-4 md:pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left side: Text content */}
              <div className="p-8 bg-gradient-to-br from-primary-100 to-primary-300 flex items-center">
                <div className="max-w-lg">
                  <p className="text-center md:text-left text-lg md:text-xl lg:text-2xl font-medium text-gray-800 dark:text-white leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>
              </div>
              
              {/* Right side: Image */}
              <div className="relative h-64 md:h-auto">
                <div className="relative h-full w-full overflow-hidden ">
                  <Image 
                    src={service.image} 
                    alt={service.name} 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div>



            <h2 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center justify-center">
              <div className="bg-primary-300 p-3 mr-3 rounded-full ">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.keyFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-5 flex items-center space-x-4 shadow-sm border border-gray-100 hover:border-primary-300/20 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary-300 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Aftercare Tips */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center justify-center">
                <div className="bg-primary-300 p-3 mr-3 rounded-full ">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                Aftercare Tips
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.aftercareTips.map((tip, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 p-5 flex items-start space-x-4 shadow-sm border border-gray-100 hover:border-primary-300/20 hover:shadow-md transition-all duration-300"
                  >
                    <Leaf className="w-6 h-6 text-primary-300 flex-shrink-0 mt-1" />
                    <span className="text-gray-800">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Seasonal Insights */}
            <div className="flex flex-col h-full justify-center items-center">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center justify-center">
                <div className="bg-primary-300 p-3 mr-3 rounded-full ">
                  <CloudSun className="w-8 h-8 text-white" />
                </div>
                Seasonal Insights
              </h2>
              <div className="flex-1 bg-gradient-to-br from-primary-100 to-primary-300 p-8 shadow-xl
                flex flex-col justify-center items-center text-center gap-4">
                <CloudSun className="w-12 h-12 text-white" />
                <p className="text-white font-medium text-lg leading-relaxed">
                  {service.seasonalNote}
                </p>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}