import React from 'react';
import { CheckCircle2 } from 'lucide-react';

type Props = { items: Array<string | {text:string}>; cols?: 1|2|3; className?: string };
export default function ChecklistGrid({ items, cols=2, className }: Props){
  const grid = cols===1 ? 'grid-cols-1' : cols===3 ? 'md:grid-cols-3 grid-cols-1' : 'md:grid-cols-2 grid-cols-1';
  return (
    <ul className={`grid ${grid} gap-x-6 gap-y-3 ${className||''}`}>
      {items.map((it, i)=>(
        <li key={i} className="flex items-start">
          <CheckCircle2 className="mt-0.5 mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" aria-hidden />
          <span className="text-gray-700 leading-relaxed">{typeof it==='string' ? it : it.text}</span>
        </li>
      ))}
    </ul>
  );
}