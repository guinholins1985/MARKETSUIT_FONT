
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ToolGrid from './components/ToolGrid';
import Footer from './components/Footer';
import ExploreTools from './components/ExploreTools';
import LoginModal from './components/LoginModal';

const App: React.FC = () => {
  const [page, setPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setLoginModalOpen(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/[0.1] [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      <div className="relative z-10">
        <Header 
          onNavigate={setPage} 
          isAuthenticated={isAuthenticated} 
          onLogout={handleLogout}
          onOpenLogin={() => setLoginModalOpen(true)} 
        />
        <main>
          {page === 'home' ? (
            <>
              <Hero onNavigate={() => setPage('tools')} />
              <ToolGrid />
            </>
          ) : (
            <ExploreTools />
          )}
        </main>
        <Footer />
      </div>
      {isLoginModalOpen && (
        <LoginModal 
          onClose={() => setLoginModalOpen(false)} 
          onLogin={handleLogin} 
        />
      )}
    </div>
  );
};

export default App;
