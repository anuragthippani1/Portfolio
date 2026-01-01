import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Patents from "@/components/Patents";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import NewYearEffect from "@/components/NewYearEffect";

export default function Home() {
  return (
    <main className="relative">
      <NewYearEffect />
      <Navbar />
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Patents />
      <Contact />
      <Footer />
    </main>
  );
}
