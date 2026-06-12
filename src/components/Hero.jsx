import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 pt-16">
      <div className="text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-white tracking-tight"
        >
          Bryan Pineda
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-cyan-400 font-medium mt-3"
        >
          Desarrollador de Software Junior | Soporte e Infraestructura TI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Desarrollo de Software • Django • React • AWS • Infraestructura TI • Soporte Técnico
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-5 py-2.5 rounded-xl transition shadow-lg shadow-cyan-500/10"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="border border-slate-700 hover:border-slate-500 text-white font-medium px-5 py-2.5 rounded-xl transition"
          >
            Contacto
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;