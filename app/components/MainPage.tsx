'use client'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { MovingBorderButton } from '@/components/ui/moving-border'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

import Image from 'next/image'

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
      <section className="pt-28 ">
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
        <div className="mt-20">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
          />
        </div>

        <div className="mt-20 pt-10 pb-10 bg-stone-800 rounded-2xl border text-white flex flex-col items-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="text-center lg:pe-20 my-auto">
              <h2 className="text-2xl 2xl:text-4xl text-amber-600 font-bold pb-6 pl-4">
                Contact
              </h2>
              <ul className="text-lg 2xl:text-xl text-sky-700 space-y-4">
                <li>📞 027 211 0807</li>
                <li>📧 sam@mclauchlaneletrical.co.nz</li>
              </ul>
            </div>
            <div className="flex justify-center items-center pt-10 lg:pt-0 pl-0 lg:pl-10">
              <Image
                src="/images/logo.png"
                width={250}
                height={85}
                alt="Company Logo"
                priority={true}
              />
            </div>
            <div className="text-center lg:ps-20 my-auto">
              <h2 className="text-2xl 2xl:text-4xl text-amber-600 font-bold pb-6 lg:pt-24 pl-4">
                Navigation
              </h2>
              <ul className="text-lg 2xl:text-xl text-sky-700 space-y-2">
                <li>🏠 Home</li>
                <li>⚡ Services</li>
                <li>👨🏽‍👨🏽‍👦🏽‍👦🏽 Meet The Team</li>
                <li>🖼️ Gallery</li>
                <li>📞 Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Look at maybe putting images in the services cards
// Try and make it so the textgenerateffect renders when its in view, not on page load
