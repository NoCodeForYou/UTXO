import React from 'react';

const TransactionMacroDiagram: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 text-sm text-center">
            {/* Inputs */}
            <div className="flex flex-col items-center">
                <div className="font-bold text-gray-400 uppercase tracking-wider mb-2">1. Gather Inputs</div>
                <div className="bg-gray-800 border border-gray-600 p-4 rounded-lg w-48 h-32 flex flex-col justify-center items-center relative">
                    <p className="font-semibold text-white">Your Unspent Coins</p>
                    <div className="flex space-x-2 mt-2">
                        <div className="w-6 h-6 rounded-full bg-red-500/50" />
                        <div className="w-6 h-6 rounded-full bg-red-500/70" />
                        <div className="w-6 h-6 rounded-full bg-red-500/90" />
                    </div>
                     <p className="text-xs text-gray-500 mt-2">(UTXOs)</p>
                </div>
            </div>

            {/* Arrow */}
            <div className="text-4xl text-gray-500 transform md:rotate-0 rotate-90 mx-6">
                →
            </div>

            {/* Transaction Box */}
            <div className="flex flex-col items-center">
                <div className="font-bold text-gray-400 uppercase tracking-wider mb-2">2. Create Transaction</div>
                 <div className="bg-amber-600/20 border border-amber-500 text-amber-300 rounded-lg p-4 shadow-lg flex flex-col justify-center w-48 h-32">
                     <h4 className="font-bold text-lg">Sign & Broadcast</h4>
                     <p className="text-amber-400/80 text-xs">Authorize the spending of the inputs.</p>
                </div>
            </div>


            {/* Arrow */}
             <div className="text-4xl text-gray-500 transform md:rotate-0 rotate-90 mx-6">
                →
            </div>

            {/* Outputs */}
            <div className="flex flex-col items-center space-y-2">
                <div className="font-bold text-gray-400 uppercase tracking-wider mb-2">3. Create Outputs</div>
                <div className="space-y-2">
                     <div className="bg-green-900/50 border border-green-500 p-3 rounded-lg w-48 h-20 flex flex-col justify-center">
                        <span className="font-semibold text-green-300">Payment</span>
                        <span className="text-green-400 text-xs">(To Recipient)</span>
                    </div>
                     <div className="bg-blue-900/50 border border-blue-500 p-3 rounded-lg w-48 h-20 flex flex-col justify-center">
                        <span className="font-semibold text-blue-300">Change</span>
                        <span className="text-blue-400 text-xs">(Back to You)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionMacroDiagram;
