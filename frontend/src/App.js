import React from "react";
import { Analytics } from "@vercel/analytics/react";
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
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MetricsStrip />
      <About />
      <ClientStrip />
      <ProjectGrid />
      <Skills />
      <Certifications />
      <Process />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
