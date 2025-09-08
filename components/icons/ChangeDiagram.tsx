import React from 'react';

const ChangeDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-1 text-sm text-center">
      {/* Input Section */}
      <div className="flex flex-col items-center">
        <div className="font-bold text-gray-400 uppercase tracking-wider mb-1">Input From Your Wallet</div>
        <div className="bg-red-900/50 border border-red-500 p-2 rounded-lg w-44 h-16 flex flex-col justify-center">
          <span className="font-mono font-bold text-red-300 text-base">1.0 BTC UTXO</span>
          <span className="text-red-400 text-xs">(Must be spent entirely)</span>
        </div>
      </div>

      {/* Arrow */}
      <div className="text-3xl text-gray-500">↓</div>

      {/* Outputs Section */}
      <div className="w-full max-w-xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-2">
          
          {/* Payment Output */}
          <div className="flex flex-col items-center justify-self-center md:justify-self-end">
            <div className="font-bold text-gray-400 uppercase tracking-wider mb-1">Payment Output</div>
            <div className="bg-green-900/50 border border-green-500 p-2 rounded-lg w-44 h-16 flex flex-col justify-center">
              <span className="font-mono font-bold text-green-300 text-base">0.2 BTC</span>
              <span className="text-green-400 text-xs">(To Recipient)</span>
            </div>
          </div>

          {/* Plus Sign */}
          <div className="text-3xl text-gray-400 justify-self-center md:pt-6">+</div>

          {/* Change Output */}
          <div className="flex flex-col items-center justify-self-center md:justify-self-start">
            <div className="font-bold text-gray-400 uppercase tracking-wider mb-1">Change Output</div>
            <div className="bg-blue-900/50 border border-blue-500 p-2 rounded-lg w-44 h-16 flex flex-col justify-center">
              <span className="font-mono font-bold text-blue-300 text-base">~0.8 BTC</span>
              <span className="text-blue-400 text-xs">(Back to You)</span>
            </div>
          </div>

        </div>
      </div>
      <p className="text-gray-500 text-xs mt-1">(Small amount deducted for miner fee)</p>
    </div>
  );
};

export default ChangeDiagram;