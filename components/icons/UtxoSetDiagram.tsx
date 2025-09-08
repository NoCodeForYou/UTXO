import React from 'react';

const UtxoSetDiagram: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    {...props}
  >
    <path 
      d="M12 21a9 9 0 0 0-9-9c0-4.97 4.03-9 9-9s9 4.03 9 9a9 9 0 0 0-9 9z" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    
    {/* UTXOs in the set */}
    <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
    <circle cx="9" cy="10" r="1" fill="currentColor" opacity="0.6" />
    <circle cx="15" cy="10" r="1.2" fill="currentColor" opacity="0.7" />
    <circle cx="10" cy="15" r="1.2" fill="currentColor" opacity="0.9" />
    <circle cx="14" cy="15" r="0.8" fill="currentColor" opacity="0.5" />

    {/* Arrow for incoming UTXOs */}
    <path d="M18 5l-3 3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 5h2v2" strokeLinecap="round" strokeLinejoin="round" />
    <text x="18.5" y="4.5" fontSize="3" fill="currentColor" className="font-sans text-green-300" transform="rotate(15 18 5)">IN</text>
    
    {/* Arrow for outgoing UTXOs */}
    <path d="M6 19l3-3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 19H6v-2" strokeLinecap="round" strokeLinejoin="round" />
    <text x="5" y="20" fontSize="3" fill="currentColor" className="font-sans text-red-300" transform="rotate(15 5 19)">OUT</text>
  </svg>
);

export default UtxoSetDiagram;
