import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [wallet, setWallet] = useState(null);
  
  // Load wallet from localStorage on initial render
  useEffect(() => {
    const savedWallet = window.localStorage.getItem('scbpWallet');
    if (savedWallet) {
      try {
        const parsedWallet = JSON.parse(savedWallet);
        setWallet(parsedWallet);
        console.log('Loaded wallet from localStorage:', parsedWallet.address);
      } catch (error) {
        console.error('Error parsing saved wallet:', error);
        window.localStorage.removeItem('scbpWallet');
      }
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background-default">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setWallet={setWallet} />} />
          <Route 
            path="/dashboard" 
            element={
              wallet ? (
                <Dashboard wallet={wallet} />
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;