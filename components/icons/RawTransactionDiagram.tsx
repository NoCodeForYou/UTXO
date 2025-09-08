import React from 'react';

const RawTransactionDiagram: React.FC = () => {
  return (
    <div className="font-mono text-xs text-left bg-gray-900/50 border border-gray-700 rounded-lg p-4 max-w-2xl mx-auto">
      <div className="flex flex-col space-y-2">
        {/* Version */}
        <div className="flex items-center">
          <div className="w-28 text-orange-400 flex-shrink-0">Version</div>
          <div className="flex-grow bg-gray-800 p-2 rounded text-gray-300">01000000 <span className="text-gray-500">(4 bytes)</span></div>
        </div>
        {/* Input Count */}
        <div className="flex items-center">
          <div className="w-28 text-red-400 flex-shrink-0">Input Count</div>
          <div className="flex-grow bg-gray-800 p-2 rounded text-gray-300">01 <span className="text-gray-500">(VarInt)</span></div>
        </div>
        {/* Inputs */}
        <div className="flex">
          <div className="w-28 text-red-400 flex-shrink-0 pt-2">Inputs</div>
          <div className="flex-grow bg-gray-800 p-2 rounded text-gray-300 space-y-1">
            <p className="text-gray-500">Previous TxID: <span className="text-red-300">e9...3085</span> (32 bytes)</p>
            <p className="text-gray-500">Output Index (vout): <span className="text-red-300">00000000</span> (4 bytes)</p>
            <p className="text-gray-500">ScriptSig Size: <span className="text-red-300">19</span> (VarInt)</p>
            <p className="text-gray-500">ScriptSig (Unlocking): <span className="text-red-300">76...88ac</span></p>
            <p className="text-gray-500">Sequence: <span className="text-red-300">ffffffff</span> (4 bytes)</p>
          </div>
        </div>
        {/* Output Count */}
         <div className="flex items-center">
          <div className="w-28 text-green-400 flex-shrink-0">Output Count</div>
          <div className="flex-grow bg-gray-800 p-2 rounded text-gray-300">02 <span className="text-gray-500">(VarInt)</span></div>
        </div>
        {/* Outputs */}
        <div className="flex">
          <div className="w-28 text-green-400 flex-shrink-0 pt-2">Outputs</div>
          <div className="flex-grow bg-gray-800 p-2 rounded text-gray-300 space-y-2">
            {/* Output 1 */}
            <div className="border-b border-gray-700 pb-2">
                <p className="text-gray-500">Value (Satoshis): <span className="text-green-300">22...a107</span> (8 bytes)</p>
                <p className="text-gray-500">ScriptPubKey Size: <span className="text-green-300">19</span> (VarInt)</p>
                <p className="text-gray-500">ScriptPubKey (Locking): <span className="text-green-300">76...88ac</span></p>
            </div>
             {/* Output 2 */}
            <div>
                 <p className="text-gray-500">Value (Satoshis): <span className="text-green-300">90...1700</span> (8 bytes)</p>
                <p className="text-gray-500">ScriptPubKey Size: <span className="text-green-300">19</span> (VarInt)</p>
                <p className="text-gray-500">ScriptPubKey (Locking): <span className="text-green-300">76...88ac</span></p>
            </div>
          </div>
        </div>
         {/* Locktime */}
        <div className="flex items-center">
          <div className="w-28 text-purple-400 flex-shrink-0">Locktime</div>
          <div className="flex-grow bg-gray-800 p-2 rounded text-gray-300">00000000 <span className="text-gray-500">(4 bytes)</span></div>
        </div>
      </div>
    </div>
  );
};

export default RawTransactionDiagram;
