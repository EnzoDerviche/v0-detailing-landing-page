"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Droplets,
  Sparkles,
  Car,
  Cog,
  Tag,
  Shield,
  Gem,
  Sun,
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react"

interface Service {
  id: string
  icon: React.ElementType
  title: string
  description: string
  price: string
  duration: string
  steps: string[]
}

const services: Service[] = [
  {
    id: "lavado-comun",
    icon: Droplets,
    title: "Lavado Común",
    description: "Lavado exterior completo para mantener tu vehículo limpio día a día.",
    price: "$XX.XX",
    duration: "30-45 min",
    steps: [
      "Pre-lavado con espuma activa",
      "Lavado manual con guante de microfibra",
      "Enjuague a presión",
      "Secado con paños de microfibra",
      "Limpieza de vidrios exterior",
    ],
  },
  {
    id: "lavado-premium",
    icon: Sparkles,
    title: "Lavado Premium",
    description: "Lavado completo con atención especial a cada detalle de tu vehículo.",
    price: "$XX.XX",
    duration: "1-1.5 hrs",
    steps: [
      "Pre-lavado con espuma activa",
      "Descontaminación con clay bar",
      "Lavado de dos baldes",
      "Limpieza de llantas y neumáticos",
      "Secado con aire y microfibra",
      "Aplicación de cera rápida",
      "Limpieza de vidrios interior y exterior",
    ],
  },
  {
    id: "limpieza-interiores",
    icon: Car,
    title: "Limpieza de Interiores",
    description: "Limpieza profunda del interior para un ambiente impecable y fresco.",
    price: "$XX.XX",
    duration: "2-3 hrs",
    steps: [
      "Aspirado completo de tapizados y alfombras",
      "Limpieza de plásticos y vinilos",
      "Tratamiento de cueros (si aplica)",
      "Limpieza de vidrios interiores",
      "Limpieza de tablero y consola",
      "Desodorización del habitáculo",
      "Acondicionamiento de superficies",
    ],
  },
  {
    id: "limpieza-motor",
    icon: Cog,
    title: "Limpieza de Motor",
    description: "Desengrase y limpieza profesional del compartimiento del motor.",
    price: "$XX.XX",
    duration: "1-1.5 hrs",
    steps: [
      "Protección de componentes eléctricos",
      "Aplicación de desengrasante especializado",
      "Cepillado de superficies",
      "Enjuague controlado a baja presión",
      "Secado con aire comprimido",
      "Aplicación de protector para plásticos",
    ],
  },
  {
    id: "preparacion-preventa",
    icon: Tag,
    title: "Preparación Preventa",
    description: "Dejamos tu vehículo impecable para conseguir el mejor precio de venta.",
    price: "$XX.XX",
    duration: "4-6 hrs",
    steps: [
      "Lavado premium completo",
      "Limpieza profunda de interiores",
      "Pulido de carrocería",
      "Corrección de pequeños defectos",
      "Limpieza de motor",
      "Acondicionamiento de plásticos exteriores",
      "Tratamiento de llantas",
      "Fotografías profesionales (opcional)",
    ],
  },
  {
    id: "tratamiento-acrilico",
    icon: Shield,
    title: "Tratamiento Acrílico",
    description: "Protección duradera con sellador acrílico de alta resistencia.",
    price: "$XX.XX",
    duration: "3-4 hrs",
    steps: [
      "Lavado de descontaminación",
      "Clay bar para remover contaminantes",
      "Pulido suave de preparación",
      "Aplicación de sellador acrílico",
      "Tiempo de curado",
      "Pulido final de alto brillo",
      "Protección con duración de 3-6 meses",
    ],
  },
  {
    id: "tratamiento-ceramico",
    icon: Gem,
    title: "Tratamiento Cerámico",
    description: "La máxima protección para tu pintura con recubrimiento cerámico profesional.",
    price: "$XX.XX",
    duration: "1-2 días",
    steps: [
      "Lavado de descontaminación completo",
      "Clay bar y descontaminación química",
      "Corrección de pintura (pulido en múltiples pasos)",
      "Limpieza con IPA",
      "Aplicación de coating cerámico",
      "Tiempo de curado controlado",
      "Inspección con luz LED",
      "Protección con duración de 2-5 años",
    ],
  },
  {
    id: "abrillantado",
    icon: Sun,
    title: "Abrillantado",
    description: "Restauración del brillo original de la pintura mediante pulido profesional.",
    price: "$XX.XX",
    duration: "2-4 hrs",
    steps: [
      "Lavado de preparación",
      "Inspección de pintura con luz LED",
      "Enmascarado de zonas sensibles",
      "Pulido con máquina rotativa/orbital",
      "Uso de compuestos de corte progresivo",
      "Pulido final de alto brillo",
      "Aplicación de cera de protección",
    ],
  },
]

function ServiceCard({ service }: { service: Service }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <service.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-foreground">
                {service.title}
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-1">{service.duration}</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-primary">{service.price}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{service.description}</p>

        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-between text-muted-foreground hover:text-foreground"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>Ver proceso paso a paso</span>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-border">
            <ul className="space-y-2">
              {service.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase mb-3 text-sm">
            Nuestros Servicios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            Cuidado profesional para tu vehículo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seleccioná el servicio que mejor se adapte a las necesidades de tu auto. 
            Hacé clic en cada uno para ver el proceso detallado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            ¿No encontrás lo que buscás? Contactanos para un presupuesto personalizado.
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a
              href="https://wa.me/TUNUMERO?text=Hola!%20Me%20interesa%20consultar%20por%20un%20servicio%20personalizado"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
