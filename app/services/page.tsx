'use client'

import { Tabs, Tab } from '@nextui-org/react'
import { LampContainer } from '@/components/ui/lamp'
import { MovingBorderButton } from '@/components/ui/moving-border'
import { Highlight } from '@/components/ui/hero-highlight'

import { motion } from 'framer-motion'

import { bricolageGrotesque } from '@/fonts'
import Link from 'next/link'

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
              className="-mt-10 2xl:pt-72 bg-gradient-to-br from-amber-500 to-amber-600 bg-clip-text text-center tracking-tight text-transparent text-6xl md:text-7xl font-bold"
            >
              Services
            </motion.h1>
          </LampContainer>
          <div
            className="flex flex-wrap justify-center gap-4 pt-10 pe-6"
            id="our-services"
          >
            <Tabs
              aria-label="Tabs variants"
              variant="solid"
              color="warning"
              size="lg"
              isVertical={true}
              defaultSelectedKey="top"
              disabledKeys={['top']}
            >
              <Tab key="top" title="Our Services" />
              <Tab
                key="residential"
                title={
                  <Link href="#residential" className="text-stone-900">
                    Residential
                  </Link>
                }
              />

              <Tab
                key="commercial"
                title={
                  <Link href="#commercial" className="text-stone-900">
                    Commercial
                  </Link>
                }
              />
              <Tab
                key="industrial"
                title={
                  <Link href="#industrial" className="text-stone-900">
                    Industrial
                  </Link>
                }
              />
              <Tab
                key="heat pump servicing & installation"
                title={
                  <Link
                    href="#heatpump-servicing-and-installation"
                    className="text-stone-900"
                  >
                    Heat Pump Servicing & Installation
                  </Link>
                }
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
          <div className={bricolageGrotesque.className} id="residential">
            <h1 className="text-center font-bold text-3xl md:text-5xl 2xl:text-6xl tracking-wide pt-20">
              <Highlight>
                <span className="text-zinc-300">Residential</span>
              </Highlight>
            </h1>
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
          <div className={bricolageGrotesque.className} id="commercial">
            <h1 className="text-center font-bold text-3xl md:text-5xl 2xl:text-6xl tracking-wide pt-20">
              <Highlight>
                <span className="text-zinc-300">Commercial</span>
              </Highlight>
            </h1>
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
          <div className={bricolageGrotesque.className} id="industrial">
            <h1 className="text-center font-bold text-3xl md:text-5xl 2xl:text-6xl tracking-wide pt-20">
              <Highlight>
                <span className="text-zinc-300">Industrial</span>
              </Highlight>
            </h1>
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

          <div
            className={bricolageGrotesque.className}
            id="heatpump-servicing-and-installation"
          >
            <h1 className="text-center font-bold text-3xl md:text-5xl 2xl:text-6xl tracking-wide pt-20">
              <Highlight>
                <span className="text-zinc-300">
                  Heat Pump Servicing & Installation
                </span>
              </Highlight>
            </h1>
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
        <div className="text-center pt-10">
          <Link href="#our-services">
            <MovingBorderButton
              borderRadius="2.5rem"
              className="flex justify-content-center transition delay-150 hover:bg-amber-600 hover:duration-700 ease-in-out"
            >
              <span className="text-md md:text-lg">Back to top</span>
            </MovingBorderButton>
          </Link>
        </div>
      </section>
    </>
  )
}
