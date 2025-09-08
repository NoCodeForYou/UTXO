
import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  current: number;
  total: number;
}

const Navigation: React.FC<NavigationProps> = ({ onPrev, onNext, current, total }) => {
  const isFirst = current === 0;
  const isLast = current === total - 1;

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white font-semibold flex items-center space-x-2 transition-colors duration-300 enabled:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ArrowLeftIcon className="w-5 h-5" />
        <span>Prev</span>
      </button>

      <div className="text-gray-400 font-mono text-lg w-24 text-center">
        {current + 1} / {total}
      </div>

      <button
        onClick={onNext}
        disabled={isLast}
        className="px-6 py-3 bg-orange-600 border border-orange-500 rounded-lg text-white font-semibold flex items-center space-x-2 transition-colors duration-300 enabled:hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>Next</span>
        <ArrowRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Navigation;
