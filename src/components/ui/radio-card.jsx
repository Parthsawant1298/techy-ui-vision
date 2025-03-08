
import React from 'react';
import { cn } from '@/lib/utils';

const RadioCard = ({ 
  id, 
  checked, 
  onChange, 
  label, 
  className, 
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "relative flex items-center w-full cursor-pointer",
        className
      )}
    >
      <input
        type="radio"
        id={id}
        checked={checked}
        onChange={onChange}
        className="peer absolute opacity-0 h-0 w-0"
        {...props}
      />
      <label 
        htmlFor={id} 
        className={cn(
          "flex items-center w-full px-4 py-3 bg-tech-panel/50 backdrop-blur-md rounded-md border border-white/5",
          "transition-all duration-300 ease-in-out",
          "peer-checked:glass-panel peer-checked:border-tech-blue/50",
          "hover:bg-tech-panel/80"
        )}
      >
        <div className="mr-4 flex-shrink-0 h-5 w-5 rounded-full border-2 border-white/30 flex items-center justify-center">
          <div className={cn(
            "h-2.5 w-2.5 rounded-full bg-tech-blue transform scale-0 transition-transform",
            checked ? "scale-100" : ""
          )}></div>
        </div>
        <span className="text-white">{label}</span>
      </label>
    </div>
  );
};

export default RadioCard;
