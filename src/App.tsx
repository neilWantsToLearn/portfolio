import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AyumiShowcase } from './components/AyumiShowcase'
import { ArtGallery } from './components/ArtGallery'
import { SkillsSection } from './components/SkillsSection'
import { CertificationsSection } from './components/CertificationsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { LightboxModal } from './components/LightboxModal'
import type { Artwork } from './types'
import { personalInfo } from './data/portfolioData'

export function App() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const [selectedCert, setSelectedCert] = useState<{
    image: string
    title: string
    description?: string
  } | null>(null)
  const [copied, setCopied] = useState(false)

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSelectCertImage = (imgUrl: string, title: string) => {
    setSelectedCert({
      image: imgUrl,
      title,
      description: 'Official Java Fundamentals Course Completion Certificate presented by Oracle Academy.'
    })
  }

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar onCopyPhone={handleCopyPhone} copied={copied} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <AyumiShowcase />
        <ArtGallery onSelectArtwork={(art) => setSelectedArtwork(art)} />
        <SkillsSection />
        <CertificationsSection onSelectCertImage={handleSelectCertImage} />
        <ContactSection onCopyPhone={handleCopyPhone} copied={copied} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Artwork Lightbox Modal */}
      {selectedArtwork && (
        <LightboxModal item={selectedArtwork} onClose={() => setSelectedArtwork(null)} />
      )}

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <LightboxModal item={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </div>
  )
}

export default App
