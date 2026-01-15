import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
    title: "Patient Database",
    description:
      "A full-stack web application for managing patient records with Django REST API backend and Vue.js frontend. Features include CRUD operations for patient data (name, phone, email, doctor, price, services) with SQLite database, modern UI using Tailwind CSS, and TypeScript support.",
    tech: ["Django", "Python", "SQLite", "Vue 3", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/krisianastas/patient-database",
    live: "https://patient-database.vercel.app/",
    featured: true,
    },
    {
    title: "LMS Analytics Dashboard",
    description:
      "A Vue 3 + TypeScript dashboard for real-time classroom analytics and student performance tracking. Features include attendance monitoring, grade distribution visualization, at-risk student identification, and comprehensive class statistics with a sleek dark-themed UI built with Tailwind CSS.",
    tech: ["Vue 3", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/krisianastas/lms-analytics-dashboard",
    live: "https://lms-analytics-dashboard.vercel.app/",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Features a responsive design with smooth animations, dark/light theme toggle, and fully accessible components.",
    tech: ["HTML", "CSS", "JavaScript (ES6)"],
    github: "https://github.com/krisianastas/portfolio-website",
    live: "https://portfolio-website-five-sable-52.vercel.app/",
    featured: true,
  },
];

const otherProjects = [
  {
    title: "My Portfolio Website",
    description: "The portfolio website for this repo — a modern, responsive React site showcasing projects and skills with smooth animations and a clean UI.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    github: "https://github.com/krisianastas/my-portfolio",
  },
  {
    title: "Legal Summary Generator",
    description: "Takes the user input for a specific Albanian law (no. & date) and summarizes its contents into one paragraph.",
    tech: ["Python", "Selenium", "BeautifulSoup"],
    github: "https://github.com/krisianastas/legal-summarizer",
  },
  {
    title: "PDF 2 Audiobook Converter",
    description: "Reads all the text from a specified PDF file and converts it into a WAV audio file by using the large text to speech (TTS) API.",
    tech: ["Python"],
    github: "https://github.com/krisianastas/pdf-2-audiobook",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-16"
        >
          <span className="text-primary font-mono text-xl">02.</span>
          Things I've Built
          <span className="h-px bg-muted flex-1 max-w-xs" />
        </motion.h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-gradient p-6 rounded-lg shadow-card border border-border hover:border-primary/50 transition-colors"
            >
              {/* Project Content */}
              <div className="flex items-start justify-between gap-6 mb-4">
                <div>
                  <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold">
                    <a
                      href={project.live ?? project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>
                </div>

                <div className="flex gap-4 pt-1">
                  <a
                    href={project.github}
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="Live Demo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  ) : null}
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>
              <ul className="flex flex-wrap gap-3 font-mono text-sm text-muted-foreground">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-bold mb-12"
        >
          Other Noteworthy Projects
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-gradient p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-primary text-4xl">📁</span>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                    target="_blank"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
              <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
