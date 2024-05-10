'use client'

import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { MovingBorderButton } from '@/components/ui/moving-border'
import { motion } from 'framer-motion'

export default function Hero() {
  // TypeWriteEffect
  const mainHeader = [
    {
      text: 'McLauchlan',
      className: 'text-blue-900',
    },
    {
      text: 'Eletrical',
      className: 'text-amber-600',
    },
  ]

  return (
    <>
      <div className="hero-wrapper">
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          className="full-screen-video"
        >
          <track
            kind="captions"
            label="Video animation of houses with lights on outside"
          />
          <source src="/video/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute pt-48 md:pt-72 2xl:pt-96 2xl:mt-56 px-8 md:px-16 2xl:px-60 ">
          <h1>
            <TypewriterEffect words={mainHeader} />
          </h1>
          <div className="text-white md:text-left text-2xl 2xl:text-3xl px-4 pt-6 space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              transition={{
                duration: 1.8,
                delay: 2.4,
              }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              Residential, Commercial, Marine & Industrial Contracting Company
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -25 }}
              transition={{
                duration: 1.8,
                delay: 3,
              }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              Providing <span className="text-amber-600">electrical</span>{' '}
              services to the Wellington region
            </motion.p>
          </div>
          <motion.div
            className="flex pt-10 md:pt-6 ps-2 space-x-6 md:space-x-10"
            initial={{ opacity: 0, x: -30 }}
            transition={{
              duration: 1.8,
              delay: 3.4,
            }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <MovingBorderButton href="#" borderRadius="2.5rem" className="">
              <span className="text-lg">Services ⚡</span>
            </MovingBorderButton>
            <MovingBorderButton href="#" borderRadius="2.5rem" className="">
              <span className="text-lg">Contact 📞</span>
            </MovingBorderButton>
          </motion.div>
        </div>
      </div>
    </>
  )
}

// checkout height for when you rotate dimensions on phone,ipad etc. might have to move padding up a little bit - currently cutting off second piece of text
