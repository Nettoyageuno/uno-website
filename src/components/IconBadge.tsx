import React from 'react';

interface IconBadgeProps {
  icon: React.ComponentType<{ className?: string }>;
  color: 'emerald' | 'blue' | 'indigo' | 'violet' | 'amber' | 'teal' | 'rose' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  dark?: boolean;
  className?: string;
  ariaLabel?: string;
}

const IconBadge: React.FC<IconBadgeProps> = ({ 
  icon: Icon, 
  color, 
  size = 'md', 
  dark = false, 
  className = '',
  ariaLabel 
}) => {
  // Size configurations
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12', 
    lg: 'w-14 h-14'
  };

  const iconSizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  // Color configurations for light backgrounds
  const lightColorClasses = {
    emerald: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    indigo: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    violet: 'bg-violet-100 text-violet-700 border-violet-200',
    amber: 'bg-amber-100 text-amber-700 border-amber-200',
    teal: 'bg-teal-100 text-teal-700 border-teal-200',
    rose: 'bg-rose-100 text-rose-700 border-rose-200',
    gray: 'bg-gray-100 text-gray-700 border-gray-200'
  };

  // Color configurations for dark backgrounds
  const darkColorClasses = {
    emerald: 'bg-emerald-900/30 text-emerald-200 border-emerald-800',
    blue: 'bg-blue-900/30 text-blue-200 border-blue-800',
    indigo: 'bg-indigo-900/30 text-indigo-200 border-indigo-800',
    violet: 'bg-violet-900/30 text-violet-200 border-violet-800',
    amber: 'bg-amber-900/30 text-amber-200 border-amber-800',
    teal: 'bg-teal-900/30 text-teal-200 border-teal-800',
    rose: 'bg-rose-900/30 text-rose-200 border-rose-800',
    gray: 'bg-gray-900/30 text-gray-200 border-gray-800'
  };

  const colorClasses = dark ? darkColorClasses[color] : lightColorClasses[color];

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        ${colorClasses} 
        rounded-lg 
        border 
        flex 
        items-center 
        justify-center 
        ${className}
      `}
      role={ariaLabel ? undefined : "img"}
      aria-hidden={ariaLabel ? undefined : "true"}
    >
      <Icon className={iconSizeClasses[size]} aria-hidden="true" />
      {ariaLabel && <span className="sr-only">{ariaLabel}</span>}
    </div>
  );
};

export default IconBadge;