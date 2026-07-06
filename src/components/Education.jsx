import { motion } from "framer-motion";

const education = [
  {
    title: "Tecnología Superior en Desarrollo de Software",
    institution: "Instituto Superior Tecnológico Universitario Vida Nueva",
    status: "Graduado",
  },
  {
    title: "Bachiller Técnico en Tecnologías de la Información y Comunicación",
    institution: "Unidad Educativa Técnica Vida Nueva",
    status: "Graduado",
  },
];

function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28">
      <p className="cmd-eyebrow mb-4">cat education.yaml</p>

      <div className="hairline-t pt-8 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
        <h2 className="font-display text-3xl md:text-4xl text-ink">
          Formación
        </h2>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
            >
              <h3 className="text-ink font-medium leading-snug">{item.title}</h3>
              <p className="text-ink-soft text-sm mt-1">
                {item.institution} · <span className="text-signal">{item.status}</span>
              </p>
            </motion.div>
          ))}

          <div className="hairline-t pt-6 flex flex-wrap gap-x-10 gap-y-2 font-mono text-xs uppercase tracking-wider text-ink-faint">
            <span>Inglés — Intermedio (A2–B1)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
