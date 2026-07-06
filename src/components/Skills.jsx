import { motion } from "framer-motion";

const categories = [
  {
    label: "Lenguajes & Frameworks",
    items: ["Python", "JavaScript", "PHP", "Django", "React", "APIs REST", "CSS3"],
  },
  {
    label: "Bases de Datos",
    items: ["PostgreSQL", "MySQL", "SQL Server", "Oracle (básico)"],
  },
  {
    label: "Cloud",
    items: ["AWS", "Microsoft Azure"],
  },
  {
    label: "Infraestructura & Redes",
    items: ["Zabbix", "FortiGate", "Redes TCP/IP", "SNMPv3", "Firewalls, Routers, Switches"],
  },
  {
    label: "Seguridad Informática",
    items: ["Nmap", "Wireshark", "Auditoría de redes", "Escaneo de vulnerabilidades"],
  },
  {
    label: "Sistemas & Herramientas",
    items: ["Windows", "Kali Linux", "Ubuntu", "Debian", "Docker", "Git / GitHub", "VMware", "Postman"],
  },
];

function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 md:px-8 section-pad">
      <p className="cmd-eyebrow mb-4">ls skills/</p>

      <div className="hairline-t pt-8 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
        <h2 className="font-display text-3xl md:text-4xl text-ink">
          Tecnologías
        </h2>

        <div className="space-y-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="grid sm:grid-cols-[9rem_1fr] gap-x-6 gap-y-2"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-ink-faint pt-1">
                {cat.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-ink-soft border border-hairline rounded-full px-3 py-1 hover:border-signal hover:text-signal transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
