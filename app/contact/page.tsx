'use client'

import { LampContainer } from '@/components/ui/lamp'
import { MovingBorderButton } from '@/components/ui/moving-border'
import { motion } from 'framer-motion'

export default function Contact() {
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
              className="-mt-10 2xl:pt-72 bg-gradient-to-br from-amber-400 to-amber-600 bg-clip-text text-center tracking-tight text-transparent text-6xl md:text-7xl font-bold"
            >
              Contact
            </motion.h1>
          </LampContainer>
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
              <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.4855746582207!2d174.92826407521338!3d-41.21118763573824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38aa7d3e8a48a1%3A0xeae07fa10ab5678d!2s17%20Fairfield%20Avenue%2C%20Fairfield%2C%20Lower%20Hutt%205011!5e0!3m2!1sen!2snz!4v1716450058854!5m2!1sen!2snz"
                  style={{
                    // filter: 'grayscale(1) contrast(1.2)',
                    opacity: '0.7',
                  }}
                ></iframe>
                <div className="main-background-colour relative flex flex-wrap py-6 rounded shadow-md">
                  <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                      ADDRESS
                    </h2>
                    <p className="mt-1">
                      McLauchlan Eletrical, 17 Fairfield Avenue, Fairfield,
                      Lower Hutt 5011
                    </p>
                  </div>
                  <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                      EMAIL
                    </h2>
                    <a
                      href="mailto:sam@mclauchlaneletrical.co.nz"
                      className="text-sky-900 hover:text-amber-500 leading-relaxed"
                    >
                      sam@mclauchlaneletrical.co.nz
                    </a>
                    <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
                      PHONE
                    </h2>
                    <a
                      href="tel: 027 211 0807"
                      className="text-sky-900 hover:text-amber-500 leading-relaxed"
                    >
                      027 211 0807
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 main-background-colour flex flex-col md:ml-auto w-full md:py-8 mt-20 md:mt-0">
                <h2 className="text-gray-900 text-xl mb-3 font-medium title-font">
                  Questions? Fill out the form to contact Sam!
                </h2>
                <p className="leading-relaxed mb-2 text-gray-600">
                  Alternatively, email or call Sam at one of the links below!
                </p>
                <p className="leading-relaxed mb-5 text-gray-600">
                  We will get back to you as soon as possible!
                </p>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-500 focus:border-amber-600 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-y leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="text-center">
                  <MovingBorderButton
                    href="#"
                    borderRadius="2.5rem"
                    className="text-black"
                  >
                    <span className="text-md md:text-lg">Submit</span>
                  </MovingBorderButton>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
