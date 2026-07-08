import { motion } from "framer-motion";
 
const projects = [
  {
    title: "Sistema de Facturación",
    description:
      "Plataforma web para gestión de clientes, proveedores, usuarios, facturas y reportes. Autenticación de doble factor (2FA) y despliegue sobre servidores Linux Ubuntu en AWS.",
    technologies: ["Django", "PostgreSQL", "AWS", "Tailwind", "Git"],
    github: "https://github.com/BryanRC99/Sistema_Facturacion",
    status: null,
  },
  {
    title: "Sistema Hospitalario",
    description:
      "Proyecto full-stack para administración de pacientes, empleados, citas, triaje, consultas clínicas y seguros, con arquitectura desacoplada integrada mediante APIs REST.",
    technologies: ["Next.js", "TypeScript", "Django REST Framework", "PostgreSQL", "Tailwind"],
    github: "https://github.com/BryanRC99/Sistema_Hospitalario",
    status: "En desarrollo",
  },
  {
    title: "JellyJam",
    description:
      "Plataforma de escucha colaborativa en tiempo real para servidores Jellyfin, inspirada en Spotify Jam. Permite crear salas sincronizadas para reproducir, encolar y disfrutar música en conjunto sobre una biblioteca autoalojada.",
    technologies: ["NestJS", "React", "Jellyfin API", "WebSockets", "TypeScript", "Azure"],
    github: "https://github.com/BryanRC99/JellyJam",
    status: "En desarrollo",
  },
  {
    title: "Laboratorio de Auditoría y Hardening de Redes",
    description:
      "Investigación con análisis de topologías con doble NAT, escaneo de vulnerabilidades en servicios de administración local (OpenSSH, HTTP, UPnP) y auditoría de interfaces inalámbricas en Modo Monitor.",
    technologies: ["Kali Linux", "Nmap", "Wireshark"],
    github: null,
    status: null,
  },
];
 
function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 md:px-8 section-pad">
      <p className="cmd-eyebrow mb-4">ls -la projects/</p>
 
      <div className="hairline-t pt-8 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
        <h2 className="font-display text-3xl md:text-4xl text-ink">
          Proyectos
        </h2>
 
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className={index === 0 ? "" : "hairline-t pt-8"}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl font-medium text-ink">{project.title}</h3>
                  {project.status && (
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-alert border border-alert/40 rounded-full px-2 py-0.5">
                      {project.status}
                    </span>
                  )}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-ink-soft border-b border-hairline hover:text-signal hover:border-signal transition-colors shrink-0"
                  >
                    código fuente →
                  </a>
                )}
              </div>
              <p className="text-ink-soft leading-relaxed mb-4 max-w-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-ink-faint border border-hairline rounded-full px-2.5 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default Projects;
