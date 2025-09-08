import React from 'react';

const LifecycleDiagram: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-around space-y-6 md:space-y-0 w-full text-center">
            <div className="flex flex-col items-center animate-fade-in-late" style={{ animationDelay: '200ms' }}>
                <div className="w-24 h-24 rounded-full bg-green-900/50 border-2 border-green-500 flex items-center justify-center mb-2">
                    <span className="text-lg font-bold text-green-300">Created</span>
                </div>
                <p className="text-sm text-gray-400 w-48">As an output of <br/> Transaction A</p>
            </div>

            <div className="text-4xl text-gray-500 transform md:rotate-0 rotate-90 mx-4 animate-fade-in-late" style={{ animationDelay: '500ms' }}>→</div>

            <div className="flex flex-col items-center animate-fade-in-late" style={{ animationDelay: '800ms' }}>
                <div className="w-24 h-24 rounded-full bg-yellow-900/50 border-2 border-yellow-500 flex items-center justify-center mb-2 animate-pulse">
                    <span className="text-lg font-bold text-yellow-300">Unspent</span>
                </div>
                 <p className="text-sm text-gray-400 w-48">Waits in the global <br/> UTXO set</p>
            </div>

            <div className="text-4xl text-gray-500 transform md:rotate-0 rotate-90 mx-4 animate-fade-in-late" style={{ animationDelay: '1100ms' }}>→</div>
            
            <div className="flex flex-col items-center animate-fade-in-late" style={{ animationDelay: '1400ms' }}>
                <div className="w-24 h-24 rounded-full bg-red-900/50 border-2 border-red-500 flex items-center justify-center mb-2">
                    <span className="text-lg font-bold text-red-300">Spent</span>
                </div>
                <p className="text-sm text-gray-400 w-48">Consumed as an input for <br/> Transaction B</p>
            </div>
        </div>
    );
}

export default LifecycleDiagram;