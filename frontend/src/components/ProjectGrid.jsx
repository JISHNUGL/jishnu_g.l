import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects, categories } from '../data/mockData';
import ProjectModal from './ProjectModal';

const ProjectGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real projects, real impact. Here's how I've helped companies streamline operations and drive results.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-red-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100"
              onClick={() => setSelectedProject(project)}
              style={{
                opacity: 0,
                animation: `fadeInUp 0.5s ease forwards ${index * 0.1}s`
              }}
            >
              {/* Card Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-red-500 font-semibold mb-1">
                      {project.client}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-500 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all" size={20} />
                </div>
                <p className="text-sm text-gray-600">{project.tagline}</p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-black text-red-500">
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
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
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
