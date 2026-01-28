import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconMenu, IconX } from '@/components/ui/Icons'
import { site } from '@/data/site'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-white/[0.08] bg-[rgba(11,15,26,0.8)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="font-heading text-lg font-semibold text-[var(--text)]">
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-[var(--text-muted)] transition hover:text-[var(--accent)]"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text)] md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <IconX size={24} /> : <IconMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/[0.06] md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-[var(--text-muted)] transition hover:bg-white/[0.05] hover:text-[var(--text)]"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
