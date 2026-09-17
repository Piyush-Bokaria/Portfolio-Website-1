import "./style.css";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Journey from "./Components/Journey";
import Research from "./Components/Research";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import FutureWork from "./Components/FutureWork";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  useEffect(() => {
    document.title = "Dr. Anitha P | Applied Psychologist & Researcher";
  }, []);
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Journey />
        <Research />
        <Projects />
        <Testimonials />
        <FutureWork />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
