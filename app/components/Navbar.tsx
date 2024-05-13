'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: 'services', text: 'Services' },
    { href: '#meet-the-team', text: 'Meet the Team' },
    { href: '#gallery', text: 'Gallery' },
    { href: '#contact', text: 'Contact' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="md:flex md:justify-between md:items-center text-stone-400 navbar-container backdrop-blur-lg md:backdrop-blur-none">
        <div className="flex justify-between items-center ps-4 sm:ps-2 md:ps-6">
          <a href="#home">
            <Image
              src="/images/logo.png"
              width={220}
              height={85}
              alt="Company Logo"
              priority={true}
            />
          </a>
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
            <Link href={link.href} key={index}>
              <li
                style={{ listStyle: 'none' }}
                className="my-4 md:my-0 hover:text-amber-600 md:hover:scale-105"
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
