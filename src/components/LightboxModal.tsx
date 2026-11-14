import { useEffect } from 'react'
import type { FC } from 'react'
import { X, Sparkles } from 'lucide-react'
import { InstagramIcon } from './Icons'
import type { Artwork } from '../types'
import { personalInfo } from '../data/portfolioData'

interface LightboxModalProps {
  item: Artwork | { image: string; title: string; description?: string } | null
  onClose: () => void
}

export const LightboxModal: FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!item) return null

  const isArtwork = 'highlights' in item

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#0b1120] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 hover:bg-black text-white hover:text-rose-400 transition-colors border border-white/20 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview Box */}
        <div className="md:w-3/5 bg-black/80 flex items-center justify-center p-4 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* Details Sidebar */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
          <div className="space-y-4">
            <div>
              {isArtwork && (
                <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 px-2.5 py-1 rounded bg-rose-950/80 border border-rose-900/60 inline-block mb-2">
                  {(item as Artwork).categoryLabel}
                </span>
              )}
              <h3 className="text-xl sm:text-2xl font-bold text-white">{item.title}</h3>
              {isArtwork && (
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Tools: {(item as Artwork).tools}
                </p>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {item.description || 'Verified credential from coursework completion.'}
            </p>

            {isArtwork && (item as Artwork).highlights && (
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-400">Artwork Highlights:</div>
                <ul className="space-y-1.5">
                  {(item as Artwork).highlights.map((h, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-rose-500 to-amber-500 text-white flex items-center justify-center gap-2 hover:opacity-90 transition-all text-center"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Inquire Commission via @{personalInfo.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
