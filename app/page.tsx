import { About } from "./about";
import Education from "./education";
import Experience from "./experience";
import Footer from "./footer";
import Hero from "./hero_section";
import Navbar from "./navbar";
import Projects from "./projects";

export default function Page() {
  return (
    <div className="min-w-0 overflow-x-hidden">
      <div className="flex h-[100svh] flex-col">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}
