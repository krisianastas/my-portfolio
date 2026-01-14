import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "I build software for the web.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-mono text-primary mb-4"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Krisi Anastas.
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-muted-foreground mb-6"
        >
          {displayText}
          <span className="animate-blink text-primary">|</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
        >
          I'm a software developer specializing in building exceptional digital experiences. 
          Currently focused on creating accessible, human-centered products that make a difference.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="#projects"
            className="inline-block font-mono px-8 py-4 border-2 border-primary text-primary rounded hover:bg-primary/10 transition-all duration-300 glow"
          >
            Check out my work!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
