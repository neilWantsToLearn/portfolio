import { useState } from 'react'
import type { FC } from 'react'
import {
  ExternalLink,
  Calendar,
  Layers,
  BarChart3,
  Package,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Database,
  ChevronRight,
  FileSpreadsheet
} from 'lucide-react'
import { ayumiProject } from '../data/portfolioData'

export const AyumiShowcase: FC = () => {
  const [activeTab, setActiveTab] = useState<'features' | 'architecture' | 'admin'>('features')

  return (
    <section id="ayumi" className="py-20 relative">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 mb-3">
              <Database className="w-3.5 h-3.5" />
              FLAGSHIP FULL-STACK PROJECT
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ayumi Salon & Wellness Platform
            </h2>
            <p className="text-slate-400 mt-2 max-w-2xl text-base">
              A production-ready appointment scheduling, client booking portal, and comprehensive business ERP engineered for Ayumi Batangas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={ayumiProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
            >
              <span>Visit Live Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hero Card Container */}
        <div className="bg-[#0b1120] border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Top Preview Banner */}
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden border-b border-slate-800 group">
            <img
              src="/projects/ayumi-hero.png"
              alt="Ayumi Salon Booking System Preview"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/90 px-2.5 py-1 rounded border border-cyan-800/80">
                  Production Deployment • Vercel
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                  Ayumi Batangas Management System
                </h3>
                <p className="text-slate-300 text-sm max-w-xl hidden sm:block">
                  Eliminating manual appointment errors with real-time calendar validation, inventory logistics, and client CRM.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live: <span className="text-cyan-400 font-semibold">ayumibtg.vercel.app</span>
              </div>
            </div>
          </div>

          {/* Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800 border-b border-slate-800 bg-[#090e1a]">
            {ayumiProject.metrics?.map((metric, i) => (
              <div key={i} className="p-4 sm:p-5 text-center">
                <div className="text-lg sm:text-xl font-bold text-cyan-400 font-mono">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="p-6 sm:p-8 space-y-8">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
              <button
                onClick={() => setActiveTab('features')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'features'
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Key Platform Features
              </button>
              <button
                onClick={() => setActiveTab('admin')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'admin'
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Admin Suite & ERP
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'architecture'
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Full-Stack Architecture
              </button>
            </div>

            {/* Tab 1: Key Features */}
            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {ayumiProject.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-all hover:bg-slate-900/80 space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 flex items-center justify-center font-bold text-sm">
                      {idx === 0 && <Calendar className="w-4 h-4" />}
                      {idx === 1 && <Layers className="w-4 h-4" />}
                      {idx === 2 && <BarChart3 className="w-4 h-4" />}
                      {idx === 3 && <Package className="w-4 h-4" />}
                      {idx === 4 && <Sparkles className="w-4 h-4" />}
                      {idx === 5 && <ShieldCheck className="w-4 h-4" />}
                    </div>
                    <h4 className="text-base font-semibold text-white">{feature.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Admin Suite & ERP Details */}
            {activeTab === 'admin' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">
                          Recharts Analytics & Business BI
                        </h4>
                        <p className="text-xs text-slate-400">Real-time performance tracking</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Interactive chart components visualizing appointment volumes, monthly revenue streams, client retention rates, and peak service booking hours for executive decision-making.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-cyan-300">
                        Appointment Trends
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-cyan-300">
                        Revenue Insights
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-cyan-300">
                        Client Breakdown
                      </span>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-indigo-950 text-indigo-400">
                        <FileSpreadsheet className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">
                          Inventory & Spreadsheet Automation
                        </h4>
                        <p className="text-xs text-slate-400">Full audit trail & exports</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Tracks stock counts across beauty products, tools, and salon supplies. Includes automatic stock-level depletion triggers and one-click XLSX spreadsheet export for supplier orders.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-indigo-300">
                        Automated Excel Export
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-indigo-300">
                        Low Stock Alerts
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-indigo-300">
                        Supplier Audits
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-white">
                      Full Admin Control Modules Included:
                    </div>
                    <div className="text-xs text-slate-400">
                      Appointments Scheduler • Blocked Dates & Operating Hours • Staff & Service Rosters • Promotions & Client CRM • Direct Internal Messaging
                    </div>
                  </div>
                  <a
                    href="https://ayumibtg.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-semibold text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    Open Live Portal <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Tab 3: Full-Stack Architecture */}
            {activeTab === 'architecture' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {ayumiProject.techStack.map((group, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3"
                  >
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                      {group.category}
                    </div>
                    <ul className="space-y-2">
                      {group.items.map((tech, j) => (
                        <li key={j} className="text-xs text-slate-300 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Project Tags */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500 font-mono">Tech Highlights:</span>
                {ayumiProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-xs text-slate-400 font-mono">
                Role: <span className="text-white font-medium">{ayumiProject.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
