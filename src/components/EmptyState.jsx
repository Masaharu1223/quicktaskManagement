import React from 'react';
import { Clock } from 'lucide-react';

const EmptyState = () => {
  return (
    <div className="text-center py-16">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Clock size={40} className="text-gray-400" />
      </div>
      <h3 className="text-xl font-medium text-gray-700 mb-2">
        タスクがありません
      </h3>
      <p className="text-gray-500">
        新しいタスクを追加して始めましょう！
      </p>
    </div>
  );
};

export default EmptyState;