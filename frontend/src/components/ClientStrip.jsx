import React from 'react';
import { clients } from '../data/mockData';

const ClientStrip = () => {
  return (
    <section id="clients" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
            Trusted by teams across industries
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Experience across SaaS, AI/ML, and Enterprise
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease forwards ${index * 0.1}s`
              }}
            >
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900 group-hover:text-red-500 transition-colors mb-1">
                  {client.name}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  {client.industry}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStrip;
