import { useState } from 'react'
import {
  ExternalLink,
  Check,
  X,
  Phone
} from 'lucide-react'
import { InstagramIcon } from './components/Icons'

interface Artwork {
  id: string
  title: string
  subtitle: string
  image: string
  category: string
}

const artworks: Artwork[] = [
  {
    id: 'husky',
    title: 'Floral Wreath Husky',
    subtitle: 'Commemorative Pet Portrait',
    image: '/art/husky-floral-wreath.jpg',
    category: 'Pet Portrait'
  },
  {
    id: 'cat-frame',
    title: 'Royal Celestial Cat',
    subtitle: 'Baroque Framing & Starry Sky',
    image: '/art/cat-starry-frame.jpg',
    category: 'Pet Portrait'
  },
  {
    id: 'stickers',
    title: 'Pet Hats Collection',
    subtitle: '9 Custom Dog & Cat Stickers',
    image: '/art/pet-stickers-sheet.jpg',
    category: 'Sticker Design'
  },
  {
    id: 'calico',
    title: 'Calico Cat Study',
    subtitle: 'Textured Digital Brushwork',
    image: '/art/calico-cat.jpg',
    category: 'Pet Portrait'
  },
  {
    id: 'y2k',
    title: 'Y2K Retro Collage',
    subtitle: 'Mixed Media Portrait',
    image: '/art/y2k-retro-portrait.jpg',
    category: 'Stylized Portrait'
  },
  {
    id: 'chibi',
    title: 'Chibi Couple Illustration',
    subtitle: 'Stylized Character Commission',
    image: '/art/chibi-couple.jpg',
    category: 'Character Art'
  }
]

export function App() {
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null)
  const [copied, setCopied] = useState(false)

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('0976 344 6957')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#0C0D12] text-neutral-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* ─── Minimal Navigation ─── */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0C0D12]/85 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Neil Cirus
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/10">
              ShidongArts
            </span>
          </a>

          <nav className="flex items-center gap-6 sm:gap-8 text-sm font-medium text-neutral-400">
            <a href="#ayumi" className="hover:text-white transition-colors">
              Project
            </a>
            <a href="#artworks" className="hover:text-white transition-colors">
              Artworks
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="text-white hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-32 sm:pt-36 pb-28 space-y-36">
        {/* ─── Hero Section with Left Polaroid & Sticker Collage ─── */}
        <section className="pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Polaroid Photo + Procreate Logo + ShidongArts Sticker */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[320px] sm:max-w-[340px] pt-4">
                {/* Metallic Paperclip SVG graphic at top-right of polaroid */}
                <div className="absolute -top-3 right-8 z-30 pointer-events-none drop-shadow-md">
                  <svg width="34" height="64" viewBox="0 0 34 64" fill="none">
                    <path
                      d="M10 20V48C10 52.4183 13.5817 56 18 56C22.4183 56 26 52.4183 26 48V14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14V46"
                      stroke="#CBD5E1"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 20V48C10 52.4183 13.5817 56 18 56C22.4183 56 26 52.4183 26 48V14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14V46"
                      stroke="#94A3B8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                  </svg>
                </div>

                {/* Main Polaroid Frame */}
                <div className="bg-[#FAF8F5] p-3.5 pb-6 rounded-lg shadow-2xl shadow-black/80 transform -rotate-2 hover:rotate-0 transition-transform duration-500 border border-neutral-300 relative z-10 group">
                  {/* Photo itself */}
                  <div className="aspect-[4/5] overflow-hidden rounded bg-neutral-900 border border-neutral-200">
                    <img
                      src="/profile/neil-portrait.jpg"
                      alt="Neil Cirus Samsaman"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Handwritten / Clean Polaroid Label */}
                  <div className="pt-3 px-1 flex items-center justify-between text-neutral-800">
                    <span className="font-mono text-xs font-bold tracking-tight">
                      Neil Cirus Samsaman
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">
                      BSIT STI '26
                    </span>
                  </div>
                </div>

                {/* Floating Procreate App Icon Badge */}
                <div className="absolute -top-3 -left-3 sm:-left-5 z-20 transform -rotate-12 hover:rotate-0 transition-transform duration-300 drop-shadow-2xl">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-black p-1 border-2 border-white/20 shadow-xl overflow-hidden flex items-center justify-center">
                    <img
                      src="/profile/procreate-logo.png"
                      alt="Procreate on iPad"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Floating ShidongArts Cat Sticker */}
                <div className="absolute -bottom-6 -right-6 sm:-right-8 z-20 transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
                  <div className="w-28 sm:w-32 cursor-pointer">
                    <img
                      src="/profile/shidong-arts-logo.png"
                      alt="ShidongArts Logo Sticker"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Headline, Subtitle & Buttons */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-cyan-400">
                  BSIT STUDENT • STI COLLEGE BATANGAS
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                  Full-Stack Developer <br />
                  <span className="text-neutral-500">&amp; Digital Artist</span>
                </h1>
              </div>

              <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl">
                I build responsive web applications with{' '}
                <span className="text-white font-medium">React, TypeScript &amp; PostgreSQL</span>, and create custom pet portraits and digital artwork through{' '}
                <span className="text-white font-medium">ShidongArts</span> using Procreate on iPad.
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-2">
                <a
                  href="#ayumi"
                  className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-lg"
                >
                  View Ayumi Project
                </a>
                <a
                  href="#artworks"
                  className="px-6 py-3 rounded-full bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/10 font-semibold text-sm transition-all"
                >
                  View 100+ Commissions
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="text-xs font-mono text-neutral-400 hover:text-cyan-400 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">0976 344 6957 Copied!</span>
                    </>
                  ) : (
                    <>
                      <Phone className="w-3.5 h-3.5" />
                      <span>0976 344 6957</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Featured Project: Ayumi ─── */}
        <section id="ayumi" className="space-y-10 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                01 / Flagship Full-Stack Engineering
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-1">
                Ayumi Salon &amp; Wellness Platform
              </h2>
            </div>

            <a
              href="https://ayumibtg.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Visit Live Site <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Main Hero UI: Ayumi Homepage & Service Catalogue */}
          <div
            onClick={() =>
              setSelectedImage({
                id: 'ayumi-home',
                title: 'Ayumi Homepage & Service Catalogue',
                subtitle: 'Production Web App • What\'s New & Service Selection',
                image: '/projects/ayumi-home.jpg',
                category: 'Public Portal'
              })
            }
            className="rounded-2xl overflow-hidden border border-white/[0.08] bg-neutral-900 aspect-video sm:aspect-[21/10] relative group cursor-pointer"
          >
            <img
              src="/projects/ayumi-home.jpg"
              alt="Ayumi Homepage and Service Catalogue"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-semibold gap-2">
              Click to View Full Resolution
            </div>
          </div>

          {/* Sub UI Screens: Client Appointment Portal & Studio About */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Screen 1: Client Account & Appointments */}
            <div
              onClick={() =>
                setSelectedImage({
                  id: 'ayumi-portal',
                  title: 'Ayumi Client Portal & Appointment Engine',
                  subtitle: 'Personalized Client Dashboard • Real-time Booking Hub',
                  image: '/projects/ayumi-portal.jpg',
                  category: 'Client Account'
                })
              }
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/[0.08] bg-neutral-900/60 hover:border-white/20 transition-all flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-black relative">
                <img
                  src="/projects/ayumi-portal.jpg"
                  alt="Ayumi Client Portal"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                  Click to Expand
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    Client Account &amp; Appointments
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Next appointment tracker, past visits &amp; favorite treatments
                  </p>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  Client Hub
                </span>
              </div>
            </div>

            {/* Screen 2: Brand Story & Services */}
            <div
              onClick={() =>
                setSelectedImage({
                  id: 'ayumi-about',
                  title: 'Ayumi Brand Story & Studio Experience',
                  subtitle: 'Salon Aesthetic & Service Standards',
                  image: '/projects/ayumi-about.jpg',
                  category: 'Brand Experience'
                })
              }
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/[0.08] bg-neutral-900/60 hover:border-white/20 transition-all flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-black relative">
                <img
                  src="/projects/ayumi-about.jpg"
                  alt="Ayumi About Us"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                  Click to Expand
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    About Us &amp; Japanese Craftsmanship
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Art &amp; beauty studio branding, services story &amp; design
                  </p>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  Brand UI
                </span>
              </div>
            </div>
          </div>

          {/* Clean 3-Pillar Technical Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-white">Full-Stack Architecture</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Built with React 19, TypeScript, and Supabase (PostgreSQL), deployed continuously on Vercel Cloud.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-semibold text-white">Real-Time Scheduling</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Dynamic calendar engine preventing double-bookings with service durations and operating hours.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-semibold text-white">Business Intelligence &amp; ERP</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Recharts financial visualizations, automated Excel (.xlsx) inventory exports, and client CRM management.
              </p>
            </div>
          </div>
        </section>

        {/* ─── ShidongArts Gallery ─── */}
        <section id="artworks" className="space-y-8 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-rose-400">
                02 / ShidongArts
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-1">
                Selected Commissions
              </h2>
            </div>

            <a
              href="https://www.instagram.com/shidongarts/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-400 hover:text-rose-300 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@shidongarts on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-normal">
            Over <strong className="text-white">100+ freelance commissions</strong> completed across 1+ year. Hand-painted on iPad using Procreate with attention to lifelike fur textures and custom keepsakes.
          </p>

          {/* Clean 3-Column Art Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((art) => (
              <div
                key={art.id}
                onClick={() => setSelectedImage(art)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-white/[0.08] bg-neutral-900/60 hover:border-white/20 transition-all flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-xs text-neutral-400">{art.subtitle}</p>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    {art.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── About & Skills ─── */}
        <section id="about" className="space-y-12 scroll-mt-28">
          <div className="border-b border-white/[0.08] pb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              03 / Background
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-1">
              Education &amp; Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education & Certification */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Education &amp; Credentials</h3>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-xs font-mono text-cyan-400">STI College Batangas</span>
                  <div className="text-base font-bold text-white mt-1">
                    Bachelor of Science in Information Technology (BSIT)
                  </div>
                  <p className="text-sm text-neutral-400 mt-1">
                    Focus on web development, algorithms, databases, and software design.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-amber-400">Oracle Academy</span>
                    <span className="text-xs font-mono text-neutral-400">June 2024</span>
                  </div>
                  <div className="text-base font-bold text-white mt-1">
                    Java Fundamentals Course Completion
                  </div>
                  <p className="text-sm text-neutral-400 mt-1">
                    Satisfactory completion of all coursework in Java OOP and algorithmic problem-solving.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Stack */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Technical &amp; Creative Tools</h3>

              <div className="space-y-3">
                <div className="flex items-start justify-between py-3 border-b border-white/[0.06]">
                  <span className="text-sm font-semibold text-white">Full-Stack Web</span>
                  <span className="text-sm text-neutral-400 font-mono">
                    TypeScript, React 19, Tailwind CSS, Vite
                  </span>
                </div>

                <div className="flex items-start justify-between py-3 border-b border-white/[0.06]">
                  <span className="text-sm font-semibold text-white">Backend &amp; Database</span>
                  <span className="text-sm text-neutral-400 font-mono">
                    PostgreSQL, Supabase, Java, SQL
                  </span>
                </div>

                <div className="flex items-start justify-between py-3 border-b border-white/[0.06]">
                  <span className="text-sm font-semibold text-white">Digital Art</span>
                  <span className="text-sm text-neutral-400 font-mono">
                    Procreate, iPad Pro, Apple Pencil
                  </span>
                </div>

                <div className="flex items-start justify-between py-3 border-b border-white/[0.06]">
                  <span className="text-sm font-semibold text-white">Deployment &amp; Tools</span>
                  <span className="text-sm text-neutral-400 font-mono">
                    Git, GitHub, Vercel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Contact Section (Clean Direct Links) ─── */}
        <section id="contact" className="space-y-10 scroll-mt-28">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              04 / Get in Touch
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Let's build together.
            </h2>
            <p className="text-base sm:text-xl text-neutral-400 max-w-2xl font-normal leading-relaxed">
              Available for full-stack web development projects, internships, and custom pet portrait commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            {/* Phone Card */}
            <div
              onClick={handleCopyPhone}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/40 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between text-neutral-400 mb-6">
                <span className="text-xs font-mono">Mobile / Viber</span>
                <Phone className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                +63 976 344 6957
              </div>
              <p className="text-xs font-mono text-neutral-500 mt-2">
                {copied ? '✓ Copied to clipboard!' : 'Click to copy number'}
              </p>
            </div>

            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/shidongarts/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-rose-500/40 transition-all block group"
            >
              <div className="flex items-center justify-between text-neutral-400 mb-6">
                <span className="text-xs font-mono">Instagram &amp; Art</span>
                <InstagramIcon className="w-4 h-4 text-rose-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-rose-400 transition-colors flex items-center justify-between">
                <span>@shidongarts</span>
                <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-rose-400 transition-colors" />
              </div>
              <p className="text-xs font-mono text-neutral-500 mt-2">
                100+ Procreate commissions
              </p>
            </a>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <div className="flex items-center justify-between text-neutral-400 mb-6">
                <span className="text-xs font-mono">Location &amp; Base</span>
                <span className="text-xs font-mono text-cyan-400">PH</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">
                Batangas, Philippines
              </div>
              <p className="text-xs font-mono text-neutral-500 mt-2">
                STI College Batangas (BSIT)
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Minimal Footer ─── */}
      <footer className="border-t border-white/[0.06] py-10 text-center text-xs font-mono text-neutral-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Neil Cirus Samsaman • ShidongArts</span>
          <span>Batangas, Philippines</span>
        </div>
      </footer>

      {/* ─── Lightbox Modal ─── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[80vh] w-auto rounded-xl shadow-2xl object-contain border border-white/10"
            />
            <div className="text-center space-y-1">
              <div className="text-lg font-bold text-white">{selectedImage.title}</div>
              <div className="text-xs text-neutral-400 font-mono">
                {selectedImage.subtitle}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
