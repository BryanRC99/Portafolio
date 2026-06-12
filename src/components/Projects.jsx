import { motion } from "framer-motion";

const projects = [
  {
    title: "Sistema de Facturación",
    description:
      "Sistema web desarrollado para la gestión de clientes, proveedores, usuarios, facturas y reportes. Incluye autenticación de usuarios y arquitectura backend con Django y PostgreSQL.",
    technologies: ["Django", "PostgreSQL", "AWS", "Git", "Tailwind"],
    github: "https://github.com/BryanRC99/Sistema_Facturacion",
  },
  {
    title: "Sistema Hospitalario",
    description:
      "Proyecto académico en desarrollo utilizando React y Django para la administración de pacientes, médicos, citas y expedientes clínicos mediante APIs REST.",
    technologies: ["React", "Django", "PostgreSQL"],
    github: "https://github.com/BryanRC99/Sistema_Hospitalario", // Listo para cuando lo subas
  },
];

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-white mb-6">
        Proyectos
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/60 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="h-32 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-b border-slate-700/40" />
              <div className="p-5">
                <h3 className="text-white text-xl font-bold">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5">
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md bg-cyan-500/5 border border-cyan-500/20 text-cyan-300 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex mt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-500 text-white text-sm font-medium rounded-lg hover:bg-cyan-600 transition-colors shadow-md shadow-cyan-500/10"
                >
                  Código Fuente
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;