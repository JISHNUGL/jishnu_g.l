import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, X, ZoomIn } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import TiltedCard from './TiltedCard';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import ScrollReveal from './ScrollReveal';

const mainCertifications = [
  {
    name: "HubSpot Marketing Hub Software Certified",
    issuer: "HubSpot Academy",
    status: "Certified",
    year: "2025-2026",
    image: "/images/certifications/hubspot-marketing-hub.png",
    color: "bg-[#ff5c35]"
  },
  {
    name: "HubSpot Sales Hub Software Certified",
    issuer: "HubSpot Academy",
    status: "Certified",
    year: "2025-2026",
    image: "/images/certifications/hubspot-sales-hub.png",
    color: "bg-[#ff5c35]"
  },
  {
    name: "HubSpot Service Hub Software Certified",
    issuer: "HubSpot Academy",
    status: "Certified",
    year: "2025-2026",
    image: "/images/certifications/hubspot-service-hub.png",
    color: "bg-[#ff5c35]"
  },
  {
    name: "Freshworks Certified Implementation Specialist: CX",
    issuer: "Freshworks",
    status: "Specialist",
    year: "2025-2027",
    image: "/images/certifications/freshworks-imp-cx.png",
    color: "bg-[#00c2a2]"
  },
  {
    name: "Freshworks Certified Solution Engineer CS",
    issuer: "Freshworks",
    status: "Engineer",
    year: "2025-2027",
    image: "/images/certifications/freshworks-sol-eng-cs.png",
    color: "bg-[#00c2a2]"
  },
  {
    name: "Freshworks Certified Solution Engineer EX",
    issuer: "Freshworks",
    status: "Engineer",
    year: "2025-2027",
    image: "/images/certifications/freshworks-sol-eng-ex.png",
    color: "bg-[#00c2a2]"
  },
  {
    name: "Freshworks Certified Seller CX",
    issuer: "Freshworks",
    status: "Seller",
    year: "2025-2027",
    image: "/images/certifications/freshworks-seller-cx.png",
    color: "bg-[#00c2a2]"
  },
  {
    name: "Freshservice Advanced Product Certification",
    issuer: "Freshworks",
    status: "Certified",
    year: "2025-2027",
    image: "/images/certifications/freshservice-advanced.png",
    color: "bg-[#00c2a2]"
  }
];

const skillBadges = [

  {
    name: "AWS Technical Accredited",
    issuer: "Amazon Web Services",
    status: "Accredited",
    year: "2024",
    image: "/images/certifications/aws-technical-accredited.png",
    color: "bg-[#232f3e]"
  },
  {
    name: "Google Cloud Gen AI: Beyond the Chatbot",
    issuer: "Google Cloud",
    status: "Badge",
    year: "2024",
    image: "/images/certifications/google-cloud-gen-ai-beyond.png",
    color: "bg-[#4285f4]"
  },
  {
    name: "Google Cloud Introduction to Generative AI",
    issuer: "Google Cloud",
    status: "Completed",
    year: "2024",
    image: "/images/certifications/google-cloud-gen-ai.png",
    color: "bg-[#4285f4]"
  },
  {
    name: "Freshchat Expert",
    issuer: "Freshworks",
    status: "Expert",
    year: "2024",
    image: "/images/certifications/freshchat-expert-badge.png",
    color: "bg-[#00c2a2]"
  },
  {
    name: "Freshdesk Expert",
    issuer: "Freshworks",
    status: "Expert",
    year: "2024",
    image: "/images/certifications/freshdesk-expert-badge.png",
    color: "bg-[#00c2a2]"
  },
  {
    name: "Freshsales Suite Expert",
    issuer: "Freshworks",
    status: "Expert",
    year: "2024",
    image: "/images/certifications/freshsales-expert-badge.png",
    color: "bg-[#00c2a2]"
  }
];

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certifications" className="py-12 md:py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Certifications & <span className="text-red-500">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Verified credentials demonstrating proficiency in cloud computing, CRM, and ITSM platforms.
            </p>
          </div>
        </ScrollReveal>

        {/* Major Certifications - Exact ScrollStack Component */}
        <ScrollStack
          itemDistance={100}
          itemScale={0.03}
          itemStackDistance={30}
          stackPosition="20%"
          scaleEndPosition="10%"
          baseScale={0.85}
          useWindowScroll={true}
          className="mb-32"
        >
          {mainCertifications.map((cert, index) => (
            <ScrollStackItem key={index}>
              <div className="flex flex-col md:flex-row h-auto md:h-full">
                {/* Image side */}
                <div
                  className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 relative group cursor-pointer overflow-hidden p-2 md:p-0"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain md:object-cover md:object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <ZoomIn className="text-gray-400 md:text-white opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                  </div>
                </div>
                {/* Content side */}
                <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white">
                  <span className={`inline-block px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest mb-4 ${cert.color.replace('bg-', 'text-')} bg-gray-50 border border-gray-100`}>
                    {cert.issuer}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 leading-tight">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 font-medium mb-4">
                    <span className="text-red-500 underline decoration-red-200 decoration-2">{cert.status}</span>
                    <span>•</span>
                    <span>{cert.year}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    Industry-standard validation of skills in {cert.name.split(' ').slice(0, 3).join(' ')} and related enterprise technologies.
                  </p>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        {/* Skill Badges - Icon/Shield Style */}
        <ScrollReveal>
          <div className="relative mt-24">
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px bg-gray-200 flex-1"></div>
              <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-widest text-center">Skill Badges</h3>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-12">
              {skillBadges.map((badge, index) => (
                <div key={`badge-${index}`} className="flex flex-col items-center">
                  <TiltedCard
                    imageSrc={badge.image || ""}
                    altText={badge.name}
                    captionText={badge.name}
                    containerHeight="240px"
                    containerWidth="240px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={12}
                    scaleOnHover={1.15}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-gray-100/50 mt-[180px] w-[200px] text-center">
                        <p className="text-xs font-bold text-gray-800 leading-tight">{badge.name}</p>
                        <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wide">{badge.issuer}</p>
                      </div>
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img
            src={selectedImage}
            alt="Certificate Full View"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl bg-white p-1"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </section>
  );
};

export default Certifications;
