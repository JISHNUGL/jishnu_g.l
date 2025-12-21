import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MetricsStrip from "./components/MetricsStrip";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MetricsStrip />
      
      {/* Placeholder sections - will be built next */}
      <section id="clients" className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Clients Section</h2>
          <p className="text-gray-600 mt-4">Coming next...</p>
        </div>
      </section>
      
      <section id="work" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Work Section</h2>
          <p className="text-gray-600 mt-4">Coming next...</p>
        </div>
      </section>
      
      <section id="about" className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">About Section</h2>
          <p className="text-gray-600 mt-4">Coming next...</p>
        </div>
      </section>
      
      <section id="process" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Process Section</h2>
          <p className="text-gray-600 mt-4">Coming next...</p>
        </div>
      </section>
      
      <section id="testimonials" className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Testimonials Section</h2>
          <p className="text-gray-600 mt-4">Coming next...</p>
        </div>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Contact Section</h2>
          <p className="text-gray-600 mt-4">Coming next...</p>
        </div>
      </section>
    </div>
  );
}

export default App;
