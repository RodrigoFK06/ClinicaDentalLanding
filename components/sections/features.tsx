"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GradientOrbs } from "@/components/core/gradient-orbs"
import { Smile, Zap, Shield, Heart, Sparkles, Crown } from "lucide-react"

const features = [
  {
    icon: Smile,
    title: "Ortodoncia Invisible",
    description: "Alineadores transparentes para corregir tu sonrisa sin que nadie lo note.",
    badge: "Más Popular",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Crown,
    title: "Implantes Dentales",
    description: "Reemplaza dientes perdidos con implantes de titanio de última generación.",
    badge: "Garantía 10 años",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Blanqueamiento LED",
    description: "Blanqueamiento profesional con tecnología LED para resultados inmediatos.",
    badge: "Resultados en 1 hora",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Periodoncia",
    description: "Tratamiento especializado para encías saludables y prevención de enfermedades.",
    badge: "Prevención",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Odontopediatría",
    description: "Cuidado dental especializado para niños en un ambiente amigable y seguro.",
    badge: "Para niños",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Cirugía Oral",
    description: "Procedimientos quirúrgicos avanzados con tecnología mínimamente invasiva.",
    badge: "Tecnología avanzada",
    color: "from-indigo-500 to-purple-500",
  },
]

export function Features() {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      <GradientOrbs variant="tr" intensity="md" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Nuestros Servicios
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tratamientos{" "}
            <span className="bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">
              Especializados
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de tratamientos dentales con tecnología de vanguardia y un equipo de especialistas
            altamente calificados.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full border-border/50 hover:border-[var(--brand)]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--brand)]/10">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <Badge variant="secondary" className="absolute -top-2 -right-2 text-xs">
                      {feature.badge}
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[var(--brand)] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                  {/* Hover Effect */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] rounded-full" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">¿No encuentras el tratamiento que buscas?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector("#contacto")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="text-[var(--brand)] font-semibold hover:text-[var(--accent)] transition-colors"
          >
            Consulta con nuestros especialistas →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
