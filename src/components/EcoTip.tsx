import React from 'react';
import { Leaf } from 'lucide-react';

interface EcoTipProps {
  title?: string;
  children: React.ReactNode;
}

const EcoTip: React.FC<EcoTipProps> = ({ title = "Eco Tip", children }) => {
  return (
    <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 flex gap-3 my-6">
      <div className="flex-shrink-0">
        <Leaf className="w-5 h-5 text-emerald-700" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-emerald-900 mb-2">{title}</h4>
        <div className="text-emerald-800 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default EcoTip;