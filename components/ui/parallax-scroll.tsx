'use client'
import { useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/utils/cn'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react'

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[]
  className?: string
}) => {
  const gridRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ['start start', 'end start'],
  })

  // Add in modal for each image to be clickable and expand
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const openModal = (image: string) => {
    setSelectedImage(image)
    onOpen()
  }

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200])
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200])

  const third = Math.ceil(images.length / 3)

  const firstPart = images.slice(0, third)
  const secondPart = images.slice(third, 2 * third)
  const thirdPart = images.slice(2 * third)

  return (
    <div
      className={cn(
        'h-[40rem] items-start overflow-y-auto w-full pb-20',
        className
      )}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-20 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={'grid-1' + idx}>
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 cursor-pointer"
                height="400"
                width="400"
                alt="thumbnail"
                onClick={() => openModal(el)}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={'grid-2' + idx}>
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 cursor-pointer"
                height="400"
                width="400"
                alt="thumbnail"
                onClick={() => openModal(el)}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={'grid-3' + idx}>
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 cursor-pointer"
                height="400"
                width="400"
                alt="thumbnail"
                onClick={() => openModal(el)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        backdrop="blur"
        placement="center"
        className="bg-transparent"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader />
              <ModalBody>
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    className="rounded-lg"
                    height="800"
                    width="800"
                    alt="enlarged image"
                  />
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="light"
                  onPress={onClose}
                  className="text-xl text-stone-900"
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
