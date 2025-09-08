import React from 'react';

const MagicBlockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    {...props}
  >
    {/* Block */}
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M20 7.5l-8-4.65L4 7.5m16 0l-8 4.65m8-4.65v9.3l-8 4.65M4 7.5l8 4.65M4 7.5v9.3l8 4.65m0-9.3v9.3" 
    />
    {/* Sparkles */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 1.5 16.5 3 18 1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.5 9.5 23 11 21.5 12.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 9.5 1 11 2.5 12.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-1.5 1.5L9 23" />
  </svg>
);

export default MagicBlockIcon;
