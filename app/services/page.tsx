'use client'

import { LampContainer } from '@/components/ui/lamp'
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
              className="mt-4 bg-gradient-to-br from-amber-600 to-slate-800 py-4 bg-clip-text text-center tracking-tight text-transparent text-5xl md:text-7xl font-bold"
            >
              Services
            </motion.h1>
          </LampContainer>
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
        </div>
      </section>
    </>
  )
}
