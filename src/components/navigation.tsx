"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LanguageToggle, useLanguage } from "@/lib/language"

const navLinksData = [
  { href: "/", en: "Home", hi: "होम" },
  { href: "/biography", en: "Biography", hi: "जीवनी" },
  { href: "/political-journey", en: "Political Journey", hi: "राजनीतिक सफ़र" },
  { href: "/chhindwara", en: "Chhindwara", hi: "छिंदवाड़ा" },
  { href: "/vision", en: "Vision & Policy", hi: "नीति एवं दृष्टि" },
  { href: "/achievements", en: "Achievements", hi: "उपलब्धियाँ" },
  { href: "/legacy", en: "Legacy", hi: "विरासत" },
  { href: "/contact", en: "Contact", hi: "संपर्क" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()
  const { lang } = useLanguage()

  const navLinks = navLinksData.map((l) => ({
    href: l.href,
    label: lang === "hi" ? l.hi : l.en,
  }))

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "glass py-3 shadow-lg shadow-black/20"
            : "bg-transparent py-5"
          }`}
      >
        <div className="container-wide flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
              <span className="font-display text-accent font-bold text-lg">K</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg text-text tracking-wide">
                {lang === "hi" ? "कमल नाथ" : "Kamal Nath"}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm tracking-wide transition-colors ${pathname === link.href
                    ? "text-accent"
                    : "text-text-muted hover:text-text"
                  }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
            <div className="ml-3">
              <LanguageToggle />
            </div>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 xl:hidden">
            <LanguageToggle />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block w-6 h-0.5 bg-text transition-all duration-300 ${isMobileOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-text transition-all duration-300 ${isMobileOpen ? "opacity-0" : ""
                    }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-text transition-all duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-500 ${isMobileOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
      >
        <div className="absolute inset-0 bg-primary/95 backdrop-blur-xl" />
        <nav className="relative h-full flex flex-col items-center justify-center gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-2xl font-display tracking-wide transition-all duration-300 ${pathname === link.href ? "text-accent" : "text-text-muted hover:text-text"
                }`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
