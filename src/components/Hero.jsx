import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-[92vh] flex items-center px-6 md:px-8 pt-24">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-ink-soft border border-hairline rounded-full pl-3 pr-4 py-1.5 mb-8"
        >
          <span className="status-dot" />
          Disponible para nuevas oportunidades
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[15vw] leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-8xl"
        >
          Bryan
          <br />
          <span className="italic text-signal">Pineda</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-8 max-w-2xl grid sm:grid-cols-[auto_1fr] gap-x-8 gap-y-3 items-baseline"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
            rol
          </span>
          <p className="text-lg md:text-xl text-ink">
            Desarrollador de Software Junior — Soporte e Infraestructura TI
          </p>

          <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
            stack
          </span>
          <p className="text-ink-soft">
            Django · React · PostgreSQL · AWS · Zabbix · FortiGate
          </p>

          <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
            base
          </span>
          <p className="text-ink-soft">Quito, Ecuador</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          <a
            href="#projects"
            className="font-mono text-sm text-ink border-b border-ink pb-0.5 hover:text-signal hover:border-signal transition-colors"
          >
            Ver proyectos →
          </a>
          <a
            href="#contact"
            className="font-mono text-sm text-ink-soft border-b border-transparent hover:text-signal hover:border-signal transition-colors pb-0.5"
          >
            Contactar
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
