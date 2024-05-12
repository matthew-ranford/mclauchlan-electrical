'use client'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { MovingBorderButton } from '@/components/ui/moving-border'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

import Image from 'next/image'

export default function MainPage() {
  // TextGenerateEffect
  const paragraphOne = 'We provide a high standard of electrical services.'

  const paragraphTwo = 'We are reliable and efficient.'

  return (
    <>
      <section className="pt-28 pb-20">
        <div className="pb-10">
          <h1 className="text-center text-5xl font-bold">Our Services</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ps-8 pe-8">
          {/* First service */}
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10">
            <Image
              src="/images/logo.png"
              alt=""
              height={200}
              width={200}
              className="object-contain"
            />
            <p className="text-lg sm:text-xl text-black font-bold mt-4 mb-2 text-center pl-1">
              Residential
            </p>
          </BackgroundGradient>

          {/* Second service */}
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10">
            <Image
              src="/images/logo.png"
              alt=""
              height={200}
              width={200}
              className="object-contain"
            />
            <p className="text-lg sm:text-xl text-black font-bold mt-4 mb-2 text-center pl-1">
              Commercial
            </p>
          </BackgroundGradient>

          {/* Third service */}
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10">
            <Image
              src="/images/logo.png"
              alt=""
              height={200}
              width={200}
              className="object-contain"
            />
            <p className="text-lg sm:text-xl text-black font-bold mt-4 mb-2 text-center pl-1">
              Industrial & Marine
            </p>
          </BackgroundGradient>

          {/* Fourth service */}
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10">
            <Image
              src="/images/logo.png"
              alt=""
              height={200}
              width={200}
              className="object-contain"
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
            <span className="text-md md:text-lg">Learn More ➡️</span>
          </MovingBorderButton>
        </div>

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
      </section>
    </>
  )
}

// Look at maybe putting images in the services cards
