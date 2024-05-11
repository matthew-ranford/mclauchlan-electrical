'use client'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { MovingBorderButton } from '@/components/ui/moving-border'

import Image from 'next/image'

export default function MainPage() {
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
      </section>
    </>
  )
}
