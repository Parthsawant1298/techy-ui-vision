
import React from 'react';
import { useTheme } from './ThemeProvider';

const HeaderActions = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-tech-danger animate-pulse-glow"></div>
        <div className="w-3 h-3 rounded-full bg-tech-warning animate-pulse-glow" style={{ animationDelay: "0.5s" }}></div>
        <div className="w-3 h-3 rounded-full bg-tech-success animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleTheme} 
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <SunIcon className="w-5 h-5" />
          ) : (
            <MoonIcon className="w-5 h-5" />
          )}
        </button>
        <button className="text-white/70 hover:text-white transition-colors">
          <InfoIcon className="w-5 h-5" />
        </button>
        <button className="py-1.5 px-4 rounded-md glass-panel text-white hover:bg-white/10 transition-colors">
          Deploy
        </button>
        <button className="text-white/70 hover:text-white transition-colors">
          <MoreIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// Simple icons
const InfoIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);

const MoreIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
);

const SunIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export default HeaderActions;
