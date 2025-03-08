
import React from 'react';
import SecretInput from './ui/secret-input';

const ConfigPanel = ({ 
  configValues, 
  isSaved, 
  handleInputChange, 
  handleCheckWebhook, 
  handleSaveConfig 
}) => {
  return (
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
  );
};

export default ConfigPanel;
