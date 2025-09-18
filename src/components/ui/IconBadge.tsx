import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

type Props={ icon:LucideIcon; label:string; color?: 'emerald'|'indigo'|'violet'|'amber'|'teal'|'blue' };
const map={
  emerald:'from-emerald-50 to-emerald-100 text-emerald-700 border-emerald-200',
  indigo:'from-indigo-50 to-indigo-100 text-indigo-700 border-indigo-200',
  violet:'from-violet-50 to-violet-100 text-violet-700 border-violet-200',
  amber:'from-amber-50 to-amber-100 text-amber-700 border-amber-200',
  teal:'from-teal-50 to-teal-100 text-teal-700 border-teal-200',
  blue:'from-blue-50 to-blue-100 text-blue-700 border-blue-200',
};
export default function IconBadge({icon:Icon,label,color='emerald'}:Props){
  return (
    <span className={`inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm font-medium bg-gradient-to-br border ${map[color]}`}>
      <Icon className="h-4 w-4" aria-hidden/>{label}
    </span>
  );
}