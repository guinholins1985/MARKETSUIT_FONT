
import React from 'react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'tools') => void;
  isAuthenticated: boolean;
  onLogout: () => void;
  onOpenLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, isAuthenticated, onLogout, onOpenLogin }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex-1">
          <nav>
            {isAuthenticated ? (
              <button 
                onClick={onLogout} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Sair
              </button>
            ) : (
              <button 
                onClick={onOpenLogin} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Login
              </button>
            )}
          </nav>
        </div>

        <div className="flex-1 flex justify-center">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Go to homepage"
          >
            <svg className="w-10 h-10 text-indigo-500 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.25278C12 6.25278 6.75 3 4.5 3C2.25 3 0.75 4.97056 0.75 7.5C0.75 11.25 6 15 12 21C18 15 23.25 11.25 23.25 7.5C23.25 4.97056 21.75 3 19.5 3C17.25 3 12 6.25278 12 6.25278Z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.25278V21" />
            </svg>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-slate-200 transition-colors">Market Suite</h1>
          </button>
        </div>

        <div className="flex-1 flex justify-end">
          <nav>
            <button
              onClick={() => onNavigate('tools')}
              className="hidden sm:inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Comece Agora
            </button>
          </nav>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
    </header>
  );
};

export default Header;
