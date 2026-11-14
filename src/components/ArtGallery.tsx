import { useState } from 'react'
import type { FC } from 'react'
import {
  Sparkles,
  Maximize2,
  Brush,
  ExternalLink
} from 'lucide-react'
import { InstagramIcon } from './Icons'
import { artworks, personalInfo } from '../data/portfolioData'
import type { Artwork } from '../types'

interface ArtGalleryProps {
  onSelectArtwork: (artwork: Artwork) => void
}

export const ArtGallery: FC<ArtGalleryProps> = ({ onSelectArtwork }) => {
  const [filter, setFilter] = useState<'all' | 'pets' | 'portraits' | 'stickers'>('all')

  const filteredArtworks =
    filter === 'all' ? artworks : artworks.filter((item) => item.category === filter)

  return (
    <section id="art" className="py-20 relative">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-rose-950/80 text-rose-400 border border-rose-800/60 mb-3">
              <Brush className="w-3.5 h-3.5" />
              FREELANCE DIGITAL ART • SHIDONGARTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pet Portraits & Digital Illustrations
            </h2>
            <p className="text-slate-400 mt-2 max-w-2xl text-base">
              Hand-painted in <strong className="text-slate-200">Procreate on iPad</strong>. Over{' '}
              <strong className="text-rose-400">100+ custom commissions</strong> completed for clients,
              capturing lifelike pet personalities, nostalgic aesthetics, and bespoke character designs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700/80 text-rose-300 hover:border-rose-500/50 hover:bg-slate-800 transition-all"
            >
              <InstagramIcon className="w-4 h-4 text-rose-400" />
              <span>@shidongarts on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-800/80">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-rose-500/15 text-rose-300 border border-rose-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white bg-slate-900/40'
            }`}
          >
            All Works ({artworks.length})
          </button>
          <button
            onClick={() => setFilter('pets')}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === 'pets'
                ? 'bg-rose-500/15 text-rose-300 border border-rose-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white bg-slate-900/40'
            }`}
          >
            Pet Portraits (3)
          </button>
          <button
            onClick={() => setFilter('portraits')}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === 'portraits'
                ? 'bg-rose-500/15 text-rose-300 border border-rose-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white bg-slate-900/40'
            }`}
          >
            Stylized Portraits (2)
          </button>
          <button
            onClick={() => setFilter('stickers')}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === 'stickers'
                ? 'bg-rose-500/15 text-rose-300 border border-rose-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white bg-slate-900/40'
            }`}
          >
            Sticker Collections (1)
          </button>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((art) => (
            <div
              key={art.id}
              onClick={() => onSelectArtwork(art)}
              className="group bg-[#0b1120] border border-white/10 hover:border-rose-500/40 rounded-2xl overflow-hidden shadow-xl hover:shadow-rose-500/10 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-slate-950">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                {/* Top Badge: Category */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/75 backdrop-blur-md text-rose-300 border border-rose-500/30">
                    {art.categoryLabel}
                  </span>
                </div>

                {/* Top Right: Expand Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 rounded-lg bg-black/80 backdrop-blur-md text-white border border-white/20 hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Procreate Tool Pill */}
                <div className="absolute bottom-3 left-3">
                  <span className="text-[11px] font-mono text-slate-300 bg-slate-900/90 backdrop-blur-md px-2 py-0.5 rounded border border-slate-700">
                    {art.tools}
                  </span>
                </div>
              </div>

              {/* Artwork Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2">
                    {art.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {art.highlights.slice(0, 3).map((item, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commission Workflow & Quality Guarantee */}
        <div className="mt-16 bg-[#0b1120] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-rose-950 text-rose-400 border border-rose-900/60">
                <Sparkles className="w-3.5 h-3.5" />
                COMMISSION WORKFLOW
              </div>
              <h3 className="text-2xl font-bold text-white">
                How Custom Pet Commissions Work
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Every piece is hand-crafted with dedication to your pet's personality. With 100+ delivered commissions, here is how the freelance workflow operates:
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-500/20 hover:scale-[1.02] transition-all"
                >
                  <Brush className="w-3.5 h-3.5" />
                  Request a Commission Quote
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="font-mono text-xs text-rose-400 font-bold">01 • Photo Reference</div>
                <h4 className="text-sm font-semibold text-white">Reference Consultation</h4>
                <p className="text-xs text-slate-400">
                  Client provides clear photos of pet(s), preferred framing (floral, celestial, or sticker style).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="font-mono text-xs text-rose-400 font-bold">02 • Color & Composition</div>
                <h4 className="text-sm font-semibold text-white">Digital Sketching</h4>
                <p className="text-xs text-slate-400">
                  Initial outline and color blocking prepared in Procreate to lock in posture, mood, and palette.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="font-mono text-xs text-rose-400 font-bold">03 • Layered Texturing</div>
                <h4 className="text-sm font-semibold text-white">High-Detail Painting</h4>
                <p className="text-xs text-slate-400">
                  Multi-layered dry brushwork for fur depth, realistic eye reflections, and botanical embellishments.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="font-mono text-xs text-rose-400 font-bold">04 • Print & Web Delivery</div>
                <h4 className="text-sm font-semibold text-white">300 DPI Export</h4>
                <p className="text-xs text-slate-400">
                  Full high-resolution files delivered for canvas prints, phone wallpapers, and digital sharing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
