
import React from 'react';

const PickaxeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m3 3 8 8-2 2-8-8" />
    <path d="m14 4 6 6-2 2-6-6" />
    <path d="M14 14 3 21" />
    <path d="M18 10 21 7" />
    <path d="M21 11 14 4" />
  </svg>
);
export default PickaxeIcon;
