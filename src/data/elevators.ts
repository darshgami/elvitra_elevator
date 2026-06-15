export interface Elevator {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  overview: string
  useCases: string[]
  features: { title: string; description: string }[]
  applications: { title: string; description: string }[]
  specifications: {
    capacity: string
    speed: string
    travel: string
    operation: string
    doorType: string
    driveSystem: string
    powerRequirement: string
    machineType: string
  }
  safetyFeatures: string[]
  faqs: { question: string; answer: string }[]
  galleryImages: string[]
  icon: string
  color: string
  category: 'passenger' | 'residential' | 'commercial' | 'industrial'
}

export function getElevatorBySlug(slug: string): Elevator | undefined {
  return elevators.find((e) => e.slug === slug)
}

export const elevators: Elevator[] = [
  {
    id: 'passenger',
    slug: 'passenger-elevator',
    title: 'Passenger Elevators',
    subtitle: 'Smooth. Silent. Sophisticated.',
    description:
      'Engineered for comfortable and efficient passenger movement in residential and commercial buildings. Our passenger elevators combine sleek design, quiet operation, and advanced control systems for an unparalleled riding experience.',
    overview:
      'Elvitra passenger elevators are the culmination of decades of engineering expertise, delivering exceptional ride quality, energy efficiency, and reliability across a wide range of building types. From mid-rise apartments to high-rise corporate towers, our passenger elevators feature precision-engineered components, intelligent control systems, and customizable cabin designs.',
    useCases: [
      'High-speed transportation in residential apartment complexes',
      'Efficient people-moving in corporate office buildings',
      'Passenger conveyance in hotels, hospitals, and institutions',
      'Integration into mixed-use developments',
    ],
    features: [
      { title: 'Smooth Acceleration & Deceleration', description: 'Advanced VVVF drive technology ensures jerk-free starts and stops for a consistently comfortable ride.' },
      { title: 'Energy-Efficient VVVF Drives', description: 'Variable Voltage Variable Frequency drives reduce energy usage by up to 40% compared to conventional systems.' },
      { title: 'Microprocessor-Based Controls', description: 'Intelligent 32-bit microprocessor controllers manage all elevator functions with precision.' },
      { title: 'Emergency Communication Systems', description: 'Multi-channel emergency communication with two-way intercom and auto-dialer.' },
      { title: 'Automatic Rescue Device', description: 'Battery-powered system that safely moves the elevator to the nearest floor during power failure.' },
      { title: 'Aesthetic Cabin Designs', description: 'Fully customizable cabin interiors with premium finishes, mirrors, and LED lighting.' },
    ],
    applications: [
      { title: 'Residential Apartments', description: 'Quiet, smooth-riding elevators for daily use in multi-story apartment buildings.' },
      { title: 'Corporate Offices', description: 'High-speed elevators with destination dispatch for optimized traffic flow.' },
      { title: 'Hotels & Hospitality', description: 'Luxury elevators with premium finishes and whisper-quiet operation.' },
      { title: 'Government & Institutional', description: 'Compliant, accessible elevators meeting all building codes.' },
    ],
    specifications: {
      capacity: '630 kg – 2500 kg',
      speed: '1.0 m/s – 4.0 m/s',
      travel: 'Up to 60 floors',
      operation: 'Microprocessor-controlled',
      doorType: 'Automatic telescopic / centre-opening',
      driveSystem: 'VVVF (Variable Voltage Variable Frequency)',
      powerRequirement: '3-phase, 415V ± 10%, 50Hz',
      machineType: 'Geared / Gearless',
    },
    safetyFeatures: [
      'Overspeed governor with dual safety brakes',
      'Infrared light curtain door protection',
      'Emergency two-way intercom with auto-dialer',
      'Automatic rescue device with battery backup',
      'Overload sensor with audio-visual alarm',
      'Fire emergency operation mode',
    ],
    faqs: [
      { question: 'What is the typical installation timeline?', answer: 'The installation timeline ranges from 6 to 12 weeks from delivery, depending on building height and complexity.' },
      { question: 'Can I customize the cabin interior design?', answer: 'Absolutely. We offer extensive customization including laminate finishes, stainless steel panels, decorative ceilings, and LED lighting.' },
    ],
    galleryImages: [
      'Modern stainless steel cabin with ambient cove lighting',
      'Touch-screen destination dispatch panel in a marble-floored lobby',
      'High-rise passenger elevator machine room with gearless motor',
    ],
    icon: 'ArrowUpDown',
    color: '#c9a84c',
    category: 'passenger',
  },
  {
    id: 'hospital',
    slug: 'hospital-elevator',
    title: 'Hospital Elevators',
    subtitle: 'Precision for Critical Care',
    description:
      'Designed specifically for healthcare facilities, our hospital elevators ensure smooth, vibration-free transportation of patients, medical staff, and equipment. Built to meet stringent medical facility standards with emergency prioritization features.',
    overview:
      'In healthcare environments, elevator reliability is critical to patient care. Elvitra hospital elevators provide exceptionally smooth, vibration-free travel that protects sensitive patients and equipment. With extra-wide doors for stretcher access, emergency priority recall, and antimicrobial surfaces, these elevators are purpose-built for medical facilities.',
    useCases: [
      'Patient and stretcher transport in multi-specialty hospitals',
      'Staff and equipment movement in surgical wings and ICUs',
      'Emergency response prioritization with hospital code integration',
      'Pharmacy and lab sample logistics within medical complexes',
    ],
    features: [
      { title: 'Vibration-Free Operation', description: 'Precision guide rails and advanced roller guides eliminate vibrations for sensitive patient transport.' },
      { title: 'Emergency Medical Prioritization', description: 'Dedicated emergency switch with priority dispatch for critical patient transport.' },
      { title: 'Extra-Wide Doors for Stretcher Access', description: 'Hospital-grade doors with 1100–1400 mm clear openings for unobstructed bed passage.' },
      { title: 'Backup Power Integration', description: 'Seamless integration with hospital DG sets and UPS for continuous operation.' },
      { title: 'Hospital-Grade Hygiene Materials', description: 'Antimicrobial surfaces and non-porous materials that resist bacterial growth.' },
      { title: 'Emergency Communication Systems', description: 'Direct two-way communication with hospital central monitoring stations.' },
    ],
    applications: [
      { title: 'Multi-Specialty Hospitals', description: 'Large-capacity elevators with bed-stretcher compatibility and emergency override.' },
      { title: 'Surgical Wards & ICUs', description: 'Vibration-minimized elevators with precision leveling for sensitive equipment transport.' },
      { title: 'Diagnostic Centers', description: 'Elevators with extra-wide openings for MRI and CT scanners.' },
      { title: 'Nursing Homes & Rehab Centers', description: 'Patient-friendly elevators with wheelchair-accessible controls and slow-start acceleration.' },
    ],
    specifications: {
      capacity: '1600 kg – 2500 kg',
      speed: '1.0 m/s – 2.5 m/s',
      travel: 'Up to 30 floors',
      operation: 'Fully automatic with emergency override',
      doorType: 'Extra-wide automatic centre-opening',
      driveSystem: 'VVVF with closed-loop control',
      powerRequirement: '3-phase, 415V ± 10%, 50Hz',
      machineType: 'Gearless permanent magnet',
    },
    safetyFeatures: [
      'Overspeed governor with progressive safety gear',
      'Hospital-grade door light curtain with 190 beams',
      'Emergency battery lowering with floor-leveling',
      'Stretcher-securing brackets and wheelchair restraints',
      'Code blue emergency recall and priority dispatch',
      'Firefighter operation mode with smoke sensors',
    ],
    faqs: [
      { question: 'How do hospital elevators differ from standard passenger elevators?', answer: 'Hospital elevators have stricter vibration limits, wider doors for bed access, emergency recall systems tied to hospital codes, and antimicrobial surfaces.' },
      { question: 'Can the elevator be integrated with existing hospital systems?', answer: 'Yes. Our hospital elevators integrate with nurse call systems, fire alarm panels, and building management systems.' },
    ],
    galleryImages: [
      'Spacious hospital elevator cabin with stretcher and IV hook points',
      'Antimicrobial stainless steel control panel with Braille',
      'Extra-wide door opening with full-height infrared light curtain',
    ],
    icon: 'Building2',
    color: '#3b82f6',
    category: 'commercial',
  },
  {
    id: 'home',
    slug: 'home-lift',
    title: 'Home Lifts',
    subtitle: 'Luxury at Every Level',
    description:
      'Redefining residential mobility with elegant, space-efficient home lifts that blend seamlessly with your interior design. Compact yet luxurious, our home lifts offer the ultimate convenience for modern living.',
    overview:
      'Elvitra home lifts bring vertical mobility to private residences without requiring major structural modifications. Our compact, machine-room-less designs fit within a small footprint and can be installed in existing homes as easily as new constructions. With customizable interiors, whisper-quiet operation, and family-focused safety features, our home lifts transform multi-story living.',
    useCases: [
      'Aging-in-place accessibility for elderly family members',
      'Luxury convenience for moving groceries and luggage between floors',
      'Multi-generational homes where family members occupy different levels',
      'Premium villa installations requiring discreet architectural integration',
    ],
    features: [
      { title: 'Compact Machine-Room-Less Design', description: 'All mechanical components housed within the shaft, eliminating the need for a separate machine room.' },
      { title: 'Customizable Cabin Interiors', description: 'Choose from hundreds of finishes, wood veneers, mirror configurations, and LED lighting options.' },
      { title: 'Low Maintenance Requirements', description: 'Belt-driven systems reduce moving parts by 60% for fewer service interventions.' },
      { title: 'Quiet and Smooth Operation', description: 'Sound-dampened components ensure noise levels below 45 dB.' },
      { title: 'Power Backup Included', description: 'Integrated battery backup provides automatic power failure operation.' },
      { title: 'Safety Sensors and Alarms', description: 'Full suite of safety features including door sensors, emergency alarm, and child lock.' },
    ],
    applications: [
      { title: 'Private Residences & Villas', description: 'Elegant home lifts designed to blend with interior aesthetics of luxury homes.' },
      { title: 'Senior Living & Accessibility', description: 'Home lifts with wider doors and accessible controls for elderly users.' },
      { title: 'Townhouses & Duplex Apartments', description: 'Compact home lifts for installation within existing townhouse footprints.' },
      { title: 'New Construction Residential', description: 'Pre-planned home lift integration in new residential projects.' },
    ],
    specifications: {
      capacity: '250 kg – 450 kg',
      speed: '0.3 m/s – 0.5 m/s',
      travel: 'Up to 6 floors',
      operation: 'Simple push-button control',
      doorType: 'Manual swing / automatic sliding',
      driveSystem: 'Screw-driven / hydraulic chain',
      powerRequirement: 'Single-phase, 230V, 50Hz',
      machineType: 'Machine-room-less (MRL)',
    },
    safetyFeatures: [
      'Manual lowering valve',
      'Battery-powered emergency descent',
      'Door interlocks',
      'Overload sensor',
      'Emergency alarm',
      'Phone connectivity',
    ],
    faqs: [
      { question: 'Can a home lift be installed in an existing house?', answer: 'Yes. Our home lifts are designed for retrofit installation with minimal structural changes.' },
      { question: 'How much space is needed for a home lift?', answer: 'Our compact home lifts require a shaft footprint as small as 800 mm x 800 mm.' },
    ],
    galleryImages: [
      'Elegant home lift with mahogany wood paneling and crystal pendant light',
      'Compact through-floor home lift installation in a modern townhouse',
      'Accessibility-focused home lift with foldable seat and grab bars',
    ],
    icon: 'Home',
    color: '#10b981',
    category: 'residential',
  },
  {
    id: 'freight',
    slug: 'freight-elevator',
    title: 'Freight Elevators',
    subtitle: 'Built for Heavy Loads',
    description:
      'Heavy-duty freight elevators engineered for industrial and commercial applications. Built to transport goods, equipment, and materials with maximum durability, reliability, and safety.',
    overview:
      'Elvitra freight elevators are engineered to withstand the rigors of daily heavy-load operations. From warehouses and factories to shopping malls and logistics centers, our freight elevators feature reinforced cabin construction, industrial-grade door systems, and high-capacity drive trains for reliable performance under demanding conditions.',
    useCases: [
      'Transporting palletized goods in warehouses and distribution centers',
      'Moving heavy machinery in manufacturing facilities',
      'Loading inventory between retail floors and storage areas',
      'Vehicle and equipment transportation in service centers',
    ],
    features: [
      { title: 'High Load-Bearing Capacity', description: 'Reinforced platform structures support loads from 1000 kg to 10,000 kg without structural fatigue.' },
      { title: 'Reinforced Cabin Construction', description: 'Welded steel frame with impact-resistant panels and diamond-plate steel flooring.' },
      { title: 'Industrial-Grade Doors', description: 'Heavy-duty vertical bi-parting doors from 16-gauge steel with impact-rated panels.' },
      { title: 'Advanced Safety Mechanisms', description: 'Multiple redundant safety systems including overspeed governors and slack rope detectors.' },
      { title: 'Weather-Resistant Options', description: 'External models with weather-sealed enclosures and corrosion-resistant construction.' },
      { title: 'Customizable Platform Sizes', description: 'Platform dimensions customized for pallet jacks, forklifts, and machinery skids.' },
    ],
    applications: [
      { title: 'Warehouses & Distribution Centers', description: 'High-capacity elevators for continuous operation in high-throughput logistics environments.' },
      { title: 'Manufacturing Facilities', description: 'Industrial-grade elevators with fork-truck rated flooring and shock-resistant construction.' },
      { title: 'Retail & Shopping Malls', description: 'Service elevators for back-of-house operations with large platform sizes.' },
      { title: 'Parking Structures & Service Centers', description: 'Vehicle-rated elevators with non-slip platforms and integrated wheel chocks.' },
    ],
    specifications: {
      capacity: '1000 kg – 10000 kg',
      speed: '0.3 m/s – 1.5 m/s',
      travel: 'Up to 20 floors',
      operation: 'Heavy-duty industrial control',
      doorType: 'Vertical bi-parting / horizontal sliding',
      driveSystem: 'Hydraulic / geared traction',
      powerRequirement: '3-phase, 415V / 690V, 50Hz',
      machineType: 'Geared / hydraulic',
    },
    safetyFeatures: [
      'Overload protection system',
      'Emergency stop controls',
      'Door interlocks',
      'Safety buffers',
      'Emergency lowering',
      'Audible movement alarm',
    ],
    faqs: [
      { question: 'What types of goods can a freight elevator handle?', answer: 'Our freight elevators handle palletized inventory, machinery, construction materials, vehicles, and bulk raw materials.' },
      { question: 'Can a freight elevator be operated manually?', answer: 'Yes. All our freight elevators include manual operation modes for maintenance and emergencies.' },
    ],
    galleryImages: [
      'Industrial freight elevator with diamond-plate steel flooring',
      'Fork-truck loading palletized shipment inside a large-capacity platform',
      'Weather-resistant external freight elevator with galvanized steel construction',
    ],
    icon: 'Truck',
    color: '#f59e0b',
    category: 'industrial',
  },
  {
    id: 'hydraulic',
    slug: 'hydraulic-elevator',
    title: 'Hydraulic Elevators',
    subtitle: 'Power Through Precision',
    description:
      'Robust hydraulic elevator systems ideal for low to mid-rise buildings. Known for their reliability, smooth operation, and cost-effectiveness, our hydraulic elevators are built to perform.',
    overview:
      'Elvitra hydraulic elevators offer proven technology with exceptional reliability and cost-effectiveness for low to mid-rise applications. Operating on hydraulic fluid pressure, these elevators provide smooth, powerful lifting with inherent overload protection. Ideal for buildings up to six floors with a lower initial investment than traction elevators.',
    useCases: [
      'Low-rise commercial buildings requiring reliable elevator service',
      'Warehouses needing heavy load movement between ground and mezzanine levels',
      'Parking garages requiring elevator access between decks',
      'Shopping centers where column-free shafts simplify planning',
    ],
    features: [
      { title: 'Smooth and Quiet Operation', description: 'Hydraulic operation provides naturally smooth acceleration with minimal mechanical noise.' },
      { title: 'High Reliability with Low Maintenance', description: 'Simple hydraulic-mechanical design with fewer moving parts for exceptional reliability.' },
      { title: 'Overload Protection System', description: 'Inherent hydraulic overload protection prevents operation when weight limits are exceeded.' },
      { title: 'Emergency Manual Lowering', description: 'Built-in hand-pump and release valve for safe manual descent during power failure.' },
      { title: 'Suitable for Low-Rise Buildings', description: 'Optimized for buildings up to 6 floors with travel up to 18 meters.' },
      { title: 'Cost-Effective Solution', description: 'Lower equipment cost and simplified installation make hydraulic the budget-friendly choice.' },
    ],
    applications: [
      { title: 'Low-Rise Commercial Buildings', description: 'Cost-effective hydraulic elevators for 2–6 story office buildings and clinics.' },
      { title: 'Warehouses & Industrial Facilities', description: 'Heavy-duty hydraulic elevators with capacities up to 5000 kg.' },
      { title: 'Parking Structures', description: 'Vehicle-rated elevators with non-slip platforms and weather-resistant construction.' },
      { title: 'Shopping Centers & Malls', description: 'Passenger-rated hydraulic elevators with attractive cabin finishes at competitive pricing.' },
    ],
    specifications: {
      capacity: '630 kg – 2500 kg',
      speed: '0.5 m/s – 1.0 m/s',
      travel: 'Up to 6 floors',
      operation: 'Hydraulic power unit',
      doorType: 'Automatic centre-opening',
      driveSystem: 'Direct hydraulic / rope hydraulic',
      powerRequirement: '3-phase, 415V, 50Hz',
      machineType: 'Hydraulic power unit',
    },
    safetyFeatures: [
      'Burst valve protection',
      'Manual emergency lowering',
      'Hydraulic lock valve',
      'Overload detection',
      'Emergency intercom',
      'Door safety edge',
    ],
    faqs: [
      { question: 'What is the maximum travel distance for a hydraulic elevator?', answer: 'Hydraulic elevators are typically limited to travel distances of 18 meters (approximately 6 floors).' },
      { question: 'How does a hydraulic elevator handle power outages?', answer: 'All our hydraulic elevators include a manual emergency lowering system with a built-in hand-pump.' },
    ],
    galleryImages: [
      'Hydraulic power unit in a ground-level machine room',
      'Hydraulic elevator cabin in a shopping center with glass panels',
      'Vehicle-rated hydraulic elevator in a parking structure',
    ],
    icon: 'Gauge',
    color: '#ef4444',
    category: 'industrial',
  },
  {
    id: 'capsule',
    slug: 'capsule-elevator',
    title: 'Capsule Elevators',
    subtitle: 'Panoramic Perfection',
    description:
      'Stunning capsule elevators with transparent cabins that offer panoramic views. Designed for premium hotels, shopping malls, and luxury buildings where aesthetics meet functionality.',
    overview:
      'Elvitra capsule elevators transform vertical transportation into an experience. Featuring transparent cabins constructed with laminated safety glass and structural steel, these panoramic elevators offer breathtaking views of atriums and surroundings. Designed for landmark buildings, luxury hotels, and iconic commercial spaces, capsule elevators serve as both transportation and architectural statement.',
    useCases: [
      'Hotel atriums where the elevator becomes an architectural centerpiece',
      'Premium shopping malls offering shoppers an engaging vertical experience',
      'Corporate headquarters showcasing modern design and transparency',
      'Luxury residential towers with panoramic views during transit',
    ],
    features: [
      { title: 'Transparent Panoramic Cabin', description: 'Laminated safety glass construction with 180-degree to 360-degree unobstructed views.' },
      { title: 'Architectural Lighting Integration', description: 'Programmable RGB LED systems in handrails and ceilings for customizable ambiance.' },
      { title: 'Premium Glass and Steel Construction', description: 'Aesthetic-grade stainless steel and heat-strengthened laminated safety glass.' },
      { title: 'Smooth and Silent Travel', description: 'Premium gearless permanent magnet drive with anti-vibration mountings.' },
      { title: 'Customizable LED Ambiance', description: 'Full-color LED lighting with mood-based scenarios controllable via BMS.' },
      { title: 'Anti-Glare Treated Glass', description: 'Anti-reflective coating ensuring clear outward visibility and reduced eye strain.' },
    ],
    applications: [
      { title: 'Hotels & Resorts', description: 'Panoramic elevators in hotel atriums offering spectacular guest views.' },
      { title: 'Shopping Malls & Retail Centers', description: 'Multi-stop capsule elevators connecting retail floors in atrium spaces.' },
      { title: 'Iconic Commercial Buildings', description: 'Statement elevators creating a modern, transparent aesthetic.' },
      { title: 'Luxury Residential Towers', description: 'Private capsule elevators with panoramic city or landscape views.' },
    ],
    specifications: {
      capacity: '450 kg – 1600 kg',
      speed: '1.0 m/s – 2.5 m/s',
      travel: 'Up to 30 floors',
      operation: 'Microprocessor-controlled',
      doorType: 'Automatic curved sliding',
      driveSystem: 'Gearless permanent magnet',
      powerRequirement: '3-phase, 415V, 50Hz',
      machineType: 'Gearless MRL',
    },
    safetyFeatures: [
      'Laminated safety glass',
      'Tempered glass certification',
      'Emergency brake system',
      'Door sensors',
      'Backup power',
      'Fire-rated glass option',
    ],
    faqs: [
      { question: 'How is the glass cabin maintained and cleaned?', answer: 'Glass panels are treated with anti-static and hydrophobic coatings that reduce dust accumulation.' },
      { question: 'Is the glass used in capsule elevators safe?', answer: 'All glass panels are heat-strengthened laminated safety glass meeting global impact standards.' },
    ],
    galleryImages: [
      'Curved glass capsule elevator in a luxury hotel atrium',
      'Floor-to-ceiling transparent capsule on an external facade',
      'Fiber-optic star ceiling and RGB LED handrails in a capsule cabin',
    ],
    icon: 'Eye',
    color: '#8b5cf6',
    category: 'commercial',
  },
  {
    id: 'mrl',
    slug: 'mrl-elevator',
    title: 'MRL Elevators',
    subtitle: 'Space-Saving Innovation',
    description:
      'Machine-Room-Less (MRL) elevators represent the pinnacle of elevator technology. Compact, energy-efficient, and environmentally friendly, our MRL elevators eliminate the need for a separate machine room, saving valuable building space.',
    overview:
      'Elvitra MRL elevators integrate the drive system, controller, and machine within the hoistway itself, eliminating the need for a dedicated machine room. Using gearless permanent magnet synchronous motors, they deliver smooth, quiet operation with minimal energy consumption and regenerative drive technology that feeds energy back into the building grid.',
    useCases: [
      'New commercial buildings optimizing floor area for rental revenue',
      'Mid to high-rise residential towers requiring efficient space utilization',
      'Building retrofits repurposing existing machine room space',
      'Environmentally certified projects seeking LEED or IGBC points',
    ],
    features: [
      { title: 'No Machine Room Required', description: 'Drive system and controller integrated within the hoistway, saving valuable building space.' },
      { title: 'Energy-Efficient Regenerative Drive', description: 'Regenerative technology feeds energy back into the building grid, reducing power consumption.' },
      { title: 'Compact Overhead Design', description: 'Reduced overhead clearance allows for additional floors within the same building height.' },
      { title: 'Reduced Construction Costs', description: 'Elimination of machine room reduces structural steel, concrete, and construction labor costs.' },
      { title: 'Environmentally Friendly Operation', description: 'Energy-efficient drives and LED lighting minimize environmental impact.' },
      { title: 'Advanced Destination Control', description: 'Intelligent dispatch system optimizes traffic flow and reduces wait times.' },
    ],
    applications: [
      { title: 'Commercial Office Buildings', description: 'MRL elevators freeing up premium penthouse space for executive offices.' },
      { title: 'Residential Towers', description: 'Space-efficient MRL elevators allowing additional floors within the same building height.' },
      { title: 'Retrofit & Modernization Projects', description: 'MRL replacements in existing buildings with existing machine room conversion.' },
      { title: 'Green Buildings & Certified Projects', description: 'MRL elevators contributing to LEED and IGBC certification points.' },
    ],
    specifications: {
      capacity: '630 kg – 1600 kg',
      speed: '1.0 m/s – 2.5 m/s',
      travel: 'Up to 40 floors',
      operation: 'Gearless permanent magnet motor',
      doorType: 'Automatic centre-opening',
      driveSystem: 'Regenerative VVVF drive',
      powerRequirement: '3-phase, 415V, 50Hz',
      machineType: 'Gearless PMSG (Permanent Magnet Synchronous)',
    },
    safetyFeatures: [
      'Regenerative braking',
      'Automatic rescue device',
      'Door light curtain',
      'Emergency communication',
      'Fire recall mode',
      'Remote monitoring',
    ],
    faqs: [
      { question: 'What is the advantage of MRL over traditional elevators?', answer: 'MRL elevators eliminate the machine room, reduce energy consumption by up to 40%, and allow more floors within the same building height.' },
      { question: 'Can MRL elevators be installed in existing buildings?', answer: 'Yes, MRL elevators are ideal for retrofits as they can be installed within existing shafts with minimal structural modification.' },
    ],
    galleryImages: [
      'Compact MRL drive system integrated within the hoistway',
      'Modern MRL elevator cabin with stainless steel and glass finishes',
      'Regenerative drive unit showing energy recovery specifications',
    ],
    icon: 'Box',
    color: '#06b6d4',
    category: 'commercial',
  },
  {
    id: 'goods',
    slug: 'goods-lift',
    title: 'Goods Lifts',
    subtitle: 'Efficient Material Handling',
    description:
      'Designed for efficient movement of goods in warehouses, factories, and commercial establishments. Our goods lifts combine rugged construction with reliable performance for daily heavy-duty use.',
    overview:
      'Elvitra goods lifts are designed for efficient material handling in warehouses, factories, and commercial establishments. Combining rugged construction with reliable performance, these lifts feature durable platform construction, flexible control options, and comprehensive safety systems for daily heavy-duty use.',
    useCases: [
      'Moving inventory and supplies in warehouse facilities',
      'Transporting materials between floors in manufacturing plants',
      'Food and beverage logistics in restaurant and hospitality back-of-house',
      'Storage and retrieval operations in retail and commercial facilities',
    ],
    features: [
      { title: 'Durable Platform Construction', description: 'Heavy-duty steel platform with anti-skid surface designed for continuous daily use.' },
      { title: 'Manual or Automatic Operation', description: 'Flexible control options including push-button, key-switch, or pull-cord operation.' },
      { title: 'Safety Gates and Interlocks', description: 'Mechanical and electrical interlock systems preventing operation when gates are open.' },
      { title: 'Weather-Resistant Options', description: 'External installations available with weather-sealed electrical and corrosion-resistant finishes.' },
      { title: 'Low Maintenance Design', description: 'Simplified mechanical design with easily accessible components for reduced downtime.' },
      { title: 'Customizable Load Capacities', description: 'Platform sizes and capacities tailored to specific material handling requirements.' },
    ],
    applications: [
      { title: 'Warehouses', description: 'Efficient goods lifts for moving inventory between storage levels.' },
      { title: 'Factories', description: 'Durable lifts for transporting materials and finished goods between production floors.' },
      { title: 'Restaurants', description: 'Service lifts for moving food and supplies between kitchen and storage levels.' },
      { title: 'Retail Back-of-House', description: 'Goods lifts for receiving and distributing inventory in retail establishments.' },
    ],
    specifications: {
      capacity: '500 kg – 5000 kg',
      speed: '0.3 m/s – 1.0 m/s',
      travel: 'Up to 15 floors',
      operation: 'Push-button or key-switch control',
      doorType: 'Vertical bi-parting / mesh gate',
      driveSystem: 'Chain-drive / direct hydraulic',
      powerRequirement: '3-phase, 415V, 50Hz',
      machineType: 'Geared / hydraulic',
    },
    safetyFeatures: [
      'Mechanical door interlocks',
      'Overload alarm',
      'Emergency stop',
      'Platform edge sensors',
      'Manual lowering valve',
      'Safety gate switches',
    ],
    faqs: [
      { question: 'What is the difference between a goods lift and a freight elevator?', answer: 'Goods lifts are generally smaller platforms (500 kg to 5000 kg) for hand-loaded goods, while freight elevators handle heavier loads with fork-truck loading.' },
      { question: 'Can goods lifts be operated without a dedicated operator?', answer: 'Yes, goods lifts feature simple push-button operation suitable for staff without specialized training.' },
    ],
    galleryImages: [
      'Goods lift with mesh gate and wall-mounted controls',
      'Durable platform construction with anti-skid steel flooring',
      'Goods lift installation in a warehouse with safety gate system',
    ],
    icon: 'Package',
    color: '#84cc16',
    category: 'industrial',
  },
]
