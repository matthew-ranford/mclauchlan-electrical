'use client'

import { LampContainer } from '@/components/ui/lamp'
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
              Gallery
            </motion.h1>
          </LampContainer>
        </div>
      </section>
    </>
  )
}
