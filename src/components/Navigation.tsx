import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastY;
      const pastThreshold = currentY > 80;

      setIsHidden(scrollingDown && pastThreshold);
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isHidden ? -120 : 0, opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-black/25 px-6 py-4 backdrop-blur rounded-3xl border border-border/50">
        <a href="#" className="font-mono text-xl font-bold text-primary">
          {"<KrisiAnastas />"}
        </a>
        <button
          type="button"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMobileOpen((open) => !open)}
          className="md:hidden font-mono text-sm px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors duration-300"
        >
          Menu
        </button>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <a
                href={item.href}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <span className="text-primary">0{index + 1}.</span> {item.label}
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <a
              href="/data/resume_krisi_anastas.pdf"
              target="_blank"
              className="font-mono text-sm px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors duration-300"
            >
              Resume
            </a>
          </motion.li>
        </ul>
      </div>
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 max-w-6xl mx-auto bg-black/40 backdrop-blur rounded-2xl border border-border/50 px-6 py-4"
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <span className="text-primary">0{index + 1}.</span>{" "}
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/data/resume_krisi_anastas.pdf"
                  target="_blank"
                  className="font-mono text-sm px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors duration-300 inline-block"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
