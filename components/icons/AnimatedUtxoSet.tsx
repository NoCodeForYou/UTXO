import React from 'react';

const AnimatedUtxoSet: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 150" className="w-full max-w-xs h-auto" {...props}>
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* The UTXO Set Pool */}
        <g transform="translate(75, 75)">
            <circle r="65" className="fill-cyan-500/10" />
            <circle r="65" className="fill-transparent stroke-cyan-400/50" strokeWidth="0.5" />
            <text x="0" y="5" textAnchor="middle" className="fill-cyan-300 font-sans text-[10px] font-bold tracking-wider">UTXO Set</text>
        
            {/* Drifting UTXOs */}
            <circle cx="-20" cy="-30" r="4" className="fill-cyan-400/70 animate-drift" style={{ animationDuration: '13s' }} />
            <circle cx="30" cy="-25" r="5" className="fill-cyan-400/70 animate-drift" style={{ animationDuration: '15s' }} />
            <circle cx="0" cy="0" r="3" className="fill-cyan-400/70 animate-drift" style={{ animationDuration: '10s' }} />
            <circle cx="-35" cy="10" r="5" className="fill-cyan-400/70 animate-drift" style={{ animationDuration: '16s' }} />
            <circle cx="40" cy="20" r="4" className="fill-cyan-400/70 animate-drift" style={{ animationDuration: '11s' }} />
            <circle cx="10" cy="35" r="6" className="fill-cyan-400/70 animate-drift" style={{ animationDuration: '14s' }} />
            <circle cx="-15" cy="40" r="3.5" className="fill-cyan-400/70 animate-drift" style={{ animationDuration: '12s' }} />

            {/* Animated Transaction UTXOs */}
            {/* Input flying out */}
            <g className="animate-input-path">
                <circle r="6" className="fill-red-400" />
            </g>
            
            {/* Outputs flying in */}
            <g className="animate-output-path-1">
                <circle r="5" className="fill-green-400" />
            </g>
            <g className="animate-output-path-2">
                <circle r="4" className="fill-green-400" />
            </g>
        </g>
        
        {/* Transaction Processor Node */}
        <g transform="translate(170, 75)" className="animate-processor-glow">
          <path d="M-10 0 l5 -8.66 l10 0 l5 8.66 l-5 8.66 l-10 0 Z" className="fill-amber-600/30 stroke-amber-500" strokeWidth="0.5" />
          <text x="0" y="2.5" textAnchor="middle" className="fill-amber-300 font-sans text-[8px]">TX</text>
        </g>

        {/* Labels */}
        <text x="110" y="130" textAnchor="middle" className="fill-red-400 font-sans text-[8px] opacity-80">Input (Spent)</text>
        <text x="170" y="45" textAnchor="middle" className="fill-green-400 font-sans text-[8px] opacity-80">Outputs (New)</text>
      </svg>
    </div>
  );
};

export default AnimatedUtxoSet;
