import { Navbar } from "@/components/core/navbar"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Showcase3D } from "@/components/sections/showcase-3d"
import { Process } from "@/components/sections/process"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/core/footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
        <div id="servicios">
          <Features />
        </div>
        <div id="casos">
          <Showcase3D />
        </div>
        <div id="proceso">
          <Process />
        </div>
        <div id="testimonios">
          <Testimonials />
        </div>
        <div id="contacto">
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  )
}
