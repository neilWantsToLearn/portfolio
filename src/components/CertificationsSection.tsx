import type { FC } from 'react'
import {
  Award,
  GraduationCap,
  ExternalLink,
  FileText,
  Maximize2
} from 'lucide-react'
import { certifications, personalInfo } from '../data/portfolioData'

interface CertificationsSectionProps {
  onSelectCertImage: (imgUrl: string, title: string) => void
}

export const CertificationsSection: FC<CertificationsSectionProps> = ({
  onSelectCertImage
}) => {
  return (
    <section id="credentials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-amber-950/80 text-amber-400 border border-amber-800/60">
            <Award className="w-3.5 h-3.5" />
            ACADEMIC & INDUSTRY CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Verified Certifications
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Strong academic grounding in Information Technology complemented by industry-recognized computer science coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Formal Education Card (STI College Batangas) */}
          <div className="lg:col-span-5 bg-[#0b1120] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Higher Education
                </span>
                <h3 className="text-xl font-bold text-white">{personalInfo.school}</h3>
                <p className="text-sm font-semibold text-slate-300">{personalInfo.degree}</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Enrolled in the Bachelor of Science in Information Technology (BSIT) program at STI College Batangas, specializing in full-stack web architectures, object-oriented software engineering, relational database management, and human-computer interaction (UI/UX).
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="text-xs font-mono text-slate-400">Core Coursework Highlights:</div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  Data Structures & Algorithms
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  Web Application Development
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  Database Management Systems
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  Object-Oriented Programming (Java)
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  Interactive Media & Graphics
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Status: Active Student</span>
              <span>Batangas, Philippines</span>
            </div>
          </div>

          {/* Industry Certification Card (Oracle Academy Java) */}
          <div className="lg:col-span-7 space-y-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-[#0b1120] border border-white/10 hover:border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-amber-950/80 text-amber-400 border border-amber-800/60">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                        {cert.issuer}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{cert.title}</h3>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0">
                    Completed: {cert.date}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  {/* Certificate Image Preview */}
                  <div
                    onClick={() => onSelectCertImage(cert.image, cert.title)}
                    className="sm:col-span-5 relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 group cursor-pointer aspect-[4/3]"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold">
                      <Maximize2 className="w-4 h-4" />
                      Click to Expand
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="sm:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="text-xs font-mono text-slate-400">
                      Instructor: <span className="text-white font-medium">{cert.instructor}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {cert.pdfUrl && (
                      <div className="pt-2">
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <FileText className="w-4 h-4" />
                          View Original PDF Document
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
