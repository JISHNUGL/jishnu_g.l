import React from 'react';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/mockData';
import { AnimatedText, GradientText } from './AnimatedText';
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white px-6 py-32 relative overflow-hidden"
    >
      {/* Animated particle background */}
      <ParticleBackground />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">\n        {/* Intro Line */}\n        <div className=\"mb-8 opacity-0\" style={{ animation: 'fadeInUp 0.8s ease forwards' }}>\n          <p className=\"text-base md:text-lg text-gray-600 font-medium\">\n            <span className=\"inline-block mr-2 animate-bounce\">👋</span>\n            My name is <GradientText><span className=\"font-bold\">{personalInfo.name}</span></GradientText> and {personalInfo.tagline}\n          </p>\n        </div>\n\n        {/* Main Role - Large Bold Text with animated letters */}\n        <div className=\"relative mb-6 opacity-0\" style={{ animation: 'fadeInUp 0.8s ease forwards 0.2s' }}>\n          <h1 className=\"text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none tracking-tight uppercase\">\n            <AnimatedText text={personalInfo.primaryRole} delay={300} />\n          </h1>\n        </div>\n\n        {/* Secondary Role - Outlined/Stroke Text with glow */}\n        <div className=\"relative mb-12 opacity-0\" style={{ animation: 'fadeInUp 0.8s ease forwards 0.4s' }}>\n          <h2\n            className=\"text-4xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight uppercase\"\n            style={{\n              WebkitTextStroke: '2px #EF4444',\n              WebkitTextFillColor: 'transparent',\n              color: 'transparent',\n              filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.3))'\n            }}\n          >\n            {personalInfo.secondaryRole}\n          </h2>\n        </div>\n\n        {/* Portrait Placeholder with floating animation */}\n        <div className=\"mb-12 opacity-0\" style={{ animation: 'fadeInUp 0.8s ease forwards 0.6s' }}>\n          <div \n            className=\"w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-br from-red-100 via-pink-100 to-red-100 flex items-center justify-center border-4 border-red-500 overflow-hidden shadow-2xl\"\n            style={{\n              animation: 'float 3s ease-in-out infinite',\n              boxShadow: '0 0 60px rgba(239, 68, 68, 0.4)'\n            }}\n          >\n            <div className=\"text-6xl md:text-8xl font-bold bg-gradient-to-br from-red-500 to-pink-500 bg-clip-text text-transparent\">\n              {personalInfo.name.split(' ').map(n => n[0]).join('')}\n            </div>\n          </div>\n        </div>\n\n        {/* CTAs with magnetic effect */}\n        <div className=\"flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0\" style={{ animation: 'fadeInUp 0.8s ease forwards 0.8s' }}>\n          <MagneticButton\n            onClick={() => scrollToSection('work')}\n            className=\"inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold text-base rounded-full shadow-lg hover:shadow-2xl group overflow-hidden relative\"\n          >\n            <span className=\"relative z-10\">You need a problem-solver</span>\n            <div className=\"absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300\"></div>\n          </MagneticButton>\n          \n          <MagneticButton\n            onClick={() => scrollToSection('process')}\n            className=\"inline-flex items-center justify-center px-8 py-4 bg-transparent text-gray-900 font-semibold text-base rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:shadow-xl\"\n          >\n            You need a systems builder\n          </MagneticButton>\n        </div>\n\n        {/* Scroll Indicator */}\n        <div className=\"opacity-0\" style={{ animation: 'fadeInUp 0.8s ease forwards 1s' }}>\n          <button\n            onClick={() => scrollToSection('metrics')}\n            className=\"inline-flex flex-col items-center text-gray-400 hover:text-red-500 transition-colors group\"\n          >\n            <span className=\"text-xs uppercase tracking-wider font-medium mb-2\">Scroll to explore</span>\n            <ArrowDown size={20} className=\"animate-bounce\" />\n          </button>\n        </div>\n      </div>\n    </section>\n  );\n};\n\nexport default Hero;
