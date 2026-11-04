export interface Service {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  idealFor: string;
  iconName: string;
  image: string;
  popular?: boolean;
}

export interface Branch {
  id: string;
  name: string;
  tagline: string;
  landmark: string;
  address: string;
  city: string;
  phone: string;
  whatsapp: string;
  timings: string;
  mapEmbedUrl: string;
  mapDirectionUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  treatment: string;
  timeframe: string;
  summary: string;
  beforeImage: string;
  afterImage: string;
}

export const CLINIC_INFO = {
  name: "Dr. Syamgeeth Dental Studio & Smile Design Centre",
  shortName: "Dr. Syamgeeth Dental",
  tagline: "Your Healthiest, Most Confident Smile Starts Here",
  doctorName: "Dr. Syamgeeth B R",
  doctorTitle: "BDS | Aesthetic & Cosmetic Dentist | Digital Smile Specialist",
  doctorExperience: "10+ Years Clinical Excellence",
  patientCount: "12,000+",
  rating: 4.9,
  reviewCount: "850+",
  phone: "+91 81293 69627",
  phoneRaw: "+918129369627",
  whatsapp: "8129369627",
  instagram: "dr.syamgeeth",
  instagramUrl: "https://www.instagram.com/dr.syamgeeth/",
  email: "care@drsyamgeethdental.com",
  openingHours: "Mon – Sat: 9:30 AM – 7:30 PM | Sun: By Appointment Only",
  branches: [
    {
      id: "chathinamkulam",
      name: "Chathinamkulam Branch",
      tagline: "Main Smile Design & Laser Studio",
      landmark: "Near Mujahid Masjid",
      address: "Near Mujahid Masjid, Chathinamkulam, Kollam, Kerala 691005",
      city: "Kollam, Kerala",
      phone: "+91 81293 69627",
      whatsapp: "8129369627",
      timings: "9:30 AM – 7:00 PM (Mon - Sat)",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15749.697262078657!2d76.6025!3d8.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fdd5871f112b%3A0x6b8296a6d6e2e0e0!2sChathinamkulam%2C%20Kollam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000",
      mapDirectionUrl: "https://maps.google.com/?q=Chathinamkulam+Kollam+Kerala"
    },
    {
      id: "ezhukone",
      name: "Ezhukone Branch",
      tagline: "Advanced Dental Care & Implant Center",
      landmark: "Archana Building",
      address: "Archana Building, Ezhukone, Kollam, Kerala 691505",
      city: "Kollam, Kerala",
      phone: "+91 81293 69627",
      whatsapp: "8129369627",
      timings: "10:00 AM – 7:30 PM (Mon - Sat)",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.8745!2d76.712!3d8.995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06079d8412e87d%3A0xc3911b61c9447333!2sEzhukone%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000",
      mapDirectionUrl: "https://maps.google.com/?q=Archana+Building+Ezhukone+Kollam"
    }
  ] as Branch[]
};

export const SERVICES_DATA: Service[] = [
  {
    id: "cosmetic-smile-design",
    title: "Cosmetic Smile Makeovers & Veneers",
    subtitle: "Custom-crafted ultra-thin porcelain veneers & composite artistry",
    tag: "Signature Specialty",
    shortDesc: "Transform chipped, discolored, or uneven teeth into a harmonious, red-carpet smile with handcrafted porcelain laminates.",
    fullDesc: "Led personally by Dr. Syamgeeth B R, our boutique Digital Smile Design (DSD) analyzes facial symmetry, lip dynamics, and tooth proportion before placing bespoke ultra-thin porcelain veneers with minimal enamel preparation.",
    benefits: [
      "Natural translucency mimicking real dental enamel",
      "Stain-resistant porcelain engineered to last 15+ years",
      "Custom digital smile preview before touching any tooth",
      "Painless procedure with ultra-conservative preparation"
    ],
    duration: "2 - 3 visits (7-10 days)",
    idealFor: "Gaps, chipped teeth, stubborn stains, worn edges, and uneven teeth.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: "invisalign-clear-aligners",
    title: "Invisalign & Clear Aligners",
    subtitle: "Discreet orthodontic tooth alignment without metal brackets",
    tag: "Orthodontics",
    shortDesc: "Straighten crowded or spaced teeth invisibly with comfortable custom-fit removable transparent aligners.",
    fullDesc: "Say goodbye to traditional metal wires. Our computerized clear aligner therapy uses 3D intraoral scans to guide your teeth gently and predictably into perfect alignment while remaining practically invisible to others.",
    benefits: [
      "Nearly 100% invisible aligner trays",
      "Removable for effortless eating, brushing, and flossing",
      "No painful cuts or broken wires",
      "Predictable results visualized in 3D prior to treatment"
    ],
    duration: "6 - 14 months",
    idealFor: "Crowding, spacing, open bite, overbite, or relapse after past braces.",
    iconName: "Smile",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: "dental-implants",
    title: "Advanced Dental Implants",
    subtitle: "Permanent titanium & zirconia root replacements with lifelike crowns",
    tag: "Restorative",
    shortDesc: "Replace missing teeth permanently with biocompatible dental implants that feel, look, and chew just like natural teeth.",
    fullDesc: "Our computer-guided implant protocol ensures precision placement with minimal surgical trauma. Restore chewing power, preserve facial bone structure, and regain a full youthful smile without touching adjacent teeth.",
    benefits: [
      "Permanent, lifetime-durable tooth replacement solution",
      "Prevents bone loss and facial sagging",
      "Full bite force restored for your favorite foods",
      "Single tooth, multiple teeth, or full arch restoration"
    ],
    duration: "Single surgical visit + healing integration",
    idealFor: "Missing teeth, loose dentures, or irreparable broken teeth.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: "root-canal-treatment",
    title: "Painless Single-Sitting Root Canal",
    subtitle: "Micro-endodontic therapy saving infected teeth with gentle precision",
    tag: "Pain Relief",
    shortDesc: "Eliminate dental pain immediately while preserving your natural tooth using microscopic rotary root canal technology.",
    fullDesc: "Modern endodontics should never be painful. With computerized apex locators, nickel-titanium rotary files, and gentle local anesthesia, Dr. Syamgeeth clears deep tooth infections in a single relaxed 45-minute session.",
    benefits: [
      "Zero pain protocol with gentle localized numbing",
      "Completed in a single visit in over 90% of cases",
      "Saves your natural tooth from extraction",
      "Sealed with high-strength aesthetic ceramic crown"
    ],
    duration: "45 - 60 minutes",
    idealFor: "Severe toothaches, sensitivity to hot/cold, abscesses, or deep decay.",
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "teeth-whitening",
    title: "Laser & Zoom Teeth Whitening",
    subtitle: "Lighten stains up to 8 shades in a single safe 45-minute session",
    tag: "Aesthetic",
    shortDesc: "Erase years of coffee, tea, and age discoloration with clinically supervised cold-light laser whitening that protects enamel.",
    fullDesc: "Over-the-counter whitening strips can cause gum burn and enamel erosion. Our in-office photo-activation formula breaks down deep intrinsic stains rapidly with built-in desensitizing agents for gleaming results without discomfort.",
    benefits: [
      "Instantly brighter teeth by up to 8 shades",
      "Enamel-safe, pH-balanced professional gel",
      "Includes protective gum barrier application",
      "Includes custom take-home touch-up kit"
    ],
    duration: "45 minutes",
    idealFor: "Smokers, coffee lovers, wedding preparations, and dull discolored teeth.",
    iconName: "Sun",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric & Gentle Kids Dentistry",
    subtitle: "Fun, fearless dental visits building healthy childhood smile habits",
    tag: "Family Care",
    shortDesc: "A warm, nurturing environment designed so children look forward to dental checkups without fear or tears.",
    fullDesc: "We take extra time to build trust with little ones. From preventive pit & fissure sealants and fluoride varnish to cavity fillings and space maintainers, we protect your child's developing jaw and permanent dentition.",
    benefits: [
      "Calm, kid-friendly communication and cheerful setting",
      "Painless, gentle preventive fluoride treatments",
      "Habit-breaking appliances for thumb-sucking & tongue thrusting",
      "Lifelong dental confidence without fear"
    ],
    duration: "30 - 40 minutes",
    idealFor: "Toddlers, children, and teenagers for routine checkups and cavity defense.",
    iconName: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "general-preventive",
    title: "General & Preventive Dentistry",
    subtitle: "Ultrasonic scaling, air-polishing & comprehensive oral wellness checks",
    tag: "Preventive",
    shortDesc: "Maintain healthy gums, fresh breath, and cavity-free teeth with routine bi-annual cleanings and digital screenings.",
    fullDesc: "Prevention is the foundation of lasting oral health. Our non-abrasive ultrasonic scalers and gentle air-flow polishers dissolve tartar, eliminate hidden plaque biofilms, and keep your gums firm and pink.",
    benefits: [
      "Stops bleeding gums and reverse early gingivitis",
      "Eliminates bad breath (halitosis) bacteria",
      "Early cavity detection with high-magnification intraoral cameras",
      "Personalized oral hygiene blueprint"
    ],
    duration: "30 - 45 minutes",
    idealFor: "Bi-annual routine maintenance for individuals and whole families.",
    iconName: "CheckCircle",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "emergency-dental-care",
    title: "Emergency Dental Care",
    subtitle: "Same-day priority relief for severe tooth pain, broken teeth & trauma",
    tag: "24/7 Priority",
    shortDesc: "Immediate triage and pain relief when dental emergencies strike unexpectedly. Direct WhatsApp hotline available.",
    fullDesc: "A cracked tooth, severe throbbing pain, or a knocked-out tooth requires fast clinical intervention. Both our Chathinamkulam and Ezhukone clinics provide priority emergency slots so you never have to suffer through the night.",
    benefits: [
      "Fast same-day priority appointment slots",
      "Immediate pain stoppage & emergency stabilization",
      "Tooth preservation protocols for trauma cases",
      "Direct WhatsApp triage with Dr. Syamgeeth"
    ],
    duration: "Immediate same-day slot",
    idealFor: "Knocked-out tooth, acute abscess, cracked crown, severe night toothaches.",
    iconName: "AlertCircle",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-1",
    title: "Full Upper Porcelain Veneer Transformation",
    treatment: "Cosmetic Veneers (8 Units)",
    timeframe: "Completed in 8 Days",
    summary: "Corrected severe fluorosis discoloration, enamel wear, and incisal asymmetry with ultra-translucent lithium disilicate veneers.",
    beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "case-2",
    title: "Clear Aligner Spacing & Crossbite Correction",
    treatment: "Invisible Aligners Therapy",
    timeframe: "8 Months Treatment",
    summary: "Closed wide midline diastema and aligned rotated front incisors discreetly without braces or visible metal brackets.",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "case-3",
    title: "Laser Zoom Whitening & Gum Recontouring",
    treatment: "Laser Whitening + Aesthetic Gingivoplasty",
    timeframe: "1 Single Visit (90 mins)",
    summary: "Balanced an uneven 'gummy smile' with gentle laser diode shaping followed by 45-minute cold laser whitening (7 shades brighter).",
    beforeImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Ananya Nair",
    location: "Kollam Town",
    service: "Smile Makeover & Porcelain Veneers",
    rating: 5,
    comment: "I used to hide my smile in every photograph because of fluorosis staining. Dr. Syamgeeth planned my smile digitally and explained every detail. The transformation exceeded my wildest expectations! The clinic feels like a luxury wellness spa.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    date: "2 weeks ago"
  },
  {
    id: "t2",
    name: "Rahul Pillai",
    location: "Ezhukone, Kollam",
    service: "Dental Implant & Ceramic Crown",
    rating: 5,
    comment: "I lost my lower molar years ago and was terrified of surgery. Dr. Syamgeeth's painless technique is genuinely real. I felt zero pain during the procedure, and today I can chew effortlessly. His Ezhukone branch is ultra-clean and modern.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    date: "1 month ago"
  },
  {
    id: "t3",
    name: "Meera Krishnan",
    location: "Chathinamkulam",
    service: "Invisalign Clear Aligners",
    rating: 5,
    comment: "As a working professional, I didn't want train-track metal braces at 28. Dr. Syamgeeth's clear aligner treatment straightened my overlapping front teeth in under 9 months. Super convenient and nobody even noticed I was wearing them!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    date: "3 weeks ago"
  },
  {
    id: "t4",
    name: "Mathews George",
    location: "Kottarakkara / Kollam",
    service: "Single-Sitting Painless RCT",
    rating: 5,
    comment: "Came in with unbearable toothache on a Saturday evening. Dr. Syamgeeth treated the nerve in a single relaxed sitting within 45 minutes. Total relief! The digital equipment and sterilization protocols here are world-class.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    date: "Just recently"
  }
];

export const TREATMENT_STEPS = [
  {
    step: "01",
    title: "Digital Consultation & 3D Scan",
    description: "We capture high-definition intraoral 3D scans and photographic facial analysis to understand your goals without messy molds.",
    time: "Day 1 (30 Mins)"
  },
  {
    step: "02",
    title: "Virtual Smile Design & Preview",
    description: "Dr. Syamgeeth designs your customized smile proportion. You preview and approve your final smile simulation before we begin.",
    time: "Collaborative Review"
  },
  {
    step: "03",
    title: "Gentle, Pain-Free Treatment",
    description: "Using micro-precision instruments, soothing gentle anesthesia, and sterile protocols, we carry out your procedure in total comfort.",
    time: "Single or Few Visits"
  },
  {
    step: "04",
    title: "Radiant Reveal & Long-term Care",
    description: "Walk out with your brand-new confident smile, complete with warranty documentation and personalized maintenance guidance.",
    time: "Lifetime Confidence"
  }
];

export const FAQ_DATA = [
  {
    question: "Is dental treatment at Dr. Syamgeeth's clinic really painless?",
    answer: "Yes, 100%. We utilize computerized painless local anesthesia delivery, ultra-fine micro-needles, and gentle topical numbing gels. Over 98% of our patients report feeling virtually nothing during procedures, even during root canal treatments and implant surgeries."
  },
  {
    question: "Which branch should I visit: Chathinamkulam or Ezhukone?",
    answer: "Both branches are fully equipped with state-of-the-art diagnostic technology, digital radiography, and sterile operating operatories. You can choose whichever location is more convenient for your commute in Kollam. Dr. Syamgeeth consults actively across both clinics."
  },
  {
    question: "How long do porcelain smile makeovers and veneers last?",
    answer: "Our ultra-thin porcelain veneers are fabricated from premium medical-grade lithium disilicate. With routine dental hygiene and bi-annual cleanings, porcelain veneers typically last 15 to 20+ years without staining or losing their natural luster."
  },
  {
    question: "Do you offer flexible appointment timings or emergency visits?",
    answer: "Yes! Both clinics operate from 9:30 AM to 7:30 PM Monday through Saturday. For emergency dental trauma, cracked teeth, or sudden tooth pain, we provide same-day urgent slots. You can also message Dr. Syamgeeth directly on WhatsApp at +91 81293 69627."
  },
  {
    question: "Are clear aligners as effective as traditional metal braces?",
    answer: "Absolutely. Modern 3D digital clear aligners apply calibrated, gentle micro-forces that achieve orthodontic tooth movement as effectively as traditional braces, while being practically invisible and fully removable for eating and hygiene."
  },
  {
    question: "What sterilization and infection control standards do you follow?",
    answer: "We follow strict 6-stage hospital sterilization guidelines including ultrasonic disinfection, medical autoclave pouch sterilization at 134°C, single-use disposables for every patient, and UV air-purification across all treatment rooms."
  }
];
