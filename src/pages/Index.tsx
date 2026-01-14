import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import ScrollIndicator from "@/components/ScrollIndicator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SocialSidebar />
      <ScrollIndicator />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
