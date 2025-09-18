import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

type Props={ icon:LucideIcon; children:React.ReactNode; color?: 'emerald'|'indigo'|'violet'|'amber'|'teal'|'blue' };

const map={
  emerald:'from-emerald-50 to-emerald-100 text-emerald-700',
  indigo:'from-indigo-50 to-indigo-100 text-indigo-700',
  violet:'from-violet-50 to-violet-100 text-violet-700',
  amber:'from-amber-50 to-amber-100 text-amber-700',
  teal:'from-teal-50 to-teal-100 text-teal-700',
  blue:'from-blue-50 to-blue-100 text-blue-700',
};

export default function ColorChip({icon:Icon,children,color='emerald'}:Props){
  return (
    <span className={`inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm font-medium bg-gradient-to-br ${map[color]}`}>
      <Icon className="h-4 w-4" aria-hidden/>{children}
    </span>
  );
}