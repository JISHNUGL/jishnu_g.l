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
                I'm a <strong>Business Analyst</strong> specializing in <strong>ITSM and CRM implementations</strong> that actually deliver results. Over the past 3+ years, I've helped companies across SaaS, AI/ML, and enterprise sectors transform their operations through smart automation and process optimization.
              </p>
              <p>
                My approach is simple: <strong>understand the problem, design the right solution, and measure the impact</strong>. Whether it's improving SLA compliance by 30%, automating support workflows, or implementing revenue-generating CRM systems, I focus on outcomes that matter to the business.
              </p>
              <p>
                I've worked with platforms like <strong>Freshservice, Freshdesk, Freshsales, and HubSpot</strong> to build systems that teams actually enjoy using. From campus operations handling 500+ tickets monthly to B2B sales teams closing $200K+ in additional revenue, I've seen firsthand how the right processes can transform business performance.
              </p>
              <p>
                Beyond traditional business analysis, I've also contributed to cutting-edge <strong>AI/ML projects at NVIDIA</strong>, ensuring dataset quality for autonomous vehicle detection systems. This unique blend of technical depth and business acumen helps me bridge the gap between stakeholder needs and technical implementation.
              </p>
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
