import React, { useState, useRef } from 'react';
import { personalInfo } from '../data/mockData';
import { Mail, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    lookingFor: 'project',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS Configuration
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_ekfqg77';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Configuration Error",
        description: "EmailJS keys are missing. Please check your .env file.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
          variant: "default", // or success if available in your toast component
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          lookingFor: 'project',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        toast({
          title: "Error Sending Message",
          description: "Something went wrong. Please try again or email me directly.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Let's Build Something Useful
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help streamline your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <div className="bg-gray-50 rounded-xl p-8 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Info</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  <span className="font-semibold">Status:</span>
                  <span className="ml-2">{personalInfo.availability}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <span className="font-semibold">Response Time:</span>
                  <span className="ml-2">Within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <span className="font-semibold">Start Date:</span>
                  <span className="ml-2">{personalInfo.startDate}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Connect With Me</h3>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-red-500 hover:shadow-lg transition-all duration-300 group"
              >
                <Mail className="text-gray-400 group-hover:text-red-500" size={24} />
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-semibold text-gray-900 group-hover:text-red-500">{personalInfo.email}</div>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-red-500 hover:shadow-lg transition-all duration-300 group"
              >
                <Linkedin className="text-gray-400 group-hover:text-red-500" size={24} />
                <div>
                  <div className="text-sm text-gray-500">LinkedIn</div>
                  <div className="font-semibold text-gray-900 group-hover:text-red-500">Connect on LinkedIn</div>
                </div>
              </a>

              {personalInfo.github !== '#' && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-red-500 hover:shadow-lg transition-all duration-300 group"
                >
                  <Github className="text-gray-400 group-hover:text-red-500" size={24} />
                  <div>
                    <div className="text-sm text-gray-500">GitHub</div>
                    <div className="font-semibold text-gray-900 group-hover:text-red-500">View my code</div>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div style={{ animation: 'fadeInUp 0.5s ease-out forwards 0.1s', opacity: 0 }}>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent focus:bg-white transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div style={{ animation: 'fadeInUp 0.5s ease-out forwards 0.2s', opacity: 0 }}>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent focus:bg-white transition-all duration-300"
                  placeholder="john@company.com"
                />
              </div>

              <div style={{ animation: 'fadeInUp 0.5s ease-out forwards 0.3s', opacity: 0 }}>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Company / Role
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent focus:bg-white transition-all duration-300"
                  placeholder="Acme Inc. / IT Manager"
                />
              </div>

              <div style={{ animation: 'fadeInUp 0.5s ease-out forwards 0.4s', opacity: 0 }}>
                <label htmlFor="lookingFor" className="block text-sm font-semibold text-gray-900 mb-2">
                  What are you looking for? *
                </label>
                <div className="relative">
                  <select
                    id="lookingFor"
                    name="lookingFor"
                    required
                    value={formData.lookingFor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent focus:bg-white transition-all duration-300 appearance-none"
                  >
                    <option value="project">Project / Contract Work</option>
                    <option value="fulltime">Full-time Opportunity</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div style={{ animation: 'fadeInUp 0.5s ease-out forwards 0.5s', opacity: 0 }}>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent focus:bg-white transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <div style={{ animation: 'fadeInUp 0.5s ease-out forwards 0.6s', opacity: 0 }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-red-500 text-white font-semibold text-base rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-red-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
