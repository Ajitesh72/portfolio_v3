// "use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio_v3',
  description: 'Built & designed by ajitesh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // useEffect(() => {
  //   // Initialize AOS
  //   AOS.init({
  //     // duration: 000, // Animation duration
  //     easing: 'ease-in-out', // Animation easing
  //     once: false, // Animation only happens once per element
  //   });
  // }, []); // Empty dependency array to ensure it runs only once

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
