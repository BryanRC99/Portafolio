import { motion } from "framer-motion";

const experiences = [
  {
    company: "Banco Solidario S.A",
    period: "2025 - Presente",
    role: "Pasante de Infraestructura TI",
    description:
      "Monitoreo de infraestructura tecnológica utilizando Zabbix, configuración de alertas mediante Telegram, administración de inventario tecnológico, gestión de tickets y monitoreo de dispositivos FortiGate mediante SNMPv3.",
  },
  {
    company: "EPMAPS",
    period: "2024 - 2024",
    role: "Pasante de Soporte Técnico",
    description:
      "Soporte a usuarios, mantenimiento básico de equipos, instalación de software, resolución de incidencias y asistencia técnica en entornos corporativos.",
  },
];

function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-white mb-6">
        Experiencia
      </h2>

      <div className="relative border-l border-slate-700 ml-2">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8 ml-6 relative"
          >
            <div className="absolute w-3.5 h-3.5 bg-cyan-400 rounded-full -left-[31px] top-1.5 ring-4 ring-slate-900" />

            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-5">
              <span className="text-cyan-400 text-xs font-semibold tracking-wide uppercase">
                {exp.period}
              </span>
              <h3 className="text-white text-lg font-bold mt-1">
                {exp.role}
              </h3>
              <p className="text-slate-400 text-sm font-medium">
                {exp.company}
              </p>
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;