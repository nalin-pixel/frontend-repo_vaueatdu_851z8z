import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  { title: 'Weddings', cover: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Portraits', cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Editorial', cover: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Travel', cover: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1600&auto=format&fit=crop' },
]

export default function Gallery() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">Gallery</h1>
          <p className="mt-4 text-white/70">A curated selection of recent work across categories.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s) => (
              <a key={s.title} href="#" className="group relative overflow-hidden rounded-2xl border border-white/10">
                <img src={s.cover} alt={s.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-medium">{s.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
