import { useState, useEffect } from 'react';
import { useOkto } from '@okto_web3/react-sdk';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const OktoWallet = ({ setWallet = () => {} }) => {
  const oktoClient = useOkto();
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Create a direct reference to the oktoClient for transaction signing
  const signTransaction = async (transaction) => {
    console.log('Signing transaction with Okto wallet');
    if (!oktoClient) {
      throw new Error('Okto client not available');
    }
    
    try {
      // Use the raw signTransaction method from oktoClient
      return await oktoClient.signTransaction(transaction);
    } catch (error) {
      console.error('Error signing transaction:', error);
      throw error;
    }
  };

  // Check if user is already authenticated
  useEffect(() => {
    const checkWalletConnection = async () => {
      try {
        // Only proceed if oktoClient is available and has userSWA property
        if (oktoClient && oktoClient.userSWA) {
          setWalletAddress(oktoClient.userSWA);
          
          // Create wallet object
          const walletObj = {
            address: oktoClient.userSWA,
            signTransaction: signTransaction
          };
          
          // Set wallet state in parent component if setWallet is provided
          setWallet(walletObj);
          
          // Store wallet in localStorage for persistence - only store the minimum required info
          window.localStorage.setItem('scbpWallet', JSON.stringify({
            address: oktoClient.userSWA
          }));
          
          // Use minimal logging in production
          if (process.env.NODE_ENV !== 'production') {
            console.log('Wallet connected');
          }
          
          // If we're on the login page and already connected, redirect to dashboard
          if (window.location.pathname === '/login') {
            navigate('/dashboard');
          }
        }
      } catch (error) {
        console.error('Error checking wallet connection:', error);
      }
    };

    checkWalletConnection();
  }, [oktoClient, navigate]);

  const handleGoogleLogin = async (credentialResponse) => {
    setIsLoading(true);
    setError(null);
    try {
      // Login using OAuth
      await oktoClient.loginUsingOAuth({
        idToken: credentialResponse.credential,
        provider: 'google',
      });
      
      // Wait a moment for the client to update
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Get user info from Okto client
      const userKeys = await oktoClient.getUserKeys();
      
      if (!userKeys || !userKeys.userSWA) {
        throw new Error('Failed to retrieve wallet address');
      }
      
      const address = userKeys.userSWA;
      setWalletAddress(address);
      
      // Create wallet object
      const walletObj = {
        address: address,
        signTransaction: signTransaction
      };
      
      // Set wallet state in parent component
      setWallet(walletObj);
      
      // Store wallet in localStorage for persistence - only store the minimum required info
      window.localStorage.setItem('scbpWallet', JSON.stringify({
        address: address
      }));
      
      // Use minimal logging in production
      if (process.env.NODE_ENV !== 'production') {
        console.log('Wallet connected');
      }
      
      // Redirect to dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      console.error('Wallet connection failed:', error);
      setError('Failed to connect to Okto wallet. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {walletAddress ? (
        <div className="w-full">
          <div className="flex items-center justify-center p-4 bg-success/20 rounded-lg border border-success/30 text-white mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>
              Connected: <span className="font-mono">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
            </span>
          </div>
          <button 
            className="btn btn-primary w-full"
            onClick={() => navigate('/dashboard')}
          >
            Go to Dashboard
          </button>
        </div>
      ) : isLoading ? (
        <div className="w-full p-4 bg-background-default/50 rounded-lg border border-white/10 flex justify-center">
          <span className="loading loading-spinner loading-md text-primary"></span>
          <span className="ml-2 text-white">Connecting...</span>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex justify-center mb-4">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => setError('Google login failed. Please try again.')}
              theme="filled_blue"
              shape="pill"
              size="large"
              text="continue_with"
              locale="en"
            />
          </div>
          <p className="text-sm text-center text-gray-400">
            Connect with Google to use Okto wallet
          </p>
        </div>
      )}
      {error && (
        <div className="alert alert-error mt-4 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default OktoWallet;