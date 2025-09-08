import React from 'react';

const AnatomyDiagram: React.FC = () => {
    return (
        <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 my-6 font-mono text-left max-w-md mx-auto">
            <div className="text-center mb-4">
                <span className="text-sm uppercase tracking-wider text-gray-400">UTXO</span>
            </div>
            <div className="flex flex-col space-y-4">
                {/* Value */}
                <div className="border-b border-gray-600 pb-4">
                    <h4 className="text-orange-400 font-bold mb-1">Value (in Satoshis)</h4>
                    <p className="text-white text-lg">100000000</p>
                </div>
                {/* Locking Script */}
                <div>
                    <h4 className="text-cyan-400 font-bold mb-2">Locking Script (ScriptPubKey)</h4>
                    <div className="bg-black/50 p-3 rounded text-sm text-gray-300">
                        <p><span className="text-purple-400">OP_DUP</span></p>
                        <p><span className="text-purple-400">OP_HASH160</span></p>
                        <p className="truncate"><span className="text-gray-500 text-xs">Push 20-byte hash</span> <span className="text-green-400">&lt;PublicKeyHash&gt;</span></p>
                        <p><span className="text-purple-400">OP_EQUALVERIFY</span></p>
                        <p><span className="text-purple-400">OP_CHECKSIG</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnatomyDiagram;
