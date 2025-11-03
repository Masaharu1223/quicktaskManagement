import React from 'react';
import { Filter } from 'lucide-react';

const FilterBar = ({ activeFilter, onFilterChange, showCompleted, onToggleCompleted }) => {
  const filters = [
    { label: '全て', value: 'all' },
    { label: '5分以内', value: 5 },
    { label: '10分以内', value: 10 },
    { label: '15分以内', value: 15 },
    { label: '20分以内', value: 20 },
    { label: '30分以内', value: 30 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-4">
      <div className="flex items-center gap-2">
        <Filter size={18} className="text-gray-600" />
        <h3 className="font-medium text-gray-700">フィルター</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeFilter === filter.value
                ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="pt-2 border-t border-gray-100">
        <button
          onClick={onToggleCompleted}
          className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            showCompleted
              ? 'bg-green-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {showCompleted ? '未完了のみ表示' : '完了済みも表示'}
        </button>
      </div>
    </div>
  );
};

export default FilterBar;