import { motion } from "framer-motion";
import { Github, Linkedin, Mails } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/krisianastas", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/krisi-anastasi-8a380b82", label: "LinkedIn" },
  { icon: Mails, href: "mailto:krisianastas@gmail.com", label: "Email" },
];

const SocialSidebar = () => {
  return (
    <>
      {/* Bottom Left Sidebar - Socials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed left-8 bottom-0 hidden xl:flex flex-col items-center gap-5"
      >
        {socials.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + index * 0.1, duration: 0.3 }}
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            aria-label={social.label}
            target="_blank"
          >
            <social.icon size={20} />
          </motion.a>
        ))}
        <div className="w-px h-24 bg-muted-foreground" />
      </motion.div>

      {/* Top Left Sidebar - Email */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed left-8 top-0 hidden xl:flex flex-col items-center gap-5"
      >
        <div className="w-px h-24 bg-muted-foreground" />
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.3 }}
          href="mailto:krisianastas@gmail.com"
          className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
          style={{ writingMode: "vertical-rl" }}
        >
          krisianastas@gmail.com
        </motion.a>       
      </motion.div>
    </>
  );
};

export default SocialSidebar;
