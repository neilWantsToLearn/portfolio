import type { FC } from 'react'
import { ArrowUp } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#05080f] border-t border-slate-800/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand info */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-extrabold text-white text-lg tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-mono">
                BSIT STI
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Full-Stack Developer & Digital Artist behind{' '}
              <strong className="text-rose-400">ShidongArts</strong>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#ayumi" className="hover:text-cyan-400 transition-colors">
              Ayumi Full-Stack
            </a>
            <a href="#art" className="hover:text-rose-400 transition-colors">
              ShidongArts Gallery
            </a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">
              Skills
            </a>
            <a href="#credentials" className="hover:text-amber-400 transition-colors">
              Credentials
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Neil Cirus G. Samsaman. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Built with React 19, TypeScript & Tailwind CSS • Deployed via Vercel
          </div>
        </div>
      </div>
    </footer>
  )
}
