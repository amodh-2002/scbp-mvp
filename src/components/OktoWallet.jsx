import { useState } from 'react';

// Placeholder for Okto SDK integration
const OktoWallet = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    try {
      // Replace with actual Okto SDK implementation
      // const okto = new OktoSDK(process.env.VITE_OKTO_API_KEY);
      // const wallet = await okto.connect();
      // setWalletAddress(wallet.address);
      console.log('Okto wallet connection placeholder');
      setWalletAddress('mock-address-123'); // Mock for now
    } catch (error) {
      console.error('Wallet connection failed:', error);
      alert('Failed to connect wallet');
    }
  };

  return (
    <div>
      {walletAddress ? (
        <p className="text-green-600">Connected: {walletAddress}</p>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Connect Okto Wallet
        </button>
      )}
    </div>
  );
};

export default OktoWallet;