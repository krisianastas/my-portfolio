import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-primary mb-4">03. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question, 
            want to collaborate on a project, or just want to say hi, my inbox is 
            always open. I'll try my best to get back to you!
          </p>
          <a
            href="mailto:krisianastas@gmail.com"
            className="inline-block font-mono px-10 py-5 border-2 border-primary text-primary rounded hover:bg-primary/10 transition-all duration-300 glow text-lg"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
