'use client'

import Image from 'next/image'
import { LampContainer } from '@/components/ui/lamp'
import { SparklesCore } from '@/components/ui/sparkles'
import { motion } from 'framer-motion'

export default function MeetTheTeam() {
  return (
    <>
      <section>
        <div className="pb-10">
          <LampContainer className="pt-10">
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: 'easeInOut',
              }}
              className="mt-4 bg-gradient-to-br from-amber-600 to-slate-800 py-4 bg-clip-text text-center tracking-tight text-transparent text-5xl md:text-7xl font-bold"
            >
              Meet the Team
            </motion.h1>
          </LampContainer>
          <section className="text-gray-600 body-font">
            <div className="container px-5 pt-20 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <div className=" w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
                  <h1 className="text-4xl md:text-5xl lg:text-9xl font-bold text-center text-amber-600 relative z-20 tracking-wide">
                    Our Team
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
                      particleColor="#86198f"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/2">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <Image
                      alt="team member | sam"
                      className="flex-shrink-0 w-60 h-60 object-cover object-center sm:mb-0 mb-4"
                      src="/images/sam.png"
                      height={500}
                      width={500}
                    />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-xl text-gray-900">
                        Sam McLauchlan
                      </h2>
                      <h3 className="text-gray-600 mb-3">Owner</h3>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam, possimus!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/2">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <Image
                      alt="team member | steve"
                      className="flex-shrink-0 w-60 h-60 object-cover object-center sm:mb-0 mb-4"
                      src="/images/steve.png"
                      height={500}
                      width={500}
                    />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-xl text-gray-900">
                        Steven Evans
                      </h2>
                      <h3 className="text-gray-500 mb-3">Lapdog</h3>
                      <p className="mb-4">
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam, possimus!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/2">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <Image
                      alt="team member | sam"
                      className="flex-shrink-0 w-60 h-60 object-cover object-center sm:mb-0 mb-4"
                      src="/images/sam.png"
                      height={500}
                      width={500}
                    />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-xl text-gray-900">
                        Sam McLauchlan
                      </h2>
                      <h3 className="text-gray-600 mb-3">Owner</h3>
                      <p className="mb-4">
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam, possimus!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/2">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <Image
                      alt="team member | steve"
                      className="flex-shrink-0 w-60 h-60 object-cover object-center sm:mb-0 mb-4"
                      src="/images/steve.png"
                      height={500}
                      width={500}
                    />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-xl text-gray-900">
                        Steven Evans
                      </h2>
                      <h3 className="text-gray-500 mb-3">Lapdog</h3>
                      <p className="mb-4">
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam, possimus!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
