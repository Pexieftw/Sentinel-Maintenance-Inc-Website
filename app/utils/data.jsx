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
      'Carpet Cleaning Services',
      'COVID-19 Cleaning',
      'Graffiti Removal',
      'Hand Stone Staining for Colour Matching',
      'Natural Stone Restoration'
    ],
    column2: [
      'Tile & Grout Cleaning & Colour Sealing',
      'Landscaping',
      'Snow Removal',
      'Lobby and Entrance Walk-off Matting Installation',
      'Animal Control and Deterrents',
      'HVAC Cleaning',
      'Fan Coil Cleaning',
      'Laundry and Kitchen Exhaust Fan Cleaning',
      'Industrial Kitchen Vent Cleaning'
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