import React, { useState, useEffect } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'work', label: 'Work' },
    { id: 'clients', label: 'Clients' },
    { id: 'about', label: 'About' },
    { id: 'process', label: 'Process' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-gray-900">
                {personalInfo.name.split(' ')[0]}
              </span>
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'text-red-500'
                      : 'text-gray-700 hover:text-red-500'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              {/* Language Toggle */}
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                <span className="cursor-pointer hover:text-red-500 transition-colors">EN</span>
                <span className="text-gray-300">|</span>
                <span className="cursor-pointer hover:text-red-500 transition-colors">ML</span>
              </div>

              {/* Email CTA Button */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-red-600 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Mail size={16} />
                <span>{personalInfo.email}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-red-500 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="absolute top-20 left-0 right-0 bg-white shadow-lg">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-6 py-4 text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-red-500 bg-red-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="px-6 py-4 border-t border-gray-100">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-red-600 transition-colors w-full"
                >
                  <Mail size={16} />
                  <span>Email Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
