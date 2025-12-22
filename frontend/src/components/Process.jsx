import React, { useState, useEffect, useRef } from 'react';
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
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Focus middle 20% of screen
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setActiveStep(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const ActiveIcon = iconMap[process[activeStep].icon];

  return (
    <section id="process" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            How I Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven, systematic approach that transforms complex requirements into delivered results.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Sticky Left Side - Visual Indicator */}
          <div className="hidden lg:block lg:w-1/3 min-h-[400px]">
            <div className="sticky top-32 bg-white rounded-3xl p-8 shadow-2xl shadow-red-500/10 border border-gray-100 flex flex-col items-center justify-center text-center h-[400px] transition-all duration-500 will-change-transform">

              <div key={`icon-${activeStep}`} className="animate-fade-in">
                <div className="w-24 h-24 bg-red-500 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-lg transform transition-transform hover:scale-105 duration-300">
                  <ActiveIcon className="text-white" size={48} />
                </div>

                <div className="text-8xl font-black text-gray-100 mb-2 leading-none select-none">
                  0{process[activeStep].step}
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {process[activeStep].title}
                </h3>
              </div>

            </div>
          </div>

          {/* Right Side - Scrollable Steps */}
          <div className="lg:w-2/3 space-y-32 pb-24">
            {process.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isActive = activeStep === index;

              return (
                <div
                  key={step.step}
                  ref={el => stepRefs.current[index] = el}
                  data-index={index}
                  className={`relative transition-all duration-500 will-change-transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-4 lg:opacity-30'}`}
                >
                  {/* Mobile Header (Only visible on small screens) */}
                  <div className="flex items-center gap-4 mb-6 lg:hidden">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-md">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <span className="text-red-500 font-bold text-sm tracking-wider">STEP 0{step.step}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className={`bg-white rounded-2xl p-8 border hover:border-red-100 transition-all duration-300 ${isActive ? 'shadow-xl shadow-gray-200/50 border-red-500/20 scale-100' : 'shadow-sm border-gray-100 scale-95'}`}>
                    <ul className="space-y-6">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="flex items-start text-lg text-gray-700">
                          <CheckCircle className={`min-w-[20px] mr-4 mt-1.5 transition-colors duration-300 ${isActive ? 'text-red-500' : 'text-gray-300'}`} size={20} />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connector Line (Decorative) */}
                  {index !== process.length - 1 && (
                    <div className="absolute left-8 lg:left-[-3rem] bottom-[-6rem] w-0.5 h-24 bg-gray-200 lg:hidden" />
                  )}
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
