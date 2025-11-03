import React from 'react';
import TaskCheckbox from './TaskCheckbox';
import TaskContent from './TaskContent';

const CompletedTask = ({ task }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-start gap-3">
        <TaskCheckbox isCompleted={true} />
        <TaskContent
          title={task.title}
          duration={task.duration}
          createdAt={task.completedAt}
          isCompleted={true}
        />
      </div>
    </div>
  );
};

export default CompletedTask;