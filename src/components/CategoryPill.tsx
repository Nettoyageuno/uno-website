import React from 'react';

interface CategoryPillProps {
  label: string;
  icon?: React.ReactNode;
  color?: 'emerald' | 'blue' | 'indigo' | 'violet' | 'amber' | 'teal' | 'rose' | 'gray';
  className?: string;
}

const CategoryPill: React.FC<CategoryPillProps> = ({ 
  label, 
  icon, 
  color = 'gray', 
  className = '' 
}) => {
  const colorClasses = {
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    violet: 'bg-violet-50 text-violet-700 border-violet-200',
    amber: 'bg-amber-50 text-amber-800 border-amber-200',
    teal: 'bg-teal-50 text-teal-700 border-teal-200',
    rose: 'bg-rose-50 text-rose-700 border-rose-200',
    gray: 'bg-gray-50 text-gray-700 border-gray-200'
  };

  return (
    <span 
      className={`
        rounded-full px-3 py-1 text-sm font-medium inline-flex items-center gap-1 border
        ${colorClasses[color]}
        focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900
        ${className}
      `}
      role={icon && !label ? "img" : undefined}
      aria-label={icon && !label ? `${color} category` : undefined}
    >
      {icon}
      {label}
    </span>
  );
};

export default CategoryPill;