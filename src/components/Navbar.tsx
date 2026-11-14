import { useState, useEffect } from 'react'
import type { FC } from 'react'
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react'

interface NavbarProps {
  onCopyPhone: () => void
  copied: boolean
}

export const Navbar: FC<NavbarProps> = ({ onCopyPhone, copied }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Ayumi Project', href: '#ayumi' },
    { name: 'Digital Art', href: '#art' },
    { name: 'Skills', href: '#skills' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-rose-500 p-[2px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-rose-400 bg-clip-text text-transparent">
                  NS
                </span>
              </div>
            </div>
            <div>
              <div className="font-bold text-base text-white tracking-tight flex items-center gap-1.5">
                Neil Cirus
                <span className="text-xs px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 font-mono">
                  DEV
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-rose-950/80 text-rose-400 border border-rose-800/60 font-mono">
                  ART
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">ShidongArts</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-300 hover:text-cyan-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onCopyPhone}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700/80 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all cursor-pointer"
              title="Click to copy phone number"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              {copied ? 'Copied 0976 344 6957!' : '0976 344 6957'}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 hover:opacity-95 hover:scale-[1.02] transition-all"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d16] border-b border-slate-800/80 px-4 pt-3 pb-6 mt-2 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-cyan-400 font-medium py-1.5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                onCopyPhone()
                setMobileMenuOpen(false)
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              {copied ? 'Copied 0976 344 6957!' : 'Copy 0976 344 6957'}
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white"
            >
              Contact / Commission
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
