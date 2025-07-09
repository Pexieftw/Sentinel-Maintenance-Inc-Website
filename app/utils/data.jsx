// Services Information
export const services = {
  'Cleaning Services': [
    'Commercial Janitorial Cleaning',
    'Office Cleaning',
    'Condominium Cleaning',
    'Medical Office Cleaning',
    'Dealership Cleaning',
    'Institutional Cleaning',
    'Construction Cleaning',
    'New Condominium Construction Cleaning'
  ],
  'Specialized Services': {
    column1: [
      'Deep Cleaning and Disinfection',
      'Fogging Disinfection',
      'Low-Rise and High-rise Window Cleaning',
      'Exterior Power Washing',
      'Parking Garage Power Washing',
      'Carpet Cleaning',
      'COVID-19 Cleaning',
      'Graffiti Removal',
      'Stone Staining for Colour Matching',
      'Natural Stone Restoration',
      'Tile & Grout Cleaning & Colour Sealing',
    ],
    column2: [
      'Landscaping',
      'Snow Removal',
      'Lobby and Entrance Walk-off Matting Installation',
      'Animal Control and Deterrents',
      'HVAC Cleaning',
      'Fan Coil Cleaning',
      'Laundry and Kitchen Exhaust Fan Cleaning',
      'Industrial Kitchen Vent Cleaning',
      'Moving Services',
      'Junk Removal'
    ]
  },
  'Restoration': [
    'Flood Cleanup',
    'Fire Restoration',
    'Odour Control',
    'Applied Microbial (Mould & Sewage) Remediation (AMRT)'
  ]
};


// Navbar Informations
export const navItems = [
  { label: 'Home', link: '/' },
  { label: 'About Us', link: '/about-us' },
  { 
    label: 'Services', 
    dropdown: services,
    link:'/services'
  },
  { label: 'Areas We Serve', link: '/areas-we-serve' },
  { label: 'Team & Work Culture', link: '/team-and-work-culture' },
  { label: 'Health & Safety', link: '/health-and-safety' },
  { label: 'Contact Us', link: '/contact-us' }
];

// Services Informations

import cleaningServices from "@/public/pages/home/cleaning-services.webp"; 
import specializedServiecs from "@/public/pages/home/specialized-services.webp"; 
import restoration from "@/public/pages/home/restoration.webp"; 

export const serviceData = [
  {
    id: 'cleaning',
    title: 'Cleaning Services',
    description: 'Reliable, professional cleaning solutions tailored for commercial properties, with exceptional results you can count on',
    image: cleaningServices,
    link: '/services/#cleaning-services',
    info: 'Featuring 8 Services'
  },
  {
    id: 'specialized',
    title: 'Specialized Services',
    description: 'Custom solutions for unique cleaning challenges, including biohazard cleanup, industrial cleaning, and more',
    image: specializedServiecs,
    link: '/services/#specialized-services',
    info: 'Featuring 21 Services'
  },
  {
    id: 'restoration',
    title: 'Restoration',
    description: 'Complete restoration services for water, fire, and mold damage, helping you recover quickly from disasters',
    image: restoration,
    link: '/services#restoration',
    info: 'Featuring 4 Services'
  }
];


// Center of the Greater Toronto Area
export const GTA_CENTER = [43.7800, -79.4200];

// GTA and surrounding cities
export const GTA_CITIES = [
  { name: "Toronto", coordinates: [43.6532, -79.3832] },
  { name: "North York", coordinates: [43.7615, -79.4111] },
  { name: "Scarborough", coordinates: [43.7764, -79.2318] },
  { name: "Etobicoke", coordinates: [43.6205, -79.5132] },
  { name: "Vaughan", coordinates: [43.8563, -79.5085] },
  { name: "Thornhill", coordinates: [43.8156, -79.4240] },
  { name: "Richmond Hill", coordinates: [43.8828, -79.4403] },
  { name: "Markham", coordinates: [43.8561, -79.3370] },
  { name: "Maple", coordinates: [43.8501, -79.5129] },
  { name: "Concord", coordinates: [43.7935, -79.4858] },
  { name: "Milton", coordinates: [43.5183, -79.8774] },
  { name: "Mississauga", coordinates: [43.5890, -79.6441] },
  { name: "Brampton", coordinates: [43.7315, -79.7624] },
  { name: "Woodbridge", coordinates: [43.7758, -79.5960] },
  { name: "Oakville", coordinates: [43.4675, -79.6877] },
  { name: "Burlington", coordinates: [43.3255, -79.7990] },
  { name: "Hamilton", coordinates: [43.2557, -79.8711] }
];

import brampton from "@/public/cities/brampton.webp";
import burlington from "@/public/cities/burlington.webp";
import concord from "@/public/cities/concord.webp";
import etobicoke from "@/public/cities/etobicoke.webp";
import hamilton from "@/public/cities/hamilton.webp";
import maple from "@/public/cities/maple.webp";
import markham from "@/public/cities/markham.webp";
import milton from "@/public/cities/milton.webp";
import mississauga from "@/public/cities/mississauga.webp";
import northYork from "@/public/cities/north-york.webp";
import oakville from "@/public/cities/oakville.webp";
import richmondHill from "@/public/cities/richmond-hill.webp";
import scarborough from "@/public/cities/scarborough.webp";
import thornhill from "@/public/cities/thornhill.webp";
import toronto from "@/public/cities/toronto.webp";
import vaughan from "@/public/cities/vaughan.webp";
import woodbridge from "@/public/cities/woodbridge.webp";

export const areas = [
  {
    name: 'Toronto',
    description: 'Our core service area, covering all neighborhoods in Toronto with prompt and reliable service.',
    imageSrc: toronto
  },
  {
    name: 'North York',
    description: 'Complete coverage across North York with specialized service teams familiar with the area.',
    imageSrc: northYork
  },
  {
    name: 'Scarborough',
    description: 'Extending our quality services throughout Scarborough communities with dedicated local teams.',
    imageSrc: scarborough
  },
  {
    name: 'Etobicoke',
    description: 'Full service coverage in Etobicoke with experienced professionals who know the area well.',
    imageSrc: etobicoke
  },
  {
    name: 'Vaughan',
    description: 'Reliable service throughout Vaughan with teams that understand the unique needs of this growing region.',
    imageSrc: vaughan
  },
  {
    name: 'Thornhill',
    description: 'Dedicated service providers covering all of Thornhill with attention to detail and quality.',
    imageSrc: thornhill
  },
  {
    name: 'Richmond Hill',
    description: 'Expert service teams covering Richmond Hill with comprehensive solutions for all clients.',
    imageSrc: richmondHill
  },
  {
    name: 'Markham',
    description: 'Full coverage across Markham with specialized teams for commercial clients.',
    imageSrc: markham
  },
  {
    name: 'Maple',
    description: 'Serving the Maple community with tailored solutions and responsive service teams.',
    imageSrc: maple
  },
  {
    name: 'Concord',
    description: 'Dedicated coverage in Concord with professionals who understand local requirements and expectations.',
    imageSrc: concord
  },
  {
    name: 'Milton',
    description: 'Extending our quality service to Milton with teams that are familiar with this growing community.',
    imageSrc: milton
  },
  {
    name: 'Mississauga',
    description: 'Comprehensive coverage across Mississauga with teams strategically located for quick response.',
    imageSrc: mississauga
  },
  {
    name: 'Brampton',
    description: 'Full service coverage in Brampton with teams equipped to handle all client needs efficiently.',
    imageSrc: brampton
  },
  {
    name: 'Woodbridge',
    description: 'Dedicated service teams covering Woodbridge with attention to detail and customer satisfaction.',
    imageSrc: woodbridge
  },
  {
    name: 'Oakville',
    description: 'Expert service providers throughout Oakville delivering premium solutions to all clients.',
    imageSrc: oakville
  },
  {
    name: 'Burlington',
    description: 'Extending our quality service to Burlington with professionals who understand local requirements.',
    imageSrc: burlington
  },
  {
    name: 'Hamilton',
    description: 'Comprehensive coverage across Hamilton with teams ready to provide exceptional service.',
    imageSrc: hamilton
  }
];
import commercialJanitorialCleaning from "@/public/pages/services/cleaning services/commerical-janitorial-cleaning.webp";
import condominiumCleaning from "@/public/pages/services/cleaning services/condominium-cleaning.webp";
import dealershipCleaning from "@/public/pages/services/cleaning services/dealership-cleaning.webp";
import institutionalCleaning from "@/public/pages/services/cleaning services/institutional-cleaning.webp";
import medicalOfficeCleaning from "@/public/pages/services/cleaning services/medical-office-cleaning.webp";
import newCondominiumConstructionCleaning from "@/public/pages/services/cleaning services/new-condominium-construction-cleaning.webp";
import officeCleaning from "@/public/pages/services/cleaning services/office-cleaning.webp";
import postConstructionCleaning from "@/public/pages/services/cleaning services/post-construction-cleaning.webp";

import covid19Cleaning from "@/public/pages/services/specialized services/covid19-cleaning.webp";
import deepCleaning from "@/public/pages/services/specialized services/deep-cleaning-and-disinfection.webp";
import exteriorPowerWashing from "@/public/pages/services/specialized services/exterior-power-washing.webp";
import fanCoilCleaning from "@/public/pages/services/specialized services/fan-coil-cleaning.webp";
import foggingDisinfection from "@/public/pages/services/specialized services/fogging-disinfection.webp";
import graffitiRemoval from "@/public/pages/services/specialized services/graffiti-removal.webp";
import hvacCleaning from "@/public/pages/services/specialized services/hvac-cleaning.webp";
import industrialKitchenVentCleaning from "@/public/pages/services/specialized services/industrial-kitchen-vent-cleaning.webp";
import junkRemoval from "@/public/pages/services/specialized services/junk-removal.webp";
import landscaping from "@/public/pages/services/specialized services/landscaping.webp";
import laundryExhaustFanCleaning from "@/public/pages/services/specialized services/laundry-kitch-exhaust-fan-cleaning.webp";
import mattingInstallation from "@/public/pages/services/specialized services/matting-installation.webp";
import movingServices from "@/public/pages/services/specialized services/moving-services.webp";
import naturalStoneRestoration from "@/public/pages/services/specialized services/natural-stone-restoration.webp";
import parkingGaragePowerWashing from "@/public/pages/services/specialized services/parking-garage-power-washing.webp";
import snowRemoval from "@/public/pages/services/specialized services/snow-removal.webp";
import stoneStaining from "@/public/pages/services/specialized services/stone-staining.webp";
import tileGroutCleaning from "@/public/pages/services/specialized services/tile-grout-cleaning.webp";
import windowCleaning from "@/public/pages/services/specialized services/window-cleaning.webp";
import animalControl from "@/public/pages/services/specialized services/animal-control.webp";
import carpetCleaning from "@/public/pages/services/specialized services/carpet-cleaning.webp";

import amrt from "@/public/pages/services/restoration/amrt.webp";
import fireRestoration from "@/public/pages/services/restoration/fire-restoration.webp";
import floodCleanup from "@/public/pages/services/restoration/flood-cleanup.webp";
import odourControl from "@/public/pages/services/restoration/odour-control.webp";



export const serviceCategories = [
  {
    category: 'Cleaning Services',
    icon: 'Sparkles',
    services: [
      {
        name: 'Commercial Janitorial Cleaning',
        slug: 'commercial-janitorial-cleaning',
        header: {
          title: "Commercial Janitorial Cleaning Services in Toronto & GTA",
          description: "At Sentinel Maintenance Inc (SMI), we specialize in commercial janitorial cleaning services that keep your business environment consistently spotless, professional, and welcoming. Whether you operate an office, retail outlet, or industrial space, we tailor our janitorial routines to meet your exact needs. Our cleaning specialists focus on eliminating dust, debris, and bacteria to promote a hygienic workplace that enhances employee morale and client impressions. With eco-friendly products, flexible scheduling, and industry-specific cleaning protocols, SMI helps reduce allergens, prevent the spread of germs, and maintain a polished image across all surfaces. Businesses across Toronto and the GTA trust us to maintain their lobbies, restrooms, break rooms, and workspaces with precision and reliability. We believe that a clean facility is not only about appearance—it’s about creating a safer and more productive atmosphere every single day."
        },
        description: 'Comprehensive cleaning solutions for commercial spaces of all sizes.',
        image: commercialJanitorialCleaning,
        fullDescription: 'Our commercial janitorial cleaning service provides thorough and systematic cleaning for businesses across various industries. We ensure a clean, hygienic, and professional environment that reflects your company\'s standards.',
        keyFeatures: [
          'Customized cleaning protocols',
          'Consistent and reliable service',
          'Use of eco-friendly cleaning products',
          'Trained and professional cleaning staff'
        ],
        serviceDetails: [
          'Daily, weekly, and monthly cleaning packages',
          'Comprehensive floor to ceiling cleaning',
          'Specialized equipment for different surface types'
        ],
        aftercareTips: [
          'Maintain daily tidying between professional cleanings',
          'Implement workplace cleanliness guidelines',
          'Protect cleaned surfaces from immediate soiling',
          'Communicate specific cleaning needs to staff',
          'Regularly inspect and report maintenance issues',
          'Use designated cleaning stations and protocols'
        ],
        seasonalNote: 'Flu season and high-traffic periods require more intensive cleaning and disinfection protocols'
      },
      {
        name: 'Office Cleaning',
        slug: 'office-cleaning',
        header: {
          title: "Office Cleaning Services in Toronto & GTA",
          description: "A clean office environment plays a vital role in productivity, employee health, and the image your business projects. At Sentinel Maintenance Inc (SMI), we provide expert office cleaning services for businesses throughout Toronto and the GTA. Our team delivers meticulous cleaning of desks, boardrooms, kitchens, restrooms, and shared areas—ensuring no detail is overlooked. We target high-touch surfaces to reduce germs, apply industry-grade disinfectants, and work around your business hours to minimize disruption. Whether your office requires daily attention or scheduled deep cleaning, our flexible services are designed to meet your exact standards. Clean offices help reduce absenteeism, elevate staff satisfaction, and present your brand with the professionalism it deserves. Choose SMI for trusted, routine cleaning backed by trained professionals and modern tools that bring your workspace to life."
        },        
        description: 'Tailored cleaning solutions for modern office environments.',
        image: officeCleaning,
        fullDescription: 'Our office cleaning service focuses on creating a pristine, healthy, and productive workspace. We pay attention to every detail, from workstations to common areas, ensuring a spotless professional environment.',
        keyFeatures: [
          'Flexible scheduling',
          'Minimal disruption to workflow',
          'Sanitization of high-touch surfaces',
          'Advanced cleaning technologies'
        ],
        serviceDetails: [
          'After-hours cleaning options',
          'Specialized cleaning for different office types',
          'COVID-19 safety protocols'
        ],
        aftercareTips: [
          'Encourage employees to maintain personal workspace cleanliness',
          'Use desk mats and protective covers',
          'Implement daily sanitization of shared equipment',
          'Provide hand sanitization stations',
          'Promote a clean desk policy',
          'Regularly clean electronic devices and peripherals'
        ],
        seasonalNote: 'Winter and cold and flu seasons require increased focus on sanitization and hygiene protocols'
      },
      {
        name: 'Condominium Cleaning',
        slug: 'condominium-cleaning',
        header: {
          title: "Condominium Cleaning Services in Toronto & GTA",
          description: "At Sentinel Maintenance Inc (SMI), we understand the importance of clean and welcoming shared spaces in condominium communities. Our condominium cleaning services are built to support property managers and condo boards with reliable, high-quality cleaning for lobbies, elevators, hallways, mailrooms, and recreational areas. We deliver scheduled and emergency cleanings to ensure that every square foot of your property remains spotless, safe, and resident-ready. Our respectful, uniformed staff follow detailed cleaning protocols with eco-friendly solutions and a strong emphasis on discretion and consistency. With Toronto and GTA condos becoming increasingly high-traffic and service-driven, SMI ensures your building maintains a professional appearance that residents appreciate and prospective buyers remember. Let us take care of the details so your condominium remains clean, secure, and inviting all year round."
        },        
        description: 'Comprehensive cleaning services for condominium complexes and shared spaces.',
        image: condominiumCleaning,
        fullDescription: 'Our condominium cleaning service maintains the highest standards of cleanliness in common areas, lobbies, hallways, and shared facilities. We understand the unique needs of condominium management.',
        keyFeatures: [
          '24/7 emergency cleaning support',
          'Consistent quality maintenance',
          'Respect for resident privacy',
          'Comprehensive common area cleaning'
        ],
        serviceDetails: [
          'Lobby and entrance cleaning',
          'Elevator and stairwell maintenance',
          'Seasonal deep cleaning services'
        ],
        aftercareTips: [
          'Encourage residents to use welcome mats',
          'Implement clear guidelines for common area maintenance',
          'Provide trash and recycling education',
          'Maintain clear signage for cleaning expectations',
          'Promote community cleanliness awareness',
          'Regularly inspect and report maintenance needs'
        ],
        seasonalNote: 'Spring and fall seasons require additional deep cleaning and maintenance of outdoor and indoor shared spaces'
      },
      {
        name: 'Medical Office Cleaning',
        slug: 'medical-office-cleaning',
        header: {
          title: "Medical Office Cleaning Services in Toronto & GTA",
          description: "Medical and healthcare environments demand a higher level of cleanliness to protect patients, staff, and visitors from cross-contamination and infection risks. At Sentinel Maintenance Inc (SMI), our medical office cleaning services are designed to exceed strict healthcare regulations. We use hospital-grade disinfectants, color-coded tools to avoid cross-use, and rigorous sanitation techniques that comply with industry protocols. From examination rooms and waiting areas to surgical suites and restrooms, our cleaning professionals are trained to handle sensitive environments with precision. We maintain full confidentiality, uphold sterilization best practices, and follow infection prevention standards backed by years of experience. In a time when hygiene is paramount, clinics, dental offices, and medical labs throughout Toronto and the GTA rely on SMI for cleaning services that prioritize health, safety, and compliance above all else."
        },        
        description: 'Specialized cleaning for healthcare facilities with strict hygiene standards.',
        image: medicalOfficeCleaning,
        fullDescription: 'Our medical office cleaning service provides meticulous, sanitized cleaning that meets the highest healthcare industry standards. We understand the critical importance of infection control and patient safety.',
        keyFeatures: [
          'Hospital-grade disinfection',
          'Compliance with healthcare cleaning regulations',
          'Specialized medical facility training',
          'Biohazard waste handling protocols'
        ],
        serviceDetails: [
          'Sterilization of medical equipment areas',
          'Waiting room and patient room deep cleaning',
          'Certified infection control procedures'
        ],
        aftercareTips: [
          'Maintain strict hand hygiene protocols',
          'Use disposable protective coverings',
          'Implement immediate spill and contamination response',
          'Regularly calibrate and maintain medical equipment',
          'Train staff on ongoing cleanliness standards',
          'Use color-coded cleaning tools to prevent cross-contamination'
        ],
        seasonalNote: 'Flu and virus seasons require enhanced disinfection and preventive cleaning measures'
      },
      {
        name: 'Dealership Cleaning',
        slug: 'dealership-cleaning',
        header: {
          title: "Dealership Cleaning Services in Toronto & GTA",
          description: "At Sentinel Maintenance Inc (SMI), we deliver top-tier dealership cleaning services designed to uphold the pristine image of your showroom and service center. We understand that presentation is key in the automotive industry, which is why we clean every surface—from gleaming floors and spotless windows to tidy service bays and customer lounges. Our team uses safe, effective cleaning methods to enhance your showroom’s appeal without damaging vehicles or finishes. We also maintain waiting areas, restrooms, and employee spaces to reflect the professionalism of your brand. Whether preparing for a car launch or keeping day-to-day operations polished, SMI ensures your dealership is always client-ready. Serving Toronto and the GTA, we help auto businesses create a clean, inviting environment that builds customer trust and drives sales.",
        },
        description: 'Comprehensive cleaning solutions for automotive showrooms and service centers.',
        image: dealershipCleaning,
        fullDescription: 'Our dealership cleaning service ensures a pristine and professional appearance for your automotive business. We clean showrooms, service areas, and customer spaces with meticulous attention to detail.',
        keyFeatures: [
          'Specialized surface cleaning',
          'Showroom and service area expertise',
          'Quick and efficient service',
          'Maintains professional appearance'
        ],
        serviceDetails: [
          'Showroom floor and window cleaning',
          'Service bay and workshop cleaning',
          'Customer waiting area maintenance'
        ],
        aftercareTips: [
          'Implement daily quick cleaning routines',
          'Use protective coverings on display vehicles',
          'Maintain clean and organized tool areas',
          'Train staff on immediate spill and dirt management',
          'Use appropriate cleaning products for different surfaces',
          'Regularly inspect and maintain cleaning equipment'
        ],
        seasonalNote: 'Winter and summer car showcase seasons demand extra attention to showroom and vehicle presentation'
      },
      {
        name: 'Institutional Cleaning',
        slug: 'institutional-cleaning',
        header: {
          title: "Institutional Cleaning Services in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) provides professional institutional cleaning services tailored to meet the needs of schools, universities, government buildings, and public facilities throughout Toronto and the GTA. These environments demand a high level of cleanliness to protect students, staff, and visitors while maintaining a productive and safe atmosphere. Our experienced team delivers meticulous attention to classrooms, offices, labs, sports facilities, and high-traffic public areas. We adhere to strict safety protocols, provide flexible scheduling, and use eco-conscious cleaning products to align with your institution’s values and regulations. Whether it’s daily maintenance or deep cleaning during holidays and exam periods, SMI ensures consistent, high-quality results. Our services help reduce illness transmission, increase occupant satisfaction, and uphold the professional standards expected in institutional environments.",
        },
        description: 'Comprehensive cleaning for educational, government, and public institutions.',
        image: institutionalCleaning,
        fullDescription: 'Our institutional cleaning service provides thorough and consistent cleaning for schools, universities, government buildings, and public facilities. We prioritize hygiene, safety, and comprehensive maintenance.',
        keyFeatures: [
          'Large-scale cleaning capabilities',
          'Flexible scheduling',
          'Safety-first approach',
          'Trained for diverse institutional environments'
        ],
        serviceDetails: [
          'Classroom and common area cleaning',
          'Gymnasium and sports facility maintenance',
          'Laboratory and specialized area cleaning'
        ],
        aftercareTips: [
          'Implement daily classroom cleaning protocols',
          'Use protective covers on shared equipment',
          'Train staff and students on cleanliness standards',
          'Maintain clear waste management procedures',
          'Regularly inspect and report maintenance needs',
          'Use appropriate cleaning methods for different surfaces'
        ],
        seasonalNote: 'Back-to-school and exam periods require intensive cleaning and sanitization'
      },
      {
        name: 'Construction Cleaning',
        slug: 'construction-cleaning',
        header: {
          title: "Post Construction Cleaning Services in Toronto & GTA",
          description: "When your construction or renovation project wraps up, Sentinel Maintenance Inc (SMI) is ready to handle the final stage—comprehensive post-construction cleaning. We turn dusty, debris-filled spaces into clean, safe, and presentable environments for occupancy or inspection. Our trained crew removes leftover materials, vacuums and mops floors, cleans walls and windows, and sanitizes surfaces using professional-grade tools and precision. From residential developments to large-scale commercial projects, we ensure every inch is polished and move-in ready. Our team works efficiently within your project timelines and budget, providing reliable cleanup that meets building codes and presentation standards. Serving clients across Toronto and the GTA, SMI helps construction professionals transition smoothly from build to business-ready with expert post-construction cleaning services.",
        },
        description: 'Comprehensive cleanup services for newly constructed or renovated spaces.',
        image: postConstructionCleaning,
        fullDescription: 'Our post-construction cleaning service transforms construction sites into clean, move-in ready spaces. We handle debris removal, dust elimination, and thorough surface cleaning.',
        keyFeatures: [
          'Complete debris and dust removal',
          'Detailed surface cleaning',
          'Preparation for final inspection',
          'Quick turnaround times'
        ],
        serviceDetails: [
          'Interior and exterior site cleaning',
          'Window and surface detailing',
          'Preparation for final walkthrough'
        ],
        aftercareTips: [
          'Protect newly cleaned surfaces from immediate dirt',
          'Implement strict debris management',
          'Use protective coverings on finished surfaces',
          'Maintain clean pathways during move-in',
          'Conduct final detailed inspection',
          'Follow manufacturer guidelines for new surface care'
        ],
        seasonalNote: 'Spring and fall construction seasons require efficient and thorough cleaning services'
      },
      {
        name: 'New Condominium Construction Cleaning',
        slug: 'new-condominium-construction-cleaning',
        header: {
          title: "New Condominium Construction Cleaning Services in Toronto & GTA",
          description: "At Sentinel Maintenance Inc (SMI), we understand how important a flawless finish is when presenting newly built condominiums to prospective residents. Our new condominium construction cleaning services ensure that each unit and shared space is thoroughly cleaned, inspected, and prepared for immediate occupancy. We tackle post-construction dust, residue, and smudges with specialized tools and techniques that leave surfaces spotless and scratch-free. From lobby glass to individual suite appliances, every detail is addressed with care. Our services are perfect for developers and builders aiming to make a strong first impression while meeting delivery deadlines. Serving Toronto and the GTA, SMI is your trusted partner for comprehensive move-in ready cleaning that adds value, polish, and professionalism to your new condominium project.",
        },
        description: 'Specialized cleaning for newly constructed condominium buildings.',
        image: newCondominiumConstructionCleaning,
        fullDescription: 'Our new condominium construction cleaning service ensures that your newly built residential complex is immaculately prepared for residents, meeting the highest standards of cleanliness and presentation.',
        keyFeatures: [
          'Comprehensive construction cleanup',
          'Detailed unit and common area cleaning',
          'Preparation for resident move-in',
          'Attention to finishing touches'
        ],
        serviceDetails: [
          'Individual unit deep cleaning',
          'Lobby and corridor preparation',
          'Removal of construction residue'
        ],
        aftercareTips: [
          'Provide move-in cleaning guidelines to residents',
          'Protect finished surfaces during move-in',
          'Maintain lobby and corridor cleanliness',
          'Use protective coverings in high-traffic areas',
          'Conduct final detailed inspection',
          'Offer initial maintenance support to new residents'
        ],
        seasonalNote: 'Summer and early fall are peak periods for new condominium move-ins and require comprehensive cleaning services'
      }
    ]
  },
  {
    category: 'Specialized Services',
    icon: 'ShieldCheck',
    services: [
      {
        name: 'Deep Cleaning and Disinfection',
        slug: 'deep-cleaning-and-disinfection',
        header: {
          title: "Deep Cleaning and Disinfection Services in Toronto & GTA",
          description: "At Sentinel Maintenance Inc (SMI), we provide deep cleaning and disinfection services that go beyond surface-level cleaning to protect your environment from harmful pathogens. Our advanced cleaning protocols combine hospital-grade disinfectants with eco-friendly solutions to eliminate up to 99.9% of bacteria and viruses from every surface. Whether it’s a high-traffic office, a retail space, or a residential unit, our trained team focuses on high-touch areas and hidden zones often missed in routine cleanings. SMI’s deep sanitization services are ideal during flu season, post-outbreak, or any time enhanced hygiene is essential. We adhere to strict industry standards to ensure your space is clean, safe, and fully sanitized. Proudly serving Toronto and the GTA, we help businesses and homeowners regain peace of mind with reliable and effective disinfection solutions.",
        },
        description: 'Comprehensive sanitization using advanced cleaning technologies.',
        image: deepCleaning,
        fullDescription: 'Our deep cleaning and disinfection service provides a thorough sanitization process using hospital-grade disinfectants and cutting-edge cleaning technologies.',
        keyFeatures: [
          'Advanced antimicrobial treatments',
          'Comprehensive surface coverage',
          'Eco-friendly disinfection methods',
          'Certified sanitization protocols'
        ],
        serviceDetails: [
          'Multi-surface sanitization',
          'Elimination of 99.9% of germs',
          'Safe for residential and commercial spaces'
        ],
        aftercareTips: [
          "Maintain enhanced cleaning routines",
          "Use microfiber cloths for ongoing sanitization",
          "Ventilate spaces regularly after treatment",
          "Avoid immediate contact with treated surfaces",
          "Continue using EPA-approved disinfectants",
          "Monitor high-touch areas for potential recontamination"
        ],
        seasonalNote: "Increased viral transmission during winter months requires proactive disinfection"
      },
      {
        name: 'Fogging Disinfection',
        slug: 'fogging-disinfection',
        header: {
          title: "Fogging Disinfection Services in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) offers fogging disinfection services that deliver total space sanitization quickly and effectively. Using advanced fogging machines, we disperse a fine antimicrobial mist that settles on all surfaces—including those hard to reach by traditional methods. This method is ideal for disinfecting offices, warehouses, schools, and public facilities, especially during high-risk seasons like flu outbreaks or viral surges. Our trained technicians use EPA-registered disinfectants safe for both people and property, with minimal downtime and fast reentry times. The process targets bacteria, viruses, and allergens with uniform coverage and consistent results. Businesses across Toronto and the GTA rely on SMI’s fogging service to ensure their environments remain hygienic, safe, and compliant with evolving health regulations. It's the smart choice for large-scale, contactless disinfection.",
        },
        description: 'Advanced disinfection technique using fog-based sanitization.',
        image: foggingDisinfection,
        fullDescription: 'Our fogging disinfection service uses specialized equipment to create a fine mist that penetrates hard-to-reach areas, providing comprehensive sanitization for entire spaces.',
        keyFeatures: [
          'Complete area coverage',
          'Reaches hidden and difficult areas',
          'Rapid application process',
          'Effective against multiple pathogens'
        ],
        serviceDetails: [
          'Ideal for large spaces',
          'Minimal disruption to operations',
          'Quick drying time'
        ],
        aftercareTips: [
          "Wait recommended drying time before re-entry",
          "Open windows for additional ventilation",
          "Remove sensitive electronic equipment before treatment",
          "Dispose of protective coverings properly",
          "Conduct air quality checks post-treatment",
          "Maintain log of disinfection treatments"
        ],
        seasonalNote: "Peak flu and cold seasons increase demand for comprehensive fogging treatments"
      },
      {
        name: 'Low-Rise and High-rise Window Cleaning',
        slug: 'low-rise-and-high-rise-window-cleaning',
        header: {
          title: "Low-Rise and High-Rise Window Cleaning Services in Toronto & GTA",
          description: "At Sentinel Maintenance Inc (SMI), we provide expert window cleaning services for both low-rise and high-rise buildings, ensuring streak-free clarity and professional curb appeal. Our certified technicians are trained to handle windows at any height with the highest level of safety and efficiency. Using specialized equipment, eco-friendly cleaners, and rope or lift systems, we clean both exterior and interior glass surfaces with precision. From corporate towers to residential complexes, SMI enhances natural light and improves the overall appearance of your property. We serve commercial clients across Toronto and the GTA with reliable scheduling, excellent customer service, and results you can see through. Whether it's spring maintenance or pre-sale preparation, our window cleaning service brings clarity and brilliance to your building's exterior.",
        },
        description: 'Professional window cleaning for buildings of all heights.',
        image: windowCleaning,
        fullDescription: 'Our window cleaning service provides streak-free, crystal-clear windows for both low-rise and high-rise buildings, using advanced safety techniques and professional-grade equipment.',
        keyFeatures: [
          'Safe working at height procedures',
          'Streak-free cleaning guarantee',
          'Specialized equipment',
          'Comprehensive exterior and interior cleaning'
        ],
        serviceDetails: [
          'Residential and commercial window cleaning',
          'Exterior and interior surface treatment',
          'Safety-certified technicians'
        ],
        aftercareTips: [
          "Avoid touching cleaned surfaces immediately",
          "Use soft, lint-free cloths for touch-ups",
          "Inspect windows for any missed spots",
          "Apply protective coatings if recommended",
          "Schedule regular maintenance cleaning",
          "Keep window tracks clean between professional services"
        ],
        seasonalNote: "Spring and autumn are optimal for comprehensive window cleaning due to mild weather conditions"
      },
      {
        name: 'Exterior Power Washing',
        slug: 'exterior-power-washing',
        header: {
          title: "Exterior Power Washing Services in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) provides professional exterior power washing services designed to refresh and restore your building’s exterior surfaces. Using commercial-grade pressure washers and eco-friendly cleaning agents, we remove stubborn grime, mold, mildew, and environmental stains from siding, concrete, brick, and decks. Our adjustable pressure techniques ensure deep cleaning without damaging surfaces, making this service ideal for property owners preparing for repainting, inspections, or seasonal revitalization. Whether you're maintaining a commercial storefront or refreshing a residential façade, SMI delivers results that dramatically improve appearance and curb appeal. Serving clients across Toronto and the GTA, our power washing services help preserve property value and promote a cleaner, more professional exterior environment—perfect for first impressions and long-term maintenance.",
        },
        description: 'High-pressure cleaning for exterior surfaces and facades.',
        image: exteriorPowerWashing,
        fullDescription: 'Our exterior power washing service removes years of dirt, grime, and environmental buildup from various surfaces, restoring them to their original appearance.',
        keyFeatures: [
          'Adjustable pressure settings',
          'Eco-friendly cleaning solutions',
          'Damage-free surface cleaning',
          'Immediate visual improvement'
        ],
        serviceDetails: [
          'Cleaning for siding, decks, and driveways',
          'Preparation for painting or refinishing',
          'Prevents long-term surface degradation'
        ],
        aftercareTips: [
          "Allow surfaces to dry completely",
          "Inspect for any remaining dirt or damage",
          "Apply sealant if recommended",
          "Avoid immediate foot traffic on cleaned surfaces",
          "Check drainage areas after washing",
          "Plan for regular maintenance cleaning"
        ],
        seasonalNote: "Late spring and early summer provide ideal conditions for exterior surface restoration"
      },
      {
        name: 'Parking Garage Power Washing',
        slug: 'parking-garage-power-washing',
        header: {
          title: "Parking Garage Power Washing Services in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) offers professional parking garage power washing services to maintain clean, safe, and presentable vehicle environments. Over time, parking garages accumulate oil stains, grime, tire marks, and salt residue—posing both safety risks and aesthetic concerns. Our industrial-grade pressure washing systems effectively remove these contaminants without damaging the surface. We target concrete floors, pillars, and walls to eliminate buildup and restore non-slip traction. Ideal for commercial, residential, and underground structures, our services can be scheduled during off-peak hours, including nights and weekends, to avoid disrupting daily operations. SMI helps extend the life of your structure and reduce liability by enhancing visibility and cleanliness. Serving Toronto and the GTA, we deliver reliable power washing solutions tailored for high-traffic parking facilities.",
        },
        description: 'Specialized cleaning for parking structures and garages.',
        image: parkingGaragePowerWashing,
        fullDescription: 'Our parking garage power washing service removes oil stains, dirt, and grime, maintaining a clean and safe environment for vehicles and users.',
        keyFeatures: [
          'Oil and stain removal',
          'Non-slip surface restoration',
          'Minimal disruption to operations',
          'Comprehensive floor and wall cleaning'
        ],
        serviceDetails: [
          'Overnight and weekend service options',
          'Industrial-grade cleaning solutions',
          'Slip-resistance improvement'
        ],
        aftercareTips: [
          "Allow complete drying before reopening",
          "Mark cleaned areas clearly",
          "Implement regular maintenance schedule",
          "Monitor surface for oil re-accumulation",
          "Use protective coatings if recommended",
          "Conduct periodic slip-resistance tests"
        ],
        seasonalNote: "Winter road salt and summer vehicle traffic increase cleaning requirements"
      },
      {
        name: 'Carpet Cleaning',
        slug: 'carpet-cleaning',
        header: {
          title: "Carpet Cleaning Services in Toronto & GTA",
          description: "At Sentinel Maintenance Inc (SMI), our professional carpet cleaning services are designed to breathe new life into your carpets while ensuring a healthier indoor environment. Using advanced hot water extraction and deep-sanitization techniques, we remove embedded dirt, stains, allergens, and odors from carpet fibers. This service is ideal for offices, hotels, residential units, and high-traffic commercial spaces. We offer specialized treatments for spots and spills, as well as fiber protection applications to extend carpet life. With rapid-drying systems and eco-friendly products, your space is left fresh, clean, and ready for use in no time. Whether it’s seasonal deep cleaning or stain removal after an accident, SMI provides consistent, thorough results across Toronto and the GTA. We restore your carpets to like-new condition with care and precision.",
        },
        description: 'Deep cleaning and restoration for carpeted surfaces.',
        image: carpetCleaning,
        fullDescription: 'Our carpet cleaning service uses advanced extraction and sanitization techniques to remove deep-seated dirt, allergens, and stains, revitalizing your carpets.',
        keyFeatures: [
          'Hot water extraction method',
          'Stain and odor removal',
          'Allergen reduction',
          'Quick drying technology'
        ],
        serviceDetails: [
          'Residential and commercial carpet cleaning',
          'Spot and stain treatment',
          'Fiber protection application'
        ],
        aftercareTips: [
          "Avoid walking on carpets until completely dry",
          "Use fans to accelerate drying process",
          "Vacuum thoroughly after complete drying",
          "Apply fabric protector if recommended",
          "Keep area well-ventilated",
          "Address any remaining spots immediately"
        ],
        seasonalNote: "Autumn and spring see increased indoor activity, making these ideal seasons for deep carpet cleaning"
      },
      {
        name: 'COVID-19 Cleaning',
        slug: 'covid-19-cleaning',
        header: {
          title: "COVID-19 Cleaning Services in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) provides certified COVID-19 cleaning services to help protect your workplace or home from viral contamination. Our disinfection protocols strictly follow CDC, WHO, and Health Canada guidelines, using EPA-approved disinfectants proven effective against SARS-CoV-2. Our team targets high-touch surfaces, shared spaces, and HVAC-accessible areas with precision and care, ensuring comprehensive sanitization across all zones. Suitable for commercial offices, clinics, schools, retail stores, and residential buildings, our COVID-19 cleaning services include detailed surface reports and optional post-cleaning certification. With Toronto and GTA businesses focused on health and safety, SMI supports your operations with proactive cleaning measures that minimize transmission risks and build public trust. We respond quickly, work efficiently, and maintain the highest standards of infection control.",
        },
        description: 'Specialized sanitization to prevent COVID-19 transmission.',
        image: covid19Cleaning,
        fullDescription: 'Our COVID-19 cleaning service provides comprehensive sanitization using EPA-approved disinfectants and specialized techniques to minimize viral transmission risks.',
        keyFeatures: [
          'CDC and WHO guideline compliance',
          'Specialized coronavirus disinfection',
          'Comprehensive surface treatment',
          'Certified cleaning protocols'
        ],
        serviceDetails: [
          'Targeted high-touch area disinfection',
          'Commercial and residential applications',
          'Detailed post-cleaning certification'
        ],
        aftercareTips: [
          "Maintain enhanced personal hygiene practices",
          "Continue using EPA-approved disinfectants",
          "Implement regular touch-point cleaning",
          "Provide hand sanitization stations",
          "Ensure proper ventilation",
          "Monitor staff and occupant health status"
        ],
        seasonalNote: "Winter and early spring present highest risk for viral transmission"
      },
      {
        name: 'Graffiti Removal',
        slug: 'graffiti-removal',
        header: {
          title: "Graffiti Removal Services in Toronto & GTA",
          description: "At Sentinel Maintenance Inc (SMI), we specialize in professional graffiti removal services that restore your property’s appearance without compromising surface integrity. Graffiti can tarnish your brand image and attract further vandalism if left untreated. That’s why we offer fast, effective removal using eco-friendly solvents and customized techniques based on surface type—brick, concrete, metal, or glass. Our approach minimizes damage while completely removing spray paint, markers, and adhesives. To help prevent recurrence, we also offer anti-graffiti coatings and recommendations for deterrence strategies. Whether it's a commercial storefront, public space, or residential complex, SMI helps clients across Toronto and the GTA maintain clean, graffiti-free properties. Our response is prompt, discreet, and designed to help you protect your investment and uphold a professional image.",
        },
        description: 'Professional graffiti elimination and surface restoration.',
        image: graffitiRemoval,
        fullDescription: 'Our graffiti removal service provides comprehensive surface restoration, using advanced techniques to completely remove unwanted markings while preserving the original surface integrity.',
        keyFeatures: [
          'Multiple surface treatment options',
          'Eco-friendly removal solutions',
          'Minimal surface damage',
          'Preventative coating applications'
        ],
        serviceDetails: [
          'Residential and commercial applications',
          'Customized removal techniques',
          'Surface protection recommendations'
        ],
        aftercareTips: [
          "Apply protective anti-graffiti coating",
          "Install additional lighting in vulnerable areas",
          "Conduct regular surface inspections",
          "Respond quickly to new graffiti",
          "Document and report persistent vandalism",
          "Consider aesthetic improvements to deter future incidents"
        ],
        seasonalNote: "Spring and summer see increased outdoor vandalism activities"
      },
      {
        name: 'Stone Staining for Colour Matching',
        slug: 'stone-staining-for-colour-matching',
        header: {
          title: "Stone Staining for Colour Matching in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) offers precise stone staining services tailored for seamless color correction and restoration on natural stone surfaces. Whether you're addressing inconsistencies in stone slabs, enhancing faded tones, or restoring uniformity after repairs, our experts use customized, hand-applied staining methods that preserve the texture and character of the original stone. We begin with an in-depth color consultation to ensure an exact match, then apply long-lasting pigments that bond with the stone while maintaining breathability and integrity. Ideal for both residential and commercial applications, our service is trusted by designers, contractors, and homeowners across Toronto and the GTA. Choose SMI to bring harmony and visual consistency to stone counters, walls, tiles, or floors—backed by expert care and professional results.",
        },
        description: 'Precise stone staining and color restoration services.',
        image: stoneStaining,
        fullDescription: 'Our stone staining service provides expert color matching and restoration for natural stone surfaces, ensuring seamless and precise color integration.',
        keyFeatures: [
          'Customized color matching',
          'Hand-applied techniques',
          'Preservation of stone texture',
          'Long-lasting color application'
        ],
        serviceDetails: [
          'Residential and commercial stone surfaces',
          'Detailed color consultation',
          'Protective sealing options'
        ],
        aftercareTips: [
          "Avoid harsh cleaning chemicals",
          "Use pH-neutral stone cleaners",
          "Implement regular gentle maintenance",
          "Protect from direct sunlight during initial curing",
          "Conduct periodic professional inspections",
          "Reapply protective sealant as recommended"
        ],
        seasonalNote: "Late spring and early autumn provide optimal conditions for stone restoration"
      },
      {
        name: 'Natural Stone Restoration',
        slug: 'natural-stone-restoration',
        header: {
          title: "Natural Stone Restoration Services in Toronto & GTA",
          description: "At Sentinel Maintenance Inc (SMI), we provide comprehensive natural stone restoration services that bring your stone surfaces back to their original beauty. Over time, marble, granite, limestone, and other natural stones can show signs of wear such as etching, scratches, stains, or cracks. Our restoration process includes expert surface assessment, precision repairs, resurfacing, polishing, and sealing—ensuring long-term protection and a flawless finish. Whether it's a high-traffic lobby floor or an elegant residential countertop, we tailor our methods to the specific material and environment. With years of expertise in both interior and exterior stone surfaces, we help preserve your investment while enhancing visual appeal. Serving clients throughout Toronto and the GTA, SMI is your trusted partner for breathing new life into aged or damaged stonework.",
        },
        description: 'Comprehensive restoration for natural stone surfaces.',
        image: naturalStoneRestoration,
        fullDescription: 'Our natural stone restoration service revitalizes and repairs damaged or worn stone surfaces, bringing them back to their original beauty and protecting them from future damage.',
        keyFeatures: [
          'Professional surface assessment',
          'Crack and chip repair',
          'Polish and refinishing',
          'Protective sealing'
        ],
        serviceDetails: [
          'Marble, granite, and limestone restoration',
          'Indoor and outdoor stone surfaces',
          'Comprehensive damage repair'
        ],
        aftercareTips: [
          "Avoid dragging heavy objects across surfaces",
          "Use coasters and protective mats",
          "Clean spills immediately",
          "Implement regular professional maintenance",
          "Use recommended stone-specific cleaning products",
          "Monitor for signs of future wear or damage"
        ],
        seasonalNote: "Temperature fluctuations in winter and summer can cause additional stone surface stress"
      },
      {
        name: 'Tile & Grout Cleaning & Colour Sealing',
        slug: 'tile-and-grout-cleaning-and-colour-sealing',
        header: {
          title: "Tile & Grout Cleaning and Colour Sealing in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) offers professional tile and grout cleaning and colour sealing services that restore vibrancy to tiled surfaces while extending their lifespan. Over time, tiles lose their shine and grout lines accumulate dirt, stains, and mildew—especially in high-moisture environments. Our service combines high-pressure steam cleaning and stain removal with durable colour sealing to rejuvenate and protect your floors, walls, and backsplashes. The result is a cleaner, more uniform look that resists future grime buildup. We serve residential and commercial clients across Toronto and the GTA, treating ceramic, porcelain, stone, and other tile types. Whether refreshing a bathroom, commercial kitchen, or office lobby, SMI ensures your tile surfaces are deep-cleaned, sealed, and protected with industry-leading techniques.",
        },
        description: 'Deep cleaning and color restoration for tile and grout surfaces.',
        image: tileGroutCleaning,
        fullDescription: 'Our tile and grout cleaning service provides deep sanitization and color restoration, bringing new life to your tiled surfaces and protecting them from future staining.',
        keyFeatures: [
          'High-pressure deep cleaning',
          'Stain and mold removal',
          'Color sealing application',
          'Protective coating'
        ],
        serviceDetails: [
          'Residential and commercial applications',
          'Multiple tile type treatments',
          'Grout color restoration'
        ],
        aftercareTips: [
          "Allow full curing time before heavy use",
          "Use pH-neutral cleaning solutions",
          "Avoid abrasive cleaning tools",
          "Implement regular light maintenance",
          "Use shower squeegees to prevent water buildup",
          "Conduct annual professional deep cleaning"
        ],
        seasonalNote: "Humidity in summer increases risk of grout mold and mildew"
      },
      {
        name: 'Landscaping',
        slug: 'landscaping',
        header: {
          title: "Landscaping Services in Toronto & GTA",
          description: "At Sentinel Maintenance Inc (SMI), we provide full-service landscaping solutions that enhance the health, appearance, and sustainability of your outdoor spaces. From routine lawn care and pruning to custom garden design and seasonal planting, our team works closely with you to bring your vision to life. We serve residential properties, commercial buildings, condominiums, and public spaces with tailored maintenance schedules and expert plant management. Our approach emphasizes eco-friendly practices, soil health, and long-term curb appeal. Whether you're revitalizing a front yard, maintaining a green roof, or designing a new outdoor retreat, SMI ensures consistent results and elevated outdoor aesthetics. Trusted across Toronto and the GTA, our landscaping services deliver year-round beauty and value to every space we manage.",
        },
        description: 'Comprehensive landscape maintenance and design services.',
        image: landscaping,
        fullDescription: 'Our landscaping service provides full-spectrum landscape maintenance, from routine care to comprehensive design and installation, ensuring beautiful and healthy outdoor spaces.',
        keyFeatures: [
          'Seasonal maintenance',
          'Professional design services',
          'Plant health management',
          'Sustainable landscaping solutions'
        ],
        serviceDetails: [
          'Lawn care and maintenance',
          'Garden design and installation',
          'Seasonal planting and pruning'
        ],
        aftercareTips: [
          "Follow recommended watering schedule",
          "Monitor plant health regularly",
          "Remove dead or diseased plant material promptly",
          "Apply recommended fertilizers seasonally",
          "Maintain mulch layers for moisture retention",
          "Adjust irrigation based on weather conditions"
        ],
        seasonalNote: "Spring and autumn are critical periods for landscape establishment and maintenance"
      },
      {
        name: 'Snow Removal',
        slug: 'snow-removal',
        header: {
          title: "Snow Removal Services in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) offers professional snow removal services to ensure safe and accessible properties throughout the harsh Canadian winter. Our winter maintenance programs include plowing, shoveling, de-icing, and salting for residential, commercial, and industrial sites. With 24/7 availability and real-time weather monitoring, our team is ready to respond to snowstorms, freezing rain, and sudden ice buildup. We utilize advanced snow removal equipment to quickly clear driveways, parking lots, walkways, and entrances with minimal disruption. Our services are designed not only for safety and liability reduction but also to protect surfaces from long-term weather damage. Trusted across Toronto and the GTA, SMI helps you stay operational and safe all winter long with dependable, responsive snow and ice management.",
        },
        description: 'Professional snow and ice management services.',
        image: snowRemoval,
        fullDescription: 'Our snow removal service provides comprehensive winter maintenance, ensuring safe and clear access to residential and commercial properties during winter months.',
        keyFeatures: [
          '24/7 emergency snow response',
          'Advanced snow removal equipment',
          'De-icing treatment',
          'Preventative winter maintenance'
        ],
        serviceDetails: [
          'Residential and commercial properties',
          'Parking lot and driveway clearing',
          'Sidewalk and entrance maintenance'
        ],
        aftercareTips: [
          "Avoid parking during scheduled snow removal",
          "Clear obstacles from removal areas",
          "Apply additional salt or sand if needed",
          "Inspect surfaces for potential damage after removal",
          "Maintain clear drainage paths",
          "Keep emergency snow removal contact information handy"
        ],
        seasonalNote: "Late autumn preparations are crucial for effective winter snow management"
      },
      {
        name: 'Lobby and Entrance Walk-off Matting Installation',
        slug: 'lobby-and-entrance-walk-off-matting-installation',
        header: {
          title: "Lobby and Entrance Walk-off Matting Installation in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) installs high-performance walk-off matting systems that protect your building’s interior from dirt, moisture, and seasonal wear. Tailored for high-traffic commercial entrances, our custom matting solutions help extend floor life, reduce cleaning costs, and improve safety with slip-resistant materials. We offer a wide selection of styles and sizes, including logo-branded options that reinforce your company image while maintaining cleanliness. Whether for office buildings, retail environments, or condo lobbies, our mats serve both functional and aesthetic purposes. Proper matting reduces maintenance demands and captures debris before it spreads through your facility. Serving Toronto and the GTA, SMI delivers precise installation and durable solutions that work hard behind the scenes, season after season.",
        },
        description: 'Professional entrance matting solutions for commercial spaces.',
        image: mattingInstallation,
        fullDescription: 'Our walk-off matting installation service provides customized entrance solutions that reduce dirt, moisture, and wear in high-traffic areas, maintaining cleanliness and safety.',
        keyFeatures: [
          'Custom mat sizing',
          'Multiple material options',
          'Branded mat designs',
          'Slip-resistant technologies'
        ],
        serviceDetails: [
          'Commercial building entrances',
          'Customized branding options',
          'Performance and aesthetic solutions'
        ],
        aftercareTips: [
          "Vacuum or shake mats regularly",
          "Clean mats according to material specifications",
          "Rotate mats to ensure even wear",
          "Replace mats when signs of significant wear appear",
          "Keep backup mats for heavy traffic periods",
          "Monitor mat effectiveness periodically"
        ],
        seasonalNote: "Rainy spring and snowy winter months increase mat importance"
      },
      {
        name: 'Animal Control and Deterrents',
        slug: 'animal-control-and-deterrents',
        header: {
          title: "Animal Control and Deterrent Services in Toronto & GTA",
          description: "At Sentinel Maintenance Inc (SMI), we provide humane and effective animal control services to safely manage wildlife intrusions on residential and commercial properties. Our trained specialists assess your site, identify vulnerabilities, and implement eco-friendly deterrents and physical barriers to prevent future re-entry. We manage a wide range of species including raccoons, squirrels, birds, skunks, and rodents using ethical practices that prioritize safety for both animals and occupants. Our approach includes long-term strategies like exclusion repairs, scent deterrents, and habitat modification. Whether it’s spring nesting or autumn migration, Toronto and GTA property owners rely on SMI to keep their buildings animal-free, compliant, and protected through every season.",
        },
        description: 'Humane wildlife and pest management services.',
        image: animalControl,
        fullDescription: 'Our animal control and deterrent service provides comprehensive wildlife management, using humane and effective techniques to prevent and remove unwanted animal intrusions.',
        keyFeatures: [
          'Humane removal techniques',
          'Comprehensive property assessment',
          'Preventative barrier installation',
          'Eco-friendly deterrent solutions'
        ],
        serviceDetails: [
          'Residential and commercial properties',
          'Multiple species management',
          'Long-term prevention strategies'
        ],
        aftercareTips: [
          "Seal all potential entry points",
          "Remove external food sources",
          "Maintain landscaping to reduce wildlife habitats",
          "Use recommended deterrent methods consistently",
          "Keep property clean and garbage secured",
          "Conduct periodic professional inspections"
        ],
        seasonalNote: "Spring and autumn wildlife migrations increase potential for property intrusions"
      },
      {
        name: 'HVAC Cleaning',
        slug: 'hvac-cleaning',
        header: {
          title: "HVAC Cleaning Services in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) offers comprehensive HVAC cleaning services that improve indoor air quality, energy efficiency, and system longevity. We clean ducts, vents, coils, and filters using specialized equipment to eliminate dust, mold, allergens, and contaminants that can compromise your environment. Regular HVAC maintenance helps reduce utility bills, enhance airflow, and extend the lifespan of your system. Whether for commercial offices, industrial facilities, or residential buildings, our certified technicians provide detailed inspections and thorough cleanings tailored to your setup. With spring and fall being optimal times for service, SMI ensures your heating and cooling systems remain in peak condition year-round. Serving Toronto and the GTA, we deliver clean air and clean systems—safely and professionally.",
        },
        description: 'Comprehensive cleaning and maintenance of HVAC systems.',
        image: hvacCleaning,
        fullDescription: 'Our HVAC cleaning service ensures optimal air quality and system efficiency by thoroughly cleaning and maintaining heating, ventilation, and air conditioning systems.',
        keyFeatures: [
          'Improved air quality',
          'Energy efficiency optimization',
          'Comprehensive system inspection',
          'Mold and allergen removal'
        ],
        serviceDetails: [
          'Duct and vent cleaning',
          'Filter replacement',
          'System performance assessment'
        ],
        aftercareTips: [
          "Replace filters regularly",
          "Maintain consistent system maintenance schedule",
          "Monitor indoor air quality",
          "Keep vents and returns unobstructed",
          "Use high-quality air filters",
          "Consider annual professional inspections"
        ],
        seasonalNote: "Spring and autumn are ideal times for comprehensive HVAC system maintenance"
      },
      {
        name: 'Fan Coil Cleaning',
        slug: 'fan-coil-cleaning',
        header: {
          title: "Fan Coil Cleaning Services in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) offers professional fan coil cleaning services that improve HVAC efficiency and indoor air quality for residential and commercial buildings. Over time, fan coil units collect dust, debris, and microbial buildup that reduce airflow and performance. Our service includes full disassembly, deep cleaning of the coil, blower, and filter components, and reassembly with operational testing. By removing blockages and contaminants, we help restore optimal air circulation and energy efficiency while reducing potential allergens. This service is especially valuable during seasonal transitions, when heating or cooling demand increases. Whether you're managing a condo unit, office space, or multi-unit property, SMI ensures that your fan coil systems are running clean, quiet, and efficiently. Serving Toronto and the GTA, we provide preventive maintenance that keeps your HVAC system in top condition year-round.",
        },
        description: 'Thorough cleaning and maintenance of HVAC fan coil units.',
        image: fanCoilCleaning,
        fullDescription: 'Our fan coil cleaning service ensures optimal performance and air quality by thoroughly cleaning and maintaining fan coil units in residential and commercial HVAC systems.',
        keyFeatures: [
          'Comprehensive unit disassembly',
          'Deep cleaning of all components',
          'Efficiency performance testing',
          'Preventative maintenance'
        ],
        serviceDetails: [
          'Residential and commercial HVAC systems',
          'Improve system efficiency',
          'Extend equipment lifespan'
        ],
        aftercareTips: [
          "Avoid blocking air intake and output areas",
          "Maintain regular visual inspections",
          "Keep surrounding areas clean and dust-free",
          "Monitor system performance after cleaning",
          "Schedule periodic professional maintenance",
          "Use recommended cleaning products for touch-ups"
        ],
        seasonalNote: "Peak cooling and heating seasons demand thorough fan coil maintenance"
      },
      {
        name: 'Laundry and Kitchen Exhaust Fan Cleaning',
        slug: 'laundry-and-kitchen-exhaust-fan-cleaning',
        header: {
          title: "Laundry and Kitchen Exhaust Fan Cleaning in Toronto & GTA",
          description: "At Sentinel Maintenance Inc (SMI), we provide professional cleaning services for laundry and kitchen exhaust systems to ensure optimal airflow, safety, and energy performance. Grease buildup in kitchen vents and lint accumulation in laundry exhausts are major contributors to fire risks and indoor air quality issues. Our service targets these hazards with thorough removal of debris, grease, and residue from exhaust fans, ducts, and filters. Whether for residential high-rises, commercial kitchens, or shared laundry facilities, SMI helps maintain compliance with building codes and fire prevention standards. Regular exhaust fan cleaning extends equipment life, enhances ventilation, and protects property and occupants alike. Serving Toronto and the GTA, our expert team delivers peace of mind with every cleaning cycle.",
        },
        description: 'Professional cleaning of laundry and kitchen exhaust systems.',
        image: laundryExhaustFanCleaning,
        fullDescription: 'Our exhaust fan cleaning service provides thorough cleaning and maintenance of laundry and kitchen exhaust systems, ensuring optimal performance and reducing fire risks.',
        keyFeatures: [
          'Comprehensive system cleaning',
          'Grease and lint removal',
          'Fire risk reduction',
          'Improved air quality'
        ],
        serviceDetails: [
          'Residential and commercial kitchens',
          'Laundry room exhaust systems',
          'Compliance with safety standards'
        ],
        aftercareTips: [
          "Clean lint traps after each use",
          "Avoid overloading dryers",
          "Inspect exhaust vents regularly",
          "Use recommended cleaning methods",
          "Maintain clear exhaust pathways",
          "Schedule professional cleaning annually"
        ],
        seasonalNote: "Winter holiday cooking and increased indoor activities heighten exhaust system maintenance needs"
      },
      {
        name: 'Industrial Kitchen Vent Cleaning',
        slug: 'industrial-kitchen-vent-cleaning',
        header: {
          title: "Industrial Kitchen Vent Cleaning Services in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) specializes in industrial kitchen vent cleaning for restaurants, food processing facilities, and commercial kitchens that demand strict fire safety and hygiene standards. Grease and smoke residue build up quickly in high-capacity kitchens, posing a major fire hazard and reducing ventilation efficiency. Our team uses advanced degreasing tools and certified techniques to remove buildup from hoods, ducts, filters, and exhaust fans. We also perform detailed inspections to ensure compliance with NFPA fire safety regulations. Regular cleaning not only reduces liability but also enhances airflow, odor control, and kitchen productivity. Trusted by chefs and facility managers across Toronto and the GTA, SMI helps you maintain a clean, safe, and regulation-compliant kitchen environment that operates without disruption.",
        },
        description: 'Specialized cleaning for commercial and industrial kitchen ventilation systems.',
        image: industrialKitchenVentCleaning,
        fullDescription: 'Our industrial kitchen vent cleaning service provides comprehensive cleaning and maintenance of complex kitchen ventilation systems, ensuring safety, compliance, and optimal performance.',
        keyFeatures: [
          'Comprehensive vent system cleaning',
          'Grease and residue removal',
          'Fire safety compliance',
          'Improved air flow and efficiency'
        ],
        serviceDetails: [
          'Restaurants and commercial kitchens',
          'Advanced cleaning technologies',
          'Detailed safety inspection'
        ],
        aftercareTips: [
          "Maintain daily surface cleaning routines",
          "Implement strict grease management protocols",
          "Train staff on proper ventilation maintenance",
          "Keep detailed cleaning documentation",
          "Conduct regular visual inspections",
          "Ensure proper hood and filter maintenance"
        ],
        seasonalNote: "Peak restaurant seasons increase ventilation system stress and cleaning requirements"
      },
      {
        name: 'Moving Services',
        slug: 'moving-services',
        header: {
          title: "Moving Services in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) offers full-service moving solutions for both residential and commercial clients across Toronto and the GTA. Whether relocating a home, office, or retail space, we manage every detail of the move—from careful packing and furniture disassembly to transportation, unloading, and placement. Our team uses secure handling techniques and climate-controlled trucks to protect your belongings, including fragile, oversized, and high-value items. We also offer partial packing, storage coordination, and specialized handling upon request. With an emphasis on efficiency, safety, and professionalism, SMI ensures a stress-free relocation experience tailored to your schedule and needs. From short-distance moves to full-scale commercial transitions, we are your trusted partner in getting you from point A to point B—safely, swiftly, and smoothly.",
        },
        description: 'Professional relocation solutions for homes and businesses.',
        image: movingServices,
        fullDescription: 'Our comprehensive moving services handle every aspect of your relocation, from careful packing and secure transportation to efficient unpacking and placement at your new location.',
        keyFeatures: [
          'Custom packing solutions for delicate items',
          'Climate-controlled transportation options',
          'Professional furniture assembly/disassembly',
          'Secure loading and unloading protocols'
        ],
        serviceDetails: [
          'Residential and commercial relocations',
          'Local and long-distance moving capabilities',
          'Full-service or partial packing options',
          'Specialized handling for high-value items'
        ],
        aftercareTips: [
          "Inspect items immediately after delivery",
          "Allow 48 hours for furniture to acclimate to new environment",
          "Keep moving inventory for reference",
          "Schedule post-move cleaning for both locations",
          "Check utilities and appliance connections",
          "Test smoke detectors and security systems after setup"
        ],
        seasonalNote: "Summer months require earlier scheduling due to peak moving season demand"
      },
      {
        name: 'Junk Removal',
        slug: 'junk-removal',
        header: {
          title: "Junk Removal Services in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) offers fast, responsible junk removal services for residential, commercial, and construction sites across Toronto and the GTA. Whether you're cleaning out a home, downsizing an office, or managing post-renovation debris, our team handles all unwanted items with care and efficiency. We prioritize recycling, donation, and environmentally sound disposal practices to reduce landfill waste and support sustainable cleanouts. From furniture and appliances to electronic waste and construction materials, SMI ensures every load is managed properly and respectfully. With same-day options available, our junk removal services help clients reclaim their space safely, quickly, and stress-free. Let us do the heavy lifting while you focus on your next project or fresh start.",
        },        
        description: 'Efficient disposal and recycling solutions for unwanted items.',
        image: junkRemoval,
        fullDescription: 'Our junk removal service provides responsible disposal of unwanted items, furniture, and debris with an emphasis on recycling and donation whenever possible to minimize environmental impact.',
        keyFeatures: [
          'Same-day removal options',
          'Eco-friendly disposal practices',
          'Heavy item handling capabilities',
          'Property protection protocols'
        ],
        serviceDetails: [
          'Residential and commercial junk removal',
          'Estate and foreclosure cleanouts',
          'Construction debris management',
          'Electronic waste handling and recycling'
        ],
        aftercareTips: [
          "Implement organization systems to prevent future clutter",
          "Consider donation-first approach for future disposals",
          "Maintain clear pathways in storage areas",
          "Schedule regular decluttering sessions",
          "Use proper waste sorting methods going forward",
          "Request documentation of donation or recycling for tax purposes"
        ],
        seasonalNote: "Spring cleaning season and year-end holidays typically see increased demand for junk removal services"
      }
    ]
  },
  {
    category: "Restoration",
    icon: "RefreshCw",
    services: [
      {
        name: "Flood Cleanup",
        slug: "flood-cleanup",
        header: {
          title: "Flood Cleanup and Water Damage Restoration in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) provides 24/7 emergency flood cleanup and water damage restoration services to help protect your property from long-term structural and health-related risks. Our rapid-response team arrives within the hour, equipped with industrial water extraction pumps, moisture mapping tools, and high-efficiency dehumidifiers. We address everything from minor leaks to major flooding, using thermal imaging to locate hidden moisture and applying eco-friendly mold prevention treatments. Our comprehensive approach ensures full drying, sanitization, and restoration of affected areas. Whether you're dealing with basement floods, burst pipes, or storm damage, SMI helps homeowners and businesses across Toronto and the GTA recover quickly and safely with minimal disruption.",
        },
        description: "Emergency water damage restoration and cleanup services.",
        image: floodCleanup,
        fullDescription: "Our flood cleanup service provides rapid response and comprehensive water damage restoration, minimizing property damage and preventing long-term issues.",
        keyFeatures: [
          "Rapid 24/7 emergency response within 1 hour",
          "Industrial-grade water extraction (up to 500 gallons per hour)",
          "Advanced moisture mapping technology",
          "Comprehensive mold prevention with eco-friendly treatments",
          "Full structural drying using high-efficiency dehumidifiers",
          "Thermal imaging for hidden moisture detection"
        ],
        aftercareTips: [
          "Increase ventilation for 24hrs",
          "Use dehumidifiers to prevent moisture buildup",
          "Monitor treated areas for potential mold growth",
          "Avoid carpeting in previously flooded spaces",
          "Check electrical systems thoroughly",
          "Dispose of water-damaged porous materials"
        ],
        seasonalNote: "Spring and autumn flood seasons require proactive prevention"
      },
      {
        name: "Fire Restoration",
        slug: "fire-restoration",
        header: {
          title: "Fire Damage Restoration Services in Toronto & GTA",
          description: "At Sentinel Maintenance Inc (SMI), we deliver comprehensive fire restoration services that support full recovery from fire and smoke damage. Our certified technicians respond quickly to stabilize your property, assess structural integrity, and initiate smoke, soot, and odor removal using advanced tools and techniques. We also specialize in salvaging valuable contents, documenting losses, and working directly with insurance providers to streamline claims. From cleanup and demolition to full reconstruction and air purification, our end-to-end fire restoration process helps restore both safety and peace of mind. Serving homes and businesses across Toronto and the GTA, SMI is your trusted partner in navigating the aftermath of fire-related emergencies.",
        },        
        description: "Comprehensive recovery and restoration after fire damage.",
        image: fireRestoration,
        fullDescription: "Our fire restoration service provides complete recovery solutions, from smoke and soot removal to structural repairs and content restoration.",
        keyFeatures: [
          "Immediate emergency stabilization within 2 hours",
          "Advanced smoke and soot removal techniques",
          "Precision structural damage assessment",
          "Specialized content salvage and restoration",
          "Comprehensive insurance claim documentation support",
          "Ozone and hydroxyl decontamination processes"
        ],
        aftercareTips: [
          "Avoid cleaning treated surfaces for 48hrs",
          "Use HEPA air purifiers",
          "Replace HVAC filters",
          "Seal off treated areas from children and pets",
          "Conduct regular air quality checks",
          "Use gentle, non-abrasive cleaning methods"
        ],
        seasonalNote: "Winter holiday decorations increase fire risk, preventative restoration recommended"
      },
      {
        name: "Odour Control",
        slug: "odour-control",
        header: {
          title: "Odour Control Services in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) offers advanced odor control services that eliminate persistent smells at their source—without relying on masking agents. Our multi-stage treatment process neutralizes odors at the molecular level using non-toxic, eco-friendly solutions safe for families, pets, and sensitive environments. Whether caused by smoke, pets, mold, sewage, or organic waste, our technicians identify the root cause and apply targeted treatments including ozone, hydroxyl, and enzyme-based solutions. We serve residential, commercial, and industrial spaces throughout Toronto and the GTA, ensuring your environment is restored to a fresh, breathable condition. With guaranteed long-term results and complete source removal, SMI helps you reclaim your space with confidence.",
        },
        description: "Advanced treatment for persistent and challenging odors.",
        image: odourControl,
        fullDescription: "Our odor control service uses advanced techniques to eliminate even the most stubborn odors, restoring fresh and clean environments.",
        keyFeatures: [
          "Molecular-level odor neutralization technology",
          "Multi-stage treatment approach",
          "100% eco-friendly and non-toxic solutions",
          "Guaranteed long-lasting odor elimination",
          "Comprehensive source identification",
          "Commercial and residential application capabilities"
        ],
        aftercareTips: [
          "Child/pet safe after complete drying",
          "No harsh chemicals on treated surfaces",
          "Maintain good ventilation",
          "Use pH-neutral cleaners",
          "Avoid covering treated areas immediately",
          "Conduct follow-up assessments"
        ],
        seasonalNote: "Summer humidity worsens organic odors, proactive treatment recommended"
      },
      {
        name: "Applied Microbial (Mould & Sewage) Remediation (AMRT)",
        slug: "applied-microbial-(mould-and-sewage)-remediation-(amrt)",
        header: {
          title: "Mould and Sewage Remediation (AMRT) Services in Toronto & GTA",
          description: "Sentinel Maintenance Inc (SMI) provides IICRC-certified Applied Microbial Remediation (AMRT) services for the safe removal of mold, sewage, and bio-contaminants. We specialize in isolating affected areas, eliminating active microbial growth, and restoring contaminated spaces to healthy, habitable conditions. Using HEPA filtration, negative air pressure, and eco-conscious antimicrobials, we ensure compliance with industry standards and protect the health of occupants. Our detailed contamination assessment includes moisture tracing and full post-treatment documentation for insurance and regulatory needs. From flooded basements to sewer backups and attic mold, clients across Toronto and the GTA rely on SMI’s thorough, science-backed remediation techniques for safe and lasting results.",
        },
        description: "Comprehensive treatment for mould, sewage, and microbial contamination.",
        image: amrt,
        fullDescription: "Our Applied Microbial Remediation (AMRT) service provides expert treatment for mould, sewage, and other microbial contaminations, ensuring safe and thorough restoration.",
        keyFeatures: [
          "IICRC-certified microbial remediation specialists",
          "Advanced containment and isolation protocols",
          "Comprehensive microbial elimination strategies",
          "Forensic-level contamination assessment",
          "Health-focused restoration approach",
          "Complete documentation for insurance and compliance"
        ],
        aftercareTips: [
          "Maintain indoor humidity below 50%",
          "Use non-staining formulas for follow-up",
          "Regularly inspect previously treated areas",
          "Ensure proper ventilation",
          "Use HEPA air filtration",
          "Conduct periodic professional inspections"
        ],
        seasonalNote: "High-risk during spring and autumn due to increased moisture"
      }
    ]
  }
]

export function getServiceBySlug(service) {
  
  return serviceCategories.flatMap(category => 
    category.services
  ).find(serv => 
    serv.slug === service
  )
}

export function getAllServicePaths() {
  const paths = serviceCategories.flatMap(category => 
    category.services.map(service => ({
      service: service.slug
    }))
  )
  return paths
}

// Blogs
import BcommercialJanitorialCleaning from "@/public/blogs/commerical-janitorial-cleaning.webp";
import BcommercialJanitorialCleaning2 from "@/public/blogs/commerical-janitorial-cleaning2.webp";
import BcondominiumCleaning from "@/public/blogs/condominium-cleaning.webp";
import BcondominiumCleaning2 from "@/public/blogs/condominium-cleaning2.webp";
import BecoFriendlyCleaning from "@/public/blogs/eco-friendly-cleaning.webp";
import BecoFriendlyCleaning2 from "@/public/blogs/eco-friendly-cleaning2.webp";
import BemergencyCleaning from "@/public/blogs/emergency-cleaning.webp";
import BemergencyCleaning2 from "@/public/blogs/emergency-cleaning2.webp";
import BhvacVentilationCleaning from "@/public/blogs/hvac-ventilation-cleaning.webp";
import BhvacVentilationCleaning2 from "@/public/blogs/hvac-ventilation-cleaning2.webp";
import BmedicalOfficeCleaning from "@/public/blogs/medical-office-cleaning.webp";
import BmedicalOfficeCleaning2 from "@/public/blogs/medical-office-cleaning2.webp";
import BpostConstruction from "@/public/blogs/post-construction.webp";
import BpostConstruction2 from "@/public/blogs/post-construction2.webp";
import BpostCovid from "@/public/blogs/post-covid.webp";
import BpostCovid2 from "@/public/blogs/post-covid2.webp";
import BstoneRestoration from "@/public/blogs/stone-restoration.webp";
import BstoneRestoration2 from "@/public/blogs/stone-restoration2.webp";
import BwindowCleaning from "@/public/blogs/window-cleaning.webp";
import BwindowCleaning2 from "@/public/blogs/window-cleaning2.webp";

export const cleaningBlogs = [
  {
    id: 1,
    title: "The Complete Guide to Commercial Janitorial Cleaning",
    excerpt: "Discover the essential practices for maintaining pristine commercial spaces. Learn how professional janitorial services can enhance your business environment and employee productivity.",
    date: "April 3, 2025",
    readTime: 6,
    category: "Commercial",
    tags: ["Office Cleaning", "Janitorial", "Commercial"],
    image: BcommercialJanitorialCleaning,
    featured: true,
    popular: true,
    author: {
      name: "Maria Johnson",
      title: "Head of Commercial Services",
      avatar: "/images/avatars/maria.jpg"
    },
    relatedPosts: [2, 5, 8],
    sections: [
      {
        heading: "Understanding Commercial Cleaning Standards",
        content: "Commercial spaces require specialized cleaning approaches that differ significantly from residential cleaning...",
        imageUrl: BcommercialJanitorialCleaning2
      },
      {
        heading: "The Business Impact of Clean Environments",
        content: "Studies have shown that clean workspaces can increase productivity by up to 15%...",
        stats: [
          { label: "Productivity Increase", value: "15%" },
          { label: "Reduced Sick Days", value: "30%" },
          { label: "Client Satisfaction", value: "92%" }
        ]
      }
    ],
    faqs: [
      {
        question: "How often should commercial spaces be cleaned?",
        answer: "Most commercial spaces benefit from daily maintenance cleaning and weekly deep cleaning..."
      },
      {
        question: "What's included in standard janitorial services?",
        answer: "Standard janitorial packages typically include floor care, restroom sanitation..."
      }
    ],
  },
  {
    id: 2,
    title: "Deep Cleaning and Disinfection: Post-COVID Best Practices",
    excerpt: "Explore the advanced techniques in deep cleaning and disinfection that have evolved since the pandemic. This comprehensive guide covers fogging disinfection and other specialized methods.",
    date: "March 28, 2025",
    readTime: 8,
    category: "Specialized Services",
    tags: ["Disinfection", "COVID-19", "Deep Cleaning"],
    image: BpostCovid,
    featured: false,
    popular: false,
    author: {
      name: "Robert Chen",
      title: "Disinfection Specialist",
      avatar: "/images/avatars/robert.jpg"
    },
    relatedPosts: [1, 7, 10],
    sections: [
      {
        heading: "Evolution of Disinfection Protocols",
        content: "The pandemic fundamentally changed our understanding of surface disinfection and airborne pathogen control...",
        imageUrl: BpostCovid2
      },
      {
        heading: "Advanced Disinfection Technologies",
        content: "From electrostatic sprayers to UV-C light treatments, technology has revolutionized how we approach sanitization...",
        stats: [
          { label: "Pathogen Reduction", value: "99.9%" },
          { label: "Application Speed", value: "3x Faster" },
          { label: "Surface Coverage", value: "Complete" }
        ]
      }
    ],
    faqs: [
      {
        question: "How does fogging disinfection work?",
        answer: "Fogging disinfection disperses a fine mist of disinfectant solution that reaches all surfaces, including difficult areas..."
      },
      {
        question: "How often should deep disinfection be performed?",
        answer: "For high-traffic facilities, monthly deep disinfection is recommended, while regular facilities may benefit from quarterly treatments..."
      }
    ],
  },
  {
    id: 3,
    title: "Condominium Cleaning: Meeting the Unique Needs of Residential Buildings",
    excerpt: "From common areas to specialized services, learn how professional cleaning services address the unique requirements of condominium buildings and enhance property values.",
    date: "March 21, 2025",
    readTime: 5,
    category: "Residential",
    tags: ["Condominium", "Residential Cleaning"],
    image: BcondominiumCleaning,
    popular: true,
    featured: false,
    author: {
      name: "Sophia Martinez",
      title: "Residential Services Director",
      avatar: "/images/avatars/sophia.jpg"
    },
    relatedPosts: [5, 8, 9],
    sections: [
      {
        heading: "Common Areas and Shared Spaces",
        content: "Lobbies, hallways, and amenity spaces require specialized attention to maintain the property's overall impression...",
        imageUrl: BcondominiumCleaning2
      },
      {
        heading: "Service Scheduling for Minimal Disruption",
        content: "Strategic scheduling ensures residents experience minimal disruption while maintaining pristine conditions...",
        stats: [
          { label: "Property Value Impact", value: "+7%" },
          { label: "Resident Satisfaction", value: "94%" },
          { label: "Maintenance Cost Reduction", value: "22%" }
        ]
      }
    ],
    faqs: [
      {
        question: "How are cleaning schedules determined for condominiums?",
        answer: "Schedules are typically developed in consultation with the property management, considering resident traffic patterns and building usage..."
      },
      {
        question: "What specialized services do condominiums require?",
        answer: "Beyond standard cleaning, condominiums often require specialized services like garbage room deodorizing, parkade cleaning, and seasonal window washing..."
      }
    ],
  },
  {
    id: 4,
    title: "Window Cleaning Techniques for High-Rise Buildings",
    excerpt: "Safety protocols and advanced techniques for cleaning windows in tall structures. Discover how professionals manage the challenges of high-rise window cleaning.",
    date: "March 15, 2025",
    readTime: 7,
    category: "Specialized Services",
    tags: ["Window Cleaning", "High-Rise", "Safety"],
    image: BwindowCleaning,
    featured: false,
    popular: false,
    author: {
      name: "Thomas Wright",
      title: "Safety and Heights Specialist",
      avatar: "/images/avatars/thomas.jpg"
    },
    relatedPosts: [1, 6, 9],
    sections: [
      {
        heading: "Safety First: Equipment and Protocols",
        content: "Professional high-rise window cleaning relies on specialized equipment and rigorous safety protocols to protect workers and pedestrians alike...",
        imageUrl: BwindowCleaning2
      },
      {
        heading: "Pure Water Technology and Reach Systems",
        content: "Modern window cleaning has evolved beyond traditional squeegees to incorporate deionized water and carbon fiber extension poles...",
        stats: [
          { label: "Maximum Working Height", value: "80 stories" },
          { label: "Safety Compliance Rate", value: "100%" },
          { label: "UV Protection", value: "Extended 4 years" }
        ]
      }
    ],
    faqs: [
      {
        question: "How often should high-rise windows be cleaned?",
        answer: "Most commercial high-rises benefit from quarterly exterior window cleaning, though environmental factors may necessitate more frequent service..."
      },
      {
        question: "What weather conditions prevent high-rise window cleaning?",
        answer: "High winds exceeding 25 mph, electrical storms, freezing temperatures, and heavy precipitation all present safety hazards that would postpone service..."
      }
    ],
  },
  {
    id: 5,
    title: "Restoring Natural Stone: Best Practices and Techniques",
    excerpt: "Learn about the specialized techniques for natural stone restoration and maintenance. Find out how professionals preserve the beauty of marble, granite, and other stone surfaces.",
    date: "March 7, 2025",
    readTime: 9,
    category: "Specialized Services",
    tags: ["Stone Restoration", "Maintenance", "Surfaces"],
    image: BstoneRestoration,
    popular: true,
    featured: true,
    author: {
      name: "Diana Lewis",
      title: "Stone Restoration Expert",
      avatar: "/images/avatars/diana.jpg"
    },
    relatedPosts: [1, 3, 8],
    sections: [
      {
        heading: "Understanding Different Stone Types",
        content: "Each natural stone—from marble and granite to travertine and limestone—requires unique treatment approaches based on composition and porosity...",
        imageUrl: BstoneRestoration2
      },
      {
        heading: "Diamond Polishing and Honing Techniques",
        content: "Professional stone restoration often employs diamond abrasives at various grits to achieve the desired finish, from matte to high-gloss...",
        stats: [
          { label: "Lifetime Extension", value: "25+ years" },
          { label: "Gloss Improvement", value: "Up to 95%" },
          { label: "Value Restoration", value: "87%" }
        ]
      }
    ],
    faqs: [
      {
        question: "Can all stone damage be repaired?",
        answer: "Most surface damage including etching, scratches, and dullness can be fully restored. Deep cracks may require specialized filling techniques..."
      },
      {
        question: "How long does professional stone restoration last?",
        answer: "With proper maintenance, professional stone restoration can last 5-10 years before another restoration is needed, depending on traffic and usage..."
      }
    ],
  },
  {
    id: 6,
    title: "Post-Construction Cleaning: The Final Step to Project Completion",
    excerpt: "The essential guide to thorough post-construction cleaning services. Discover how professionals handle debris removal, fine dust, and surface protection.",
    date: "February 28, 2025",
    readTime: 6,
    category: "Construction",
    tags: ["Post-Construction", "Debris Removal", "New Buildings"],
    image: BpostConstruction,
    featured: false,
    popular: false,
    author: {
      name: "Michael Torres",
      title: "Construction Cleaning Manager",
      avatar: "/images/avatars/michael.jpg"
    },
    relatedPosts: [1, 4, 5],
    sections: [
      {
        heading: "The Three Phases of Post-Construction Cleaning",
        content: "Professional post-construction cleaning follows a methodical approach: rough clean, deep clean, and final detail clean to ensure no residue remains...",
        imageUrl: BpostConstruction2
      },
      {
        heading: "Handling Special Surfaces and Materials",
        content: "New construction presents unique challenges with adhesive residues, grout haze, and protective coating removal requiring specialized solutions...",
        stats: [
          { label: "Dust Reduction", value: "99.7%" },
          { label: "Air Quality Improvement", value: "87%" },
          { label: "Surface Protection", value: "Complete" }
        ]
      }
    ],
    faqs: [
      {
        question: "When should post-construction cleaning begin?",
        answer: "Initial rough cleaning can begin once major construction activities have finished, with final cleaning scheduled after all trades have completed their work..."
      },
      {
        question: "How long does post-construction cleaning take?",
        answer: "For residential properties, comprehensive post-construction cleaning typically takes 1-2 days, while commercial buildings may require several days to weeks depending on size..."
      }
    ],
  },
  {
    id: 7,
    title: "Medical Office Cleaning: Meeting Healthcare Standards",
    excerpt: "Understanding the specialized requirements and regulations for cleaning medical facilities. Learn about disinfection protocols and compliance with healthcare standards.",
    date: "February 21, 2025",
    readTime: 8,
    category: "Medical",
    tags: ["Healthcare", "Disinfection", "Compliance"],
    image: BmedicalOfficeCleaning,
    featured: false,
    popular: false,
    author: {
      name: "Dr. Sarah Williams",
      title: "Healthcare Sanitation Consultant",
      avatar: "/images/avatars/sarah.jpg"
    },
    relatedPosts: [2, 8, 10],
    sections: [
      {
        heading: "Healthcare Cleaning Standards and Compliance",
        content: "Medical facilities must adhere to strict guidelines from organizations like CDC, OSHA, and Joint Commission to ensure patient safety and infection control...",
        imageUrl: BmedicalOfficeCleaning2
      },
      {
        heading: "Cross-Contamination Prevention Protocols",
        content: "Healthcare cleaning requires meticulous attention to preventing pathogen transfer between different areas of the facility...",
        stats: [
          { label: "HAI Reduction", value: "32%" },
          { label: "Compliance Rate", value: "100%" },
          { label: "Patient Confidence", value: "96%" }
        ]
      }
    ],
    faqs: [
      {
        question: "What training do medical facility cleaners receive?",
        answer: "Specialized technicians undergo rigorous training in bloodborne pathogen handling, regulated medical waste disposal, and healthcare-specific disinfection protocols..."
      },
      {
        question: "How does medical office cleaning differ from standard commercial cleaning?",
        answer: "Medical cleaning involves hospital-grade disinfectants, specialized equipment to prevent cross-contamination, stricter protocols, and documented cleaning verification..."
      }
    ],
  },
  {
    id: 8,
    title: "Eco-Friendly Cleaning Practices for Sustainable Buildings",
    excerpt: "Implementing green cleaning techniques that protect both the environment and building occupants. Discover sustainable products and methods for modern facilities.",
    date: "February 14, 2025",
    readTime: 7,
    category: "Sustainable",
    tags: ["Eco-Friendly", "Green Cleaning", "Sustainability"],
    image: BecoFriendlyCleaning,
    popular: true,
    featured: false,
    author: {
      name: "Elena Garcia",
      title: "Sustainability Director",
      avatar: "/images/avatars/elena.jpg"
    },
    relatedPosts: [1, 3, 7],
    sections: [
      {
        heading: "Beyond Green Products: The Sustainable Cleaning Ecosystem",
        content: "True green cleaning extends beyond eco-friendly chemicals to encompass equipment, processes, and comprehensive waste reduction strategies...",
        imageUrl: BecoFriendlyCleaning2
      },
      {
        heading: "Certifications and Standards in Green Cleaning",
        content: "Understanding eco certifications like Green Seal, EcoLogo, and LEED helps facilities implement truly sustainable cleaning programs...",
        stats: [
          { label: "Chemical Reduction", value: "73%" },
          { label: "Water Conservation", value: "62%" },
          { label: "Indoor Air Quality", value: "+45%" }
        ]
      }
    ],
    faqs: [
      {
        question: "Do green cleaning products clean as effectively?",
        answer: "Modern green cleaning products match or exceed the performance of traditional chemicals while eliminating harmful health impacts and environmental damage..."
      },
      {
        question: "How does green cleaning impact LEED certification?",
        answer: "Implementing a comprehensive green cleaning program can contribute up to 6 points toward LEED certification under the Indoor Environmental Quality category..."
      }
    ],
  },
  {
    id: 9,
    title: "Emergency Cleaning Services: Responding to Water and Fire Damage",
    excerpt: "How professional cleaning teams address emergency situations and restore properties after water or fire damage. Learn about rapid response protocols and restoration techniques.",
    date: "February 7, 2025",
    readTime: 5,
    category: "Restoration",
    tags: ["Emergency", "Restoration", "Damage Control"],
    image: BemergencyCleaning,
    featured: false,
    popular: false,
    author: {
      name: "James Rodriguez",
      title: "Emergency Response Director",
      avatar: "/images/avatars/james.jpg"
    },
    relatedPosts: [3, 4, 6],
    sections: [
      {
        heading: "The Critical First 24 Hours After Damage",
        content: "The initial response window is crucial for preventing secondary damage and begins with comprehensive assessment and immediate containment measures...",
        imageUrl: BemergencyCleaning2
      },
      {
        heading: "Advanced Drying and Decontamination Technology",
        content: "Modern restoration employs scientific principles and specialized equipment to accelerate recovery and minimize structural damage...",
        stats: [
          { label: "Response Time", value: "Under 2 hours" },
          { label: "Salvage Rate", value: "85%" },
          { label: "Mold Prevention", value: "98%" }
        ]
      }
    ],
    faqs: [
      {
        question: "Is it necessary to hire professionals for water damage?",
        answer: "Professional response is crucial as standing water can penetrate deeply into structures, causing hidden damage and mold growth that DIY methods cannot address..."
      },
      {
        question: "What should businesses do immediately after fire damage?",
        answer: "After ensuring everyone's safety and contacting the fire department, businesses should secure the property and contact emergency restoration services before re-entry..."
      }
    ],
  },
  {
    id: 10,
    title: "HVAC and Ventilation System Cleaning: Improving Indoor Air Quality",
    excerpt: "The importance of regular cleaning for HVAC systems, fan coils, and ventilation ducts. Discover how these services enhance air quality and energy efficiency in buildings.",
    date: "January 31, 2025",
    readTime: 6,
    category: "Specialized Services",
    tags: ["HVAC", "Air Quality", "Ventilation"],
    image: BhvacVentilationCleaning,
    featured: false,
    popular: false,
    author: {
      name: "Andrew Patterson",
      title: "Indoor Air Quality Specialist",
      avatar: "/images/avatars/andrew.jpg"
    },
    relatedPosts: [2, 7, 8],
    sections: [
      {
        heading: "The Hidden Impact of Contaminated HVAC Systems",
        content: "Dirty ventilation systems not only distribute pollutants throughout facilities but also significantly reduce system efficiency and component lifespan...",
        imageUrl: BhvacVentilationCleaning2
      },
      {
        heading: "Comprehensive Cleaning Methodologies",
        content: "Professional HVAC cleaning combines mechanical agitation, negative air pressure containment, and specialized vacuuming to ensure complete contaminant removal...",
        stats: [
          { label: "Energy Savings", value: "Up to 40%" },
          { label: "Airborne Particle Reduction", value: "83%" },
          { label: "System Lifespan Extension", value: "+7 years" }
        ]
      }
    ],
    faqs: [
      {
        question: "How often should commercial HVAC systems be cleaned?",
        answer: "Most commercial systems benefit from inspection every 6 months and complete cleaning annually, though facilities with high particulate generation may require quarterly service..."
      },
      {
        question: "What are signs that your ventilation system needs cleaning?",
        answer: "Warning signs include uneven airflow, musty odors, excessive dust accumulation, higher energy bills, and increased respiratory complaints from building occupants..."
      }
    ],
  },
];


/* ABOUT US PAGE */

import seniorManagement from "@/public/pages/about-us/senior-management.webp"; 
import areaSupervisor from "@/public/pages/about-us/area-supervisor.webp"; 
import jobForeperson from "@/public/pages/about-us/job-foreperson.webp"; 
import cleaners from "@/public/pages/about-us/cleaners.webp"; 
import { Users, Award, Briefcase, User } from 'lucide-react';

export const teamStructureData = [
  {
    id: 1,
    title: "Senior Management",
    description: "The Senior Management team is responsible for all administrative and strategic decision making. Senior Management also coordinates the firm's marketing as well as attending industry meetings and workshops to stay abreast of the changes and improvements occurring within the industry.",
    icon: <Award size={40} className="text-white" />,
    positionNumber: "i",
    image: seniorManagement,
    imageAlt: "Senior Management"
  },
  {
    id: 2,
    title: "Area Supervisor",
    description: "The Area Supervisors are responsible for projects within a defined geographical area, They maintain daily contact with the Job Foreperson to ensure all activities at the job site are being performed at the highest level.",
    icon: <Users size={40} className="text-white" />,
    positionNumber: "ii",
    image: areaSupervisor,
    imageAlt: "Area Supervisor"
  },
  {
    id: 3,
    title: "Job Foreperson",
    description: "The Job Foreperson is responsible for the specific job site designated to them. They report directly to the area supervisor daily.",
    icon: <Briefcase size={40} className="text-white" />,
    positionNumber: "iii",
    image: jobForeperson,
    imageAlt: "Job Foreperson"
  },
  {
    id: 4,
    title: "Cleaners",
    description: "The cleaners report to the Job Foreperson and perform the duties as detailed in the contract.",
    icon: <User size={40} className="text-white" />,
    positionNumber: "iv",
    image: cleaners,
    imageAlt: "Cleaners"
  }
];

// FAQ


export const faqs = [
  {
    question: "What geographic areas do you serve?",
    answer: "We proudly service the entire Greater Toronto Area (GTA)—from Toronto proper through North York, Scarborough, Etobicoke, Vaughan, Markham, Mississauga and surrounding municipalities."
  },
  {
    question: "What kinds of cleaning services do you offer?",
    answer: "Our core offerings include commercial janitorial and office cleaning, condominium and institutional cleaning, medical and dealership cleaning, plus post-construction and new-build cleaning services."
  },
  {
    question: "Do you provide specialized or \"add-on\" services?",
    answer: "Yes—everything from deep-clean disinfection, fogging, window cleaning (low-rise & high-rise), pressure-washing (exteriors & parking garages), carpet care, graffiti removal, to natural stone restoration and more."
  },
  {
    question: "Can you handle emergency cleanup and restoration?",
    answer: "Absolutely—we offer flood cleanup, fire damage restoration, odour control, and applied microbial (mould & sewage) remediation through our dedicated Restoration division."
  },
  {
    question: "How do I request a quote or book a service?",
    answer: "Simply fill out our online request form or call our office. We'll assess your needs, provide a detailed proposal, and schedule at your convenience."
  },
  {
    question: "What are your pricing and payment options?",
    answer: "Pricing is customized based on scope, frequency, and any specialized requirements. We accept major credit cards, e-transfers, and corporate invoicing. Recurring-service discounts are available."
  },
  {
    question: "Are you fully licensed and insured?",
    answer: "Yes—our company holds all required provincial licences and carries comprehensive liability and workers' compensation insurance for your peace of mind."
  },
  {
    question: "What is your typical scheduling availability?",
    answer: "We operate 24/7 for emergency and scheduled projects, with most routine commercial cleanings available outside standard business hours to minimize disruption."
  },
  {
    question: "How do you ensure consistent service quality?",
    answer: "Through a tiered oversight structure—senior management sets protocols, area supervisors coordinate regional operations, on-site forepersons manage daily execution, and all cleaners follow standardized training and checklists."
  },
  {
    question: "What safety and compliance training do staff receive?",
    answer: "Every team member completes WHMIS certification (≥80% pass) and ongoing chemical-handling, equipment-use, and workplace-safety training to meet or exceed industry standards."
  }
];