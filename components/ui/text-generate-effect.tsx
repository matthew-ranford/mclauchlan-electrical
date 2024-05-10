'use client'
import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { cn } from '@/utils/cn'

export const TextGenerateEffect = ({
  words,
  className,
  initialDelay = 1800,
}: {
  words: string
  className?: string
  initialDelay?: number
}) => {
  const [scope, animate] = useAnimate()

  let wordsArray = words.split(' ')
  useEffect(() => {
    setTimeout(() => {
      animate(
        'span',
        {
          opacity: 1,
        },
        {
          duration: 1.5,
          delay: stagger(0.3),
        }
      )
    }, initialDelay)
  }, [scope.current, initialDelay])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const colour = word === 'electrical' ? 'text-amber-600' : ''

          return (
            <motion.span key={word + idx} className={`opacity-0 ${colour}`}>
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn('', className)}>
      <div className="">{renderWords()}</div>
    </div>
  )
}
