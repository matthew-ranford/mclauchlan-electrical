'use client'

import { LampContainer } from '@/components/ui/lamp'
import { SparklesCore } from '@/components/ui/sparkles'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { motion } from 'framer-motion'

// Images
import teamMember0 from '../../public/images/team/sam.png'
import teamMember1 from '../../public/images/team/steve.png'

const sam = teamMember0
const steve = teamMember1

export default function MeetTheTeam() {
  return (
    <>
      <section>
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
            Meet the Team
          </motion.h1>
        </LampContainer>
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-20 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <div className=" w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
                <h1 className="text-5xl lg:text-7xl 2xl:text-8xl font-bold text-center text-sky-900 relative z-20 tracking-wide">
                  Our <span className="text-amber-600">Team</span>
                </h1>
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
          </div>
        </section>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            <DirectionAwareHover imageUrl={sam} alt="Sam McLauchlan - owner">
              <h2 className="font-bold text-xl">Sam McLauchlan</h2>
              <p className="font-bold text-amber-600 text-sm">Owner</p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={steve} alt="Steven Evans - lapdog">
              <h2 className="font-bold text-xl">Steven Evans</h2>
              <p className="font-bold text-amber-600 text-sm">Lapdog</p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={sam} alt="Third employee">
              <h2 className="font-bold text-xl">Sam McLauchlan</h2>
              <p className="font-bold text-amber-600 text-sm">Owner</p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={steve} alt="Fourth employee">
              <h2 className="font-bold text-xl">Steven Evans</h2>
              <p className="font-bold text-amber-600 text-sm">Lapdog</p>
            </DirectionAwareHover>
          </div>
        </div>
      </section>
    </>
  )
}
