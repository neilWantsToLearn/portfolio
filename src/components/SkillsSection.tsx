import type { FC } from 'react'
import {
  Code2,
  Layout,
  Database,
  Palette,
  CheckCircle2,
  Cpu
} from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

export const SkillsSection: FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-indigo-950/80 text-indigo-400 border border-indigo-800/60">
            <Cpu className="w-3.5 h-3.5" />
            TECHNICAL & CREATIVE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Core Technologies
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Combining rigorous software engineering with expressive digital illustration to deliver end-to-end digital solutions.
          </p>
        </div>

        {/* 4-Column Grid for the 4 Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-[#0b1120] border border-white/10 hover:border-indigo-500/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-all hover:-translate-y-1 group"
            >
              <div>
                {/* Header Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {idx === 0 && <Code2 className="w-5 h-5 text-cyan-400" />}
                    {idx === 1 && <Layout className="w-5 h-5 text-indigo-400" />}
                    {idx === 2 && <Database className="w-5 h-5 text-emerald-400" />}
                    {idx === 3 && <Palette className="w-5 h-5 text-rose-400" />}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5">{category.title}</h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill List */}
                <ul className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="font-medium text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 text-right">
                Verified in Production
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
