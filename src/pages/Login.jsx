import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OktoWallet from '../components/OktoWallet';

const Login = ({ setWallet }) => {
  const [activeTab, setActiveTab] = useState('creator');

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-default py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background-default to-secondary/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="relative w-full max-w-md">
        <div className="bg-background-light/30 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 pt-6">
            <div className="flex justify-center mb-6">
              <Link to="/" className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">SCBP</span>
                </div>
                <span className="text-white font-display font-bold text-2xl">SCBP</span>
              </Link>
            </div>
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-display font-bold text-white">Welcome to SCBP</h2>
              <p className="mt-2 text-gray-400">
                Connect your wallet to start creating or collecting badges
              </p>
            </div>
            
            <div className="flex rounded-lg p-1 bg-background-default/50 mb-6">
              <button
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'creator'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('creator')}
              >
                Creator
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'collector'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('collector')}
              >
                Collector
              </button>
            </div>
          </div>
          
          <div className="px-6 pb-8">
            <div className="mb-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-background-light/30 text-gray-400">Connect with</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <OktoWallet setWallet={setWallet} />
              
              <div className="text-center mt-6">
                <p className="text-sm text-gray-400">
                  By connecting, you agree to our{' '}
                  <Link to="/terms" className="text-primary hover:text-primary-dark">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-primary hover:text-primary-dark">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            New to Solana?{' '}
            <a
              href="https://solana.com/learn/getting-started-with-solana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark"
            >
              Learn how to get started
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
