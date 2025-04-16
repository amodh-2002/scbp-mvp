# Solana Creator Badge Platform (SCBP) - MVP

## Overview

The Solana Creator Badge Platform (SCBP) is a web application that empowers Indian content creators (YouTubers, artists, streamers) to mint and distribute compressed NFTs (cNFTs) as community badges. This enables fans to collect them for exclusive perks such as Discord access or creator shoutouts. Built with React, TailwindCSS, and Solana's JavaScript SDK, SCBP integrates Okto wallets for seamless onboarding and leverages Metaplex for low-cost cNFT minting.

**Problem Statement:** Indian content creators (50M+ strong) lack accessible, low-cost tools to monetize their communities through digital collectibles, limiting fan engagement and revenue streams.

**Solution:** SCBP provides a user-friendly platform tailored to India's creator economy, addressing the need for creator monetization tools on Solana.

## Current MVP Features

- **Okto Wallet Integration**: Seamless login using Google OAuth through Okto wallet
- **Modern UI**: Professional crypto-inspired interface with dark theme and gradients
- **Creator Dashboard**: Feature-rich interface for badge creation and management
- **Badge Minting UI**: Interactive form with live preview, description, and edition size
- **Demo Mode**: Simulated minting process for demonstration purposes
- **Responsive Design**: Mobile-friendly layout for all device sizes

## Tech Stack

- **Frontend**: React, Vite, TailwindCSS, DaisyUI
- **Routing**: React Router DOM
- **Blockchain**: Solana (@solana/web3.js)
- **NFT Standards**: Metaplex Token Metadata
- **Wallet Integration**: Okto SDK (@okto_web3/react-sdk)
- **Authentication**: Google OAuth (@react-oauth/google)
- **State Management**: React Hooks + localStorage persistence
- **Development**: JavaScript/JSX
- **Deployment**: Vercel (planned)

## Installation & Testing

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/scbp-mvp.git
   cd scbp-mvp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file based on `.env.example`:
   ```
   VITE_SOLANA_RPC=<rpc-url>
   VITE_PUBLIC_CLIENT_SWA=<public-client-swa>
   VITE_CLIENT_PRIVATE_KEY=<client-private-key>
   VITE_GOOGLE_CLIENT_ID=<google-client-id>
   ```
   Note: You'll need to obtain your own Okto API credentials and Google OAuth client ID for production use.

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Access the application**:
   Open your browser and navigate to http://localhost:5173

## Testing the Application

1. **Explore the landing page**:
   - View the hero section, features, and how it works
   - Click "Launch App" to proceed to login

2. **Connect your wallet**:
   - On the login page, click the Google Login button
   - Authenticate with your Google account
   - The app will connect to your Okto wallet and redirect to dashboard

3. **Use the dashboard**:
   - Navigate between tabs: Create Badge, My Badges, and Analytics
   - View your wallet information and demo balance

4. **Create a badge**:
   - Enter badge details (name, description, edition size)
   - Upload an image for your badge
   - See the live preview update as you make changes
   - Click "Mint Badge"

5. **View the result**:
   - See the success notification with the simulated NFT address
   - Click the address to view where it would appear on Solana Explorer
   - Check the "My Badges" tab to see your created badges

Note: The current MVP simulates the minting process without creating actual blockchain transactions.

## Project Structure

```
scbp-mvp/
├── public/                    # Static assets (e.g., favicon)
├── src/                       # React source code
│   ├── components/            # Reusable React components
│   │   ├── layout/            # Layout components
│   │   │   ├── Navbar.jsx     # Navigation bar component
│   │   │   └── Footer.jsx     # Footer component
│   │   ├── home/              # Landing page components
│   │   │   ├── Hero.jsx       # Hero section component
│   │   │   └── Features.jsx   # Features section component
│   │   ├── MintBadge.jsx      # Badge creation component
│   │   └── OktoWallet.jsx     # Wallet integration component
│   ├── pages/                 # Page components
│   │   ├── Home.jsx           # Landing page
│   │   ├── Login.jsx          # Login page
│   │   └── Dashboard.jsx      # Dashboard page
│   ├── App.jsx                # Main app component with routing
│   ├── index.css              # Global styles and Tailwind imports
│   └── main.jsx               # Entry point with providers
├── .env.example               # Environment variable template
├── .gitignore                 # Git ignore file
├── package.json               # Node dependencies and scripts
├── tailwind.config.js         # TailwindCSS and DaisyUI configuration
├── vite.config.js             # Vite configuration
└── README.md                  # Project overview
```

## Current Status & Future Plans

### Current Status (MVP)

- ✅ **Wallet Integration**: Successfully integrated Okto wallet with Google OAuth
- ✅ **Professional UI**: Modern crypto-inspired interface with dark theme and gradients
- ✅ **Complete User Flow**: Landing page, login, dashboard, and badge creation
- ✅ **Interactive Badge Creation**: Form with live preview and detailed options
- ✅ **Demo Flow**: Simulated badge minting process for demonstration
- ✅ **Persistent Sessions**: Wallet connection persists between sessions
- ✅ **Responsive Design**: Mobile-friendly layout for all device sizes

### Planned Features (With Funding)

- 🚀 **Real cNFT Minting**: Implement actual compressed NFT minting on Solana
- 🚀 **Merkle Tree Setup**: Create and manage Merkle trees for state compression
- 🚀 **Metadata Storage**: Integrate with Arweave or IPFS for permanent storage
- 🚀 **Fan Interface**: Build a badge collection interface for fans
- 🚀 **Perk Redemption**: Implement token-gating for exclusive perks
- 🚀 **Creator Dashboard**: Enhanced analytics and badge management
- 🚀 **Mobile Optimization**: Responsive design for mobile users

## Technical Roadmap

1. **Phase 1 (Current MVP)**
   - Wallet integration with Okto
   - Professional UI implementation with DaisyUI
   - Complete user flow with routing
   - Interactive badge creation
   - Demo functionality
   - Session persistence

2. **Phase 2 (With Initial Funding)**
   - Metaplex UMI SDK integration
   - Merkle tree setup for cNFTs
   - Real blockchain transactions

3. **Phase 3 (Full Implementation)**
   - Fan interfaces
   - Perk redemption system
   - Enhanced creator tools

## Deployment

The application can be deployed on Vercel:

1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Set environment variables in Vercel dashboard

