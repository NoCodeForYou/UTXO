
import React from 'react';
import type { SlideContent } from '../types';
import UtxoDiagram from '../components/icons/UtxoDiagram';
import WalletIcon from '../components/icons/WalletIcon';
import LockIcon from '../components/icons/LockIcon';
import ChainIcon from '../components/icons/ChainIcon';
import LifecycleDiagram from '../components/icons/LifecycleDiagram';
import ChangeDiagram from '../components/icons/ChangeDiagram';
import FilterIcon from '../components/icons/FilterIcon';
import CodeIcon from '../components/icons/CodeIcon';
import LightbulbIcon from '../components/icons/LightbulbIcon';
import KeyIcon from '../components/icons/KeyIcon';
import ExclamationTriangleIcon from '../components/icons/ExclamationTriangleIcon';
import ArrowsPointingInIcon from '../components/icons/ArrowsPointingInIcon';
import AnatomyDiagram from '../components/icons/AnatomyDiagram';
import FeeRateIcon from '../components/icons/FeeRateIcon';
import SimpleUtxoIcon from '../components/icons/SimpleUtxoIcon';
import OriginBlockIcon from '../components/icons/OriginBlockIcon';
import RabbitHoleIcon from '../components/icons/RabbitHoleIcon';
import TransactionMacroDiagram from '../components/icons/TransactionMacroDiagram';
import RawTransactionDiagram from '../components/icons/RawTransactionDiagram';
import AnimatedUtxoSet from '../components/icons/AnimatedUtxoSet';
import LightningIcon from '../components/icons/LightningIcon';
import SparklesIcon from '../components/icons/SparklesIcon';
import BuildingBlocksIcon from '../components/icons/BuildingBlocksIcon';


export const SLIDES: SlideContent[] = [
  // 1. Title
  {
    title: "Bitcoin's Bedrock: The UTXO Model",
    content: (
      <div className="text-center">
        <SimpleUtxoIcon className="w-32 h-32 mx-auto text-orange-400 mb-8" />
        <p className="text-2xl text-gray-400 mt-4">The Foundation of Bitcoin's Ledger</p>
        <p className="mt-8 text-lg text-gray-300">A surprisingly simple model that enables Bitcoin's security, privacy, and scale.</p>
      </div>
    ),
  },
  // 2. Macro Overview
  {
    title: 'A Transaction at a Glance',
    content: (
      <div>
        <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">Before diving deep, let's look at the big picture. Every transaction follows this simple pattern of consuming and creating.</p>
        <TransactionMacroDiagram />
        <p className="text-center text-gray-400 mt-8 max-w-3xl mx-auto">It gathers your existing digital coins, sends some to the recipient, and gives you back the rest as new digital change.</p>
      </div>
    ),
  },
  // 3. Comparison
  {
    title: 'Account vs. UTXO Model',
    content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-800 p-6 rounded-lg border border-red-500/50">
                <h3 className="text-xl font-bold text-red-400 mb-3">Traditional Accounts (Ethereum, Banks)</h3>
                <p className="text-gray-300">A global list of accounts and their balances. Transactions directly debit one account and credit another.</p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-gray-400 text-base">
                    <li><span className="font-semibold text-white">Stateful:</span> The system must track the balance of every single account.</li>
                    <li><span className="font-semibold text-white">Intuitive:</span> Behaves like a familiar bank account.</li>
                    <li><span className="font-semibold text-white">Potential Issues:</span> Can be complex to prevent "replay attacks" and state inconsistencies. Privacy is weaker as addresses are reused.</li>
                </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-green-500/50">
                <h3 className="text-xl font-bold text-green-400 mb-3">Bitcoin's UTXO Model</h3>
                <p className="text-gray-300">A ledger of unspent "coins." Transactions don't modify a balance; they transfer value by using existing UTXOs as inputs and creating new ones as outputs.</p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-gray-400 text-base">
                    <li><span className="font-semibold text-white">Stateless Verification:</span> Transactions are self-contained and don't depend on a global account state, making parallel processing easier.</li>
                    <li><span className="font-semibold text-white">Private by Default:</span> Promotes using new addresses for "change," breaking links between transactions.</li>
                    <li><span className="font-semibold text-white">Verifiable:</span> Every coin has a clear lineage back to its creation.</li>
                </ul>
            </div>
        </div>
    )
  },
  // 4. Definition
  {
    title: 'What is a UTXO?',
    content: (
      <div className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
        <div className="text-center">
            <p className="mb-4">
            <span className="font-bold text-orange-400">U</span>nspent
            <span className="font-bold text-orange-400"> T</span>ransaction
            <span className="font-bold text-orange-400"> O</span>utput
            </p>
            <blockquote className="border-l-4 border-orange-500 pl-6 italic text-gray-400 my-8 text-left">
            A UTXO is a discrete, indivisible piece of bitcoin locked to a script, which is created as an output of a previous transaction and is available to be spent.
            </blockquote>
            <p className="text-left">
            It is not a 'balance'. It is a specific 'coin'. To pay for a $5 item with a $20 bill, you hand over the entire bill and receive $15 in change. You cannot tear off a quarter of the bill. UTXOs are the same: you must spend them in their entirety, and any remainder is returned to you as a new 'change' UTXO.
            </p>
        </div>

        <div className="mt-8 p-4 bg-gray-900/70 border-l-4 border-cyan-400 rounded-r-lg text-left">
            <h4 className="font-bold text-cyan-300 flex items-center mb-2 text-lg">
                <LightbulbIcon className="w-6 h-6 mr-2 flex-shrink-0" />
                Deep Dive: The "Outpoint"
            </h4>
            <p className="text-gray-400 text-base leading-relaxed">
                Technically, a UTXO is referenced by an 'outpoint'. This is a pointer consisting of two pieces of data: the Transaction ID (TxID) of the transaction that created it, and the output index number (vout), which indicates its position in that transaction's list of outputs (e.g., `f418...9e16:0`). A new transaction must provide this exact outpoint to spend the UTXO.
            </p>
        </div>
      </div>
    )
  },
  // 5. Anatomy of UTXO
  {
    title: 'Anatomy of a UTXO',
    content: (
        <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-400 mb-8">Every UTXO has two fundamental parts. Think of it as a locked box containing an amount of money.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <AnatomyDiagram />
                <ul className="space-y-4 text-lg">
                    <li className="bg-gray-800/70 p-4 rounded-lg flex items-start">
                        <span className="text-2xl font-bold text-orange-400 w-12 text-center flex-shrink-0">1</span>
                        <div>
                            <h3 className="font-semibold text-white">Value</h3>
                            <p className="text-gray-400">The amount of bitcoin this UTXO holds. This value is a 64-bit integer, denominated in satoshis (the smallest unit of bitcoin). This is the "money" inside the box.</p>
                        </div>
                    </li>
                    <li className="bg-gray-800/70 p-4 rounded-lg flex items-start">
                        <span className="text-2xl font-bold text-orange-400 w-12 text-center flex-shrink-0">2</span>
                        <div>
                            <h3 className="font-semibold text-white">Locking Script (ScriptPubKey)</h3>
                            <p className="text-gray-400">The conditions required to spend the value. It's a small program written in Bitcoin's 'Script' language. This is the "lock" on the box, which specifies what kind of key is needed.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
  },
  // 6. Anatomy of a Transaction
  {
    title: 'Anatomy of a Transaction',
    content: (
      <div>
        <p className="text-center text-gray-400 mb-6">A transaction is a data structure that dictates a transfer of value. It has two main parts: a list of inputs that reference and unlock existing UTXOs, and a list of outputs that create new, locked UTXOs.</p>
        <UtxoDiagram />
        <p className="text-center text-gray-500 text-sm mt-4">The sum of input values must be greater than or equal to the sum of output values. The difference is the miner fee.</p>
      </div>
    ),
  },
  // 7. Unlocking Script
  {
    title: 'The Unlocking Script',
    content: (
      <div className="text-center max-w-3xl mx-auto">
        <KeyIcon className="w-20 h-20 mx-auto text-yellow-400 mb-4" />
        <p className="text-2xl text-gray-300 mb-4">
          To spend a UTXO, you must provide the "key" to its "lock".
        </p>
        <p className="text-lg text-gray-400">
            Each input in a transaction contains an `Unlocking Script` (or `scriptSig`). This script provides the data and signatures necessary to satisfy the `Locking Script` of the UTXO being spent. For a standard transaction, this means providing a valid digital signature from the correct private key.
        </p>
        <div className="mt-6 font-mono text-lg flex justify-center items-center space-x-4 p-4 bg-gray-900/50 rounded-lg">
            <span className="text-yellow-400">Unlocking Script</span>
            <span className="text-gray-500">+</span>
            <span className="text-cyan-400">Locking Script</span>
            <span className="text-gray-500">→</span>
            <span className="text-green-400 font-bold">TRUE</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">When a node validates a transaction, it executes these two scripts together. If the result is TRUE, the input is valid.</p>
      </div>
    ),
  },
  // 8. Lifecycle
  {
    title: 'The Lifecycle of a UTXO',
    content: (
        <div>
            <p className="text-center text-gray-400 mb-8">A UTXO transitions through three distinct states. Its entire existence is a single, immutable arc from creation to consumption.</p>
            <LifecycleDiagram />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left text-sm">
                <div className="bg-green-900/30 p-4 rounded-lg">
                    <h4 className="font-bold text-green-300">1. Created</h4>
                    <p className="text-gray-400">A UTXO is born as an output in a transaction. At this moment, it is added to the global UTXO set and becomes part of the Bitcoin ledger.</p>
                </div>
                 <div className="bg-yellow-900/30 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-300">2. Unspent</h4>
                    <p className="text-gray-400">It sits in the UTXO set, waiting. It is owned and spendable by whoever can satisfy its locking script (i.e., whoever holds the private key).</p>
                </div>
                 <div className="bg-red-900/30 p-4 rounded-lg">
                    <h4 className="font-bold text-red-300">3. Spent</h4>
                    <p className="text-gray-400">The UTXO is used as an input in a new transaction. It is permanently removed from the UTXO set and can never be spent again.</p>
                </div>
            </div>
        </div>
    )
  },
  // 9. UTXO Set
  {
    title: 'The Global UTXO Set',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <p className="text-2xl text-gray-300 mb-4">
            A dynamic pool of all spendable bitcoin.
          </p>
          <p className="text-lg text-gray-400">
            Think of it as a live database of every "coin" that exists. When a transaction occurs, it reaches into this pool, consumes one or more UTXOs as inputs, and then adds brand new UTXOs (the payment and change) back into the pool.
          </p>
           <div className="mt-6 p-4 bg-gray-900/70 border-l-4 border-cyan-400 rounded-r-lg">
              <h4 className="font-bold text-cyan-300 flex items-center mb-2 text-lg">
                  <LightbulbIcon className="w-6 h-6 mr-2 flex-shrink-0" />
                  A Performance Optimization
              </h4>
              <p className="text-gray-400 text-base leading-relaxed">
                 Without this set, nodes would have to scan the entire blockchain history to validate every transaction. The UTXO set makes validation incredibly fast.
              </p>
          </div>
        </div>
        <AnimatedUtxoSet />
      </div>
    )
  },
  // 10. Change
  {
    title: 'Why is "Change" Necessary?',
    content: (
        <div>
            <p className="text-center text-gray-400 mb-2">UTXOs are indivisible. When you spend one, you must spend all of it. If the UTXO's value is more than your payment, the remainder is sent back to you in a new "change" UTXO.</p>
            <ChangeDiagram />
             <div className="mt-4 p-4 bg-gray-900/70 border-l-4 border-cyan-400 rounded-r-lg text-left max-w-2xl mx-auto">
                <h4 className="font-bold text-cyan-300 flex items-center mb-2 text-lg">
                    <LightbulbIcon className="w-6 h-6 mr-2 flex-shrink-0" />
                    Deep Dive: Change & Privacy
                </h4>
                <p className="text-gray-400 text-base leading-relaxed">
                    For privacy, modern wallets generate a brand new, never-before-used address for every change output. Reusing addresses is a major privacy leak, as it allows blockchain analysis firms to apply the "common-ownership heuristic"—the assumption that all inputs to a transaction belong to the same entity. Creating a new change address breaks this heuristic and compartmentalizes your funds.
                </p>
            </div>
        </div>
    )
  },
  // 11. Wallet Balance
  {
    title: 'How Wallets Calculate Balance',
    content: (
        <div className="text-center">
            <WalletIcon className="w-20 h-20 mx-auto text-blue-400 mb-4" />
            <p className="text-2xl text-gray-300 mb-4">
                Your wallet doesn't have a "balance" on the blockchain. It discovers it.
            </p>
            <p className="text-lg text-gray-400">Your wallet software scans the blockchain for all UTXOs locked to addresses it controls via your private keys. Your "balance" is simply the sum of the values of all those UTXOs at that moment.</p>
            <p className="text-4xl font-bold text-white my-8">
                Balance = Sum of all UTXOs your keys can unlock
            </p>
            <div className="flex justify-center items-center space-x-4 text-lg text-gray-400">
                <span>UTXO 1 (0.5)</span>
                <span className="text-2xl">+</span>
                <span>UTXO 2 (0.2)</span>
                 <span className="text-2xl">+</span>
                <span>UTXO 3 (0.01)</span>
                <span className="text-2xl">=</span>
                <span className="text-xl font-bold text-green-400">0.71 BTC</span>
            </div>
        </div>
    )
  },
  // 12. Coin Selection
  {
    title: 'How Wallets Choose UTXOs',
    content: (
      <div className="text-center max-w-3xl mx-auto">
        <FilterIcon className="w-20 h-20 mx-auto text-purple-400 mb-4" />
        <p className="text-2xl text-gray-300 mb-4">
          Spending bitcoin is a version of the "Subset Sum Problem".
        </p>
        <p className="text-lg text-gray-400">
          When you want to send an amount, your wallet must choose which of your UTXOs to combine to meet that amount. This is called "coin selection". The algorithm's goal is to gather enough value while balancing competing priorities like minimizing transaction fees, maximizing your future privacy, and avoiding the creation of tiny, inefficient "dust" change outputs.
        </p>
         <p className="text-sm text-gray-500 mt-4">Technical Note: Common algorithms include Branch and Bound (BnB) and Knapsack solvers, each with different trade-offs.</p>
      </div>
    )
  },
  // 13. Fees
  {
    title: 'UTXOs & Transaction Fees',
    content: (
      <div className="text-center max-w-3xl mx-auto">
        <FeeRateIcon className="w-20 h-20 mx-auto text-teal-400 mb-4" />
        <p className="text-2xl text-gray-300 mb-4">
          You pay for block space, not for value sent.
        </p>
        <p className="text-lg text-gray-400">
          Bitcoin fees are not a percentage. They are determined by the transaction's data size (in virtual bytes, or vBytes) multiplied by a market rate (in satoshis/vByte). The size is primarily determined by the number of inputs and outputs.
        </p>
        <p className="text-lg text-gray-300 mt-4 bg-gray-800 p-4 rounded-lg">
          <span className="font-semibold text-white">More UTXOs used as inputs = More data = Larger transaction = Higher fee.</span>
        </p>
         <div className="mt-6 p-4 bg-gray-900/70 border-l-4 border-cyan-400 rounded-r-lg text-left">
            <h4 className="font-bold text-cyan-300 flex items-center mb-2 text-lg">
                <LightbulbIcon className="w-6 h-6 mr-2 flex-shrink-0" />
                Deep Dive: Transaction Weight
            </h4>
            <p className="text-gray-400 text-base leading-relaxed">
               With the Segregated Witness (SegWit) upgrade, transaction size is measured in "weight units." The unlocking scripts (witness data) are discounted, making transactions that use SegWit addresses cheaper. For example, a P2WPKH (Native SegWit) input is significantly smaller and cheaper than an older P2PKH (Legacy) input, encouraging adoption of modern address types.
            </p>
        </div>
      </div>
    ),
  },
  // 14. Dust
  {
    title: 'The Problem of "Dust"',
    content: (
      <div className="text-center max-w-3xl mx-auto">
        <ExclamationTriangleIcon className="w-20 h-20 mx-auto text-red-400 mb-4" />
        <p className="text-2xl text-gray-300 mb-4">
          "Dust" UTXOs are so small their value is less than the fee to spend them.
        </p>
        <p className="text-lg text-gray-400">
          This creates an economically unspendable UTXO. If you have a 500 satoshi UTXO, but the fee to include it in a transaction is 1000 satoshis, spending it would result in a net loss. This "dust" can accumulate from small change outputs or by receiving many tiny payments (e.g., from a faucet).
        </p>
        <ul className="mt-4 text-left list-disc list-inside text-gray-400 max-w-md mx-auto">
            <li><span className="font-semibold text-white">For Users:</span> It's confusing wallet clutter that can't be spent.</li>
            <li><span className="font-semibold text-white">For Nodes:</span> It bloats the global UTXO set with useless data that must be stored forever.</li>
        </ul>
        <p className="text-sm text-gray-500 mt-4">Technical Note: Most nodes have a `dustRelayFee` setting and will refuse to relay transactions that create dust outputs, enforcing a network-level cleanliness standard.</p>
      </div>
    ),
  },
  // 15. Consolidation
  {
    title: 'UTXO Consolidation',
    content: (
      <div className="text-center max-w-3xl mx-auto">
        <ArrowsPointingInIcon className="w-20 h-20 mx-auto text-teal-400 mb-4" />
        <p className="text-2xl text-gray-300 mb-4">
          Combining many small UTXOs into one large one.
        </p>
        <p className="text-lg text-gray-400">
          Consolidation is like exchanging a pocketful of coins for a single dollar bill. It's a maintenance transaction where you send many of your small UTXOs to a new address you also control, resulting in one large UTXO. This is a strategy to clean up dust and prepare for a high-fee environment.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-green-400">Pro: Future Savings</h4>
                <p className="text-gray-400 text-sm">Significantly reduces fees on future large payments, as you'll only need one input.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-red-400">Con: Present Cost</h4>
                <p className="text-gray-400 text-sm">Consolidation is a transaction that costs a fee itself. It's best to do this when network fees are low.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-red-400">Con: Privacy Loss</h4>
                <p className="text-gray-400 text-sm">It definitively links all the input addresses together, confirming to chain analysts that they belong to a single entity.</p>
            </div>
        </div>
      </div>
    ),
  },
  // 16. Coinbase Transaction
  {
    title: 'The Origin: Coinbase',
    content: (
      <div className="text-center max-w-3xl mx-auto">
        <OriginBlockIcon className="w-20 h-20 mx-auto text-amber-400 mb-4" />
        <p className="text-2xl text-gray-300 mb-4">
          Where does all bitcoin come from?
        </p>
        <p className="text-lg text-gray-400">
            Every block begins with a unique <span className="font-semibold text-white">coinbase transaction</span>, created by the successful miner. This is the only transaction that does not have an input. It creates brand new bitcoin out of thin air.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-green-400">Block Subsidy</h4>
                <p className="text-gray-400 text-sm">The primary reward for the miner, currently 3.125 BTC. This amount halves approximately every four years.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-green-400">Transaction Fees</h4>
                <p className="text-gray-400 text-sm">The miner also collects all the fees from the other transactions included in their block.</p>
            </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">The output of the coinbase transaction is a new UTXO, which is the ultimate source of all other UTXOs on the network.</p>
      </div>
    ),
  },
  // 17. Advantages
  {
    title: 'Advantages of the UTXO Model',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-4">
        <div className="flex flex-col items-center">
            <LockIcon className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-300">Enhanced Privacy</h3>
            <p className="text-gray-400">The model encourages creating new addresses for change, which prevents address reuse and makes it harder to link a user's entire financial history.</p>
        </div>
        <div className="flex flex-col items-center">
            <LightningIcon className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-300">Scalability & Parallelization</h3>
            <p className="text-gray-400">Because transactions only affect isolated UTXOs, they don't depend on a shared global state. This allows for massive parallelization in transaction validation.</p>
        </div>
        <div className="flex flex-col items-center">
            <ChainIcon className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-yellow-300">Clear & Verifiable Lineage</h3>
            <p className="text-gray-400">Every satoshi's history can be cryptographically traced back to its creation in a coinbase transaction, providing strong auditability.</p>
        </div>
      </div>
    )
  },
  // 18. Privacy Deep Dive
  {
    title: 'Deeper Dive: Privacy',
    content: (
      <div className="text-center max-w-3xl mx-auto">
        <LockIcon className="w-20 h-20 mx-auto text-green-400 mb-4" />
        <p className="text-2xl text-gray-300 mb-4">
          The UTXO model is a prerequisite for powerful privacy tools.
        </p>
        <p className="text-lg text-gray-400">
          Advanced privacy techniques like <span className="font-bold text-green-300">CoinJoin</span> are only possible because UTXOs are discrete and fungible. A CoinJoin transaction pools UTXOs from many different users and creates a large, collaborative transaction with many inputs and outputs. This breaks the "common-ownership" heuristic and obscures the trail of ownership, making it difficult to know who paid whom.
        </p>
      </div>
    ),
  },
  // 19. Scalability Deep Dive
  {
    title: 'Deeper Dive: Scalability',
    content: (
      <div className="text-center max-w-3xl mx-auto">
        <LightningIcon className="w-20 h-20 mx-auto text-blue-400 mb-4" />
        <p className="text-2xl text-gray-300 mb-4">
          UTXOs are the building blocks for Layer-2 solutions.
        </p>
        <p className="text-lg text-gray-400">
          The <span className="font-bold text-blue-300">Lightning Network</span> works by having participants lock UTXOs into 2-of-2 multisignature addresses on the main blockchain. This on-chain UTXO acts as an anchor for an off-chain payment channel where thousands of transactions can occur instantly. Only the channel's opening and closing transactions touch the main chain, allowing Bitcoin to scale by orders of magnitude.
        </p>
      </div>
    ),
  },
  // 20. Programmable Money
  {
    title: 'UTXOs as Programmable Money',
    content: (
      <div className="max-w-4xl mx-auto text-left">
        <div className="text-center mb-8">
            <CodeIcon className="w-20 h-20 mx-auto text-red-400" />
        </div>
        <p className="text-xl text-gray-300 mb-4 text-center">
          Every UTXO's locking script is a mini smart contract.
        </p>
        <p className="text-base text-gray-400">
          The `Script` language, while simple, allows for powerful spending conditions beyond a single signature. This programmability is the foundation of many of Bitcoin's advanced features:
        </p>
        <ul className="mt-6 text-left list-disc list-inside text-gray-400 text-sm space-y-2">
          <li><span className="font-semibold text-white">Multisig:</span> Requiring M-of-N signatures (e.g., 2 of 3 keys) to spend, ideal for corporate treasuries or escrow.</li>
          <li><span className="font-semibold text-white">Timelocks:</span> Using opcodes like `OP_CHECKLOCKTIMEVERIFY` to make UTXOs unspendable until a certain time or block height.</li>
          <li><span className="font-semibold text-white">Atomic Swaps:</span> Enabling trustless, cross-chain trades using Hash Time Locked Contracts (HTLCs).</li>
        </ul>
        <div className="mt-8 p-4 bg-gray-900/70 border-l-4 border-cyan-400 rounded-r-lg text-left">
          <h4 className="font-bold text-cyan-300 flex items-center mb-2 text-base">
              <LightbulbIcon className="w-5 h-5 mr-2 flex-shrink-0" />
              Deep Dive: Deliberately Not Turing-Complete
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed">
             Bitcoin's `Script` language is intentionally limited. It lacks loops and complex state capabilities, making it "Turing-incomplete". This is a critical security feature. It makes the outcome of any script (its cost, execution time, and result) completely predictable, which prevents denial-of-service attacks and complex bugs that have plagued more expressive smart contract platforms.
          </p>
        </div>
      </div>
    ),
  },
  // 21. Key Takeaways
  {
    title: 'Key Takeaways',
    content: (
      <ul className="space-y-5 text-xl text-gray-300">
        <li className="flex items-start">
            <span className="text-orange-400 mr-4 font-bold">1.</span>
            <div><span className="font-semibold text-white">Digital Cash, Not Accounts:</span> UTXOs are like individual, indivisible coins. You spend them whole and get change back. Your balance is the sum of your coins.</div>
        </li>
         <li className="flex items-start">
            <span className="text-orange-400 mr-4 font-bold">2.</span>
            <div><span className="font-semibold text-white">Lock & Key Security:</span> Every UTXO has a `Locking Script` (the lock) and requires a transaction input to provide a valid `Unlocking Script` (the key) to be spent.</div>
        </li>
        <li className="flex items-start">
            <span className="text-orange-400 mr-4 font-bold">3.</span>
            <div><span className="font-semibold text-white">Transactions Consume and Create:</span> Transactions are a state transition machine—they consume existing UTXOs from the global set and create new ones, forming an unbroken chain.</div>
        </li>
        <li className="flex items-start">
            <span className="text-orange-400 mr-4 font-bold">4.</span>
            <div><span className="font-semibold text-white">Fees are for Size, Not Value:</span> Transaction fees are based on data size (vBytes). More input UTXOs means a larger, more expensive transaction.</div>
        </li>
         <li className="flex items-start">
            <span className="text-orange-400 mr-4 font-bold">5.</span>
            <div><span className="font-semibold text-white">The Engine of Innovation:</span> The UTXO model's simplicity is its strength, providing the foundation for Bitcoin's privacy (CoinJoin), scalability (Lightning), and programmability (Multisig, Timelocks).</div>
        </li>
      </ul>
    )
  },
  // 22. Raw Transaction Structure
  {
    title: 'Raw Transaction Structure',
    content: (
      <div>
        <p className="text-center text-gray-400 mb-2 max-w-3xl mx-auto">Under the hood, a transaction is a precise sequence of bytes. This is the fundamental data structure that gets serialized, hashed, and broadcast to the network.</p>
        <p className="text-center text-gray-500 text-sm mb-6">Note: This is a simplified diagram. It omits certain details like witness data for clarity.</p>
        <RawTransactionDiagram />
      </div>
    ),
  },
  // 23. The Rabbit Hole
  {
    title: 'The Rabbit Hole',
    content: (
      <div className="text-center relative max-w-4xl mx-auto flex flex-col items-center justify-center">
        <BuildingBlocksIcon className="w-20 h-20 text-cyan-400 mb-6" />
        <p className="text-xl text-gray-400 mb-8">
            The UTXO model doesn't exist in a vacuum. It's one part of a larger system of interlocking ideas.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 leading-none font-mono">
            <span className="text-3xl text-blue-300">Blockchain</span>
            <span className="text-xl text-gray-400">Proof-of-Work</span>
            <span className="text-2xl text-amber-400">Nodes</span>
            <span className="text-xl text-gray-300">Cryptography</span>
            <span className="text-3xl text-green-400">Consensus</span>
            <span className="text-xl text-gray-400">Mining</span>
            <span className="text-2xl text-red-400">Private Keys</span>
            <span className="text-xl text-gray-300">Public Keys</span>
            <span className="text-2xl text-purple-400">Digital Signatures</span>
            <span className="text-3xl text-gray-300">Hashing</span>
            <span className="text-xl text-amber-300">Blocks</span>
            <span className="text-2xl text-cyan-400">Ledger</span>
            <span className="text-xl text-gray-400">Decentralization</span>
            <span className="text-3xl text-red-300">Peer-to-Peer</span>
            <span className="text-2xl text-amber-400">Satoshi</span>
            <span className="text-xl text-purple-300">Immutability</span>
            <span className="text-xl text-red-400">Addresses</span>
            <span className="text-3xl text-green-300">Difficulty</span>
        </div>
      </div>
    ),
  },
  // 24. The Rabbit Hole: Deeper
  {
    title: 'The Rabbit Hole: Deeper',
    content: (
      <div className="text-center relative max-w-4xl mx-auto flex flex-col items-center justify-center">
        <RabbitHoleIcon className="w-20 h-20 text-purple-400 mb-6" />
        <p className="text-xl text-gray-400 mb-8">
            The journey never ends. These advanced concepts build upon the UTXO model and form the Bitcoin ecosystem.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 leading-none font-mono">
            <span className="text-2xl text-cyan-300">PSBT</span>
            <span className="text-lg text-gray-400">Taproot</span>
            <span className="text-xl text-amber-400">SegWit</span>
            <span className="text-2xl text-gray-300">Mempool</span>
            <span className="text-lg text-green-400">Block Subsidy</span>
            <span className="text-xl text-gray-400">Halving</span>
            <span className="text-lg text-red-400">wTXID</span>
            <span className="text-2xl text-gray-300">Locktime</span>
            <span className="text-xl text-purple-300">OP_RETURN</span>
            <span className="text-lg text-gray-400">Bech32m</span>
            <span className="text-2xl text-cyan-400">Timelocks</span>
            <span className="text-xl text-amber-300">RBF</span>
            <span className="text-lg text-gray-400">CPFP</span>
            <span className="text-2xl text-green-300">SIGHASH</span>
            <span className="text-xl text-gray-300">BIPs</span>
            <span className="text-lg text-red-300">Script</span>
            <span className="text-xl text-cyan-400">CoinJoin</span>
            <span className="text-lg text-amber-300">Merkle Tree</span>
            <span className="text-xl text-gray-400">Difficulty Adjustment</span>
            <span className="text-2xl text-green-300">P2TR</span>
            <span className="text-lg text-red-400">Ordinals</span>
            <span className="text-xl text-purple-300">Inscriptions</span>
            <span className="text-lg text-gray-300">P2WPKH</span>
            <span className="text-xl text-blue-400">P2SH</span>
            <span className="text-lg text-amber-400">Schnorr</span>
            <span className="text-2xl text-red-300">Full Node</span>
            <span className="text-xl text-gray-400">SPV Node</span>
        </div>
      </div>
    ),
  },
  // 25. Thank You
   {
    title: 'Thank You',
    content: (
       <div className="text-center">
        <SparklesIcon className="w-24 h-24 mx-auto text-amber-400" />
        <p className="text-3xl text-gray-300 mt-4">Questions?</p>
        <div className="mt-12 text-gray-500">
            <p>This presentation was designed and generated by a world-class AI assistant.</p>
        </div>
      </div>
    ),
  },
];
