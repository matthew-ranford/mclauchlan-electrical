'use client'

import Image from 'next/image'
import Link from 'next/link'

// Font
import { bricolageGrotesque } from '@/fonts'

import { BackgroundGradient } from '@/components/ui/background-gradient'
import { MovingBorderButton } from '@/components/ui/moving-border'
import { Highlight } from '@/components/hero-highlight'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import { SparklesCore } from '@/components/ui/sparkles'

// Images for services section
import residential from '../../public/images/services/residential.png'
import commerical from '../../public/images/services/commercial.png'
import industrial from '../../public/images/services/industrial-and-marine.png'
import heatpump from '../../public/images/services/heat-pump.png'

export default function MainPage() {
  // TextGenerateEffect
  const paragraphOne = [
    { text: 'We' },
    { text: 'provide' },
    { text: 'a' },
    { text: 'high' },
    { text: 'standard' },
    { text: 'of' },
    { text: 'electrical', className: 'text-amber-600' },
    { text: 'services.' },
  ]

  const paragraphTwo = [
    { text: 'We' },
    { text: 'are' },
    { text: 'reliable' },
    { text: 'and' },
    { text: 'efficient.' },
  ]

  // InfiniteMovingCards
  const testimonials = [
    {
      name: 'My company works closely with McLauchlan Eletrical and we have been impressed with their communication, efficency, work quality and professionalism.',
      title: 'Nathan',
      quote: '⭐⭐⭐⭐⭐',
    },
    {
      name: 'We have engaged McLauchlan Eletrical to carry out eletrical works on various alterations we have made in our building. We must say that the service was excellent, attendance to review the work and submit the quote was very fast, pricing extremely competitive and all site staff were friendly, time-efficient and left the areas clean and tidy when complete.',
      title: 'PFMB Properties Ltd',
      quote: '⭐⭐⭐⭐⭐',
    },
    {
      name: 'I highly recommend McLauchlan Eletrical to anyone wanting eletrical work carried out by a professional, competitive, competent and qualified company who offer advice and options, provide fast service and all works carried out are done to a high standard.',
      title: 'Megan',
      quote: '⭐⭐⭐⭐⭐',
    },
  ]

  return (
    <>
      <section className="pt-52 md:pt-40 2xl:pt-48">
        <div className="pb-10 md:pb-2">
          <div className=" w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className={bricolageGrotesque.className}>
              <h1 className="text-5xl lg:text-7xl 2xl:text-8xl font-bold text-center text-sky-900 relative z-20 tracking-wide">
                Our <span className="text-amber-600">Services</span>
              </h1>
            </div>
            <div className="w-[40rem] h-40 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                id="1"
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#b45309"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ps-8 pe-8 pt-10">
          {/* First service - residential */}
          <Link href="/services#residential">
            <BackgroundGradient className="rounded-[22px] p-4">
              <Image
                src={residential}
                alt="white outline of residential home"
                height={500}
                width={500}
                className="object-contain mx-auto"
              />
              <p className="text-lg sm:text-xl text-stone-900 font-bold mt-8 mb-2 text-center pl-1">
                Residential
              </p>
            </BackgroundGradient>
          </Link>

          {/* Second service - commercial */}
          <Link href="/services#commercial">
            <BackgroundGradient className="rounded-[22px] p-4">
              <Image
                src={commerical}
                alt="white outline of commerical buildings"
                height={500}
                width={500}
                className="object-contain mx-auto"
              />
              <p className="text-lg sm:text-xl text-stone-900 font-bold mt-8 mb-2 text-center pl-1">
                Commercial
              </p>
            </BackgroundGradient>
          </Link>

          {/* Third service - industrial & marine */}
          <Link href="/services#industrial">
            <BackgroundGradient className="rounded-[22px] p-4">
              <Image
                src={industrial}
                alt="white outline of industrial factory"
                height={500}
                width={500}
                className="object-contain mx-auto"
              />
              <p className="text-lg sm:text-xl text-stone-900 font-bold mt-8 mb-2 text-center pl-1">
                Industrial & Marine
              </p>
            </BackgroundGradient>
          </Link>

          {/* Fourth service - heat pump */}
          <Link href="/services#heatpump-servicing-and-installation">
            <BackgroundGradient className="rounded-[22px] p-4">
              <Image
                src={heatpump}
                alt="white outline of heatpump"
                height={500}
                width={500}
                className="object-contain mx-auto"
              />
              <p className="text-lg sm:text-xl text-stone-900 font-bold mt-8 mb-2 text-center pl-1">
                Heat Pumps
              </p>
            </BackgroundGradient>
          </Link>
        </div>
        <div className="pt-14 pb-16 text-center">
          <MovingBorderButton
            href="#"
            borderRadius="2.5rem"
            className="flex justify-content-center transition delay-150 hover:bg-amber-600 hover:duration-700 ease-in-out"
          >
            <Link href="services">
              <span className="text-md md:text-lg">Learn More ➡️</span>
            </Link>
          </MovingBorderButton>
        </div>

        {/* Video section */}
        <div className="main-page-video-wrapper mt-32 2xl:mt-72">
          <video
            autoPlay={true}
            loop={false}
            playsInline={true}
            muted={true}
            className="full-screen-video"
          >
            <track kind="captions" label="Video animation of a lightbulb" />
            <source src="video/main-page-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute pt-72 md:pt-80 2xl:pt-80 mt-20 md:mt-14 2xl:mt-52 px-2 md:px-8 2xl:px-60">
            <TypewriterEffectSmooth words={paragraphOne} />
            <TypewriterEffectSmooth words={paragraphTwo} delay={1.8} />
          </div>
        </div>

        {/* Moving cards */}

        <div className="mt-32 pb-20">
          <div className="text-center pb-20 ps-2 pe-2">
            <div className={bricolageGrotesque.className}>
              <h1 className="text-stone-900 font-bold text-2xl md:text-5xl 2xl:text-6xl tracking-wide">
                What our{' '}
                <Highlight>
                  <span className="text-amber-600">clients</span>
                </Highlight>{' '}
                have to say?
              </h1>
            </div>
          </div>

          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </section>
    </>
  )
}
