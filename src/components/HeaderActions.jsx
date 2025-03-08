
import React from 'react';

const HeaderActions = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-tech-danger animate-pulse-glow"></div>
        <div className="w-3 h-3 rounded-full bg-tech-warning animate-pulse-glow" style={{ animationDelay: "0.5s" }}></div>
        <div className="w-3 h-3 rounded-full bg-tech-success animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="flex items-center space-x-4">
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

export default HeaderActions;
