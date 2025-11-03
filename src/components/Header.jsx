import React, { useState } from 'react';
import { Check } from 'lucide-react';


const comments = [
    "１個だけでも達成して昨日の自分よりも進化しよう",
    "１個できればもっといけるはずさ",
    "３つもできたら昨日の自分よりも一皮剥けたぞ",
    "すごい頑張るな...!! 休憩も適度に取ってな"
]



const Header = ({ todayCompleted }) => {
  const [comment, setComment] = useState("短時間で達成、小さな積み重ね");
  
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">QuickTask</h1>
      <p className="text-gray-600">{comment}</p>
      <div className="mt-4 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
        <Check size={16} className="text-green-500" />
        <span className="text-sm font-medium text-gray-700">
          今日の完了: {todayCompleted}件
        </span>
      </div>
    </header>
  );
};

export default Header;