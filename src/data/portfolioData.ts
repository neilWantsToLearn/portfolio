import type { Artwork, Certification, Project, SkillCategory } from '../types'

export const personalInfo = {
  name: 'Neil Cirus G. Samsaman',
  handle: '@shidongarts',
  role: 'Full-Stack Developer & Digital Artist',
  tagline: 'Bridging engineering precision with expressive visual storytelling.',
  bio: 'I am a BSIT student at STI College Batangas passionate about building scalable full-stack web applications and creating emotive digital portraits and visual art. As the artist behind ShidongArts, I have completed 100+ freelance commissions using Procreate on iPad, while engineering production-ready applications with React, TypeScript, and PostgreSQL.',
  school: 'STI College Batangas',
  degree: 'Bachelor of Science in Information Technology (BSIT)',
  location: 'Batangas, Philippines',
  phone: '0976 344 6957',
  phoneFormatted: '+63 976 344 6957',
  instagram: 'https://www.instagram.com/shidongarts/',
  instagramHandle: 'shidongarts',
  github: 'https://github.com',
  availableForWork: true,
  stats: [
    { label: 'Freelance Commissions', value: '100+', subtext: 'Delivered to happy clients' },
    { label: 'Years Freelancing', value: '1+ Yr', subtext: 'Client & commission management' },
    { label: 'Full-Stack Architecture', value: 'Production', subtext: 'React, Supabase, PostgreSQL' },
    { label: 'Client Satisfaction', value: '100%', subtext: 'Timely delivery & custom art' }
  ]
}

export const ayumiProject: Project = {
  id: 'ayumi-btg',
  title: 'Ayumi Salon & Wellness Management Platform',
  subtitle: 'Enterprise-grade Appointment Engine & Full-Stack Business ERP',
  description: 'A comprehensive, full-stack appointment booking and business management platform engineered for Ayumi Batangas. Designed to eliminate scheduling conflicts, automate client booking, and equip managers with actionable inventory and revenue analytics.',
  category: 'fullstack',
  role: 'Full-Stack Developer & UI/UX Designer',
  image: '/projects/ayumi-hero.png',
  liveUrl: 'https://ayumibtg.vercel.app/',
  githubUrl: 'https://github.com',
  tags: ['React 19', 'TypeScript', 'Supabase (PostgreSQL)', 'Tailwind CSS', 'Vite', 'Recharts', 'Vercel'],
  metrics: [
    { label: 'System Uptime', value: '99.9%' },
    { label: 'Core Modules', value: '7+ Modules' },
    { label: 'Export Support', value: 'Excel (.xlsx)' },
    { label: 'Deployment', value: 'Vercel Cloud' }
  ],
  keyFeatures: [
    {
      title: 'Smart Scheduling & Conflict Prevention',
      desc: 'Real-time calendar slot engine factoring in service durations, blocked holidays, and operating hours to guarantee zero double-bookings.'
    },
    {
      title: 'Dual-Role Architecture (Client & Admin)',
      desc: 'Seamless public portal for booking, services, and client profiles, paired with a secure, role-based admin back-office.'
    },
    {
      title: 'Business Analytics & Revenue Dashboard',
      desc: 'Interactive data visualization built with Recharts, tracking appointments volume, sales performance, and client trends.'
    },
    {
      title: 'Inventory Control & Excel Data Export',
      desc: 'Real-time stock management with threshold alerts and automated XLSX spreadsheet generation for auditing and logistics.'
    },
    {
      title: 'AI Style Finder & Interactive Consultations',
      desc: 'Guided style curation module assisting clients in selecting tailored beauty packages based on their aesthetic preferences.'
    },
    {
      title: 'Dynamic Promotion & Voucher Engine',
      desc: 'Configurable promotional discounts and campaign engine with automated expiry and usage limits.'
    }
  ],
  techStack: [
    {
      category: 'Frontend Architecture',
      items: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router v7', 'Lucide React']
    },
    {
      category: 'Backend & Cloud Database',
      items: ['Supabase', 'PostgreSQL', 'Row-Level Security (RLS)', 'RESTful Endpoints']
    },
    {
      category: 'Utilities & Reporting',
      items: ['Recharts (Analytics)', 'XLSX (Spreadsheet Engine)', 'HTML2Canvas', 'Date-Fns']
    },
    {
      category: 'DevOps & Tooling',
      items: ['Vercel Cloud CI/CD', 'Git / GitHub', 'Oxlint']
    }
  ]
}

export const artworks: Artwork[] = [
  {
    id: 'husky-wreath',
    title: 'Floral Wreath Siberian Husky Memorial',
    category: 'pets',
    categoryLabel: 'Pet Portrait',
    image: '/art/husky-floral-wreath.jpg',
    description: 'A deeply personal pet portrait painted from photo reference, framing a striking blue-eyed Siberian Husky within a lush crown of hand-painted wildflowers, violets, and daisies.',
    tools: 'iPad Pro, Apple Pencil, Procreate',
    highlights: ['Multi-layered fur texturing', 'Realistic eye reflections', 'Botanical floral composition', 'Client commission keepsake']
  },
  {
    id: 'cat-starry-frame',
    title: 'Royal Celestial Cat with Parakeets',
    category: 'pets',
    categoryLabel: 'Pet Portrait & Whimsy',
    image: '/art/cat-starry-frame.jpg',
    description: 'A baroque-inspired oil-painting style portrait depicting an elegant white cat perched beside companion parakeets against a glowing starry nebula, bordered by an ornate gilded frame.',
    tools: 'iPad Pro, Procreate',
    highlights: ['Classical baroque gold framing', 'Starry night sky texture', 'Multi-pet composition', 'Fine-art canvas emulation']
  },
  {
    id: 'pet-stickers',
    title: 'Whimsical Pet Hats Sticker Collection',
    category: 'stickers',
    categoryLabel: 'Sticker & Merch Design',
    image: '/art/pet-stickers-sheet.jpg',
    description: 'A joyful compilation of 9 custom dog and cat portraits featuring unique headwear—including straw conical hats, safari explorer hats, party cones, and bandana wraps.',
    tools: 'iPad Pro, Procreate',
    highlights: ['9 distinct custom pet faces', 'Sticker die-cut white outline', 'Expressive character personalities', 'Commercial print-ready file']
  },
  {
    id: 'calico-cat',
    title: 'Textured Calico Cat Study',
    category: 'pets',
    categoryLabel: 'Pet Portrait',
    image: '/art/calico-cat.jpg',
    description: 'High-detail digital brushwork study focusing on realistic facial planes, soft fur transitions, and luminous amber eyes of a tri-color calico cat.',
    tools: 'iPad Pro, Procreate',
    highlights: ['Fine dry-brush texturing', 'Luminous feline eye rendering', 'Soft edge blending', 'Signature ShidongArts branding']
  },
  {
    id: 'y2k-portrait',
    title: 'Y2K Retro Aesthetic Scrapbook Portrait',
    category: 'portraits',
    categoryLabel: 'Stylized Portrait',
    image: '/art/y2k-retro-portrait.jpg',
    description: 'A nostalgic early-2000s inspired mixed-media collage illustration featuring a portrait study, film camera, vintage strawberries, doodle stars, and paper folds.',
    tools: 'iPad Pro, Procreate',
    highlights: ['Mixed media paper texture', 'Y2K graphic design elements', 'Emotive portrait gaze', 'Dynamic collage layout']
  },
  {
    id: 'chibi-couple',
    title: 'Stylized Chibi Couple Artwork',
    category: 'portraits',
    categoryLabel: 'Character Design',
    image: '/art/chibi-couple.jpg',
    description: 'Cute, stylized chibi character illustration of a couple with custom fashion styling, streetwear accessories, and soft digital airbrush shading.',
    tools: 'iPad Pro, Procreate',
    highlights: ['Chibi proportion styling', 'Custom fashion details', 'Smooth 3D-effect shading', 'Custom client gift']
  }
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'Code2',
    description: 'Core programming and scripting languages applied in software development and database operations.',
    skills: [
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'Java', level: 'Certified (Oracle)' },
      { name: 'SQL / PostgreSQL', level: 'Proficient' },
      { name: 'HTML5 & CSS3', level: 'Expert' }
    ]
  },
  {
    title: 'Frontend & UI Engineering',
    icon: 'Layout',
    description: 'Building responsive, accessible, and fast web experiences with component-driven architecture.',
    skills: [
      { name: 'React 19', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Vite', level: 'Proficient' },
      { name: 'React Router v7', level: 'Proficient' },
      { name: 'Recharts Analytics', level: 'Proficient' },
      { name: 'Responsive UI/UX', level: 'Expert' }
    ]
  },
  {
    title: 'Backend, Database & Cloud',
    icon: 'Database',
    description: 'Architecting database schemas, managing cloud deployments, and integrating reliable APIs.',
    skills: [
      { name: 'PostgreSQL', level: 'Proficient' },
      { name: 'Supabase', level: 'Proficient' },
      { name: 'RESTful API Integration', level: 'Proficient' },
      { name: 'Vercel Deployment', level: 'Advanced' },
      { name: 'Git & GitHub Version Control', level: 'Advanced' }
    ]
  },
  {
    title: 'Digital Art & Creative Direction',
    icon: 'Palette',
    description: 'Translating visual concepts, character designs, and client commissions into polished artwork.',
    skills: [
      { name: 'Procreate (iPad Pro)', level: 'Expert (100+ Commissions)' },
      { name: 'Pet Portraiture', level: 'Specialist' },
      { name: 'Character & Chibi Design', level: 'Advanced' },
      { name: 'UI / UX Prototyping', level: 'Proficient' },
      { name: 'Blender 3D Modeling Basics', level: 'Familiar' }
    ]
  }
]

export const certifications: Certification[] = [
  {
    id: 'oracle-java',
    title: 'Award of Course Completion: Java Fundamentals',
    issuer: 'Oracle Academy',
    date: 'June 19, 2024',
    instructor: 'Beronika Peña',
    image: '/certs/oracle-cert.jpg',
    pdfUrl: '/certs/oracle-java-cert.pdf',
    description: 'Awarded by Oracle Academy for satisfactory completion of all coursework in Java Fundamentals, covering object-oriented programming principles, algorithms, data structures, and software architecture.',
    skills: ['Java OOP', 'Data Structures', 'Algorithmic Problem Solving', 'Software Fundamentals']
  }
]
