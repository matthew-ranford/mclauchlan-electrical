'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Image
import logo from '../../public/images/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: 'services', text: 'Services' },
    { href: 'meet-the-team', text: 'Meet the Team' },
    { href: 'gallery', text: 'Gallery' },
    { href: 'contact', text: 'Contact' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav
        className={`lg:flex lg:justify-between lg:items-center text-sky-700 navbar-container lg:bg-transparent rounded-2xl ${
          isOpen
            ? 'navbar-open navbar-full-height animate-slideIn'
            : 'navbar-closed animate-slideOut'
        }`}
      >
        <div className="flex justify-between items-center ps-4 sm:ps-2 md:ps-10">
          <Link href="/">
            <Image
              src={logo}
              width={220}
              height={85}
              alt="Company Logo"
              priority={true}
            />
          </Link>
          <span className="lg:hidden pe-4">
            <button
              className={`hamburger hamburger--collapse ${
                isOpen ? 'is-active' : ''
              }`}
              type="button"
              aria-label="button"
              aria-controls="navbar toggle button"
              onClick={toggleMenu}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </span>
        </div>
        <ul
          className={`lg:flex md:items-center text-center gap-5 text-3xl lg:text-xl pt-20 lg:pt-0 pe-0 md:pe-10 pb-2 md:pb-0 ${
            isOpen ? 'animate-slideIn' : 'hidden'
          }`}
        >
          {navLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              onClick={() => setIsOpen(!isOpen)}
            >
              <li
                style={{ listStyle: 'none' }}
                className="my-4 hover:text-amber-600 md:hover:scale-105 nav-link"
              >
                {link.text}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  )
}
