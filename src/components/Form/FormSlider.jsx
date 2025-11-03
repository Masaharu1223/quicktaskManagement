import React from 'react';

const FormSlider = ({ value, onChange, min = 1, max = 30 }) => {
  return (
    <div>
      <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
        所要時間: {value}分
      </label>
      <input
        id="duration"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{min}分</span>
        <span>15分</span>
        <span>{max}分</span>
      </div>
    </div>
  );
};

export default FormSlider;