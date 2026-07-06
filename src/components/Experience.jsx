import { motion } from "framer-motion";

const experiences = [
  {
    company: "Banco Solidario S.A.",
    period: "2025 — Presente",
    duration: "6 meses",
    role: "Pasante de Infraestructura y Redes",
    bullets: [
      "Monitoreo de infraestructura y conectividad empresarial mediante Zabbix.",
      "Configuración y gestión de dispositivos de red mediante el protocolo SNMPv3.",
      "Automatización de alertas críticas de infraestructura vía Telegram.",
      "Apoyo en el monitoreo de firewalls FortiGate y servicios tecnológicos críticos.",
      "Resolución de incidencias técnicas y atención a usuarios internos mediante sistema de tickets.",
      "Gestión y control de inventario tecnológico.",
    ],
  },
  {
    company: "EPMAPS",
    period: "2024",
    duration: "3 meses",
    role: "Pasante de TICS",
    bullets: [
      "Soporte técnico de primer nivel a usuarios internos.",
      "Diagnóstico y solución de incidencias de hardware y software.",
      "Mantenimiento preventivo y correctivo de equipos informáticos.",
      "Instalación y configuración de sistemas Windows y aplicaciones corporativas.",
      "Soporte en conectividad de red, impresoras y periféricos.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28">
      <p className="cmd-eyebrow mb-4">git log --oneline -- experiencia/</p>

      <div className="hairline-t pt-8 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
        <h2 className="font-display text-3xl md:text-4xl text-ink">
          Experiencia
        </h2>

        <div className="space-y-14">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-xl font-medium text-ink">{exp.role}</h3>
                <span className="font-mono text-xs text-ink-faint">{exp.period}</span>
              </div>
              <p className="text-signal text-sm font-medium mb-4">
                {exp.company} · {exp.duration}
              </p>
              <ul className="space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-ink-soft leading-relaxed">
                    <span className="text-ink-faint mt-1.5 shrink-0">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
