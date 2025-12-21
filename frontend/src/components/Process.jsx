import React from 'react';
import { process } from '../data/mockData';
import { Search, Pencil, Settings, CheckCircle, Rocket } from 'lucide-react';

const iconMap = {
  Search,
  Pencil,
  Settings,
  CheckCircle,
  Rocket
};

const Process = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            How I Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven process that delivers results, from discovery to deployment
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200" style={{ top: '4rem' }}></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div
                  key={step.step}
                  className="relative"
                  style={{
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease forwards ${index * 0.1}s`
                  }}
                >
                  {/* Step Card */}
                  <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10">
                    {/* Icon Circle */}
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <Icon className="text-white" size={28} />
                    </div>

                    {/* Step Number */}
                    <div className="text-center mb-3">
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full">
                        STEP {step.step}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                      {step.title}
                    </h3>

                    {/* Points */}
                    <ul className="space-y-2">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <span className="text-red-500 mr-2 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
