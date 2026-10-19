import About from "@/components/About";
import AISection from "@/components/AISection";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenu" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Technologies />
        <Projects />
        <Experience />
        <Services />
        <AISection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
