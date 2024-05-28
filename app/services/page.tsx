'use client'

import { Tabs, Tab } from '@nextui-org/react'
import { LampContainer } from '@/components/ui/lamp'
import { SparklesCore } from '@/components/ui/sparkles'
import { motion } from 'framer-motion'

export default function Services() {
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
              className="-mt-10 bg-gradient-to-br from-amber-600 to-sky-900 bg-clip-text text-center tracking-tight text-transparent text-6xl md:text-7xl font-bold"
            >
              Services
            </motion.h1>
          </LampContainer>
          <div className="flex flex-wrap justify-center gap-4 pt-10 pe-6">
            <Tabs
              aria-label="Tabs variants"
              variant="bordered"
              color="warning"
              size="lg"
            >
              <Tab key="residential" title="Residential" />
              <Tab key="commercial" title="Commercial" />
              <Tab key="industrial" title="Industrial" />
              <Tab
                key="heat pump servicing & installation"
                title="Heat Pump Servicing & Installation"
              />
            </Tabs>
          </div>
          <div className="flex justify-center pt-10">
            <div className="max-w-2xl text-xl 2xl:text-2xl ps-8 pe-6">
              <p className="pt-4">
                McLauchlan Electrical Ltd established 2018 by Sam McLauchlan who
                has over 15 years of electrical experience.
              </p>
              <p className="pt-4">
                We are a residential, commercial, marine and industrial
                contracting company providing electrical services to the
                Wellington region.
              </p>
              <p className="pt-4">
                We provide a high standard of electrical services. We are
                reliable and efficient and specialise in the following
                electrical services.
              </p>
            </div>
          </div>
          {/* Residential section */}
          <div className="pt-20 w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="text-5xl lg:text-9xl font-bold text-center text-sky-900 relative z-20 tracking-wide">
              Residential
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
                particleColor="#be185d"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <div className="max-w-2xl text-xl 2xl:text-2xl ps-8 pe-6">
              <ul className="pb-4">
                Whether you are contemplating a new build or requiring
                electrical work on your existing property, we are experienced in
                all residential electrical work and can assist you with the
                following:
              </ul>
              <li className="pt-4">Rewires</li>
              <li className="pt-4">Renovations</li>
              <li className="pt-4">Appliance Installation</li>
              <li className="pt-4">Outdoor Lighting</li>
              <li className="pt-4">New lighting installations</li>
              <li className="pt-4">Security camera and alarm installation</li>
              <li className="pt-4">After hours call outs</li>
              <li className="pt-4">Electrical faults</li>
              <li className="pt-4">New builds</li>
            </div>
          </div>

          {/* Commercial section */}
          <div className="pt-20 w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="text-5xl lg:text-9xl font-bold text-center text-sky-900 relative z-20 tracking-wide">
              Commercial
            </h1>
            <div className="w-[40rem] h-40 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                id="2"
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#052e16"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <div className="max-w-2xl text-xl 2xl:text-2xl ps-8 pe-6">
              <p className="pt-4">
                We have extensive experience in commercial installations from
                main switch boards, shop fit outs, cable tray installations,
                seismic strengthening and commercial lighting design from base
                build to fit out.
              </p>
              <p className="pt-4">
                Whether you are a small or large business, we can assist you
                with your commercial electrical needs.
              </p>
            </div>
          </div>

          {/* Industrial section */}
          <div className="pt-20 w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="text-5xl lg:text-9xl font-bold text-center text-sky-900 relative z-20 tracking-wide">
              Industrial
            </h1>
            <div className="w-[40rem] h-40 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                id="3"
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#b91c1c"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <div className="max-w-2xl text-xl 2xl:text-2xl ps-8 pe-6">
              <p className="pt-4">
                We repair and maintain industrial machinery. We take care of
                inspection and testing for preventative maintenance.
              </p>
              <p className="pt-4">
                We can assist with any other industrial requirements such as
                emergency lighting, cleaning of distribution boards, new
                installations and more.
              </p>
            </div>
          </div>

          {/* Heat pump section */}
          <div className="pt-20 w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="text-5xl lg:text-9xl font-bold text-center text-sky-900 relative z-20 tracking-wide ps-2 pe-2">
              Heat Pump Servicing & Installation
            </h1>
            <div className="w-[40rem] h-40 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                id="4"
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#2563eb"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <div className="max-w-2xl text-xl 2xl:text-2xl ps-8 pe-6">
              <p className="pt-4">
                We supply and install the highest quality heat pumps. Our heat
                pump specialists are experts in the industry ensuring that you
                get the best product for your needs.
              </p>
              <p className="pt-4">
                We also service heat pumps and recommend annual servicing of all
                heat pumps we install. Call us today for a quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
