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
      <nav className="md:flex md:justify-between md:items-center text-stone-500 navbar-container backdrop-blur-lg md:backdrop-blur-none">
        <div className="flex justify-between items-center ps-4 sm:ps-2 md:ps-6">
          <Link href="/">
            <Image
              src={logo}
              width={220}
              height={85}
              alt="Company Logo"
              priority={true}
            />
          </Link>
          <span className="md:hidden pe-4">
            <button
              className={`hamburger hamburger--collapse ${
                isOpen ? 'is-active' : ''
              }`}
              type="button"
              onClick={toggleMenu}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </span>
        </div>
        <ul
          className={`md:flex md:items-center text-center gap-5 text-xl pt-5 md:pt-0 pe-0 md:pe-4 pb-2 md:pb-0 ${
            isOpen ? '' : 'hidden'
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
                className="my-4 md:my-0 hover:text-amber-600 md:hover:scale-105 nav-link"
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
