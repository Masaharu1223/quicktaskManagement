import React from 'react';

const FormInput = ({ value, onChange, onKeyPress, error, maxLength = 100 }) => {
  return (
    <div>
      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
        タスク名 <span className="text-red-500">*</span>
      </label>
      <input
        id="title"
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        placeholder="例: 英単語10個覚える"
        maxLength={maxLength}
        autoFocus
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <p className="mt-1 text-xs text-gray-500">{value.length}/{maxLength}文字</p>
    </div>
  );
};

export default FormInput;