import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';

const Home = () => {
  return (
    <div className="min-h-screen bg-background-default text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        
        {/* How It Works Section */}
        <section className="py-20 bg-background-light/30 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-white sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Create and distribute digital badges in just a few simple steps
              </p>
            </div>
            
            <div className="relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4 z-10">
                      1
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">Connect Wallet</h3>
                    <p className="text-gray-400 text-center">
                      Sign in with your Okto wallet to access the creator dashboard
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white text-xl font-bold mb-4 z-10">
                      2
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">Design Badge</h3>
                    <p className="text-gray-400 text-center">
                      Create your badge with custom artwork, attributes, and rarity levels
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white text-xl font-bold mb-4 z-10">
                      3
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">Mint & Share</h3>
                    <p className="text-gray-400 text-center">
                      Mint your badge as a cNFT and share it with your community
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link
                to="/dashboard"
                className="btn btn-primary btn-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
              >
                Start Creating
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-background-default relative overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background-default to-secondary/10"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-background-light/30 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-display font-bold text-white">
                    Ready to Grow Your Community?
                  </h2>
                  <p className="mt-4 text-gray-300">
                    Join thousands of Indian creators who are using SCBP to connect with their fans and monetize their content through digital collectibles.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      to="/dashboard"
                      className="btn btn-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                    >
                      Get Started
                    </Link>
                    <a
                      href="https://discord.gg/scbp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline text-white border-white/20 hover:bg-white/5"
                    >
                      Join Discord
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full filter blur-xl"></div>
                    <img
                      src="https://solana.com/src/img/branding/solanaLogoMark.svg"
                      alt="Solana"
                      className="relative w-32 h-32 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
