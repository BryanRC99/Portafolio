import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="cmd-eyebrow mb-4"
      >
        cat about.md
      </motion.p>

      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 hairline-t pt-8">
        <h2 className="font-display text-3xl md:text-4xl text-ink">
          Sobre mí
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5 text-ink-soft text-base md:text-lg leading-relaxed"
        >
          <p>
            Estudiante graduado de Tecnología Superior en Desarrollo de
            Software, con experiencia práctica en desarrollo backend,
            infraestructura tecnológica y soporte TI en entornos
            corporativos reales.
          </p>
          <p>
            He trabajado con <span className="text-ink">Django</span>,{" "}
            <span className="text-ink">PostgreSQL</span>,{" "}
            <span className="text-ink">React</span> y{" "}
            <span className="text-ink">AWS</span>, además de herramientas
            de monitoreo empresarial como{" "}
            <span className="text-ink">Zabbix</span> y firewalls{" "}
            <span className="text-ink">FortiGate</span>, con foco en
            continuidad operativa y seguridad de red.
          </p>
          <p>
            Me interesa el desarrollo de aplicaciones escalables, la
            automatización de procesos y la administración de
            infraestructura — el punto donde el código y los sistemas se
            encuentran.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
