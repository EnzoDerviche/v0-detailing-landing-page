"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Brillo Perfecto",
    description: "Resultados impecables",
  },
  {
    icon: Shield,
    title: "Protección Total",
    description: "Cuidado profesional",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Respetamos tu tiempo",
  },
]

export function Hero() {
  const smoothScrollTo = (targetPosition: number, duration: number = 1200) => {
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    let startTime: number | null = null

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      
      // Easing function for smooth acceleration and deceleration
      const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      
      window.scrollTo(0, startPosition + distance * easeInOutCubic(progress))
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }
    
    requestAnimationFrame(animation)
  }

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      smoothScrollTo(offsetPosition, 1200)
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2831&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">
            Cuidado Automotriz Premium
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight text-balance">
            Tu vehículo merece el mejor cuidado
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Ofrecemos servicios de detailing profesional para mantener tu auto impecable. 
            Desde lavados hasta tratamientos cerámicos de alta gama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("#servicios")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
            >
              Ver Servicios
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contacto")}
              className="border-border text-foreground hover:bg-secondary text-base px-8"
            >
              Contactar
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border"
            >
              <feature.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
