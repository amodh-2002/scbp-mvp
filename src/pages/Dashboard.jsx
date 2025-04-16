import { useState } from 'react';
import { Link } from 'react-router-dom';
import MintBadge from '../components/MintBadge';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Dashboard = ({ wallet }) => {
  const [activeTab, setActiveTab] = useState('create');

  // Mock data for badges
  const mockBadges = [
    {
      id: 1,
      name: 'Early Supporter',
      image: null,
      edition: '1/100',
      created: '2023-04-15',
      address: 'Gfyh2V5grdZPKPRCgH5N5oCm7UZ9ZZPHnGGrz5kVJYs7',
    },
    {
      id: 2,
      name: 'Premium Member',
      image: null,
      edition: '1/50',
      created: '2023-04-16',
      address: 'HMxY4LCQaS1ghWzH8oC12wkTgL3obUcGGbvMwbAGiJjA',
    },
  ];

  return (
    <div className="min-h-screen bg-background-default text-white">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-display font-bold text-white">Creator Dashboard</h1>
            <p className="mt-2 text-gray-400">
              Create and manage your community badges
            </p>
          </div>
          
          {/* Wallet Info */}
          <div className="bg-background-light/30 backdrop-blur-lg border border-white/10 rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Wallet</h2>
                <p className="text-gray-400 mt-1">
                  {wallet?.address ? (
                    <span className="font-mono">{wallet.address}</span>
                  ) : (
                    'Not connected'
                  )}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="stats bg-background-default/50 border border-white/10 text-white">
                  <div className="stat">
                    <div className="stat-title text-gray-400">Balance</div>
                    <div className="stat-value text-primary">0.5 SOL</div>
                    <div className="stat-desc text-gray-400">Demo Balance</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title text-gray-400">Badges</div>
                    <div className="stat-value text-secondary">{mockBadges.length}</div>
                    <div className="stat-desc text-gray-400">Created</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dashboard Tabs */}
          <div className="tabs tabs-boxed bg-background-light/30 p-1 mb-8 inline-flex">
            <button 
              className={`tab ${activeTab === 'create' ? 'tab-active bg-primary text-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('create')}
            >
              Create Badge
            </button>
            <button 
              className={`tab ${activeTab === 'my-badges' ? 'tab-active bg-primary text-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('my-badges')}
            >
              My Badges
            </button>
            <button 
              className={`tab ${activeTab === 'analytics' ? 'tab-active bg-primary text-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('analytics')}
            >
              Analytics
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="mt-8">
            {activeTab === 'create' && (
              <MintBadge wallet={wallet} />
            )}
            
            {activeTab === 'my-badges' && (
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-6">My Badges</h2>
                
                {mockBadges.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockBadges.map((badge) => (
                      <div 
                        key={badge.id}
                        className="bg-background-light/30 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-1"
                      >
                        <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-white text-4xl">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-medium text-white">{badge.name}</h3>
                          <div className="mt-2 flex justify-between text-sm">
                            <span className="text-gray-400">Edition: {badge.edition}</span>
                            <span className="text-gray-400">Created: {badge.created}</span>
                          </div>
                          <div className="mt-4">
                            <a
                              href={`https://explorer.solana.com/address/${badge.address}?cluster=devnet`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary-dark text-sm"
                            >
                              View on Explorer
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-background-light/20 rounded-xl border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <h3 className="text-xl font-medium text-white mb-2">No badges created yet</h3>
                    <p className="text-gray-400 mb-6">Create your first badge to get started</p>
                    <button 
                      className="btn btn-primary"
                      onClick={() => setActiveTab('create')}
                    >
                      Create Badge
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'analytics' && (
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-6">Analytics</h2>
                
                <div className="bg-background-light/30 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h3 className="text-xl font-medium text-white mb-2">Analytics Coming Soon</h3>
                  <p className="text-gray-400">
                    Detailed analytics will be available in the full version
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
