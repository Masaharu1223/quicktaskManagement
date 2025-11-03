import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';
import TaskForm from './components/Form/TaskForm';
import EmptyState from './components/EmptyState';
import { generateId } from './utils/helpers';

// 残りのコードは同じ
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('quicktask-data');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setTasks(data.tasks || []);
      } catch (e) {
        console.error('データの読み込みに失敗しました', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quicktask-data', JSON.stringify({ tasks }));
  }, [tasks]);

  const addTask = (taskData) => {
    const newTask = {
      id: generateId(),
      title: taskData.title,
      duration: taskData.duration,
      isCompleted: false,
      createdAt: new Date().toISOString(),
      completedAt: null,
      updatedAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              isCompleted: true,
              completedAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (!showCompleted && task.isCompleted) return false;
    if (activeFilter === 'all') return true;
    return task.duration <= activeFilter;
  });

  const todayCompleted = tasks.filter(
    (t) =>
      t.isCompleted &&
      new Date(t.completedAt).toDateString() === new Date().toDateString()
  ).length;

  const hasIncompleteTasks = filteredTasks.some((t) => !t.isCompleted);
  const hasCompletedTasks = showCompleted && filteredTasks.some((t) => t.isCompleted);
  const isEmpty = !hasIncompleteTasks && !hasCompletedTasks;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Header todayCompleted={todayCompleted} />

        <div className="mb-6">
          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            showCompleted={showCompleted}
            onToggleCompleted={() => setShowCompleted(!showCompleted)}
          />
        </div>

        {isEmpty ? (
          <EmptyState />
        ) : (
          <TaskList
            tasks={filteredTasks}
            onComplete={completeTask}
            showCompleted={showCompleted}
          />
        )}

        <button
          onClick={() => setShowForm(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center group"
          aria-label="タスクを追加"
        >
          <Plus size={28} className="group-hover:rotate-90 transition-transform" />
        </button>

        {showForm && (
          <TaskForm onClose={() => setShowForm(false)} onSubmit={addTask} />
        )}
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;