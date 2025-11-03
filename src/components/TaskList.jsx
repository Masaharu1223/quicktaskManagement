import React from 'react';
import TaskItem from './Task/TaskItem';
import CompletedTask from './Task/CompletedTask';

const TaskList = ({ tasks, onComplete, showCompleted }) => {
  const incompleteTasks = tasks.filter((t) => !t.isCompleted);
  const completedTasks = tasks.filter((t) => t.isCompleted);

  return (
    <div className="space-y-6">
      {incompleteTasks.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            未完了のタスク ({incompleteTasks.length})
          </h2>
          <div className="space-y-3">
            {incompleteTasks.map((task) => (
              <TaskItem key={task.id} task={task} onComplete={onComplete} />
            ))}
          </div>
        </section>
      )}

      {showCompleted && completedTasks.length > 0 && (
        <section className="opacity-60">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            完了済み ({completedTasks.length})
          </h2>
          <div className="space-y-3">
            {completedTasks.map((task) => (
              <CompletedTask key={task.id} task={task} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default TaskList;