"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const services = [
  "Ortodoncia Invisible",
  "Implantes Dentales",
  "Blanqueamiento LED",
  "Periodoncia",
  "Odontopediatría",
  "Cirugía Oral",
]

const locations = [
  { city: "Lima", address: "Av. Javier Prado Este 4200, San Borja" },
  { city: "Arequipa", address: "Av. Ejército 738, Yanahuara" },
  { city: "Cusco", address: "Av. El Sol 814, Centro Histórico" },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--accent)]" />
                <span className="text-xl font-bold text-foreground">DentalPro</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Tu sonrisa perfecta comienza aquí. Tratamientos dentales modernos con tecnología de vanguardia en Lima,
                Arequipa y Cusco.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 hover:bg-[var(--brand)] hover:text-white hover:border-[var(--brand)] transition-all bg-transparent"
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Servicios</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => scrollToSection("#servicios")}
                      className="text-muted-foreground hover:text-[var(--brand)] transition-colors text-left"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Locations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Ubicaciones</h3>
              <ul className="space-y-4">
                {locations.map((location) => (
                  <li key={location.city} className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-[var(--brand)] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">{location.city}</div>
                      <div className="text-sm text-muted-foreground">{location.address}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-muted-foreground">+51 1 234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-muted-foreground">info@clinicadental.pe</span>
                </div>
                <Badge variant="secondary" className="mt-4">
                  Consulta Gratuita Disponible
                </Badge>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">© 2024 DentalPro. Todos los derechos reservados.</div>
            <div className="flex space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-[var(--brand)] transition-colors">
                Política de Privacidad
              </button>
              <button className="text-muted-foreground hover:text-[var(--brand)] transition-colors">
                Términos de Servicio
              </button>
              <button className="text-muted-foreground hover:text-[var(--brand)] transition-colors">Cookies</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
