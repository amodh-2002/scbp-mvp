import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { OktoProvider } from '@okto_web3/react-sdk';
import App from './App.jsx';
import './index.css';

const oktoConfig = {
  environment: 'sandbox',
  clientPrivateKey: import.meta.env.VITE_CLIENT_PRIVATE_KEY ? import.meta.env.VITE_CLIENT_PRIVATE_KEY.startsWith('0x') ? import.meta.env.VITE_CLIENT_PRIVATE_KEY : `0x${import.meta.env.VITE_CLIENT_PRIVATE_KEY}` : '',
  clientSWA: import.meta.env.VITE_PUBLIC_CLIENT_SWA ? import.meta.env.VITE_PUBLIC_CLIENT_SWA.startsWith('0x') ? import.meta.env.VITE_PUBLIC_CLIENT_SWA : `0x${import.meta.env.VITE_PUBLIC_CLIENT_SWA}` : '',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <OktoProvider config={oktoConfig}>
        <App />
      </OktoProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
);