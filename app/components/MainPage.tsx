'use client'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { MovingBorderButton } from '@/components/ui/moving-border'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

import Image from 'next/image'
import Link from 'next/link'

export default function MainPage() {
  // TextGenerateEffect
  const paragraphOne = 'We provide a high standard of electrical services.'

  const paragraphTwo = 'We are reliable and efficient.'

  // InfiniteMovingCards
  const testimonials = [
    {
      quote:
        'My company works closely with McLauchlan Eletrical and we have been impressed with their communication, efficency, work quality and professsionalism.',
      name: 'Nathan',
      title: '',
    },
    {
      quote:
        'We have engaged McLauchlan Eletrical to carry out eletrical works on various alterations we have made in our building. We must say that the service was excellent, attendance to review the work abd submit the quote was very fast, pricing extremely competitive and all site staff were friendly, time-efficient and left the areas clean and tidy when complete.',
      name: 'PFMB Properties Ltd',
      title: '',
    },
    {
      quote:
        'I highly recommend McLauchlan Eletrical to anyone wanting eletrical work carried out by a professional, competitive, competent and qualified company who offer advice and options, provide fast service and all works carried out are done to a high standard.',
      name: 'Megan',
      title: '',
    },
  ]

  return (
    <>
      <section className="pt-28">
        <div className="pb-10">
          <h1 className="text-center text-5xl font-bold">Our Services</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ps-8 pe-8">
          {/* First service - residential */}
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10">
            <Image
              src="/images/residential.png"
              alt=""
              height={500}
              width={500}
              className="object-contain mx-auto"
            />
            <p className="text-lg sm:text-xl text-black font-bold mt-4 mb-2 text-center pl-1">
              Residential
            </p>
          </BackgroundGradient>

          {/* Second service - commercial */}
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10">
            <Image
              src="/images/commercial.png"
              alt=""
              height={500}
              width={500}
              className="object-contain mx-auto"
            />
            <p className="text-lg sm:text-xl text-black font-bold mt-4 mb-2 text-center pl-1">
              Commercial
            </p>
          </BackgroundGradient>

          {/* Third service - industrial & marine */}
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10">
            <Image
              src="/images/industrial-and-marine.png"
              alt=""
              height={500}
              width={500}
              className="object-contain mx-auto"
            />
            <p className="text-lg sm:text-xl text-black font-bold mt-4 mb-2 text-center pl-1">
              Industrial & Marine
            </p>
          </BackgroundGradient>

          {/* Fourth service - heat pump */}
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10">
            <Image
              src="/images/heat-pump.png"
              alt=""
              height={500}
              width={500}
              className="object-contain mx-auto"
            />
            <p className="text-lg sm:text-xl text-black font-bold mt-4 mb-2 text-center pl-1">
              Heat Pump Servicing & Installation
            </p>
          </BackgroundGradient>
        </div>
        <div className="pt-14 text-center">
          <MovingBorderButton
            href="#"
            borderRadius="2.5rem"
            className="text-black flex justify-content-center"
          >
            <Link href="services">
              <span className="text-md md:text-lg">Learn More ➡️</span>
            </Link>
          </MovingBorderButton>
        </div>

        {/* Video section */}
        <div className="main-page-video-wrapper mt-20">
          <video
            autoPlay={true}
            loop={true}
            playsInline={true}
            muted={true}
            className="full-screen-video"
          >
            <track kind="captions" label="Video animation of a lightbulb" />
            <source src="/video/main-page-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute pt-48 md:pt-72 2xl:pt-96 2xl:mt-56 px-8 md:px-16 2xl:px-60 text-black md:text-left text-2xl 2xl:text-3xl space-y-6 2xl:space-y-10">
            <TextGenerateEffect words={paragraphOne} />
            <TextGenerateEffect words={paragraphTwo} initialDelay={3500} />
          </div>
        </div>

        {/* Moving cards */}
        <div className="mt-20">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
          />
        </div>
      </section>
    </>
  )
}

// Look at maybe putting images in the services cards
// Try and make it so the textgenerateffect renders when its in view, not on page load
