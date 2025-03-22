"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BreadCrumbsSection = ({ breadcrumbs = [], imageSrc, imageAlt }) => {
  // Safety check to ensure breadcrumbs is an array with at least one item
  if (!Array.isArray(breadcrumbs) || breadcrumbs.length === 0) return null;

  // Get the last breadcrumb for the h1
  const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];
  
  return (
    <div className="relative h-[40vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-primary-500 ">
        <Image
          src={imageSrc} 
          alt={imageAlt}
          className="w-full h-full object-cover opacity-30"
          width={1920}
          height={1080}
          priority
        />
        {/* Modern gradient overlay */}
      </div>

      {/* Content */}
      <div className=" lg:mt-4 relative z-10 flex flex-col items-center justify-center h-full px-6">
        <div className="max-w-3xl w-full text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {typeof lastBreadcrumb === 'string' ? lastBreadcrumb : lastBreadcrumb.label}
          </h1>
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex justify-center">
            <ol className="flex items-center space-x-2">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                const label = typeof crumb === 'string' ? crumb : crumb.label;
                const href = typeof crumb === 'string' ? '#' : (crumb.href || '#');
                
                return (
                  <React.Fragment key={index}>
                    {isLast ? (
                      <li>
                        <Link 
                          href={href} 
                          className="uppercase text-lg md:text-xl lg:text-2xl font-bold text-emerald-500 hover:text-emerald-600 transition-colors duration-300"
                          aria-current="page"
                        >
                          {label}
                        </Link>
                      </li>
                    ) : (
                      <li  className='m-0'>
                        <Link 
                          href={href} 
                          className="uppercase text-lg md:text-xl lg:text-2xl  font-bold text-white hover:text-gray-300 transition-colors duration-300"
                        >
                          {label}
                        </Link>
                        <span className="font-bold text-2xl text-white px-4">&gt;</span>
                      </li>
                    )}
                  </React.Fragment>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbsSection;