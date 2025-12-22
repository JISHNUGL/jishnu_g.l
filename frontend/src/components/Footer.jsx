import React from 'react';
import { personalInfo } from '../data/mockData';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Left: Brand */}
          <div>
            <div className="flex items-center space-x-1 mb-4">
              <span className="text-2xl font-bold">{personalInfo.name.split(' ')[0]}</span>
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Business Analyst specializing in ITSM & CRM implementations that deliver measurable results.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider text-xs">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {[
                { id: 'about', label: 'About' },
                { id: 'clients', label: 'Experience' },
                { id: 'work', label: 'Work' },
                { id: 'skills', label: 'Skills' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'process', label: 'Process' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-fit text-gray-400 hover:text-red-500 transition-all duration-300 text-sm hover:translate-x-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors text-sm"
              >
                <Mail size={16} />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors text-sm"
              >
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="text-sm text-gray-400 hover:text-red-500 transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
