import React from 'react';

const UtxoDiagram: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 text-sm text-center">
            {/* Inputs */}
            <div
              className="flex flex-col items-center space-y-2 animate-fade-in-late"
              style={{ animationDelay: '200ms' }}
            >
                <div className="font-bold text-gray-400 uppercase tracking-wider">Inputs (Consumed)</div>
                <div className="bg-red-900/50 border border-red-500 p-3 rounded-lg w-40 h-20 flex flex-col justify-center relative">
                    <span className="font-mono font-bold text-red-300 text-lg">1.0 BTC</span>
                    <span className="text-red-400 text-xs">(from Alice)</span>
                     <div className="absolute -top-2 -left-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs">X</div>
                </div>
            </div>

            {/* Arrow */}
            <div
              className="text-4xl text-gray-500 transform md:rotate-0 rotate-90 mx-6 animate-fade-in-late"
              style={{ animationDelay: '400ms' }}
            >
                →
            </div>

            {/* Transaction Box */}
            <div
              className="bg-gray-700 border border-gray-600 rounded-lg p-4 shadow-lg flex flex-col justify-center w-48 h-32 animate-fade-in-late"
              style={{ animationDelay: '600ms' }}
            >
                 <h4 className="font-bold text-lg text-white">Transaction</h4>
                 <p className="text-gray-400 text-xs">Alice pays Bob 0.3 BTC</p>
                 <p className="text-gray-500 text-xs mt-2">Fee: 0.0001 BTC</p>
            </div>

            {/* Arrow */}
             <div
               className="text-4xl text-gray-500 transform md:rotate-0 rotate-90 mx-6 animate-fade-in-late"
               style={{ animationDelay: '800ms' }}
             >
                →
            </div>

            {/* Outputs */}
            <div
              className="flex flex-col items-center space-y-2 animate-fade-in-late"
              style={{ animationDelay: '1000ms' }}
            >
                <div className="font-bold text-gray-400 uppercase tracking-wider">Outputs (Created)</div>
                <div className="space-y-2">
                     <div className="bg-green-900/50 border border-green-500 p-3 rounded-lg w-40 h-20 flex flex-col justify-center">
                         <span className="font-mono font-bold text-green-300 text-lg">0.3 BTC</span>
                        <span className="text-green-400 text-xs">(to Bob)</span>
                    </div>
                     <div className="bg-blue-900/50 border border-blue-500 p-3 rounded-lg w-40 h-20 flex flex-col justify-center">
                         <span className="font-mono font-bold text-blue-300 text-lg">0.6999 BTC</span>
                        <span className="text-blue-400 text-xs">(Change to Alice)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UtxoDiagram;