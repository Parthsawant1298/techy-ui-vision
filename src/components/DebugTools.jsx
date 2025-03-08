
import React from 'react';

const DebugTools = ({ isDebugOpen, setIsDebugOpen }) => {
  return (
    <div className="glass-panel rounded-md mt-6 overflow-hidden">
      <button 
        onClick={() => setIsDebugOpen(!isDebugOpen)}
        className="flex items-center justify-between w-full px-5 py-4 text-white"
      >
        <span className="font-medium">Debugging Tools</span>
        <ChevronIcon className={`w-5 h-5 transition-transform ${isDebugOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isDebugOpen && (
        <div className="px-5 py-4 border-t border-white/5 bg-black/20">
          <p className="text-white/70">Advanced debugging tools will appear here.</p>
        </div>
      )}
    </div>
  );
};

const ChevronIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default DebugTools;
