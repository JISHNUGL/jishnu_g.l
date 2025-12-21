import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

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
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center bg-white px-6 py-32 relative overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Intro Line */}
        <div className="animate-on-scroll opacity-0 mb-8">
          <p className="text-base md:text-lg text-gray-600 font-medium">
            <span className="inline-block mr-2">👋</span>
            My name is <span className="font-semibold text-gray-900">{personalInfo.name}</span> and {personalInfo.tagline}
          </p>
        </div>

        {/* Main Role - Large Bold Text */}
        <div className="animate-on-scroll opacity-0 relative mb-6" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none tracking-tight uppercase">
            {personalInfo.primaryRole}
          </h1>
        </div>

        {/* Secondary Role - Outlined/Stroke Text */}
        <div className="animate-on-scroll opacity-0 relative mb-12" style={{ animationDelay: '0.2s' }}>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight uppercase"
            style={{
              WebkitTextStroke: '2px #000',
              WebkitTextFillColor: 'transparent',
              color: 'transparent'
            }}
          >
            {personalInfo.secondaryRole}
          </h2>
        </div>

        {/* Portrait Placeholder */}
        <div className="animate-on-scroll opacity-0 mb-12" style={{ animationDelay: '0.3s' }}>
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-4 border-gray-900 overflow-hidden">
            <div className="text-6xl md:text-8xl font-bold text-gray-400">
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4 justify-center mb-16" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollToSection('work')}
            className="inline-flex items-center justify-center px-8 py-4 bg-red-500 text-white font-semibold text-base rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            You need a problem-solver
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-gray-900 font-semibold text-base rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
          >
            You need a systems builder
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => scrollToSection('metrics')}
            className="inline-flex flex-col items-center text-gray-400 hover:text-red-500 transition-colors group"
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
