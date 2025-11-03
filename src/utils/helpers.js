// ユニークIDを生成
export const generateId = () => Math.random().toString(36).substr(2, 9);

// 日時を相対表示にフォーマット
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'たった今';
  if (diffMins < 60) return `${diffMins}分前`;
  if (diffHours < 24) return `${diffHours}時間前`;
  if (diffDays < 7) return `${diffDays}日前`;
  
  return `${date.getMonth() + 1}/${date.getDate()}`;
};

// 所要時間に応じた色を取得
export const getDurationColor = (duration) => {
  if (duration <= 5) return 'bg-green-100 text-green-700 border-green-200';
  if (duration <= 10) return 'bg-blue-100 text-blue-700 border-blue-200';
  if (duration <= 15) return 'bg-yellow-100 text-yellow-700 border-yellow-200';
  if (duration <= 20) return 'bg-orange-100 text-orange-700 border-orange-200';
  return 'bg-red-100 text-red-700 border-red-200';
};