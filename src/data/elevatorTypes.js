export const elevatorTypes = [
  {
    id: 1,
    name: 'Passenger Elevator — Automatic Door',
    slug: 'passenger-auto',
    tagline: 'Seamless Vertical Mobility',
    description: 'Full automatic doors with center opening and telescopic opening options. Designed for high-speed, smooth travel with perfect leveling. Multi-elevator grouping capability for high-density buildings ensures maximum efficiency.',
    features: [
      'Center Opening & Telescopic Opening doors',
      'High speed, smooth travel, perfect leveling',
      'Multi-elevator grouping for high-density buildings',
      'Jerk-less travel, low power consumption',
      'Advanced microprocessor controller',
      'Emergency rescue device with battery backup'
    ],
    specs: {
      speed: 'Up to 2.5 m/s',
      capacity: '6 to 20 persons (408–1360 kg)',
      liftWell: '1900–2500mm width',
      machineRoom: 'Available',
      pitDepth: '1600mm',
      overhead: '4800mm (up to 1.5 m/s)'
    },
    capacities: ['6 persons (408 kg)', '8 persons (544 kg)', '10 persons (680 kg)', '13 persons (884 kg)', '16 persons (1088 kg)', '20 persons (1360 kg)'],
    icon: 'DoorOpen'
  },
  {
    id: 2,
    name: 'Passenger Elevator — Manual Door',
    slug: 'passenger-manual',
    tagline: 'Reliable Performance, Proven Design',
    description: 'Handles all building traffic conditions with renowned quality and robust performance. Maximum lifting power with minimum effort. Jerk-less travel with economical power consumption — 100% safe to use and maintain.',
    features: [
      'Handles all building traffic conditions',
      'Renowned quality and robust performance',
      'Maximum lifting power with minimum effort',
      'Jerk-less travel, economical power consumption',
      '100% safe to use and maintain',
      'Collapsible gate design for easy operation'
    ],
    specs: {
      speed: 'Up to 1 m/s',
      capacity: '4 to 15 persons (272–1020 kg)',
      pitDepth: '1600mm',
      overhead: '4800mm',
      machineRoom: 'Required',
      liftWell: 'As per capacity'
    },
    capacities: ['4 persons (272 kg)', '6 persons (408 kg)', '8 persons (544 kg)', '10 persons (680 kg)', '13 persons (884 kg)', '15 persons (1020 kg)'],
    icon: 'DoorClosed'
  },
  {
    id: 3,
    name: 'Capsule Elevator',
    slug: 'capsule',
    tagline: 'Ultra-Modern Cosmic Experience',
    description: 'Experience the ultra-modern cosmic zone with our capsule elevators. Extremely silent operation with reliable and economical maintenance. VVVF Close Loop Microprocessor Controller with variable speed AC VVVF drive for jerk-free operation.',
    features: [
      'Ultra-modern cosmic zone experience',
      'Extremely silent operation',
      'Reliable and economical with minimum maintenance',
      'VVVF Close Loop Microprocessor Controller',
      'S.S./M.S. construction with vision panel',
      'Color-powder coated, elegant, light weight',
      'Variable speed AC VVVF drive for jerk-free operation',
      'Overload indication and auto door announcing system',
      'Inverter backup for power failure',
      'Luminous push buttons',
      'Floor position indication inside cabin and at landings'
    ],
    specs: {
      capacity: '10–16 persons',
      pitDepth: '1800mm',
      overhead: '4800mm',
      controller: 'VVVF Close Loop Microprocessor',
      drive: 'Variable Speed AC VVVF',
      construction: 'S.S./M.S. with vision panel'
    },
    capacities: ['10 persons', '13 persons', '16 persons'],
    icon: 'Gem'
  },
  {
    id: 4,
    name: 'Hospital Elevator',
    slug: 'hospital',
    tagline: 'Precision Care in Motion',
    description: 'Designed for shifting persons from OT to ICU with equipment. Accommodates stretchers, OT beds, attendees and equipment. Available in 3 sizes to meet every hospital requirement.',
    features: [
      'Designed for OT to ICU patient transfer',
      'Accommodates stretchers, OT beds & equipment',
      'Available in 3 sizes: 15, 20, 26 passengers',
      'Wide entrance for stretcher access',
      'Smooth ride for patient comfort',
      'Emergency priority calling system'
    ],
    specs: {
      capacity: '15, 20, or 26 passengers',
      carInside: '1000–1600mm (W) × 2400mm (D)',
      liftWell: '1800–2400mm (W) × 3000mm (D)',
      entrance: '900–1200mm',
      pitDepth: '1600mm',
      overhead: '4400mm'
    },
    capacities: ['15 persons — stretcher + 2 persons', '20 persons — OT bed + attendees + equipment', '26 persons — full OT bed setup'],
    icon: 'HeartPulse'
  },
  {
    id: 5,
    name: 'Home & Bungalow Elevator',
    slug: 'home-bungalow',
    tagline: 'Luxury Living, Vertical Freedom',
    description: 'Vertical mobility for public and private buildings. Ideal for elderly and mobility-impaired persons. Operates from garage to roof — up to 4 floors. Noiseless and easy to install with minimal space requirement.',
    features: [
      'Ideal for elderly and mobility-impaired persons',
      'Operates from garage to roof — up to 4 floors',
      'Noiseless and easy to install',
      'Requires minimal space',
      '1-Year warranty included',
      'Elegant residential design'
    ],
    specs: {
      speed: '0.5 m/s',
      capacity: '300 Kg',
      maxTravel: '15 Mts',
      startsPerDay: '100',
      pitDepth: '550mm',
      overhead: '3100mm',
      power: 'RPM 120 | 12 Hz | 230 Vac | 0.75 KW'
    },
    capacities: ['300 Kg (up to 4 persons)'],
    icon: 'Home'
  },
  {
    id: 6,
    name: 'MRL Elevator (Machine Roomless)',
    slug: 'mrl',
    tagline: 'Space-Smart Engineering',
    description: 'Saves 25% electricity vs gear-wheel elevators and 10% construction area. Environment-friendly with no machine room required — saves space for modern construction. Combined hoist-way and machine design.',
    features: [
      'Saves 25% electricity vs gear-wheel elevators',
      'Saves 10% construction area',
      'Environment-friendly culture',
      'No machine room required',
      'Combined hoist-way and machine design',
      'Modern space-saving construction'
    ],
    specs: {
      capacity: '6–13 persons (408–884 kg)',
      speed: 'Up to 1.5 m/s',
      hoistWay: '1800–2400mm (W) × 1800–2350mm (D)',
      pitDepth: '1600mm',
      overhead: '5100–7000mm',
      machineRoom: 'Not Required'
    },
    capacities: ['6 persons (408 kg)', '8 persons (544 kg)', '10 persons (680 kg)', '13 persons (884 kg)'],
    icon: 'Cpu'
  },
  {
    id: 7,
    name: 'Hydraulic Elevator',
    slug: 'hydraulic',
    tagline: 'Power Meets Precision',
    description: 'Advanced mechanical systems for substantial weight handling. Sophisticated control mechanisms for passenger operation. Comprehensive safety devices for smooth operation with piston-driven hydraulic lifting system.',
    features: [
      'Advanced mechanical systems for heavy loads',
      'Piston-driven hydraulic lifting system',
      'Guide rail and piston cylinder construction',
      'Sophisticated control mechanisms',
      'Comprehensive safety devices',
      'Smooth and silent operation'
    ],
    specs: {
      liftingSystem: 'Piston-driven hydraulic',
      construction: 'Guide rail and piston cylinder well',
      controlType: 'Advanced passenger operation',
      safety: 'Comprehensive safety devices',
      application: 'Commercial & luxury buildings'
    },
    capacities: ['Custom configurations available'],
    icon: 'Gauge'
  },
  {
    id: 8,
    name: 'Goods / Freight Elevator',
    slug: 'goods-freight',
    tagline: 'Built for Heavy Duty',
    description: 'All-steel construction for maximum durability. Structural steel channel frame floor with chequered anti-skid flooring. Designed for heavy industrial use with load capacities up to 5000 Kg.',
    features: [
      'All-steel construction for durability',
      'Structural steel channel frame floor',
      'Chequered anti-skid flooring',
      'Load capacity up to 5000 Kg',
      'Heavy-duty industrial design',
      'Reliable freight transportation'
    ],
    specs: {
      capacity: '500 Kg to 5000 Kg',
      carInside: '1100–2500mm (W) × 1200–3500mm (D)',
      liftWell: '1900–3400mm (W) × 1500–3900mm (D)',
      pitDepth: '1600mm',
      overhead: '4500mm',
      flooring: 'Chequered anti-skid'
    },
    capacities: ['500 Kg', '1000 Kg', '2000 Kg', '3000 Kg', '5000 Kg'],
    icon: 'Package'
  },
  {
    id: 9,
    name: 'Car / Automobile Elevator',
    slug: 'car-automobile',
    tagline: 'Drive to New Heights',
    description: 'Vertical transportation for cars and IMVs. Designed for industrial applications and car parks with maximum travel up to 100m and load capacity up to 3000 Kg.',
    features: [
      'Vertical transportation for cars and IMVs',
      'Industrial and car park applications',
      'Maximum travel up to 100m',
      'Heavy-duty platform design',
      'Aluminum/M.S. chequered plate flooring',
      'Duplex group configuration'
    ],
    specs: {
      maxTravel: '100m (higher travel available)',
      maxLoad: '500–3000 Kg (higher capacities available)',
      maxSpeed: '0.5 m/s (other speeds available)',
      maxGroupSize: 'Duplex',
      floor: 'Aluminum Chequered Plate / M.S. Chequered Plate'
    },
    capacities: ['500 Kg', '1000 Kg', '2000 Kg', '3000 Kg'],
    icon: 'Car'
  }
];

export default elevatorTypes;
