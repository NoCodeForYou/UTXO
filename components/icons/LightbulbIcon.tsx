import React from 'react';

const LightbulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.355a7.5 7.5 0 0 1-7.5 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 6.75h4.5M9.75 6.75a2.25 2.25 0 0 1-2.25-2.25v-.625a2.25 2.25 0 0 1 2.25-2.25h4.5a2.25 2.25 0 0 1 2.25 2.25v.625a2.25 2.25 0 0 1-2.25 2.25m-7.5-3.375V6.75" />
  </svg>
);

export default LightbulbIcon;