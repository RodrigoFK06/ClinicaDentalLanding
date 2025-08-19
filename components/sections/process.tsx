"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GradientOrbs } from "@/components/core/gradient-orbs"
import { Calendar, UserCheck, Stethoscope, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Agenda tu Cita",
    description:
      "Reserva tu consulta inicial de forma rápida y sencilla. Atención personalizada desde el primer contacto.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Evaluación Completa",
    description: "Realizamos un diagnóstico integral con tecnología 3D y análisis detallado de tu salud bucal.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Stethoscope,
    number: "03",
    title: "Plan de Tratamiento",
    description: "Diseñamos un plan personalizado con opciones de financiamiento y cronograma detallado.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Sonrisa Perfecta",
    description: "Ejecutamos tu tratamiento con seguimiento continuo hasta lograr los resultados deseados.",
    color: "from-yellow-500 to-orange-500",
  },
]

export function Process() {
  return (
    <section id="proceso" className="py-24 relative overflow-hidden">
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
            Nuestro Proceso
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            4 Pasos hacia tu{" "}
            <span className="bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">
              Sonrisa Ideal
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proceso simple y transparente diseñado para brindarte la mejor experiencia y resultados excepcionales.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full border-border/50 hover:border-[var(--brand)]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--brand)]/10">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="text-6xl font-bold text-muted-foreground/20 absolute -top-4 left-1/2 transform -translate-x-1/2">
                      {step.number}
                    </div>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-4 mx-auto relative z-10`}>
                      <step.icon className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[var(--brand)] to-transparent" />
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">¿Listo para comenzar tu transformación?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector("#contacto")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Iniciar mi Proceso
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
