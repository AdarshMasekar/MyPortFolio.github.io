'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ModeToggle } from "@/components/mode-toggle"
import ResumeModal from "@/components/ResumeModal"


const NAV_ITEMS = [
  { type: 'link', href: '#about', label: 'About' },
  { type: 'link', href: '#projects', label: 'Projects' },
  { type: 'link', href: '#skills', label: 'Skills' },
  { type: 'link', href: '#contact', label: 'Contact' },
  { type: 'component', component: ResumeModal, label: 'Resume' },
] as const

const MenuButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button
    className="inline-flex md:hidden items-center justify-center p-2 rounded-md hover:bg-accent"
    onClick={onClick}
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
    aria-label="Toggle menu"
  >
    <div className="flex flex-col gap-1">
      {[...Array(3)].map((_, i) => (
        <span key={i} className="block w-5 h-0.5 bg-foreground" />
      ))}
    </div>
  </button>
)

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const closeToggle = () => {
        if(isMobileMenuOpen){
            setIsMobileMenuOpen(!isMobileMenuOpen)
        }
    }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Adarsh Masekar</span>
          </Link>
        </div>
        <div className="flex gap-6">
          <MenuButton
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <nav
            id="mobile-menu"
            className={`${
              isMobileMenuOpen ? 'flex bg-background/95 backdrop:blur supports-[backdrop-filter]:bg-background/60' : 'hidden'
            } absolute top-14 left-0 right-0 flex-col items-center   border-b md:border-none p-4 space-y-4 md:relative md:top-0 md:flex md:flex-row md:items-center md:space-x-6 md:space-y-0 text-sm font-medium`}
            role="navigation"
          >
            {NAV_ITEMS.map((item) => (
              item.type === 'component' ? (
                <item.component key={item.label} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeToggle}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
