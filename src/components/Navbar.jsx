import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Stack" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#certifications", label: "Certificaciones" },
];

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-paper/90 backdrop-blur-sm hairline-b">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        <a
          href="#"
          className="font-mono text-sm text-ink tracking-tight"
        >
          ~/bryan<span className="text-signal">.pineda</span>
        </a>

        <div className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-wider text-ink-soft">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-signal transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 text-base text-ink-soft">
          <a
            href="https://linkedin.com/in/bryan-pineda-199610348"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-signal transition-colors"
          >
            <FaLinkedin size={17} />
          </a>
          <a
            href="https://github.com/BryanRC99"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-signal transition-colors"
          >
            <FaGithub size={17} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
