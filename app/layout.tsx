'use client' // This is a client component 👈🏽

import React, { useState, useEffect } from 'react'

import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <html lang="en">
      <head></head>
      <body className={isDarkMode ? 'dark' : 'light'}>
        <nav className="bg-white">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-40 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href={'/'}>
                    {' '}
                    <Image
                      className="h-20 w-20"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png"
                      alt="Man City"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-20 p-7 sm:block">
                  <div className="flex space-x-8">
                    <Link
                      href={'/'}
                      className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-3xl font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      href={'/Team'}
                      className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-3xl font-medium"
                    >
                      Team
                    </Link>
                    <a
                      href="#"
                      className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-3xl font-medium"
                    >
                      Projects
                    </a>
                    <a
                      href="#"
                      className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-3xl font-medium"
                    >
                      Calendar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  )
}
