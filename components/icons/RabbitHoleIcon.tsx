import React from 'react';

const RabbitHoleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    {/* Main stem */}
    <path d="M12 19V5" />

    {/* Left Branches */}
    <path d="M12 12H8" />
    <path d="M8 12l-4 4" />
    <path d="M8 12l-4-4" />

    {/* Right Branches */}
    <path d="M12 7h4" />
    <path d="M16 7l4 4" />
    <path d="M16 7l4-4" />

    {/* Nodes */}
    <circle cx="12" cy="5" r="1" fill="currentColor" />
    <circle cx="4" cy="16" r="1" fill="currentColor" />
    <circle cx="4" cy="8" r="1" fill="currentColor" />
    <circle cx="20" cy="11" r="1" fill="currentColor" />
    <circle cx="20" cy="3" r="1" fill="currentColor" />
  </svg>
);

export default RabbitHoleIcon;
