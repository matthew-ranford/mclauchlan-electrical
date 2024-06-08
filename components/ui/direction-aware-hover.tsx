'use client'

import { useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/utils/cn'

export const DirectionAwareHover = ({
  imageUrl,
  alt,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: StaticImageData
  alt: string
  children: React.ReactNode | string
  childrenClassName?: string
  imageClassName?: string
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const [direction, setDirection] = useState<
    'top' | 'bottom' | 'left' | 'right' | string
  >('left')

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return

    const direction = getDirection(event, ref.current)
    updateDirection(direction)
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const touch = event.touches[0]
    const simulatedMouseEvent = {
      clientX: touch.clientX,
      clientY: touch.clientY,
    } as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>
    const direction = getDirection(simulatedMouseEvent, ref.current)
    updateDirection(direction)
  }

  const updateDirection = (direction: number) => {
    console.log('direction', direction)
    switch (direction) {
      case 0:
        setDirection('top')
        break
      case 1:
        setDirection('right')
        break
      case 2:
        setDirection('bottom')
        break
      case 3:
        setDirection('left')
        break
      default:
        setDirection('left')
        break
    }
  }

  const getDirection = (
    ev: { clientX: number; clientY: number },
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect()
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1)
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1)
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
    return d
  }

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
      ref={ref}
      className={cn(
        'md:h-96 w-60 h-60 md:w-96 rounded-lg overflow-hidden group/card relative',
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          <motion.div className="group-hover/card:block hidden absolute inset-0 w-full h-full z-10 transition duration-500" />
          <motion.div
            variants={variants}
            className="h-full w-full relative"
            transition={{
              duration: 0.3,
              ease: 'easeOut',
            }}
          >
            <Image
              alt={alt}
              className={cn('h-full w-full object-cover', imageClassName)}
              width="1000"
              height="1000"
              src={imageUrl}
              style={{ borderRadius: '48%' }}
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            className={cn(
              'text-stone-900 absolute bottom-4 left-4 z-40',
              childrenClassName
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

const variants = {
  initial: {
    x: 0,
  },

  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
}

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -20,
    opacity: 1,
  },
  bottom: {
    y: 2,
    opacity: 1,
  },
  left: {
    x: -2,
    opacity: 1,
  },
  right: {
    x: 20,
    opacity: 1,
  },
}
