import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MetricsStrip from "./components/MetricsStrip";
import ClientStrip from "./components/ClientStrip";
import ProjectGrid from "./components/ProjectGrid";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MetricsStrip />
      <ClientStrip />
      <ProjectGrid />
      <About />
      <Skills />
      <Certifications />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
