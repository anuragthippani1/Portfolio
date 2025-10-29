import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="relative min-h-screen pt-16">
      <Navbar />
      <ThemeToggle />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
