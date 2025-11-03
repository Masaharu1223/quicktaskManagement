import React from 'react';
import { Clock } from 'lucide-react';
import { getDurationColor } from '../../utils/helpers';

const TaskBadge = ({ duration, opacity = false }) => {
  const colorClass = getDurationColor(duration);
  const opacityClass = opacity ? 'opacity-60' : '';
  
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${colorClass} ${opacityClass}`}>
      <Clock size={12} />
      {duration}分
    </span>
  );
};

export default TaskBadge;