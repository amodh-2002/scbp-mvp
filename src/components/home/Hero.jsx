import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background-default">
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background-default to-secondary/20 animate-gradient-x"></div>
      
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              <span className="block">Empower Your</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Creator Community
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Create and distribute digital badges as compressed NFTs on Solana. Connect with your fans, reward loyalty, and unlock new revenue streams.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/dashboard"
                className="btn btn-primary btn-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
              >
                Start Creating
              </Link>
              <Link
                to="/about"
                className="btn btn-outline btn-lg text-white border-white/20 hover:bg-white/5"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-8 flex items-center text-gray-400">
              <img src="https://solana.com/src/img/branding/solanaLogoMark.svg" alt="Solana" className="h-5 w-auto mr-2" />
              <span>Powered by Solana</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="bg-background-light/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-white font-display text-xl font-bold">Creator Badge</h3>
                    <p className="text-gray-400 text-sm">Limited Edition</p>
                  </div>
                  <div className="bg-primary/20 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  </div>
                </div>
                
                <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl mb-6 overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-gray-400 text-xs">Creator</p>
                    <p className="text-white font-medium truncate">@creator_name</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Edition</p>
                    <p className="text-white font-medium">#42 of 100</p>
                  </div>
                </div>
                
                <button className="btn btn-primary w-full">
                  Claim Badge
                </button>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent/30 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
