import React from 'react';
import { Check } from 'lucide-react';

const TaskCheckbox = ({ isCompleting, onClick, isCompleted = false }) => {
  const baseStyles = "mt-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all";
  
  if (isCompleted) {
    return (
      <div className={`${baseStyles} bg-green-500`}>
        <Check size={16} className="text-white" />
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50`}
      aria-label="完了にする"
    >
      {isCompleting && <Check size={16} className="text-blue-500" />}
    </button>
  );
};

export default TaskCheckbox;