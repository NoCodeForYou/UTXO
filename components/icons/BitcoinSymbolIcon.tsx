
import React from 'react';

const BitcoinSymbolIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
    <path d="M14.36,16.32a3.39,3.39,0,0,1-1.86.48H10.5V18H9V16.8H8V15.2h1V12.8H8V11.2h1V8.8h1.5V7h2a3.17,3.17,0,0,1,2.3.8,2.34,2.34,0,0,1,.6,1.7,2.2,2.2,0,0,1-1,2,2.54,2.54,0,0,1,1.3,2.2,2.7,2.7,0,0,1-.8,2.12ZM12.5,12.1h1.2a1.2,1.2,0,1,0,0-2.4H12.5Zm0,3.2h1.5a1.4,1.4,0,1,0,0-2.8H12.5Z" />
  </svg>
);
export default BitcoinSymbolIcon;
