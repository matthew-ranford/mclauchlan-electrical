'use client'

import { motion } from 'framer-motion'

export default function Template({ children }) {
  return (
    <>
      <motion.div
        initial={{ x: '-5vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100vw', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        {children}
      </motion.div>
    </>
  )
}
