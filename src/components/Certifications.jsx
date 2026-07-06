import { motion } from "framer-motion";

const certifications = [
  {
    title: "Fortinet Certified Associate in Cybersecurity (FCA)",
    institution: "Fortinet",
    year: "2026–2028",
  },
  {
    title: "Fortinet Certified Associate: FortiGate 7.6 Operator",
    institution: "Fortinet",
    year: "2026–2030",
  },
  {
    title: "Cloud Security Fundamentals",
    institution: "Palo Alto Networks",
    year: "2026",
  },
  {
    title: "AWS: Job Roles in the Cloud",
    institution: "Amazon Web Services (AWS)",
    year: "2026",
  },
  {
    title: "Desarrollo de Aplicaciones Móviles con Flutter",
    institution: "ISTVN",
    year: "2025",
  },
  {
    title: "Diplomado en Liderazgo y 114 Habilidades Gerenciales con IA",
    institution: "Universidad Santander",
    year: "2024",
    credential: "https://sii.santander.edu.mx/validez/2bda1e143a8edf186797436d8fb6ecf0",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="max-w-5xl mx-auto px-6 md:px-8 section-pad">
      <p className="cmd-eyebrow mb-4">cat certifications.log</p>

      <div className="hairline-t pt-8 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
        <h2 className="font-display text-3xl md:text-4xl text-ink">
          Certificaciones
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="flex flex-col"
            >
              <span className="font-mono text-xs text-signal mb-1.5">{cert.year}</span>
              <h3 className="text-ink font-medium leading-snug">{cert.title}</h3>
              <p className="text-ink-soft text-sm mt-1">{cert.institution}</p>
              {cert.credential && (
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-ink-faint border-b border-hairline hover:text-signal hover:border-signal transition-colors w-fit mt-2"
                >
                  ver credencial →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
