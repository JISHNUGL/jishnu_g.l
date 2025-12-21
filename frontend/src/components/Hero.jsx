import React from 'react';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/mockData';
import MagneticButton from './MagneticButton';

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
      className="min-h-screen flex items-center bg-white px-6 md:px-12 lg:px-20 py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Intro Line */}
            <div 
              className="opacity-0"
              style={{ animation: 'fadeInUp 0.7s ease-out forwards 0.1s' }}
            >
              <p className="text-base md:text-lg text-gray-600 font-medium mb-8">
                <span className="inline-block mr-2">👋</span>
                Hi, I'm <span className="font-bold text-gray-900">{personalInfo.name}</span>
              </p>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 
                className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none tracking-tight opacity-0"
                style={{ animation: 'fadeInUp 0.7s ease-out forwards 0.2s' }}
              >
                BUSINESS
              </h1>
              <h1 
                className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none tracking-tight opacity-0"
                style={{ animation: 'fadeInUp 0.7s ease-out forwards 0.3s' }}
              >
                ANALYST
              </h1>
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-600 leading-tight opacity-0"
                style={{ animation: 'fadeInUp 0.7s ease-out forwards 0.4s' }}
              >
                ITSM & CRM Implementation Specialist
              </h2>
            </div>

            {/* Tagline */}
            <p 
              className="text-lg text-gray-600 leading-relaxed max-w-xl opacity-0"
              style={{ animation: 'fadeInUp 0.7s ease-out forwards 0.5s' }}
            >
              {personalInfo.tagline}
            </p>

            {/* CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0"
              style={{ animation: 'fadeInUp 0.7s ease-out forwards 0.6s' }}
            >
              <MagneticButton
                onClick={() => scrollToSection('work')}
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold text-base hover:bg-gray-800 transition-all duration-300"
              >
                View My Work
              </MagneticButton>
              
              <MagneticButton
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-gray-900 font-semibold text-base border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </MagneticButton>
            </div>

            {/* Scroll Indicator */}
            <div 
              className="pt-8 opacity-0"
              style={{ animation: 'fadeInUp 0.7s ease-out forwards 0.7s' }}
            >
              <button
                onClick={() => scrollToSection('metrics')}
                className="inline-flex items-center text-sm text-gray-400 hover:text-gray-900 transition-colors group"
              >
                <span className="mr-2">Scroll to explore</span>
                <ArrowDown size={16} className="animate-bounce" />
              </button>
            </div>
          </div>

          {/* Right Column - Portrait Image */}
          <div 
            className="flex justify-center lg:justify-end items-center opacity-0"
            style={{ animation: 'fadeInImage 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.3s' }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Portrait Image */}
              <img 
                src="https://customer-assets.emergentagent.com/job_techportfolio-30/artifacts/iksoxux4_Untitled_design-removebg-preview.png"
                alt={personalInfo.name}
                className="w-full h-auto object-contain filter grayscale"
                style={{
                  maxHeight: '650px'
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
