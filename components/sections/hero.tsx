"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Star, Users, Award, Clock } from "lucide-react"

const stats = [
  { icon: Users, value: "15,000+", label: "Pacientes Felices" },
  { icon: Award, value: "98%", label: "Satisfacción" },
  { icon: Clock, value: "10+", label: "Años de Experiencia" },
  { icon: Star, value: "4.9", label: "Calificación" },
]

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Fondo unificado: sin orbes por sección */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              ✨ Clínica Dental Líder en Perú
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            Tu{" "}
            <span className="bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">
              Sonrisa Perfecta
            </span>
            <br />
            Comienza Aquí
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Tratamientos dentales modernos con tecnología de vanguardia. Múltiples sedes en Lima, Arequipa y Cusco. Tu
            sonrisa es nuestra pasión.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#contacto")}
              className="bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] hover:opacity-90 transition-opacity text-lg px-8 py-6"
            >
              <Phone className="w-5 h-5 mr-2" />
              Agenda tu Cita
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#casos")}
              className="border-2 border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)] hover:text-white transition-all text-lg px-8 py-6"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Ver Casos
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-[var(--brand)]/30 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-[var(--brand)]" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-[var(--brand)]/20 to-[var(--accent)]/20 rounded-full blur-xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-32 left-10 w-16 h-16 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--brand)]/20 rounded-full blur-xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />
    </section>
  )
}
