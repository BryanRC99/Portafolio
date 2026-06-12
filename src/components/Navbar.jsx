import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-900/80 border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex justify-between items-center">
        <h1 className="text-white font-bold text-xl tracking-tight">
          Portafolio
        </h1>

        <div className="flex items-center gap-5 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors">Sobre mí</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Tecnologías</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experiencia</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Proyectos</a>
          <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certificaciones</a>

          <div className="h-4 w-[1px] bg-slate-700 mx-1" />

          <a
            href="https://linkedin.com/in/bryan-pineda-199610348"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/BryanRC99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;