'use client'

import { LampContainer } from '@/components/ui/lamp'
import { LayoutGrid } from '@/components/ui/layout-grid'
import { motion } from 'framer-motion'

// LayoutGrid
const cards = [
  {
    id: 1,
    className: 'md:col-span-2',
    thumbnail: '/images/gallery-0.jpg',
  },
  {
    id: 2,
    className: 'col-span-1',
    thumbnail: '/images/gallery-1.jpg',
  },
  {
    id: 3,
    className: 'col-span-1',
    thumbnail: '/images/gallery-2.jpg',
  },
  {
    id: 4,
    className: 'md:col-span-2',
    thumbnail: '/images/gallery-3.jpg',
  },
  {
    id: 5,
    className: 'md:col-span-2',
    thumbnail: '/images/gallery-4.jpg',
  },
  {
    id: 6,
    className: 'col-span-1',
    thumbnail: '/images/gallery-5.jpg',
  },
]

export default function Gallery() {
  return (
    <>
      <section>
        <div className="pb-10">
          <LampContainer className="pt-10">
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: 'easeInOut',
              }}
              className="mt-4 bg-gradient-to-br from-amber-600 to-slate-800 py-4 bg-clip-text text-center tracking-tight text-transparent text-5xl md:text-7xl font-bold"
            >
              Gallery
            </motion.h1>
          </LampContainer>
          <div className="h-screen w-full pt-20">
            <LayoutGrid cards={cards} />
          </div>
        </div>
      </section>
    </>
  )
}
