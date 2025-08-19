"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GradientOrbs } from "@/components/core/gradient-orbs"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Paciente de Ortodoncia",
    location: "Lima",
    image: "/professional-woman-smiling.png",
    rating: 5,
    text: "Increíble experiencia con los alineadores invisibles. El equipo es muy profesional y los resultados superaron mis expectativas. Mi sonrisa cambió completamente en 8 meses.",
  },
  {
    name: "Carlos Mendoza",
    role: "Implante Dental",
    location: "Arequipa",
    image: "/professional-man-smiling.png",
    rating: 5,
    text: "Después de años sin poder sonreír con confianza, los implantes me devolvieron la seguridad. El proceso fue muy cómodo y el resultado es perfecto.",
  },
  {
    name: "Ana Rodríguez",
    role: "Blanqueamiento LED",
    location: "Cusco",
    image: "/young-woman-smiling.png",
    rating: 5,
    text: "El blanqueamiento LED fue increíble. En solo una hora mis dientes se veían 4 tonos más blancos. El personal es muy amable y profesional.",
  },
  {
    name: "Luis Vargas",
    role: "Cirugía Oral",
    location: "Lima",
    image: "/middle-aged-man-smiling.png",
    rating: 5,
    text: "La cirugía fue mucho menos invasiva de lo que esperaba. La tecnología que usan es impresionante y la recuperación fue muy rápida.",
  },
  {
    name: "Patricia Silva",
    role: "Odontopediatría",
    location: "Arequipa",
    image: "/mother-child-smile.png",
    rating: 5,
    text: "Mi hijo de 8 años ahora ama ir al dentista. El ambiente es muy amigable para niños y los doctores tienen mucha paciencia.",
  },
  {
    name: "Roberto Chávez",
    role: "Periodoncia",
    location: "Cusco",
    image: "/older-man-smiling.png",
    rating: 5,
    text: "Tenía problemas serios en las encías y pensé que perdería mis dientes. Gracias al tratamiento especializado, mi salud bucal está perfecta.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 relative overflow-hidden">
      <GradientOrbs variant="bl" intensity="lg" />

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
            Testimonios Reales
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Lo que Dicen Nuestros{" "}
            <span className="bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">
              Pacientes
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Miles de sonrisas transformadas respaldan nuestro compromiso con la excelencia y la satisfacción del
            paciente.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full border-border/50 hover:border-[var(--brand)]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--brand)]/10">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-[var(--brand)] opacity-60" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-[var(--brand)] to-[var(--accent)] text-white">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-[var(--brand)]">{testimonial.location}</div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] rounded-full" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--brand)] mb-2">4.9/5</div>
            <div className="text-muted-foreground">Calificación Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--brand)] mb-2">15,000+</div>
            <div className="text-muted-foreground">Pacientes Satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--brand)] mb-2">98%</div>
            <div className="text-muted-foreground">Recomendarían</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
