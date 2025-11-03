import React from 'react';
import TaskBadge from './TaskBadge';
import { formatDate } from '../../utils/helpers';

const TaskContent = ({ title, duration, createdAt, isCompleted = false }) => {
  const titleClass = isCompleted 
    ? "text-base text-gray-500 line-through break-words" 
    : "text-base font-medium text-gray-800 break-words";
  
  const timeClass = isCompleted ? "text-xs text-gray-400" : "text-xs text-gray-500";

  return (
    <div className="flex-1 min-w-0">
      <h3 className={titleClass}>{title}</h3>
      <div className="flex items-center gap-2 mt-2 flex-wrap">
        <TaskBadge duration={duration} opacity={isCompleted} />
        <span className={timeClass}>
          {isCompleted ? `完了: ${formatDate(createdAt)}` : formatDate(createdAt)}
        </span>
      </div>
    </div>
  );
};

export default TaskContent;