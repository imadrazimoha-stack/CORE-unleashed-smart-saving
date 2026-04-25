import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  // Sync with browser back/forward
  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash;
      if (h === '#/login') setShowLogin(true);
      else if (h === '' || h === '#' || h === '#/') setShowLogin(false);
    };
    window.addEventListener('hashchange', onHash);
    // Set initial state from URL
    if (window.location.hash === '#/login') setShowLogin(true);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Logged in → dashboard
  if (currentUser) {
    return (
      <Dashboard
        currentUser={currentUser}
        onLogout={() => { setCurrentUser(null); setShowLogin(false); window.location.hash = ''; }}
      />
    );
  }

  // Login page
  if (showLogin) {
    return <LoginPage onLogin={setCurrentUser} />;
  }

  // Landing page
  return (
    <LandingPage
      onNavigateToLogin={() => { setShowLogin(true); window.location.hash = '/login'; }}
    />
  );
}

export default App;
