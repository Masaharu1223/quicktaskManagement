import React, { useState } from 'react';
import TaskCheckbox from './TaskCheckbox';
import TaskContent from './TaskContent';

const TaskItem = ({ task, onComplete }) => {
  const [isCompleting, setIsCompleting] = useState(false);

  const handleComplete = () => {
    setIsCompleting(true);
    setTimeout(() => onComplete(task.id), 500);
  };

  const cardClass = `bg-white rounded-xl p-4 shadow-sm border border-gray-100 transition-all duration-500 ${
    isCompleting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
  }`;

  return (
    <div className={cardClass}>
      <div className="flex items-start gap-3">
        <TaskCheckbox isCompleting={isCompleting} onClick={handleComplete} />
        <TaskContent
          title={task.title}
          duration={task.duration}
          createdAt={task.createdAt}
        />
      </div>
    </div>
  );
};

export default TaskItem;