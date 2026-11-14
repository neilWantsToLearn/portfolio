import { useState } from 'react'
import type { FC } from 'react'
import { HeaderBar } from './HeaderBar'
import { personalInfo } from '../data/portfolioData'

export const IntroFolder: FC = () => {
  const [activeTab, setActiveTab] = useState<'expertise' | 'services'>('expertise')

  return (
    <section id="introduction" className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      <HeaderBar sectionTitle="ABOUT ME • INTRODUCTION" />

      {/* Blue Folder Container with Tabs */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Top Folder Tabs */}
        <div className="flex items-end gap-2 px-6 -mb-[2px] z-10 relative">
          <button
            onClick={() => setActiveTab('expertise')}
            className={`px-6 sm:px-8 py-3 rounded-t-2xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'expertise'
                ? 'bg-[#1D70B8] text-white shadow-md'
                : 'bg-[#D2CEBE] text-[#5A5852] hover:bg-[#E2DECE]'
            }`}
          >
            My Expertise
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-6 sm:px-8 py-3 rounded-t-2xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'services'
                ? 'bg-[#1D70B8] text-white shadow-md'
                : 'bg-[#D2CEBE] text-[#5A5852] hover:bg-[#E2DECE]'
            }`}
          >
            My Services
          </button>
        </div>

        {/* Folder Body */}
        <div className="w-full bg-[#1D70B8] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 md:p-12 shadow-xl border-4 border-[#1256D0] relative overflow-hidden">
          {/* Sub Header / Introduction Arrow */}
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-cyan-200 font-bold bg-[#145288] px-3.5 py-1.5 rounded-lg border border-cyan-400/30">
              INTRODUCTION ────►
            </span>
            <span className="font-mono text-xs text-white/70">STI COLLEGE BATANGAS • BSIT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Card: Window with macOS dots containing portrait */}
            <div className="md:col-span-5">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-white/60">
                {/* Window Title Bar */}
                <div className="bg-[#EAE7DC] px-4 py-2.5 flex items-center gap-2 border-b border-[#D8D4C8]">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  <span className="text-[11px] font-mono text-[#5A5852] ml-2 font-medium">
                    neil_samsaman.jpg
                  </span>
                </div>

                {/* Picture / Portrait */}
                <div className="p-4 bg-[#F9F7F1] flex flex-col items-center">
                  <img
                    src="/art/husky-floral-wreath.jpg"
                    alt="Neil Cirus Samsaman Art & Profile"
                    className="w-full aspect-[4/3] object-cover rounded-xl shadow-md border border-[#E5E0D0]"
                  />
                  <div className="mt-3 text-center">
                    <div className="font-display font-black text-lg text-[#141518]">
                      {personalInfo.name}
                    </div>
                    <div className="text-xs font-mono text-[#1D70B8] font-bold">
                      FullStack Dev & ShidongArts
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Speech Bubble & Large Legible Text */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white text-[#141518] font-display font-black text-base sm:text-lg px-5 py-2 rounded-2xl shadow-md inline-block">
                  Hi! I'm Neil
                </div>
                <div className="text-white font-mono text-sm uppercase tracking-wider font-bold">
                  About Me
                </div>
              </div>

              {activeTab === 'expertise' ? (
                <div className="space-y-4 text-white">
                  <p className="text-lg sm:text-xl font-medium leading-relaxed drop-shadow-sm">
                    I am a <strong className="text-cyan-200 font-bold">BSIT student at STI College Batangas</strong> with a deep passion for building robust full-stack web applications and creating bespoke pet portraits and visual art.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-blue-50">
                    Behind <strong className="text-rose-200 font-bold">ShidongArts</strong>, I have completed over <strong>100+ freelance commissions</strong> on iPad with Procreate. In software engineering, I co-developed production-scale systems like the <strong>Ayumi Salon Management System</strong>, handling everything from database schemas and authentication to real-time calendar engines and analytics dashboards.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg bg-[#145288] text-cyan-200 text-xs sm:text-sm font-mono font-bold">
                      TypeScript & React 19
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#145288] text-cyan-200 text-xs sm:text-sm font-mono font-bold">
                      PostgreSQL & Supabase
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#145288] text-rose-200 text-xs sm:text-sm font-mono font-bold">
                      Procreate (iPad Pro)
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 text-white">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="font-bold text-base sm:text-lg text-cyan-200">
                      1. Full-Stack Web Applications
                    </div>
                    <div className="text-sm sm:text-base text-blue-50">
                      End-to-end development: database modeling, REST APIs, client portals, and administrative ERPs with React & PostgreSQL.
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="font-bold text-base sm:text-lg text-rose-200">
                      2. Custom Pet Portraits (Procreate)
                    </div>
                    <div className="text-sm sm:text-base text-blue-50">
                      Fine digital painting for beloved pets, commemorative floral wreaths, and custom merchandise sticker packs.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
