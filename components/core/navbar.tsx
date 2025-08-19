"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, MapPin, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Inicio", href: "#hero" },
  { name: "Servicios", href: "#servicios" },
  { name: "Casos", href: "#casos" },
  { name: "Proceso", href: "#proceso" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
      />

      {/* Main Navbar */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--brand)] to-[var(--accent)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SP</span>
              </div>
              <span className="font-bold text-lg text-foreground">Sonrisa Perfecta</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-foreground transition-colors relative group"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                onClick={() => scrollToSection("#contacto")}
                className="bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4 mr-2" />
                Agenda tu Cita
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg font-medium text-foreground hover:text-[var(--brand)] transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}

                  <div className="pt-6 border-t border-border">
                    <Button
                      onClick={() => scrollToSection("#contacto")}
                      className="w-full bg-gradient-to-r from-[var(--brand)] to-[var(--accent)]"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Agenda tu Cita
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-6 space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>+51 999 888 777</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Lima, Arequipa, Cusco</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Lun - Sáb: 8:00 - 20:00</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </motion.header>
    </>
  )
}
