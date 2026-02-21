"use client"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import { Code, Palette, TrendingUp } from "lucide-react"

const team = [
  {
    icon: Code,
    name: "Desarrollo Web",
    role: "Equipo Tecnico",
    description: "Especialistas en Next.js, React y tecnologias modernas para crear experiencias web rapidas y seguras.",
  },
  {
    icon: Palette,
    name: "Diseno UI/UX",
    role: "Equipo Creativo",
    description: "Disenadores con experiencia en el sector gastronomico. Creamos interfaces intuitivas y atractivas.",
  },
  {
    icon: TrendingUp,
    name: "Marketing Digital",
    role: "Equipo Estrategia",
    description: "Expertos en posicionamiento, redes sociales y estrategias de marketing para restaurantes.",
  },
]

export function AboutTeam() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          badge="Nuestro Equipo"
          title="Areas de"
          highlight="expertise"
          description="Un equipo multidisciplinario dedicado a transformar la presencia digital de tu restaurante."
        />

        <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-8 text-center backdrop-blur-sm transition-colors hover:border-primary/40"
              >
                <div className="flex size-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <member.icon className="size-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
