'use client'

import { LampContainer } from '@/components/ui/lamp'
import { LayoutGrid } from '@/components/ui/layout-grid'
import { motion } from 'framer-motion'

// Images
import gallery0 from '../../public/images/gallery/gallery-0.jpg'
import gallery1 from '../../public/images/gallery/gallery-1.jpg'
import gallery2 from '../../public/images/gallery/gallery-2.jpg'
import gallery3 from '../../public/images/gallery/gallery-3.jpg'
import gallery4 from '../../public/images/gallery/gallery-4.jpg'
import gallery5 from '../../public/images/gallery/gallery-5.jpg'

// LayoutGrid
const cards = [
  {
    id: 1,
    className: 'md:col-span-2',
    thumbnail: gallery0,
  },
  {
    id: 2,
    className: 'col-span-1',
    thumbnail: gallery1,
  },
  {
    id: 3,
    className: 'col-span-1',
    thumbnail: gallery2,
  },
  {
    id: 4,
    className: 'md:col-span-2',
    thumbnail: gallery3,
  },
  {
    id: 5,
    className: 'md:col-span-2',
    thumbnail: gallery4,
  },
  {
    id: 6,
    className: 'col-span-1',
    thumbnail: gallery5,
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
              className="-mt-10 bg-gradient-to-br from-amber-600 to-sky-900 bg-clip-text text-center tracking-tight text-transparent text-6xl md:text-7xl font-bold"
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
