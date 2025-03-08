
import { useState } from 'react';
import { toast } from 'sonner';

const useConfigState = () => {
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

  return {
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
  };
};

export default useConfigState;
