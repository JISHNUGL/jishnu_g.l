import React, { useRef } from 'react';
import { timeline } from '../data/mockData';
import { CheckCircle, Briefcase, GraduationCap } from 'lucide-react';
import BlurText from './BlurText';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: About Story (Span 7 cols) */}
          <div className="lg:col-span-7">
            <BlurText
              text="Journey so far"
              className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight"
              delay={200}
            />

            <div ref={textRef} className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I'm a <strong className="text-gray-900 font-semibold under-line">Business Analyst</strong> with hands-on experience in <strong>IT Service Management (ITSM), CRM systems</strong>, and process automation. Currently at <span className="text-red-500 font-medium">Kambaa Incorporation</span>, I lead ITSM operations using Freshservice with a focus on SLA compliance and automated workflows.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                My expertise spans across <strong>Freshservice, Freshdesk, Freshsales, HubSpot CRM</strong>, and automation tools like UiPath. I specialize in streamlining operations and driving efficiency through intelligent automation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Previously at <strong className="text-gray-900">NVIDIA (via Randstad)</strong>, I contributed to autonomous vehicle technology, gaining unique insights into AI/ML applications and high-precision data quality.
              </motion.p>
            </div>

            {/* Education Cards */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-red-500" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isTextInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="lg:h-12 flex items-start justify-between mb-2">
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Master's</span>
                    <span className="text-xs font-medium text-gray-400">2022-2024</span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg leading-snug mb-1">M.Sc. Computer Science</h4>
                  <p className="text-sm text-gray-600">Sri Ramakrishna College of Arts & Science</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isTextInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="lg:h-12 flex items-start justify-between mb-2">
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Bachelor's</span>
                    <span className="text-xs font-medium text-gray-400">2019-2022</span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg leading-snug mb-1">B.C.A.</h4>
                  <p className="text-sm text-gray-600">Sri Ramakrishna Mission Vidyalaya College</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right: Modern Timeline (Span 5 cols) */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-red-500" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
              </div>

              <div className="relative border-l-2 border-gray-100 ml-3 space-y-10 pl-8 py-2">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {/* Timeline Node */}
                    <span
                      className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300 transition-colors duration-300 group-hover:bg-red-500 group-hover:scale-125 shadow-sm"
                    ></span>

                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-400 mb-1">{item.year}</span>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-500 transition-colors">
                        {item.role}
                      </h4>
                      <span className="text-sm font-medium text-gray-700 mb-2">{item.company}</span>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                        {item.achievement}
                      </p>
                    </div>
                  </motion.div>
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
