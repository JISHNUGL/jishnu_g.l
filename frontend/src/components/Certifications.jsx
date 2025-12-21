import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  {
    name: "HubSpot Marketing Hub Software",
    issuer: "HubSpot Academy",
    status: "Certified",
    year: "2024-2025"
  },
  {
    name: "HubSpot Reporting",
    issuer: "HubSpot Academy",
    status: "Certified",
    year: "2025-2026"
  },
  {
    name: "Freshservice Advanced Product Certification",
    issuer: "Freshworks",
    status: "Certified",
    year: "2024"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Certified",
    year: "2024"
  },
  {
    name: "AWS Business Accredited",
    issuer: "Amazon Web Services",
    status: "Accredited",
    year: "2024"
  },
  {
    name: "AWS Sales Accredited",
    issuer: "Amazon Web Services",
    status: "Accredited",
    year: "2024"
  },
  {
    name: "Foundation of Cybersecurity",
    issuer: "Google",
    status: "Certified",
    year: "2024"
  },
  {
    name: "Database Programming with SQL",
    issuer: "Oracle",
    status: "Certified",
    year: "2023"
  },
  {
    name: "Freshchat Expert",
    issuer: "Freshworks",
    status: "Expert",
    year: "2024"
  },
  {
    name: "Freshsales Suite Expert",
    issuer: "Freshworks",
    status: "Expert",
    year: "2024"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-4">
            <Award className="text-red-500" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Certifications & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise across platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-red-500 transition-all duration-300 group"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.5s ease forwards ${index * 0.05}s`
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors">
                    <CheckCircle className="text-red-500 group-hover:text-white transition-colors" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-red-500 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                      {cert.status}
                    </span>
                    <span className="text-xs text-gray-500">{cert.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-black text-red-500 mb-2">10+</div>
            <div className="text-sm font-semibold text-gray-700">Total Certifications</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-black text-red-500 mb-2">4</div>
            <div className="text-sm font-semibold text-gray-700">Platform Expertise</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-black text-red-500 mb-2">3</div>
            <div className="text-sm font-semibold text-gray-700">Cloud Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
