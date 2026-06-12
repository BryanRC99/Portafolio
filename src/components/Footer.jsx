import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-800/80 mt-16 bg-slate-950/20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* Columna Izquierda */}
          <div>
            <h2 className="text-2xl font-bold text-white">Contacto</h2>
            <p className="text-gray-400 text-sm mt-2 max-w-sm leading-relaxed">
              Disponible para oportunidades en desarrollo de software, backend, soporte e infraestructura TI.
            </p>
            <div className="flex gap-4 mt-5 text-xl">
              <a
                href="https://www.linkedin.com/in/bryan-pineda-199610348/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/BryanRC99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="/CV_Bryan_Pineda.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaFileDownload />
              </a>
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="space-y-3 md:pt-2 text-sm text-gray-300 md:justify-self-end">
            <div className="flex items-center gap-3">
              <MdLocationOn className="text-cyan-400 text-lg flex-shrink-0" />
              <span>Quito, Ecuador</span>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-cyan-400 text-lg flex-shrink-0" />
              <a href="mailto:bryancr2004@gmail.com" className="hover:underline">bryancr2004@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <MdPhone className="text-cyan-400 text-lg flex-shrink-0" />
              <span>0993395049</span>
            </div>
          </div>

        </div>

        {/* Créditos Inferiores */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between text-xs text-gray-500 gap-2">
          <p>Desarrollado con React, Tailwind CSS y Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;