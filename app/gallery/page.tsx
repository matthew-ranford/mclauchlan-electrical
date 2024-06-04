'use client'

import { LampContainer } from '@/components/ui/lamp'
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
  { src: gallery0, alt: 'Gallery Image 0' },
  { src: gallery3, alt: 'Gallery Image 3' },
  { src: gallery4, alt: 'Gallery Image 4' },
  { src: gallery1, alt: 'Gallery Image 1' },
  { src: gallery2, alt: 'Gallery Image 2' },
  { src: gallery5, alt: 'Gallery Image 5' },
  { src: gallery6, alt: 'Gallery Image 6' },
  { src: gallery7, alt: 'Gallery Image 7' },
  { src: gallery0, alt: 'Gallery Image 0 again' },
  { src: gallery3, alt: 'Gallery Image 3 again' },
  { src: gallery4, alt: 'Gallery Image 4 again' },
  { src: gallery1, alt: 'Gallery Image 1 again' },
  { src: gallery2, alt: 'Gallery Image 2 again' },
  { src: gallery5, alt: 'Gallery Image 5 again' },
  { src: gallery6, alt: 'Gallery Image 6 again' },
  { src: gallery7, alt: 'Gallery Image 7 again' },
]

export default function Gallery() {
  return (
    <>
      <section>
        <div className="">
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
          <ParallaxScroll images={images} />
        </div>
      </section>
    </>
  )
}
