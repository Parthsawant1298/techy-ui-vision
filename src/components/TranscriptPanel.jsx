
import React from 'react';

const TranscriptPanel = ({ transcriptAvailable }) => {
  return (
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
  );
};

export default TranscriptPanel;
