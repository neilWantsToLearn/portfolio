import type { FC } from 'react'
import { Check, ArrowDown, Send } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export const HeroFolder: FC = () => {
  return (
    <section className="pt-6 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Top Header Row with HUGE Wordmark */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <h1 className="font-display text-7xl sm:text-9xl lg:text-[140px] font-black tracking-tighter text-[#141518] leading-[0.85]">
          Portfolio
        </h1>

        <div className="lg:text-right space-y-1 pb-2">
          <div className="font-display text-2xl sm:text-3xl font-black uppercase text-[#141518] tracking-tight">
            {personalInfo.name}
          </div>
          <div className="text-sm sm:text-base font-semibold text-[#5A5852]">
            {personalInfo.role} • <span className="text-[#1D70B8]">STI College Batangas</span>
          </div>
        </div>
      </div>

      {/* Giant Folder Graphic / Container */}
      <div className="relative w-full max-w-5xl mx-auto mt-6">
        {/* Top Folder Handle / Tab */}
        <div className="flex justify-center -mb-1">
          <div className="w-56 sm:w-72 h-10 sm:h-12 bg-[#1D70B8] rounded-t-3xl border-t-4 border-x-4 border-[#1256D0] relative flex items-center justify-center">
            <div className="w-20 h-2 bg-white/30 rounded-full" />
          </div>
        </div>

        {/* Main Blue Folder Body */}
        <div className="w-full bg-[#1D70B8] rounded-3xl sm:rounded-[36px] p-6 sm:p-12 md:p-16 min-h-[380px] sm:min-h-[460px] shadow-2xl relative overflow-hidden flex flex-col justify-between border-4 border-[#1256D0]">
          {/* Subtle folder diagonal line pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Top Row inside Folder: Floating Badge & Heading */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
            {/* Left Floating Badge: 2026 Edition */}
            <div className="space-y-4 max-w-xs">
              <div className="bg-[#18191E] text-white px-5 py-3 rounded-2xl shadow-xl border border-white/10 w-fit flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200">
                  2026 Edition
                </span>
                <span className="text-slate-400 font-mono text-xs">@</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              <div className="text-white font-display text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight pt-2">
                BUILDING FULL-STACK APPS THROUGH CODE AND CREATIVITY
              </div>
            </div>

            {/* Right Floating Card: Core Disciplines */}
            <div className="bg-[#18191E] text-white p-6 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 max-w-sm w-full space-y-3.5">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Core Specializations
                </span>
                <Check className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="space-y-2.5 text-sm sm:text-base font-semibold">
                <div className="flex items-center gap-2.5 text-slate-100">
                  <span className="text-cyan-400">▶</span>
                  <span>Full-Stack Development (React & Postgres)</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-100">
                  <span className="text-rose-400">✎</span>
                  <span>ShidongArts Digital Art (Procreate)</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-100">
                  <span className="text-amber-400">★</span>
                  <span>100+ Custom Freelance Commissions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row inside Folder: Interactive Jump Buttons */}
          <div className="relative z-10 pt-8 sm:pt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 mt-6">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#introduction"
                className="px-6 py-3 rounded-xl bg-white text-[#141518] font-bold text-sm sm:text-base shadow-lg hover:bg-slate-100 hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <span>Open Dossier</span>
                <ArrowDown className="w-4 h-4 text-[#1D70B8]" />
              </a>

              <a
                href="#ayumi"
                className="px-5 py-3 rounded-xl bg-[#1256D0] text-white font-bold text-sm sm:text-base border border-white/20 hover:bg-[#0E49B5] transition-all"
              >
                Ayumi Project
              </a>

              <a
                href="#artworks"
                className="px-5 py-3 rounded-xl bg-[#1256D0] text-white font-bold text-sm sm:text-base border border-white/20 hover:bg-[#0E49B5] transition-all"
              >
                ShidongArts Gallery
              </a>
            </div>

            <a
              href="#contact"
              className="text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider flex items-center gap-2 hover:underline"
            >
              <span>Work With Me</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
