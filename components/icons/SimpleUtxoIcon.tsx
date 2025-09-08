import React from 'react';

const SimpleUtxoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 12h11" />
    <circle cx="4" cy="12" r="2" fill="currentColor" />
    <path d="M14 12l4 -4" />
    <path d="M14 12l4 4" />
    <circle cx="19" cy="8" r="1.5" fill="currentColor" />
    <circle cx="19" cy="16" r="1.5" fill="currentColor" />
  </svg>
);

export default SimpleUtxoIcon;
