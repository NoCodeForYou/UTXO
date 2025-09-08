import React from 'react';

const ScaleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52v16.5m-13.5-16.5v16.5m13.5 0c.621 0 1.223-.046 1.812-.132a5.98 5.98 0 0 0-1.812-.132c-1.472 0-2.882.265-4.185.75m-4.185-.75a5.98 5.98 0 0 1-1.812-.132c.621 0 1.223.046 1.812.132m12.375 0c.391.06 1.153.18 1.946.365a1.86 1.86 0 0 1-3.892 0c.793-.185 1.555-.305 1.946-.365Z" />
  </svg>
);

export default ScaleIcon;
