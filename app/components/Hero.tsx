'use client'

import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { MovingBorderButton } from '@/components/ui/moving-border'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { motion } from 'framer-motion'
import { bricolageGrotesque, leagueSpartan } from '@/fonts'
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
        >
          <track
            kind="captions"
            label="Video animation of lights turning on in house"
          />
          <source
            src="video/hero-video.mp4"
            type="video/mp4"
            className="full-screen-video"
          />
        </video>
        <div className="absolute pt-80 mt-20 md:mt-0 md:pt-60 2xl:pt-96 2xl:mt-56 px-2 md:px-8 2xl:px-60">
          <div className={bricolageGrotesque.className}>
            <h1>
              <TypewriterEffect words={mainHeader} />
            </h1>
          </div>
          <div className="text-stone-950 md:text-left text-xl md:text-2xl 2xl:text-4xl ps-0 md:ps-2 pt-4 space-y-4 2xl:space-y-10">
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
            <MovingBorderButton href="#" borderRadius="2.5rem" className="">
              <Link href="services">
                <span className="text-lg">Services ⚡</span>
              </Link>
            </MovingBorderButton>
            <MovingBorderButton href="#" borderRadius="2.5rem" className="">
              <Link href="contact">
                <span className="text-lg">Contact 📞</span>
              </Link>
            </MovingBorderButton>
          </motion.div>
        </div>
      </main>
    </>
  )
}

// checkout height for when you rotate dimensions on phone,ipad etc. might have to move padding up a little bit - currently cutting off second piece of text

// Try linear-gradient for hero video

// style={{
//   background:
//     'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
// }}

// Tried a test <div> round the Hero component in the page component and it worked:

// .test::after {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 89%;
//   background-image: linear-gradient(
//     180deg,
//     rgba(25, 26, 20, 0.4) 0%,
//     rgba(25, 26, 20, 0.35) 80%
//   );
// }

// bg-black, opacity-50 behind the paragraphs?
