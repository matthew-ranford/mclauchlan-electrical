'use client'

import { LampContainer } from '@/components/ui/lamp'
// import { LayoutGrid } from '@/components/ui/layout-grid'
import { ParallaxScroll } from '@/components/ui/parallax-scroll'
import { motion } from 'framer-motion'

// Images
import gallery0 from '../../public/images/gallery/gallery-0.jpg'
import gallery1 from '../../public/images/gallery/gallery-1.jpg'
import gallery2 from '../../public/images/gallery/gallery-2.jpg'
import gallery3 from '../../public/images/gallery/gallery-3.jpg'
import gallery4 from '../../public/images/gallery/gallery-4.jpg'
import gallery5 from '../../public/images/gallery/gallery-5.jpg'
import gallery6 from '../../public/images/gallery/gallery-6.jpg'
import gallery7 from '../../public/images/gallery/gallery-7.jpg'

// parallax-scroll
const images = [
  gallery0,

  gallery3,

  gallery4,

  gallery1,

  gallery2,

  gallery5,

  gallery6,

  gallery7,
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
              className="-mt-10 2xl:pt-72 bg-gradient-to-br from-amber-500 to-amber-600 bg-clip-text text-center tracking-tight text-transparent text-6xl md:text-7xl font-bold"
            >
              Gallery
            </motion.h1>
          </LampContainer>
          <div className="h-screen w-full pt-20">
            <ParallaxScroll images={images} />
          </div>
        </div>
      </section>
    </>
  )
}
