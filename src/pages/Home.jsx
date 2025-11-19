import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import GalleryGrid from '../components/GalleryGrid'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <GalleryGrid />
      </main>
      <Footer />
    </div>
  )
}
