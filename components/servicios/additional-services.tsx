"use client"

import { Camera, Megaphone, BarChart3, Wrench } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

const extras = [
  {
    icon: Camera,
    title: "Fotografia Profesional",
    description: "Sesion de fotos profesional de tus platos y local para mejorar tu presencia online.",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Estrategias de marketing en redes sociales y Google para atraer mas clientes.",
  },
  {
    icon: BarChart3,
    title: "Analitica y Reportes",
    description: "Dashboards con metricas clave de tu negocio online: visitas, reservas, pedidos.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Web",
    description: "Soporte tecnico continuo, actualizaciones de seguridad y contenido.",
  },
]

export function AdditionalServices() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 right-1/4 size-80 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          badge="Servicios Adicionales"
          title="Complementa tu"
          highlight="proyecto"
          description="Servicios extras para maximizar el impacto de tu presencia digital."
        />

        <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm transition-colors hover:border-primary/40"
              >
                <div className="flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <item.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
