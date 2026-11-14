import { useState } from 'react'
import {
  ExternalLink,
  Check,
  X,
  Phone,
  Send
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
  const [formSent, setFormSent] = useState(false)

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('0976 344 6957')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#0C0D12] text-neutral-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* ─── Minimal Navigation ─── */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0C0D12]/85 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
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

      <main className="max-w-5xl mx-auto px-6 pt-36 pb-28 space-y-36">
        {/* ─── Hero Section (Clean, Big Typography) ─── */}
        <section className="space-y-10 pt-4">
          <div className="space-y-4">
            <p className="text-sm font-mono tracking-widest uppercase text-cyan-400">
              BSIT Student • STI College Batangas
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]">
              Full-Stack Developer <br />
              <span className="text-neutral-500">&amp; Digital Artist</span>
            </h1>
          </div>

          <p className="text-lg sm:text-2xl text-neutral-300 font-normal leading-relaxed max-w-3xl">
            I build responsive web applications with{' '}
            <span className="text-white font-medium">React, TypeScript &amp; PostgreSQL</span>, and create custom pet portraits and digital artwork through{' '}
            <span className="text-white font-medium">ShidongArts</span> using Procreate on iPad.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <a
              href="#ayumi"
              className="px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all"
            >
              View Ayumi Project
            </a>
            <a
              href="#artworks"
              className="px-6 py-3.5 rounded-full bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/10 font-semibold text-sm transition-all"
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
        </section>

        {/* ─── Featured Project: Ayumi ─── */}
        <section id="ayumi" className="space-y-8 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                01 / Flagship Engineering
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

          {/* Project Image Card */}
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-neutral-900 aspect-video sm:aspect-[21/10] relative group">
            <img
              src="/projects/ayumi-hero.png"
              alt="Ayumi Platform Hero Preview"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

          {/* Project Breakdown (Minimal, Legible) */}
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
                Dynamic calendar engine preventing double-bookings with service durations and blocked holiday management.
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

        {/* ─── About & Skills (Streamlined) ─── */}
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

        {/* ─── Contact Section (Clean & Direct) ─── */}
        <section id="contact" className="space-y-10 scroll-mt-28">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              04 / Get in Touch
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Let's build together.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 max-w-xl">
              Available for full-stack web development projects, internships, and custom pet portrait commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
            {/* Direct Contact Cards */}
            <div className="md:col-span-5 space-y-4">
              <div
                onClick={handleCopyPhone}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/40 transition-colors cursor-pointer group"
              >
                <div className="text-xs font-mono text-neutral-400">Phone / Viber</div>
                <div className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between mt-1">
                  <span>+63 976 344 6957</span>
                  <span className="text-xs font-mono text-neutral-400">
                    {copied ? 'Copied!' : 'Click to copy'}
                  </span>
                </div>
              </div>

              <a
                href="https://www.instagram.com/shidongarts/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-rose-500/40 transition-colors block group"
              >
                <div className="text-xs font-mono text-neutral-400">Instagram</div>
                <div className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors flex items-center justify-between mt-1">
                  <span>@shidongarts</span>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-rose-400" />
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-xs font-mono text-neutral-400">Location</div>
                <div className="text-base font-bold text-white mt-1">
                  Batangas, Philippines
                </div>
              </div>
            </div>

            {/* Simple Contact Form */}
            <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              {formSent ? (
                <div className="py-12 text-center space-y-2">
                  <div className="text-lg font-bold text-white">Thank you!</div>
                  <p className="text-sm text-neutral-400">
                    Your message has been sent. You can also reach out directly via phone or Instagram.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setFormSent(true)
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-xs font-mono text-neutral-400 block mb-1.5">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-neutral-400 block mb-1.5">
                      Email or Phone
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="you@example.com or phone"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-neutral-400 block mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell me about your project or commission idea..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ─── Minimal Footer ─── */}
      <footer className="border-t border-white/[0.06] py-10 text-center text-xs font-mono text-neutral-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Neil Cirus Samsaman • ShidongArts</span>
          <span>Batangas, Philippines</span>
        </div>
      </footer>

      {/* ─── Lightbox Modal (Clean Fullscreen Preview) ─── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-3xl w-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[75vh] w-auto rounded-xl shadow-2xl object-contain border border-white/10"
            />
            <div className="text-center space-y-1">
              <div className="text-lg font-bold text-white">{selectedImage.title}</div>
              <div className="text-xs text-neutral-400 font-mono">
                {selectedImage.subtitle} • Painted in Procreate on iPad
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
