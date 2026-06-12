import { FaPython, FaReact, FaDocker, FaGitAlt, FaLinux, FaAws } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiPhp } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: <FaPython size={32} /> },
  { name: "Django", icon: <SiDjango size={32} /> },
  { name: "React", icon: <FaReact size={32} /> },
  { name: "PHP", icon: <SiPhp size={32} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
  { name: "AWS", icon: <FaAws size={32} /> },
  { name: "Docker", icon: <FaDocker size={32} /> },
  { name: "Linux", icon: <FaLinux size={32} /> },
  { name: "Git", icon: <FaGitAlt size={32} /> },
];

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-white mb-6">
        Tecnologías
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 text-center text-white flex flex-col items-center justify-center gap-2"
          >
            <div className="text-cyan-400">
              {skill.icon}
            </div>
            <p className="text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;