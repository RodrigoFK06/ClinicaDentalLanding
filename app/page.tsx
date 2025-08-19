import { Navbar } from "@/components/core/navbar"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Showcase3D } from "@/components/sections/showcase-3d"
import { Process } from "@/components/sections/process"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/core/footer"
import { GradientOrbs } from "@/components/core/gradient-orbs"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <GradientOrbs variant="tl" intensity="lg" />
        <GradientOrbs variant="tr" intensity="md" />
        <GradientOrbs variant="bl" intensity="md" />
        <GradientOrbs variant="br" intensity="lg" />
        <GradientOrbs variant="center" intensity="sm" />

        {/* Additional floating orbs for more dynamic effects */}
        <div
          className="absolute top-1/4 left-1/4 w-72 h-72 gradient-orb gradient-orb-brand animate-float opacity-30"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-3/4 right-1/3 w-80 h-80 gradient-orb gradient-orb-accent animate-pulse-glow opacity-25"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-2/3 w-64 h-64 gradient-orb gradient-orb-brand animate-float opacity-20"
          style={{ animationDelay: "5s" }}
        />
      </div>

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
