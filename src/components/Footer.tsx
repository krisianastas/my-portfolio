import { Github, Linkedin, Mails } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/krisianastas", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/krisi-anastasi-8a380b82", label: "LinkedIn" },
  { icon: Mails, href: "mailto:krisianastas@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
                aria-label={social.label}
                target="_blank"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Krisi Anastas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
