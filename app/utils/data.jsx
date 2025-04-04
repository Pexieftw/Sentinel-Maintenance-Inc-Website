// Services Information
export const services = {
  'Cleaning Services': [
    'Commercial Janitorial Cleaning',
    'Office Cleaning',
    'Condominium Cleaning',
    'Medical Office Cleaning',
    'Dealership Cleaning',
    'Institutional Cleaning',
    'Post Construction Cleaning',
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
      'Hand Stone Staining for Colour Matching',
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

// TopBar Infomatrions

import { Phone, MapPin, Mail } from 'lucide-react';
  
export const topBarSections = [
  { 
    icon: <Phone className="stroke-current" size={16} />, 
    text: "+1 416-918-4177" 
  },
  { 
    icon: <MapPin className="stroke-current" size={16} />, 
    text: "401 Richemond St" 
  },
  { 
    icon: <Mail className="stroke-current" size={16} />, 
    text: "info@smi.ca" 
  }
];

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
  { name: "Newmarket", coordinates: [44.0566, -79.4661] },
  { name: "Brampton", coordinates: [43.7315, -79.7624] },
  { name: "Woodbridge", coordinates: [43.7758, -79.5960] },
  { name: "Oakville", coordinates: [43.4675, -79.6877] },
  { name: "Burlington", coordinates: [43.3255, -79.7990] },
  { name: "Hamilton", coordinates: [43.2557, -79.8711] }
];


export const areas = [
  {
    name: 'Toronto',
    description: 'Our core service area, covering all neighborhoods in Toronto with prompt and reliable service.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'North York',
    description: 'Complete coverage across North York with specialized service teams familiar with the area.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'Scarborough',
    description: 'Extending our quality services throughout Scarborough communities with dedicated local teams.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'Etobicoke',
    description: 'Full service coverage in Etobicoke with experienced professionals who know the area well.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'Vaughan',
    description: 'Reliable service throughout Vaughan with teams that understand the unique needs of this growing region.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'Thornhill',
    description: 'Dedicated service providers covering all of Thornhill with attention to detail and quality.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'Richmond Hill',
    description: 'Expert service teams covering Richmond Hill with comprehensive solutions for all clients.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'Markham',
    description: 'Full coverage across Markham with specialized teams for both residential and commercial clients.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'Maple',
    description: 'Serving the Maple community with tailored solutions and responsive service teams.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'Concord',
    description: 'Dedicated coverage in Concord with professionals who understand local requirements and expectations.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'Milton',
    description: 'Extending our quality service to Milton with teams that are familiar with this growing community.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'Mississauga',
    description: 'Comprehensive coverage across Mississauga with teams strategically located for quick response.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'Newmarket',
    description: 'Reliable service throughout Newmarket with professionals who understand the local landscape.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'Brampton',
    description: 'Full service coverage in Brampton with teams equipped to handle all client needs efficiently.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'Woodbridge',
    description: 'Dedicated service teams covering Woodbridge with attention to detail and customer satisfaction.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'Oakville',
    description: 'Expert service providers throughout Oakville delivering premium solutions to all clients.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'Burlington',
    description: 'Extending our quality service to Burlington with professionals who understand local requirements.',
    imageSrc: '/about1.jpg'
  },
  {
    name: 'Hamilton',
    description: 'Comprehensive coverage across Hamilton with teams ready to provide exceptional service.',
    imageSrc: '/about1.jpg'
  }
];


export const serviceCategories = [
  {
    category: 'Cleaning Services',
    icon: 'Sparkles',
    services: [
      {
        name: 'Commercial Janitorial Cleaning',
        slug: 'commercial-janitorial-cleaning',
        description: 'Comprehensive cleaning solutions for commercial spaces of all sizes.',
        image: '/about1.jpg',
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
        description: 'Tailored cleaning solutions for modern office environments.',
        image: '/about1.jpg',
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
        description: 'Comprehensive cleaning services for condominium complexes and shared spaces.',
        image: '/about1.jpg',
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
        description: 'Specialized cleaning for healthcare facilities with strict hygiene standards.',
        image: '/about1.jpg',
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
        description: 'Comprehensive cleaning solutions for automotive showrooms and service centers.',
        image: '/about1.jpg',
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
        seasonalNote: 'Winter and summer car show seasons demand extra attention to showroom and vehicle presentation'
      },
      {
        name: 'Institutional Cleaning',
        slug: 'institutional-cleaning',
        description: 'Comprehensive cleaning for educational, government, and public institutions.',
        image: '/about1.jpg',
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
        name: 'Post Construction Cleaning',
        slug: 'post-construction-cleaning',
        description: 'Comprehensive cleanup services for newly constructed or renovated spaces.',
        image: '/about1.jpg',
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
        description: 'Specialized cleaning for newly constructed condominium buildings.',
        image: '/about1.jpg',
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
        description: 'Comprehensive sanitization using advanced cleaning technologies.',
        image: '/about1.jpg',
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
        description: 'Advanced disinfection technique using fog-based sanitization.',
        image: '/about1.jpg',
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
        description: 'Professional window cleaning for buildings of all heights.',
        image: '/about1.jpg',
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
        description: 'High-pressure cleaning for exterior surfaces and facades.',
        image: '/about1.jpg',
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
        description: 'Specialized cleaning for parking structures and garages.',
        image: '/about1.jpg',
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
        description: 'Deep cleaning and restoration for carpeted surfaces.',
        image: '/about1.jpg',
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
        description: 'Specialized sanitization to prevent COVID-19 transmission.',
        image: '/about1.jpg',
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
        description: 'Professional graffiti elimination and surface restoration.',
        image: '/about1.jpg',
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
        name: 'Hand Stone Staining for Colour Matching',
        slug: 'hand-stone-staining-for-colour-matching',
        description: 'Precise stone staining and color restoration services.',
        image: '/about1.jpg',
        fullDescription: 'Our hand stone staining service provides expert color matching and restoration for natural stone surfaces, ensuring seamless and precise color integration.',
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
        description: 'Comprehensive restoration for natural stone surfaces.',
        image: '/about1.jpg',
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
        description: 'Deep cleaning and color restoration for tile and grout surfaces.',
        image: '/about1.jpg',
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
        description: 'Comprehensive landscape maintenance and design services.',
        image: '/about1.jpg',
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
        description: 'Professional snow and ice management services.',
        image: '/about1.jpg',
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
        description: 'Professional entrance matting solutions for commercial spaces.',
        image: '/about1.jpg',
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
        description: 'Humane wildlife and pest management services.',
        image: '/about1.jpg',
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
        description: 'Comprehensive cleaning and maintenance of HVAC systems.',
        image: '/about1.jpg',
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
        description: 'Thorough cleaning and maintenance of HVAC fan coil units.',
        image: '/about1.jpg',
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
        description: 'Professional cleaning of laundry and kitchen exhaust systems.',
        image: '/about1.jpg',
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
        description: 'Specialized cleaning for commercial and industrial kitchen ventilation systems.',
        image: '/about1.jpg',
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
        description: "Emergency water damage restoration and cleanup services.",
        image: "/about1.jpg",
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
        description: "Comprehensive recovery and restoration after fire damage.",
        image: "/about1.jpg",
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
        description: "Advanced treatment for persistent and challenging odors.",
        image: "/about1.jpg",
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
        description: "Comprehensive treatment for mould, sewage, and microbial contamination.",
        image: "/about1.jpg",
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