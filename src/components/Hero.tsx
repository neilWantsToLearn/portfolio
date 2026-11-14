import type { FC } from 'react'
import {
  Code2,
  Palette,
  ExternalLink,
  ArrowRight,
  Terminal
} from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export const Hero: FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradients & Glow Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-rose-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Full-Stack Projects & Commissions</span>
              <span className="text-slate-500">•</span>
              <span className="font-mono text-cyan-400">{personalInfo.location}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hello, I'm <br />
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-rose-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center flex-wrap gap-2">
                <span>{personalInfo.role}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-indigo-950/80 text-indigo-400 border border-indigo-800/60">
                  STI College Batangas
                </span>
              </p>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              I am a <strong className="text-slate-200">BSIT student at STI College Batangas</strong> with a dual passion for building high-performance, full-stack web applications and creating emotive digital portraits. Behind <strong className="text-rose-300">ShidongArts</strong>, I have completed over <strong>100+ freelance commissions</strong> on iPad with Procreate, and engineered production-scale platforms like the <strong>Ayumi Salon Management Platform</strong>.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#ayumi"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
              >
                <Code2 className="w-4 h-4" />
                Explore Ayumi Project
              </a>

              <a
                href="#art"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-700/80 text-slate-200 hover:border-rose-500/50 hover:text-rose-300 transition-all hover:scale-[1.02]"
              >
                <Palette className="w-4 h-4 text-rose-400" />
                View ShidongArts Gallery
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Tech & Creative Badges */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500 uppercase tracking-wider font-sans font-medium text-[11px] mr-1">
                Core Stack:
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-300">
                React 19
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-300">
                TypeScript
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-indigo-300">
                PostgreSQL
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-300">
                Tailwind CSS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-rose-300">
                Procreate (iPad)
              </span>
            </div>
          </div>

          {/* Right Column: Visual Dual-Card Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Glow backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-rose-500 rounded-2xl blur-lg opacity-40 transition duration-1000 -z-10" />

              {/* Main Profile Card */}
              <div className="bg-[#0b1120] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl space-y-6">
                {/* Header with Avatar & Dual Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-rose-500 p-0.5">
                      <div className="w-full h-full bg-[#0d1527] rounded-[10px] flex items-center justify-center font-bold text-xl text-white">
                        NC
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Neil Cirus Samsaman</h3>
                      <p className="text-xs text-slate-400 font-mono">BSIT • STI College Batangas</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                      Dual Discipline
                    </span>
                  </div>
                </div>

                {/* Dual Focus Pillars */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Code Card */}
                  <div className="bg-slate-900/80 rounded-xl p-3.5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/80 text-cyan-400 flex items-center justify-center mb-2">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">Full-Stack Dev</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Production web applications with React, Supabase & PostgreSQL.
                    </p>
                  </div>

                  {/* Art Card */}
                  <div className="bg-slate-900/80 rounded-xl p-3.5 border border-rose-500/20 hover:border-rose-500/40 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-rose-950/80 text-rose-400 flex items-center justify-center mb-2">
                      <Palette className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">ShidongArts</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      100+ custom pet portraits & stylized digital illustrations.
                    </p>
                  </div>
                </div>

                {/* Mini Live Preview Snippet: Ayumi & Art */}
                <div className="bg-[#080d1a] rounded-xl p-3.5 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      Featured Production:
                    </span>
                    <a
                      href="https://ayumibtg.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline flex items-center gap-1 font-mono text-[11px]"
                    >
                      ayumibtg.vercel.app <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-slate-800 aspect-video group">
                    <img
                      src="/projects/ayumi-hero.png"
                      alt="Ayumi Platform Hero Preview"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).src = '/art/husky-floral-wreath.jpg'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-xs font-semibold text-white">
                        Ayumi Full-Stack Salon & Booking Platform
                      </span>
                    </div>
                  </div>
                </div>

                {/* ShidongArts Artwork Preview Pill */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <img
                    src="/art/husky-floral-wreath.jpg"
                    alt="Pet Portrait"
                    className="w-12 h-12 rounded-lg object-cover border border-slate-700"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-white truncate">
                      ShidongArts Freelance Commissions
                    </div>
                    <div className="text-[11px] text-slate-400">
                      100+ pet portraits & digital artworks delivered
                    </div>
                  </div>
                  <span className="text-xs font-mono text-rose-400 px-2 py-0.5 rounded bg-rose-950/60 border border-rose-900/40">
                    100+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-5 text-center transition-all hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mt-1">{stat.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
