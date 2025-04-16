import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Solana Creator Badge Platform</h1>
        <p className="text-gray-600 mb-4">Mint cNFT badges on Solana with Okto wallet</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default App;