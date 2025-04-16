# Solana Creator Badge Platform (SCBP) - MVP
A minimal web application for Indian creators to mint cNFT badges on Solana, integrated with Okto wallets. Built for the Solana Foundation & CoinDCX India Grants program under the "Loyalty & Creator Monetization" focus.

## Features

- Okto Wallet Login: Creators connect using Okto wallet.
- cNFT Badge Minting: Mint a single badge with name and image on Solana Devnet.
- Badge Storage: View minted badges in the Okto wallet.

## Tech Stack

- Frontend: React, TailwindCSS
- Blockchain: Solana (@solana/web3.js), Metaplex JS
- Wallet: Okto SDK
- Deployment: Vercel

## Installation

1. Clone the repository:
git clone https://github.com/your-username/scbp-mvp.git
cd scbp-mvp


2. Install dependencies:
npm install

3. Set up environment variables (see .env.example):

VITE_SOLANA_RPC: Solana Devnet RPC endpoint (e.g., https://api.devnet.solana.com)
VITE_OKTO_API_KEY: Okto API key (obtain from Okto developer portal)

4. Run the development server:
npm run dev



## Usage

Visit the app (e.g., http://localhost:5173 or Vercel URL).
Click "Connect Wallet" to log in with Okto.
Enter badge details (name, image) and click "Mint Badge."
View the minted badge in your Okto wallet.

## Project Structure

scbp-mvp/
├── public/                    # Static assets (e.g., favicon)
├── src/                       # React source code
│   ├── assets/                # Images, fonts, etc.
│   ├── components/            # Reusable React components
│   ├── pages/                 # Page components (e.g., Home, MintBadge)
│   └── App.jsx                # Main app component
├── scripts/                   # Solana scripts (for cNFT minting)
├── docs/                      # Documentation (e.g., demo video)
├── .env.example               # Environment variable template
├── .gitignore                 # Git ignore file
├── package.json               # Node dependencies and scripts
├── tailwind.config.js         # TailwindCSS configuration
├── vite.config.js             # Vite configuration
└── README.md                  # Project overview

## Deployment
Deployed on Vercel: [Your Vercel URL]

Push code to GitHub.
Connect GitHub repo to Vercel.
Set environment variables in Vercel dashboard (same as `.env.example`).

## License
MIT License

## Grant Context
Submitted for the Solana Foundation & CoinDCX India Grants program. The MVP demonstrates cNFT minting and Okto integration, with plans to expand to fan interfaces and perk redemption.
