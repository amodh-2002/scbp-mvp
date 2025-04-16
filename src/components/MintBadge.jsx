import { useState, useRef } from 'react';

const MintBadge = ({ wallet }) => {
  const [badgeName, setBadgeName] = useState('');
  const [badgeDescription, setBadgeDescription] = useState('');
  const [badgeQuantity, setBadgeQuantity] = useState(100);
  const [badgeImage, setBadgeImage] = useState(null);
  const [badgeImagePreview, setBadgeImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nftAddress, setNftAddress] = useState(null);
  const [mintSuccess, setMintSuccess] = useState(false);
  const fileInputRef = useRef(null);

  // Helper function to generate a random Solana-like address
  const generateRandomAddress = () => {
    const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 44; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBadgeImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBadgeImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setBadgeName('');
    setBadgeDescription('');
    setBadgeQuantity(100);
    setBadgeImage(null);
    setBadgeImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const mintBadge = async () => {
    if (!badgeName || !badgeImage) {
      setError('Please provide badge name and image');
      return;
    }

    setLoading(true);
    setError(null);
    setMintSuccess(false);

    try {
      console.log('Wallet address from Okto:', wallet.address);
      
      // For demo purposes, we'll generate a random NFT address
      const mockNftAddress = generateRandomAddress();
      console.log('Using demo NFT address:', mockNftAddress);
      
      console.log('For demo purposes only: Creating a simple NFT without actual blockchain transactions');
      
      // Wait a moment to simulate the minting process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Set the mock NFT address
      setNftAddress(mockNftAddress);
      setMintSuccess(true);
      resetForm();
      
      console.log('Demo NFT created successfully!');
      
      // In a production environment, we need to:
      // 1. Use the Metaplex UMI SDK to create a real NFT on Solana
      // 2. Upload the image to Arweave or IPFS
      // 3. Create proper metadata with the image URI
      // 4. Mint the NFT using the user's wallet for signing transactions

    } catch (error) {
      console.error('Minting failed:', error);
      setError('Failed to mint badge. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-background-light/30 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl overflow-hidden">
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-display font-bold text-white mb-6">Create Creator Badge</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-background-default/50 border border-white/10 rounded-xl p-6 w-full max-w-xs">
                <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center mb-4">
                  {badgeImagePreview ? (
                    <img 
                      src={badgeImagePreview} 
                      alt="Badge Preview" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                
                <div className="text-center">
                  <h3 className="text-white font-medium text-lg">
                    {badgeName || 'Badge Name'}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {badgeDescription || 'Badge description will appear here'}
                  </p>
                  <div className="mt-3 flex justify-between items-center text-xs text-gray-400">
                    <span>Edition: {badgeQuantity}</span>
                    <span>Creator: {wallet?.address ? `${wallet.address.slice(0, 4)}...${wallet.address.slice(-4)}` : 'Connect Wallet'}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-white">Badge Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter badge name"
                    value={badgeName}
                    onChange={(e) => setBadgeName(e.target.value)}
                    className="input input-bordered w-full bg-background-default/50 border-white/10 text-white"
                  />
                </div>
                
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-white">Description</span>
                  </label>
                  <textarea
                    placeholder="Enter badge description"
                    value={badgeDescription}
                    onChange={(e) => setBadgeDescription(e.target.value)}
                    className="textarea textarea-bordered w-full bg-background-default/50 border-white/10 text-white"
                    rows="3"
                  ></textarea>
                </div>
                
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-white">Badge Image</span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="file-input file-input-bordered w-full bg-background-default/50 border-white/10 text-white"
                  />
                </div>
                
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-white">Edition Size</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10000"
                    value={badgeQuantity}
                    onChange={(e) => setBadgeQuantity(parseInt(e.target.value) || 1)}
                    className="input input-bordered w-full bg-background-default/50 border-white/10 text-white"
                  />
                </div>
                
                <button
                  onClick={mintBadge}
                  disabled={loading || !badgeName || !badgeImage}
                  className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
                >
                  {loading ? 'Minting...' : 'Mint Badge'}
                </button>
              </div>
            </div>
          </div>
          
          {error && (
            <div className="alert alert-error mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error}</span>
            </div>
          )}
          
          {mintSuccess && nftAddress && (
            <div className="alert alert-success mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <span className="font-medium">Badge minted successfully!</span>
                <div className="text-sm mt-1">
                  NFT Address: <a
                    href={`https://explorer.solana.com/address/${nftAddress}?cluster=devnet`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {nftAddress.slice(0, 8)}...{nftAddress.slice(-8)}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MintBadge;