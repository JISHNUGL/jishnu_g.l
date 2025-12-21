import React from 'react';
import { skills } from '../data/mockData';
import { Badge } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Skills & Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on project experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], catIndex) => (
            <div
              key={category}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.5s ease forwards ${catIndex * 0.1}s`
              }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                {category}
              </h3>
              <div className="space-y-3">
                {skillList.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800 group-hover:text-red-500 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                        {skill.level}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Used in {skill.projects} projects
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
