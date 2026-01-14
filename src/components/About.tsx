import {
  Braces,
  FileCode,
  Code2,
  Globe,
  Route,
  Database,
  Palette,
  Plug,
  TerminalSquare,
  GitBranch,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { label: "JavaScript (ES6+)", icon: Braces },
  { label: "TypeScript", icon: FileCode },
  { label: "Vue.js", icon: Code2 },
  { label: "Vue Router", icon: Route },
  { label: "Pinia (state management)", icon: Database },
  { label: "Component-Based Dev.", icon: Cpu },
  { label: "Tailwind CSS", icon: Palette },
  { label: "REST APIs", icon: Plug },
  { label: "Python", icon: TerminalSquare },
  { label: "Git", icon: GitBranch },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-10">
            <span className="text-primary font-mono text-xl">01.</span>
            About Me
            <span className="h-px bg-muted flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Krisi, a passionate software developer. 
                I enjoy creating things that live on machines, whether that be websites, 
                applications, or anything in between.
              </p>
              <p>
                My journey into web development started back in 2011 when I started maintaining
                an existing website written in pure HTML and CSS!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at a 
                <span className="text-primary"> software company</span> where I build frontends
                for SaaS using a component-based architecture, and on{" "}
                <span className="text-primary">several side projects</span>. My main focus these 
                days is building accessible products and digital experiences.
              </p>

              <p className="pt-4">Here are a few technologies I've been working with recently:</p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-sm">
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 rounded-md border border-primary/20 bg-primary/5 px-3 py-2 text-foreground/90 shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/10"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-primary shadow-inner">
                      <skill.icon className="h-4 w-4" />
                    </span>
                    <span className="font-semibold text-foreground pointer-events-none">{skill.label}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative z-10 rounded-lg overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary rounded-lg overflow-hidden border-1 border-primary">
                  <img
                    src="/data/krisi-anastas.jpeg"
                    alt="Krisi Anastas"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-transparent group-hover:bg-primary/20 transition-colors duration-300 rounded-lg" />
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
