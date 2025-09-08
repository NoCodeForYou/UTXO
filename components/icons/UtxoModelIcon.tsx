import React from 'react';

const UtxoModelIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    {...props}
  >
    {/* Input UTXO */}
    <rect x="2" y="9" width="6" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Arrow */}
    <path d="M9 12h5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />

    {/* Output UTXOs */}
    <rect x="15" y="4" width="5" height="5" rx="1" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="15" y="15" width="5" height="5" rx="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default UtxoModelIcon;
