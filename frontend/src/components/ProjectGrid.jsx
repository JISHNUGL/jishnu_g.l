import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects, categories } from '../data/mockData';
import ProjectModal from './ProjectModal';
import FloatingCard from './FloatingCard';
import ScrollReveal from './ScrollReveal';

const ProjectGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="work" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 relative inline-block">
              Selected Work
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Real projects, real impact. Here's how I've helped companies streamline operations and drive results.
            </p>
          </div>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-red-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <FloatingCard>
                <div
                  className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer border border-gray-100 h-full"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Card Header */}
                  <div className="p-6 border-b border-gray-100 relative overflow-hidden">
                    {/* Animated background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="flex items-start justify-between mb-3 relative z-10">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-red-500 font-semibold mb-1 flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                          {project.client}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-500 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <ArrowRight className="text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all" size={20} />
                    </div>
                    <p className="text-sm text-gray-600 relative z-10">{project.tagline}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-br from-gray-50 to-white">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center group/metric">
                        <div className="text-2xl font-black bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent group-hover/metric:scale-110 transition-transform">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="p-6 flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-red-100 hover:text-red-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FloatingCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectGrid;
