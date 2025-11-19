import { useEffect, useState } from 'react'

const demoImages = [
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
]

export default function GalleryGrid() {
  const [images, setImages] = useState(demoImages)

  useEffect(() => {
    setImages(demoImages)
  }, [])

  return (
    <section id="gallery" className="relative py-20 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Selected Works</h2>
          <a href="/gallery" className="text-white/70 hover:text-white underline underline-offset-4">See all</a>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]"><div className="grid gap-4">
          {images.map((src, i) => (
            <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <img src={src} alt="Gallery" className="w-full h-auto object-cover" loading="lazy" />
            </div>
          ))}
        </div></div>
      </div>
    </section>
  )
}
