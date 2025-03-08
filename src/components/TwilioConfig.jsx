
import React, { useState } from 'react';
import SecretInput from './ui/secret-input';
import RadioCard from './ui/radio-card';
import { toast } from '@/components/ui/sonner';

const TwilioConfig = () => {
  const [configValues, setConfigValues] = useState({
    accountSid: '',
    authToken: '',
    phoneNumber: '',
    webhookUrl: '',
    callMode: 'direct', // 'direct' or 'forwarding'
    customerPhone: ''
  });
  
  const [isSaved, setIsSaved] = useState(false);
  const [transcriptAvailable, setTranscriptAvailable] = useState(false);
  const [isDebugOpen, setIsDebugOpen] = useState(false);

  const handleInputChange = (field, value) => {
    setConfigValues({
      ...configValues,
      [field]: value
    });
    if (isSaved) setIsSaved(false);
  };

  const handleRadioChange = (mode) => {
    setConfigValues({
      ...configValues,
      callMode: mode
    });
    if (isSaved) setIsSaved(false);
  };

  const handleSaveConfig = () => {
    // Simulate saving
    setTimeout(() => {
      setIsSaved(true);
      toast.success('Configuration saved successfully!');
    }, 500);
  };

  const handleCheckWebhook = () => {
    // Simulate webhook check
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1500)), 
      {
        loading: 'Checking webhook connection...',
        success: 'Webhook connection verified!',
        error: 'Failed to verify webhook.',
      }
    );
  };

  const handleMakeCall = () => {
    if (!configValues.customerPhone) {
      toast.error('Please enter a customer phone number');
      return;
    }
    
    // Simulate call initiation
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          setTranscriptAvailable(true);
          resolve();
        }, 2000);
      }),
      {
        loading: 'Initiating call...',
        success: 'Call connected!',
        error: 'Failed to connect call.',
      }
    );
  };

  return (
    <div className="flex w-full min-h-screen">
      {/* Left Sidebar */}
      <div className="w-[360px] bg-tech-dark p-8 flex flex-col border-r border-white/5">
        <h1 className="text-2xl font-bold text-gradient-blue mb-8">Twilio Configuration</h1>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm text-white/70">Twilio Account SID</label>
            <SecretInput 
              value={configValues.accountSid}
              onChange={(e) => handleInputChange('accountSid', e.target.value)}
              placeholder="Enter your Twilio Account SID"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-white/70">Twilio Auth Token</label>
            <SecretInput 
              value={configValues.authToken}
              onChange={(e) => handleInputChange('authToken', e.target.value)}
              placeholder="Enter your Twilio Auth Token"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-white/70">Twilio Phone Number</label>
            <input
              type="text" 
              value={configValues.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              placeholder="+15096613341" 
              className="w-full rounded-md bg-tech-panel/50 backdrop-blur-sm px-4 py-2 text-white border border-white/5 transition focus:outline-none focus:ring-1 focus:ring-tech-blue/50"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-white/70">Webhook URL</label>
            <input 
              type="text" 
              value={configValues.webhookUrl}
              onChange={(e) => handleInputChange('webhookUrl', e.target.value)}
              placeholder="https://your-webhook-url.com" 
              className="w-full rounded-md bg-tech-panel/50 backdrop-blur-sm px-4 py-2 text-white border border-white/5 transition focus:outline-none focus:ring-1 focus:ring-tech-blue/50"
            />
          </div>
          
          <button 
            onClick={handleCheckWebhook}
            className="w-full py-2 rounded-md glass-panel text-white hover:bg-white/10 transition-colors"
          >
            Check Webhook Connection
          </button>
          
          <button 
            onClick={handleSaveConfig}
            className="w-full py-2.5 px-4 rounded-md tech-gradient text-white font-medium hover:opacity-90 transition-opacity"
          >
            Save Twilio Configuration
          </button>

          {isSaved && (
            <div className="py-3 px-4 rounded-md bg-tech-success/10 border border-tech-success/20 text-tech-success animate-fade-in">
              Configuration saved!
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
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
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gradient-blue mb-6">Conversation Transcript</h2>
            
            <div className="glass-panel p-6 rounded-md min-h-[160px] flex items-center justify-center">
              {transcriptAvailable ? (
                <div className="space-y-4 w-full animate-fade-in">
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 rounded-full bg-tech-blue/20 flex items-center justify-center text-tech-blue">A</div>
                    <div className="glass-panel px-4 py-2 rounded-lg">
                      <p className="text-white/90">Hello, how can I help you today?</p>
                    </div>
                  </div>
                  <div className="flex space-x-3 justify-end">
                    <div className="glass-panel px-4 py-2 rounded-lg bg-tech-blue/10">
                      <p className="text-white/90">I need information about my recent order.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-tech-purple/20 flex items-center justify-center text-tech-purple">C</div>
                  </div>
                </div>
              ) : (
                <p className="text-white/60">No transcript available yet. Start a call to begin recording.</p>
              )}
            </div>
          </div>
        </div>
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

const PhoneIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ChevronIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default TwilioConfig;
