import React from 'react';

interface SlideProps {
  title: string;
  content: React.ReactNode;
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ title, content, isActive }) => {
  return (
    <div className="w-full h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl p-8 md:p-12 flex flex-col justify-center">
      <div className={`transition-all duration-700 ease-in-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500 py-2 mb-8">
          {title}
        </h2>
        <div className="text-lg text-gray-300">{content}</div>
      </div>
    </div>
  );
};

export default Slide;