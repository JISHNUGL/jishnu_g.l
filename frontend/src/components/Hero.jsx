import React from 'react';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/mockData';
import MagneticButton from './MagneticButton';
import MaskedImage from './MaskedImage';
import SplitText from './SplitText';

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
      className="min-h-screen flex flex-col justify-between bg-white pt-12 md:pt-24 pb-0 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 h-screen flex flex-col items-center justify-center relative z-0">

        {/* Top Intro - Absolute Positioned */}
        <div
          className="absolute top-24 md:top-32 left-0 right-0 text-center z-30 pointer-events-none"
          style={{ animation: 'fadeInDown 0.7s ease-out forwards 0s' }}
        >
          <p className="text-xl md:text-2xl text-gray-600 font-medium bg-white/50 backdrop-blur-sm inline-block px-4 py-2 rounded-full">
            <span className="inline-block mr-2">👋</span>
            Hi, I'm <span className="font-bold text-gray-900">{personalInfo.name}</span>
          </p>
        </div>

        {/* Main Title Background - Centered */}
        <div className="relative w-full z-0 flex flex-col items-center justify-center -mt-10 pointer-events-none">
          <h1
            className="font-anton text-[15vw] md:text-[13vw] leading-[0.8] tracking-tight text-gray-900 uppercase select-none text-center flex flex-col items-center"
          >
            <SplitText text="BUSINESS" delay={0.1} />
            <SplitText text="ANALYST" delay={0.2} />
          </h1>

          <div
            className="font-anton text-[8vw] md:text-[6vw] leading-[1.1] tracking-wide text-outline uppercase select-none text-center text-transparent mt-2 md:mt-4 whitespace-nowrap"
            style={{
              WebkitTextStroke: window.innerWidth < 768 ? '1px black' : '2px black'
            }}
          >
            <SplitText text="& ITSM Specialist" delay={0.3} />
          </div>
        </div>

        {/* Portrait Image - Superimposed in Front */}
        <div
          className="absolute bottom-0 left-0 w-full flex justify-center items-end pointer-events-none z-10"
          style={{
            height: '85vh',
            animation: 'fadeInImage 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards 0s',
          }}
        >
          <MaskedImage
            src="/images/hero-portrait-green.png"
            alt={personalInfo.name}
            className="h-[95%] w-auto object-contain object-bottom filter grayscale contrast-110 drop-shadow-2xl"
          />
        </div>

        {/* CTAs - Floating Bottom */}
        <div
          className="absolute bottom-12 left-0 right-0 flex justify-center gap-4 z-20 pointer-events-auto"
          style={{ animation: 'fadeInUp 0.7s ease-out forwards 0.6s' }}
        >
          <MagneticButton
            onClick={() => scrollToSection('work')}
            className="px-8 py-3 bg-gray-900 text-white font-semibold text-sm uppercase tracking-wide hover:bg-gray-800 transition-all duration-300"
          >
            View My Work
          </MagneticButton>

          <MagneticButton
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-white text-gray-900 font-semibold text-sm uppercase tracking-wide border border-gray-900 hover:bg-gray-50 transition-all duration-300"
          >
            Get In Touch
          </MagneticButton>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 right-8 z-20 hidden md:block opacity-0"
        style={{ animation: 'fadeInUp 0.7s ease-out forwards 0.7s' }}
      >
        <button
          onClick={() => scrollToSection('metrics')}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-900 hover:scale-110 transition-transform duration-300"
        >
          <ArrowDown size={20} />
        </button>
      </div>

    </section>
  );
};

export default Hero;
