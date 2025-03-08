
import React from 'react';
import useConfigState from '../hooks/useConfigState';
import ConfigPanel from './ConfigPanel';
import HeaderActions from './HeaderActions';
import CallPanel from './CallPanel';
import DebugTools from './DebugTools';
import TranscriptPanel from './TranscriptPanel';

const TwilioConfig = () => {
  const {
    configValues,
    isSaved,
    transcriptAvailable,
    isDebugOpen,
    setIsDebugOpen,
    handleInputChange,
    handleRadioChange,
    handleSaveConfig,
    handleCheckWebhook,
    handleMakeCall
  } = useConfigState();

  return (
    <div className="flex w-full min-h-screen">
      {/* Left Sidebar */}
      <ConfigPanel 
        configValues={configValues}
        isSaved={isSaved}
        handleInputChange={handleInputChange}
        handleCheckWebhook={handleCheckWebhook}
        handleSaveConfig={handleSaveConfig}
      />
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <HeaderActions />
        
        <CallPanel 
          configValues={configValues}
          handleRadioChange={handleRadioChange}
          handleInputChange={handleInputChange}
          handleMakeCall={handleMakeCall}
        />
        
        <DebugTools 
          isDebugOpen={isDebugOpen}
          setIsDebugOpen={setIsDebugOpen}
        />
        
        <TranscriptPanel 
          transcriptAvailable={transcriptAvailable}
        />
      </div>
    </div>
  );
};

export default TwilioConfig;
