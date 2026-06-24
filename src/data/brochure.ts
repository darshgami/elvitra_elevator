export const company = {
  name: 'Elvitra Elevators',
  tagline: 'A NEW WAY TO ',
  taglineFull: 'Engineering Elevation, Redefining Excellence',
  description:
    'Elvitra Elevators is a premier elevator manufacturing and service company dedicated to providing world-class vertical mobility solutions. With a commitment to engineering excellence, safety, and innovation, we design, manufacture, install, and maintain elevators that set the benchmark for quality and reliability.',
  vision:
    'To be a globally recognized leader in the elevator industry, setting new standards in vertical transportation through continuous innovation, uncompromising quality, and exceptional customer experience.',
  mission:
    'To deliver safe, reliable, and technologically advanced elevator solutions that enhance urban mobility. We are committed to engineering excellence, customer satisfaction, and sustainable practices in everything we do.',
  founded: 2010,
  headquarters: 'Mumbai, India',
  serviceRegions: ['India', 'Middle East', 'Southeast Asia', 'Africa'],
  employees: '500+',
  projectsCompleted: '2000+',
};

export const categories = [
  {
    id: 'passenger',
    title: 'Passenger Elevators',
    subtitle: 'Smooth. Silent. Sophisticated.',
    description:
      'Engineered for comfortable and efficient passenger movement in residential and commercial buildings. Our passenger elevators combine sleek design, quiet operation, and advanced control systems for an unparalleled riding experience.',
    features: [
      'Smooth acceleration and deceleration',
      'Energy-efficient VVVF drives',
      'Microprocessor-based controls',
      'Emergency communication systems',
      'Automatic rescue device',
      'Aesthetic cabin designs',
    ],
    specifications: {
      capacity: '630 kg – 2500 kg',
      speed: '1.0 m/s – 4.0 m/s',
      travel: 'Up to 60 floors',
      operation: 'Microprocessor-controlled',
    },
    image: 'passenger',
  },
  {
    id: 'hospital',
    title: 'Hospital Elevators',
    subtitle: 'Precision for Critical Care',
    description:
      'Designed specifically for healthcare facilities, our hospital elevators ensure smooth, vibration-free transportation of patients, medical staff, and equipment. Built to meet stringent medical facility standards with emergency prioritization features.',
    features: [
      'Vibration-free operation',
      'Emergency medical prioritization',
      'Extra-wide doors for stretcher access',
      'Backup power integration',
      'Hospital-grade hygiene materials',
      'Emergency communication systems',
    ],
    specifications: {
      capacity: '1600 kg – 2500 kg',
      speed: '1.0 m/s – 2.5 m/s',
      travel: 'Up to 30 floors',
      operation: 'Fully automatic with emergency override',
    },
    image: 'hospital',
  },
  {
    id: 'home',
    title: 'Home Lifts',
    subtitle: 'Luxury at Every Level',
    description:
      'Redefining residential mobility with elegant, space-efficient home lifts that blend seamlessly with your interior design. Compact yet luxurious, our home lifts offer the ultimate convenience for modern living.',
    features: [
      'Compact machine-room-less design',
      'Customizable cabin interiors',
      'Low maintenance requirements',
      'Quiet and smooth operation',
      'Power backup included',
      'Safety sensors and alarms',
    ],
    specifications: {
      capacity: '250 kg – 450 kg',
      speed: '0.3 m/s – 0.5 m/s',
      travel: 'Up to 6 floors',
      operation: 'Simple push-button control',
    },
    image: 'home',
  },
  {
    id: 'freight',
    title: 'Freight Elevators',
    subtitle: 'Built for Heavy Loads',
    description:
      'Heavy-duty freight elevators engineered for industrial and commercial applications. Built to transport goods, equipment, and materials with maximum durability, reliability, and safety.',
    features: [
      'High load-bearing capacity',
      'Reinforced cabin construction',
      'Industrial-grade doors',
      'Advanced safety mechanisms',
      'Weather-resistant options',
      'Customizable platform sizes',
    ],
    specifications: {
      capacity: '1000 kg – 10000 kg',
      speed: '0.3 m/s – 1.5 m/s',
      travel: 'Up to 20 floors',
      operation: 'Heavy-duty industrial control',
    },
    image: 'freight',
  },
  {
    id: 'hydraulic',
    title: 'Hydraulic Elevators',
    subtitle: 'Power Through Precision',
    description:
      'Robust hydraulic elevator systems ideal for low to mid-rise buildings. Known for their reliability, smooth operation, and cost-effectiveness, our hydraulic elevators are built to perform.',
    features: [
      'Smooth and quiet operation',
      'High reliability with low maintenance',
      'Overload protection system',
      'Emergency manual lowering',
      'Suitable for low-rise buildings',
      'Cost-effective solution',
    ],
    specifications: {
      capacity: '630 kg – 2500 kg',
      speed: '0.5 m/s – 1.0 m/s',
      travel: 'Up to 6 floors',
      operation: 'Hydraulic power unit',
    },
    image: 'hydraulic',
  },
  {
    id: 'capsule',
    title: 'Capsule Elevators',
    subtitle: 'Panoramic Perfection',
    description:
      'Stunning capsule elevators with transparent cabins that offer panoramic views. Designed for premium hotels, shopping malls, and luxury buildings where aesthetics meet functionality.',
    features: [
      'Transparent panoramic cabin',
      'Architectural lighting integration',
      'Premium glass and steel construction',
      'Smooth and silent travel',
      'Customizable LED ambiance',
      'Anti-glare treated glass',
    ],
    specifications: {
      capacity: '450 kg – 1600 kg',
      speed: '1.0 m/s – 2.5 m/s',
      travel: 'Up to 30 floors',
      operation: 'Microprocessor-controlled',
    },
    image: 'capsule',
  },
  {
    id: 'mrl',
    title: 'MRL Elevators',
    subtitle: 'Space-Saving Innovation',
    description:
      'Machine-Room-Less (MRL) elevators represent the pinnacle of elevator technology. Compact, energy-efficient, and environmentally friendly, our MRL elevators eliminate the need for a separate machine room, saving valuable building space.',
    features: [
      'No machine room required',
      'Energy-efficient regenerative drive',
      'Compact overhead design',
      'Reduced construction costs',
      'Environmentally friendly operation',
      'Advanced destination control',
    ],
    specifications: {
      capacity: '630 kg – 1600 kg',
      speed: '1.0 m/s – 2.5 m/s',
      travel: 'Up to 40 floors',
      operation: 'Gearless permanent magnet motor',
    },
    image: 'mrl',
  },
  {
    id: 'goods',
    title: 'Goods Lifts',
    subtitle: 'Efficient Material Handling',
    description:
      'Designed for efficient movement of goods in warehouses, factories, and commercial establishments. Our goods lifts combine rugged construction with reliable performance for daily heavy-duty use.',
    features: [
      'Durable platform construction',
      'Manual or automatic operation',
      'Safety gates and interlocks',
      'Weather-resistant options',
      'Low maintenance design',
      'Customizable load capacities',
    ],
    specifications: {
      capacity: '500 kg – 5000 kg',
      speed: '0.3 m/s – 1.0 m/s',
      travel: 'Up to 15 floors',
      operation: 'Push-button or key-switch control',
    },
    image: 'goods',
  },
];

export const services = [
  {
    title: 'Installation Services',
    description:
      'Professional end-to-end elevator installation by certified engineers. From site assessment to commissioning, we ensure every installation meets global safety standards and manufacturer specifications.',
    features: [
      'Comprehensive site survey',
      'Custom engineering solutions',
      'Certified installation team',
      'Commissioning and testing',
      'Documentation and handover',
    ],
    icon: 'HardHat',
  },
  {
    title: 'Maintenance Services',
    description:
      'Proactive maintenance programs designed to maximize elevator uptime and longevity. Our skilled technicians follow rigorous schedules to keep your elevators operating at peak performance.',
    features: [
      'Scheduled preventive maintenance',
      '24/7 emergency call support',
      'OEM-certified spare parts',
      'Performance monitoring reports',
      'Skilled technician visits',
    ],
    icon: 'Wrench',
  },
  {
    title: 'AMC Services',
    description:
      'Comprehensive Annual Maintenance Contracts that provide complete peace of mind. Our AMC plans cover routine maintenance, emergency repairs, and priority service for your elevator systems.',
    features: [
      'Comprehensive coverage plans',
      'Priority emergency response',
      'Discounted spare parts',
      'Regular performance audits',
      'Dedicated account manager',
    ],
    icon: 'FileCheck',
  },
  {
    title: 'Modernization Services',
    description:
      'Transform your existing elevators with state-of-the-art technology. Our modernization solutions enhance performance, safety, energy efficiency, and aesthetics without the cost of full replacement.',
    features: [
      'Controller upgrades',
      'Door system modernization',
      'Cabin renovation',
      'Drive system upgrades',
      'Safety system enhancement',
    ],
    icon: 'RefreshCw',
  },
];

export const safetyFeatures = [
  {
    title: 'Emergency Brake System',
    description:
      'Advanced redundant braking systems that engage automatically in case of overspeed or free fall, ensuring passenger safety at all times.',
  },
  {
    title: 'Automatic Rescue Device',
    description:
      'Intelligent battery backup system that automatically brings the elevator to the nearest floor during power failure and opens doors safely.',
  },
  {
    title: 'Door Safety Sensors',
    description:
      'Infrared light curtain and mechanical safety edge sensors that prevent door closure when an obstruction is detected.',
  },
  {
    title: 'Overload Protection',
    description:
      'Integrated load sensing technology that prevents elevator operation when weight capacity is exceeded, with audio-visual alerts.',
  },
  {
    title: 'Emergency Communication',
    description:
      'Two-way intercom and emergency telephone connectivity to building security or emergency services from within the cabin.',
  },
  {
    title: 'Fire Operation System',
    description:
      'Automatic fire emergency mode that sends the elevator to the designated evacuation floor and keeps doors open for firefighter access.',
  },
];

export const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management Systems',
  },
  {
    name: 'ISO 14001:2015',
    description: 'Environmental Management Systems',
  },
  {
    name: 'ISO 45001:2018',
    description: 'Occupational Health & Safety',
  },
  {
    name: 'CE Marking',
    description: 'European Conformity Standards',
  },
  {
    name: 'BIS Certification',
    description: 'Bureau of Indian Standards',
  },
  {
    name: 'TUV Rheinland',
    description: 'German Technical Inspection',
  },
];

export const contact = {
  address: {
    line1: 'Elvitra House, MIDC Industrial Area',
    line2: 'Andheri East, Mumbai – 400093',
    country: 'Maharashtra, India',
  },
  phone: [
    { label: 'Sales', number: '+91 22 6789 1000' },
    { label: 'Service', number: '+91 22 6789 2000' },
    { label: 'Toll Free', number: '1800-123-ELVITRA' },
  ],
  email: [
    { label: 'General', address: 'info@elvitra.com' },
    { label: 'Sales', address: 'sales@elvitra.com' },
    { label: 'Support', address: 'support@elvitra.com' },
  ],
  hours: '24/7 Emergency Support · Mon–Sat: 9:00 AM – 6:00 PM',
  social: {
    linkedin: '#',
    facebook: '#',
    instagram: '#',
    youtube: '#',
  },
};

export const stats = [
  { value: '2000+', label: 'Projects Delivered' },
  { value: '500+', label: 'Skilled Professionals' },
  { value: '15+', label: 'Countries Served' },
  { value: '99.7%', label: 'Service Uptime' },
];

export const features = [
  {
    title: 'Energy Efficient',
    description:
      'Our elevators feature regenerative drives and LED lighting to reduce energy consumption by up to 40%.',
    icon: 'Zap',
  },
  {
    title: 'Smart Controls',
    description:
      'Destination dispatch and AI-powered traffic management systems optimize wait times and building flow.',
    icon: 'Cpu',
  },
  {
    title: 'Premium Cabins',
    description:
      'Custom-designed interiors with premium materials, ambient lighting, and elegant finishes.',
    icon: 'Gem',
  },
  {
    title: 'Global Standards',
    description:
      'All elevators comply with international safety codes including EN 81, ASME A17.1, and IS 14665.',
    icon: 'Globe',
  },
];
