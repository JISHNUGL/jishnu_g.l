import React from 'react';
import { timeline } from '../data/mockData';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: About Story */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Journey so far
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I'm a <strong>Business Analyst</strong> with hands-on experience in <strong>IT Service Management (ITSM), CRM systems, customer support, and process automation</strong>. Currently at Kambaa Incorporation, I lead ITSM operations using Freshservice with a focus on SLA compliance and automated workflows.
              </p>
              <p>
                My expertise spans across multiple platforms including <strong>Freshservice, Freshdesk, Freshsales, HubSpot CRM, and various automation tools like UiPath</strong>. I specialize in streamlining support operations, enhancing customer experiences, and driving operational efficiency through intelligent automation and data-driven decision-making.
              </p>
              <p>
                At <strong>NVIDIA (via Randstad)</strong>, I contributed to cutting-edge autonomous vehicle technology by annotating 2D dynamic obstacles and human behavior datasets for machine learning models. This experience gave me unique insights into AI/ML applications and the importance of high-precision data quality.
              </p>
              <p>
                With <strong>10+ professional certifications</strong> from HubSpot, Freshworks, AWS, and Google, and a <strong>Master's degree in Computer Science</strong>, I bring both theoretical knowledge and practical expertise to every project. My goal is to bridge the gap between business needs and technical solutions, creating systems that teams actually enjoy using.
              </p>
            </div>

            {/* Education Section */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-gray-900">Master of Science (M.Sc.) in Computer Science</div>
                  <div className="text-sm text-gray-600">Sri Ramakrishna College of Arts & Science</div>
                  <div className="text-sm text-gray-500">2022 - 2024 • CGPA: 7.96</div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-gray-900">Bachelor of Computer Applications (B.C.A.)</div>
                  <div className="text-sm text-gray-600">Sri Ramakrishna Mission Vidyalaya College of Arts & Science</div>
                  <div className="text-sm text-gray-500">2019 - 2022 • CGPA: 7.08</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Career Timeline</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-12"
                    style={{
                      opacity: 0,
                      animation: `fadeInUp 0.6s ease forwards ${index * 0.1}s`
                    }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <CheckCircle size={16} className="text-white" />
                    </div>

                    {/* Content */}
                    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {item.role}
                      </h4>
                      <div className="text-sm text-gray-600 mb-3">
                        {item.company}
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        {item.achievement}
                      </p>
                      {item.metric && (
                        <div className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                          {item.metric}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
