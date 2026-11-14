import type { FC } from 'react'

interface HeaderBarProps {
  sectionTitle?: string
}

export const HeaderBar: FC<HeaderBarProps> = ({ sectionTitle = 'FULLSTACK DEVELOPER & DIGITAL ARTIST' }) => {
  return (
    <div className="w-full border-b border-[#D8D3C5] py-2.5 px-4 sm:px-8 mb-8 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#5A5852] flex items-center justify-between">
      <span className="font-bold text-[#141518]">PORTFOLIO</span>
      <span className="text-center truncate px-2 text-[#1D70B8] font-bold">{sectionTitle}</span>
      <span className="font-bold">2026(R)</span>
    </div>
  )
}
