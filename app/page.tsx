import { About } from "./about";
import Experience from "./experience";
import Footer from "./footer";
import Hero from "./hero_section";
import Navbar from "./navbar";

export default function Page() {

  return (
    <div>
      <Navbar />
          <Hero />
          <About />
          <Experience />
          <Footer/>
          
    </div>
  );
}
