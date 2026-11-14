import { useState } from 'react'
import type { FC, FormEvent } from 'react'
import {
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  ArrowUpRight
} from 'lucide-react'
import { InstagramIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'

interface ContactSectionProps {
  onCopyPhone: () => void
  copied: boolean
}

export const ContactSection: FC<ContactSectionProps> = ({ onCopyPhone, copied }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'fullstack',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 relative">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                <MessageSquare className="w-3.5 h-3.5" />
                GET IN TOUCH
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build Something or Create Art Together
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you have an upcoming web development project, an internship opportunity, or want to commission a custom pet portrait, my inbox is always open.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Phone Card */}
              <div className="bg-[#0b1120] border border-white/10 hover:border-cyan-500/40 rounded-2xl p-4 flex items-center justify-between transition-all group">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Mobile / Viber / WhatsApp</div>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      {personalInfo.phoneFormatted}
                    </a>
                  </div>
                </div>

                <button
                  onClick={onCopyPhone}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 flex items-center gap-1.5 transition-all cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Instagram Card */}
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0b1120] border border-white/10 hover:border-rose-500/40 rounded-2xl p-4 flex items-center justify-between transition-all group block"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-rose-950/80 border border-rose-800/60 text-rose-400 flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Art & Commissions Portfolio</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                      @{personalInfo.instagramHandle}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-rose-400 transition-colors" />
              </a>

              {/* Location Card */}
              <div className="bg-[#0b1120] border border-white/10 rounded-2xl p-4 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Location & Base</div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Box */}
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 space-y-1 font-mono">
              <div className="text-slate-300 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Current Availability:
              </div>
              <p>• Full-Stack Web Development Projects</p>
              <p>• BSIT On-the-Job Training / Internships</p>
              <p>• Custom Pet Portraits & Digital Illustration Commissions</p>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0b1120] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-2">Send an Inquiry or Message</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill out this quick form or reach out directly via phone or Instagram for immediate response.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-800 text-center space-y-2">
                <Sparkles className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Thank You for Reaching Out!</h4>
                <p className="text-xs sm:text-sm text-emerald-300">
                  Your message has been noted! You can also contact directly at{' '}
                  <strong className="text-white">{personalInfo.phoneFormatted}</strong> or on Instagram{' '}
                  <strong className="text-white">@{personalInfo.instagramHandle}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Reyes"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Email or Phone *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. alex@example.com or mobile"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Inquiry Type *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm"
                  >
                    <option value="fullstack">Full-Stack Web Development (React / PostgreSQL)</option>
                    <option value="pet-portrait">Custom Pet Portrait Commission (Procreate / iPad)</option>
                    <option value="character-art">Stylized Character / Couple Art</option>
                    <option value="internship">Internship / Job Opportunity</option>
                    <option value="other">General Inquiries / Collaboration</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Project Details or Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project requirements, timeline, or pet details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 via-indigo-600 to-rose-500 text-white shadow-xl shadow-cyan-500/20 hover:opacity-95 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
