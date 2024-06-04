'use client'

import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { MovingBorderButton } from '@/components/ui/moving-border'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { motion } from 'framer-motion'
import { bricolageGrotesque } from '@/fonts'
import Link from 'next/link'

export default function Hero() {
  // TypeWriteEffect
  const mainHeader = [
    {
      text: 'McLauchlan',
      className: 'text-sky-900',
    },
    {
      text: 'Eletrical',
      className: 'text-amber-600',
    },
  ]

  // TextGenerateEffect
  const paragraphOne =
    'Residential, Commercial, Marine & Industrial Contracting Company'

  const paragraphTwo = 'Providing electrical services to the Wellington region'

  return (
    <>
      <main className="hero-wrapper">
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          className="full-screen-video"
          aria-label="video animation of lights turning on in a house, no audio"
        >
          <source
            src="video/hero-video.mp4"
            type="video/mp4"
            className="full-screen-video"
          />
        </video>
        <div className="absolute mt-20 md:mt-0 pt-52 sm:pt-32 md:pt-52 lg:pt-56 2xl:pt-72 2xl:mt-44 px-2 md:px-8 2xl:px-10">
          <div className={bricolageGrotesque.className}>
            <h1>
              <TypewriterEffect words={mainHeader} />
            </h1>
          </div>
          <div className="text-stone-600 lg:text-stone-900 md:text-left text-xl md:text-2xl 2xl:text-4xl ps-0 md:ps-2 pt-8 space-y-4 2xl:space-y-6">
            <TextGenerateEffect words={paragraphOne} />
            <TextGenerateEffect words={paragraphTwo} initialDelay={3500} />
          </div>

          <motion.div
            className="flex pt-10 md:pt-6 2xl:pt-10 space-x-6 md:space-x-10"
            initial={{ opacity: 0, x: -30 }}
            transition={{
              duration: 1.8,
              delay: 5.5,
            }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Link href="services">
              <MovingBorderButton
                href="#"
                borderRadius="2.5rem"
                className="transition delay-150 hover:bg-amber-600 hover:duration-700 ease-in-out"
              >
                <span className="text-lg">Services ⚡</span>
              </MovingBorderButton>
            </Link>
            <Link href="contact">
              <MovingBorderButton
                href="#"
                borderRadius="2.5rem"
                className="transition delay-150 hover:bg-amber-600 hover:duration-700 ease-in-out"
              >
                <span className="text-lg">Contact 📞</span>
              </MovingBorderButton>
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  )
}

// checkout height for when you rotate dimensions on phone,ipad etc. might have to move padding up a little bit - currently cutting off second piece of text
