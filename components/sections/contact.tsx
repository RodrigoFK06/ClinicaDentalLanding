"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GradientOrbs } from "@/components/core/gradient-orbs"
import { Phone, Mail, MapPin, Clock, Calendar, MessageCircle } from "lucide-react"

const locations = [
  {
    city: "Lima",
    address: "Av. Javier Prado Este 4200, San Borja",
    phone: "+51 1 234-5678",
    hours: "Lun-Vie: 8:00-20:00, Sáb: 8:00-18:00",
  },
  {
    city: "Arequipa",
    address: "Av. Ejército 738, Yanahuara",
    phone: "+51 54 234-567",
    hours: "Lun-Vie: 8:00-19:00, Sáb: 8:00-17:00",
  },
  {
    city: "Cusco",
    address: "Av. El Sol 814, Centro Histórico",
    phone: "+51 84 234-567",
    hours: "Lun-Vie: 8:00-19:00, Sáb: 8:00-16:00",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <GradientOrbs variant="tl" intensity="lg" />

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
            Contáctanos
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Agenda tu{" "}
            <span className="bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">
              Consulta Gratuita
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y comienza tu transformación hacia la sonrisa perfecta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Solicita tu Cita</h3>
                  <p className="text-muted-foreground">
                    Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Nombre</label>
                      <Input placeholder="Tu nombre completo" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Teléfono</label>
                      <Input placeholder="+51 999 999 999" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Sede Preferida</label>
                    <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground">
                      <option>Lima - San Borja</option>
                      <option>Arequipa - Yanahuara</option>
                      <option>Cusco - Centro Histórico</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Mensaje</label>
                    <Textarea placeholder="Cuéntanos sobre tu consulta o tratamiento de interés..." rows={4} />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] hover:opacity-90 transition-opacity"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Consulta Gratuita
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Locations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Contacto Directo</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--accent)] p-3">
                      <Phone className="w-full h-full text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Llámanos</div>
                      <div className="text-muted-foreground">+51 1 234-5678</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3">
                      <MessageCircle className="w-full h-full text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">WhatsApp</div>
                      <div className="text-muted-foreground">+51 999 123 456</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3">
                      <Mail className="w-full h-full text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground">info@clinicadental.pe</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Nuestras Sedes</h3>
              {locations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-border/50 hover:border-[var(--brand)]/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--accent)] p-2">
                          <MapPin className="w-full h-full text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{location.city}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{location.address}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span className="flex items-center">
                              <Phone className="w-3 h-3 mr-1" />
                              {location.phone}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {location.hours}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
