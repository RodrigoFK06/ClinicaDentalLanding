"use client"

import { Suspense } from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Microscope, Cpu, Zap, Shield } from "lucide-react"

// Dynamic import for 3D component to avoid SSR issues
const ToothModel = dynamic(() => import("@/components/canvas/tooth-model"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 flex items-center justify-center bg-muted/50 rounded-2xl">
      <Loader2 className="w-8 h-8 animate-spin text-[var(--brand)]" />
    </div>
  ),
})

const technologies = [
  {
    icon: Microscope,
    title: "Microscopía Digital",
    description: "Diagnósticos precisos con tecnología de alta resolución",
  },
  {
    icon: Cpu,
    title: "IA Diagnóstica",
    description: "Inteligencia artificial para detección temprana",
  },
  {
    icon: Zap,
    title: "Láser Terapéutico",
    description: "Tratamientos menos invasivos y más efectivos",
  },
  {
    icon: Shield,
    title: "Esterilización UV",
    description: "Máxima seguridad con protocolos avanzados",
  },
]

export function Showcase3D() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 3D Model */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <Suspense
                fallback={
                  <div className="w-full h-96 flex items-center justify-center bg-muted/50 rounded-2xl">
                    <Loader2 className="w-8 h-8 animate-spin text-[var(--brand)]" />
                  </div>
                }
              >
                <ToothModel />
              </Suspense>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-4 right-4"
              >
                <Badge className="bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] text-white">
                  Modelo 3D Interactivo
                </Badge>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <Badge variant="secondary" className="mb-4">
                Tecnología Avanzada
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Innovación en{" "}
                <span className="bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">
                  Cada Tratamiento
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Utilizamos la tecnología más avanzada del mercado para ofrecerte tratamientos precisos, cómodos y con
                resultados excepcionales. Nuestra inversión en innovación es tu garantía de calidad.
              </p>
            </div>

            {/* Technologies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="border-border/50 hover:border-[var(--brand)]/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--accent)] p-3 flex-shrink-0">
                          <tech.icon className="w-full h-full text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{tech.title}</h3>
                          <p className="text-sm text-muted-foreground">{tech.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--brand)] mb-1">99.8%</div>
                <div className="text-sm text-muted-foreground">Precisión</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--brand)] mb-1">50%</div>
                <div className="text-sm text-muted-foreground">Menos Tiempo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--brand)] mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Seguridad</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
