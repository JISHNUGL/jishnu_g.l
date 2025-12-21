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

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Intro Line */}
        <div className="mb-8 opacity-0" style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
          <p className="text-base md:text-lg text-gray-600 font-medium">
            <span className="inline-block mr-2 animate-bounce">👋</span>
            my name is <span className="font-bold text-gray-900">{personalInfo.name}</span> and {personalInfo.tagline}
          </p>
        </div>

        {/* Main content container with portrait integration */}
        <div className="relative">
          {/* Main Role - Large Bold Text */}
          <div className="opacity-0 mb-4" style={{ animation: 'fadeInUp 0.8s ease forwards 0.2s' }}>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none tracking-tight uppercase">
              {personalInfo.primaryRole}
            </h1>
          </div>

          {/* Secondary Role - Outlined/Stroke Text WITH Portrait Integration */}
          <div className="relative opacity-0" style={{ animation: 'fadeInUp 0.8s ease forwards 0.4s' }}>
            <h2
              className="text-5xl md:text-6xl lg:text-8xl font-black leading-none tracking-tight uppercase mb-0"
              style={{
                WebkitTextStroke: '2px #000',
                WebkitTextFillColor: 'transparent',
                color: 'transparent'
              }}
            >
              & {personalInfo.secondaryRole.split(' ').slice(-3).join(' ')}
            </h2>

            {/* Portrait Overlapping the Text - Bazil Style */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 opacity-0"
              style={{
                top: '-280px',
                animation: 'fadeInUp 0.8s ease forwards 0.6s',
                zIndex: 1
              }}
            >
              <div 
                className="w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[500px] relative overflow-hidden"
                style={{
                  animation: 'float 3s ease-in-out infinite',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.5s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_techportfolio-30/artifacts/7jpi300h_Untitled%20design.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* CTAs positioned at the bottom of portrait */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12 relative z-10 opacity-0" 
            style={{ 
              animation: 'fadeInUp 0.8s ease forwards 0.8s',
              marginTop: '240px'
            }}
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
