import { motion } from "framer-motion";

const certifications = [
  {
    title: "Diplomado en Liderazgo y 114 Habilidades Gerenciales con IA",
    institution: "Universidad Santander",
    year: "2024",
    credential: "https://sii.santander.edu.mx/validez/2bda1e143a8edf186797436d8fb6ecf0",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-white mb-6">
        Certificaciones
      </h2>

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-cyan-400 text-xs font-bold">{cert.year}</span>
              <h3 className="text-white text-lg font-semibold mt-1 leading-snug">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1.5">{cert.institution}</p>
              <p className="text-gray-500 text-xs mt-1">Credencial verificable en línea</p>
            </div>

            <div className="mt-4">
              <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Ver credencial →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;