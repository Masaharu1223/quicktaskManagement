import React, { useState } from 'react';
import FormModal from './FormModal';
import FormInput from './FormInput';
import FormSlider from './FormSlider';

const TaskForm = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState(15);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!title.trim()) {
      setError('タスク名を入力してください');
      return;
    }
    if (title.length > 100) {
      setError('タスク名は100文字以内で入力してください');
      return;
    }
    onSubmit({ title: title.trim(), duration });
    onClose();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <FormModal title="新しいタスク" onClose={onClose}>
      <div className="space-y-6">
        <FormInput
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError('');
          }}
          onKeyPress={handleKeyPress}
          error={error}
        />

        <FormSlider
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
        />

        <div className="flex gap-3 pt-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
          >
            キャンセル
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors font-medium shadow-lg shadow-blue-500/30"
          >
            作成
          </button>
        </div>
      </div>
    </FormModal>
  );
};

export default TaskForm;