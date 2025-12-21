import React from 'react';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/mockData';
import MagneticButton from './MagneticButton';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white px-6 py-32 relative overflow-hidden"
    >
      <ParticleBackground />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Intro Line */}
        <div className="mb-12 opacity-0" style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
          <p className="text-base md:text-lg text-gray-600 font-medium">
            <span className="inline-block mr-2 animate-bounce">👋</span>
            my name is <span className="font-bold text-gray-900">{personalInfo.name}</span> and {personalInfo.tagline}
          </p>
        </div>

        {/* Main Typography + Portrait Container */}
        <div className="relative inline-block">
          {/* Top Bold Text */}
          <div className="opacity-0 relative z-10" style={{ animation: 'fadeInUp 0.8s ease forwards 0.2s' }}>
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-gray-900 leading-none tracking-tighter uppercase mb-0">
              BUSINESS
            </h1>
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-gray-900 leading-none tracking-tighter uppercase">
              ANALYST
            </h1>
          </div>

          {/* Portrait - Centered and Overlapping */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 opacity-0"
            style={{
              top: '50%',
              transform: 'translate(-50%, -50%)',
              animation: 'fadeInUp 0.8s ease forwards 0.5s',
              zIndex: 20
            }}
          >
            <div 
              className="w-72 h-96 md:w-80 md:h-[450px] lg:w-96 lg:h-[550px] relative"
              style={{
                animation: 'float 3s ease-in-out infinite'
              }}
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_techportfolio-30/artifacts/iksoxux4_Untitled_design-removebg-preview.png"
                alt={personalInfo.name}
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Bottom Outlined Text */}
          <div className="opacity-0 relative z-10" style={{ animation: 'fadeInUp 0.8s ease forwards 0.4s' }}>
            <h2
              className="text-7xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tighter uppercase"
              style={{
                WebkitTextStroke: '2px #000',
                WebkitTextFillColor: 'transparent',
                color: 'transparent'
              }}
            >
              & CRM IMPLEMENTATION
            </h2>
            <h2
              className="text-7xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tighter uppercase"
              style={{
                WebkitTextStroke: '2px #000',
                WebkitTextFillColor: 'transparent',
                color: 'transparent'
              }}
            >
              SPECIALIST
            </h2>
          </div>
        </div>

        {/* CTAs */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center mt-16 opacity-0" 
          style={{ animation: 'fadeInUp 0.8s ease forwards 0.8s' }}
        >
          <MagneticButton
            onClick={() => scrollToSection('work')}
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold text-base hover:bg-gray-800 transition-all duration-300"
          >
            You need a problem-solver
          </MagneticButton>
          
          <MagneticButton
            onClick={() => scrollToSection('process')}
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-gray-900 font-semibold text-base border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            You need a systems builder
          </MagneticButton>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 opacity-0" style={{ animation: 'fadeInUp 0.8s ease forwards 1s' }}>
          <button
            onClick={() => scrollToSection('metrics')}
            className="inline-flex flex-col items-center text-gray-400 hover:text-gray-900 transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider font-medium mb-2">Scroll to explore</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
