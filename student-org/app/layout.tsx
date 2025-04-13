import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "QCF GROUP - University of Michigan",
  description: "The University of Michigan's Quantitative & Computational Finance Group",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-black text-white">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-16">
                <Image src="/images/qcf-logo.svg" alt="QCF GROUP" fill className="object-contain" />
              </div>
              <span className="ml-2 font-bold text-xl">QCF GROUP</span>
            </Link>
            <nav className="flex space-x-6">
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
              <Link href="/team" className="hover:text-gray-300">
                Team
              </Link>
              <Link href="/projects" className="hover:text-gray-300">
                Projects
              </Link>
              <Link href="/join" className="hover:text-gray-300">
                Join
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-black text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} QCF GROUP - University of Michigan</p>
          </div>
        </footer>
      </body>
    </html>
  )
}


import './globals.css'