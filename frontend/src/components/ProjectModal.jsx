import React, { useEffect } from 'react';
import { X, ExternalLink, Code, Mail } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        const offset = 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div
          className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          style={{
            animation: 'modalSlideIn 0.3s ease'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          >
            <X size={20} className="text-gray-600" />
          </button>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full uppercase">
                  {project.industry}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600 font-medium">{project.client}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                {project.title}
              </h2>
              <p className="text-lg text-gray-600">{project.tagline}</p>
            </div>

            {/* Metrics Highlight */}
            <div className="grid grid-cols-3 gap-6 mb-12 p-6 bg-gray-50 rounded-xl">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-red-500 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Problem */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Problem
              </h3>
              <p className="text-gray-700 leading-relaxed pl-5">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Solution
              </h3>
              <p className="text-gray-700 leading-relaxed pl-5">
                {project.solution}
              </p>
            </div>

            {/* Impact */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Impact
              </h3>
              <ul className="space-y-3 pl-5">
                {project.impact.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 pl-5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-gray-200 pt-8">
              <button
                onClick={scrollToContact}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-red-500 text-white font-semibold text-base rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              >
                <Mail size={20} className="mr-2" />
                Discuss a similar project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
