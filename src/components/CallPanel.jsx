
import React from 'react';
import RadioCard from './ui/radio-card';

const CallPanel = ({ 
  configValues, 
  handleRadioChange, 
  handleInputChange, 
  handleMakeCall 
}) => {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-2">
        <div className="space-y-2">
          <RadioCard 
            id="direct-call" 
            checked={configValues.callMode === 'direct'} 
            onChange={() => handleRadioChange('direct')}
            label="Direct Call" 
          />
          
          <RadioCard 
            id="forwarding-call" 
            checked={configValues.callMode === 'forwarding'} 
            onChange={() => handleRadioChange('forwarding')}
            label="Call with Forwarding Option" 
          />
        </div>
      </div>
      
      <div className="space-y-2 mt-6">
        <label className="text-sm text-white/70">Customer Phone Number (with country code, e.g., +1234567890)</label>
        <input 
          type="text" 
          value={configValues.customerPhone}
          onChange={(e) => handleInputChange('customerPhone', e.target.value)}
          placeholder="+1234567890" 
          className="w-full rounded-md glass-panel px-4 py-3 text-white border border-white/5 transition focus:outline-none focus:ring-1 focus:ring-tech-blue/50 text-lg"
        />
      </div>
      
      <div className="glass-panel px-5 py-4 rounded-md mt-6 glow glow-blue">
        <p className="text-white/90">
          Mode: <span className="text-tech-blue font-medium">
            {configValues.callMode === 'direct' ? 'Direct call to customer' : 'Call with forwarding'}
          </span>
        </p>
      </div>
      
      <button 
        onClick={handleMakeCall}
        className="py-3 px-6 rounded-md tech-gradient text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
      >
        <PhoneIcon className="w-5 h-5" />
        <span>Make Call</span>
      </button>
    </div>
  );
};

// Simple phone icon
const PhoneIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default CallPanel;
