import React, { useState } from 'react';
import SearchIcon from './icons/SearchIcon';

interface TxVin {
  prevout: {
    scriptpubkey_address: string;
    value: number;
  };
  is_coinbase: boolean;
}

interface TxVout {
  scriptpubkey_address: string;
  value: number;
}

interface TransactionData {
  vin: TxVin[];
  vout: TxVout[];
  status: {
    confirmed: boolean;
  };
}

const TransactionExplorer: React.FC = () => {
  const [txId, setTxId] = useState('');
  const [transactionData, setTransactionData] = useState<TransactionData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchTransaction = async () => {
    if (!txId.trim()) {
      setError('Please enter a Transaction ID.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setTransactionData(null);

    try {
      const response = await fetch(`https://mempool.space/api/tx/${txId.trim()}`);
      if (!response.ok) {
        throw new Error('Transaction not found or API error. Please check the TxID.');
      }
      const data: TransactionData = await response.json();
      setTransactionData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const satoshisToBtc = (sats: number) => (sats / 100_000_000).toFixed(8);

  return (
    <div className="max-w-4xl mx-auto text-center">
      <SearchIcon className="w-20 h-20 mx-auto text-orange-400 mb-4" />
      <p className="text-gray-400 mb-6">
        Enter a real Bitcoin Transaction ID (TxID) to see how it consumed and created UTXOs.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
        <input
          type="text"
          value={txId}
          onChange={(e) => setTxId(e.target.value)}
          placeholder="e.g., f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16"
          className="w-full sm:w-2/3 bg-gray-900 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:ring-orange-500 focus:border-orange-500 font-mono"
          aria-label="Transaction ID Input"
        />
        <button
          onClick={handleFetchTransaction}
          disabled={isLoading}
          className="w-full sm:w-auto px-6 py-2 bg-orange-600 rounded-md text-white font-semibold transition-colors duration-300 enabled:hover:bg-orange-500 disabled:opacity-50 disabled:cursor-wait"
        >
          {isLoading ? 'Fetching...' : 'Fetch'}
        </button>
      </div>

      {error && <p className="text-red-400 mt-4">{error}</p>}
      
      {transactionData && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left animate-fade-in">
          {/* Inputs (Consumed) */}
          <div>
            <h3 className="text-xl font-bold text-red-400 mb-3">Inputs Consumed</h3>
            <div className="bg-gray-900/70 p-4 rounded-lg max-h-64 overflow-y-auto space-y-3">
              {transactionData.vin.map((input, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded-md border border-red-500/30">
                  {input.is_coinbase ? (
                     <p className="font-mono text-green-400">Coinbase (New Coins Mined)</p>
                  ) : (
                    <>
                      <p className="font-mono text-lg text-red-300">{satoshisToBtc(input.prevout.value)} BTC</p>
                      <p className="text-xs text-gray-400 break-words">{input.prevout.scriptpubkey_address}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Outputs (Created) */}
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-3">Outputs Created</h3>
             <div className="bg-gray-900/70 p-4 rounded-lg max-h-64 overflow-y-auto space-y-3">
              {transactionData.vout.map((output, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded-md border border-green-500/30">
                  <p className="font-mono text-lg text-green-300">{satoshisToBtc(output.value)} BTC</p>
                  <p className="text-xs text-gray-400 break-words">{output.scriptpubkey_address || 'OP_RETURN or unspendable'}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionExplorer;
