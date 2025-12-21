import React, { useState } from 'react';

// 3D floating card with tilt effect
const FloatingCard = ({ children, className = '' }) => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!isHovering) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setTransform({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTransform({ x: 0, y: 0 });
  };

  return (
    <div
      className={`relative transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${transform.x}deg) rotateY(${transform.y}deg) ${isHovering ? 'translateZ(10px) scale(1.02)' : 'translateZ(0) scale(1)'}`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
      
      {/* Glowing effect on hover */}
      {isHovering && (
        <div
          className="absolute inset-0 -z-10 rounded-xl opacity-0 animate-pulse"
          style={{
            background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.2), transparent 70%)',
            filter: 'blur(20px)',
            opacity: 0.6
          }}
        />
      )}
    </div>
  );
};

export default FloatingCard;
