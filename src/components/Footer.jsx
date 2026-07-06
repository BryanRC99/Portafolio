import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <footer id="contact" className="hairline-t">
      <div className="max-w-5xl mx-auto px-6 md:px-8 section-pad">
        <p className="cmd-eyebrow mb-4">whoami --contact</p>

        <div className="hairline-t pt-8 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <h2 className="font-display text-3xl md:text-4xl text-ink">
            Contacto
          </h2>

          <div>
            <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-xl mb-8">
              Disponible para oportunidades en desarrollo de software,
              backend, soporte e infraestructura TI.
            </p>

            <div className="space-y-3 text-ink-soft mb-10">
              <div className="flex items-center gap-3">
                <MdLocationOn className="text-signal text-lg shrink-0" />
                <span>Quito, Ecuador</span>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-signal text-lg shrink-0" />
                <a href="mailto:bryancr2004@gmail.com" className="hover:text-ink transition-colors">
                  bryancr2004@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MdPhone className="text-signal text-lg shrink-0" />
                <span>0993395049</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 font-mono text-sm text-ink">
              <a
                href="https://www.linkedin.com/in/bryan-pineda-199610348/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-b border-ink pb-0.5 hover:text-signal hover:border-signal transition-colors"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/BryanRC99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-b border-ink pb-0.5 hover:text-signal hover:border-signal transition-colors"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="/CV_BRYAN_PINEDA.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-b border-ink pb-0.5 hover:text-signal hover:border-signal transition-colors"
              >
                <FaFileDownload /> Descargar CV
              </a>
            </div>
          </div>
        </div>

        <div className="hairline-t mt-16 pt-6 flex flex-col sm:flex-row justify-between gap-2 font-mono text-xs text-ink-faint">
          <p>© {new Date().getFullYear()} Bryan Pineda</p>
          <p>React · Tailwind CSS · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
