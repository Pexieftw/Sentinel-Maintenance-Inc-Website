import React from 'react';

const SectionHeader = ({ icon, title, description, position, color }) => {
  return (
    <div className="mb-8" data-aos="fade-up">
      
      {/* Icon */}
      <div className={`flex items-center justify-center ${position === 'start' ? 'md:justify-start' : position === 'center' ? 'md:justify-center' : 'lg:justify-center'}`}>
        {icon}
        <h1 className={`uppercase text-${color} pl-2 md:pl-4 text-sm md:text-md lg:text-xl font-extrabold`}>
          ◆ 
        </h1>
        <h1 className={`uppercase text-${color} pl-2 md:pl-4 text-md md:text-md lg:text-2xl font-extrabold`}>
          {title}
        </h1>
      </div>

      <h2
        className={`mt-3 md:mt-6 text-3xl lg:text-5xl font-bold text-${color === 'white' ? 'white' : 'gray-800'} text-center ${position === 'start' ? 'lg:text-left' : position === 'center' ? 'lg:text-center' : 'text-center'}`}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {description}
      </h2>
    </div>
  );
};

export default SectionHeader;