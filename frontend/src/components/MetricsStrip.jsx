import React, { useEffect, useRef, useState } from 'react';
import { metrics } from '../data/mockData';

const MetricsStrip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const metricsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="metrics" ref={metricsRef} className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              className="text-center group cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease ${index * 0.1}s`
              }}
            >
              <div className="relative inline-block mb-3">
                <div className="text-5xl md:text-6xl font-black text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                  {metric.value}
                </div>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-900 uppercase tracking-wide mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsStrip;
