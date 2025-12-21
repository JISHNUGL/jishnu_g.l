import React, { useEffect, useState } from 'react';

// Animated text component with letter-by-letter reveal
export const AnimatedText = ({ text, className = '', delay = 0 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.03}s`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

// Gradient text animation
export const GradientText = ({ children, className = '' }) => {
  return (
    <span
      className={`bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient ${className}`}
      style={{
        animation: 'gradient 3s linear infinite'
      }}
    >
      {children}
    </span>
  );
};

// Glowing text effect
export const GlowingText = ({ children, className = '' }) => {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        textShadow: '0 0 10px rgba(239, 68, 68, 0.5), 0 0 20px rgba(239, 68, 68, 0.3), 0 0 30px rgba(239, 68, 68, 0.2)'
      }}
    >
      {children}
    </span>
  );
};
