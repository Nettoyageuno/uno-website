import React from 'react';
import type { LucideIcon } from 'lucide-react';

type IconType = LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface BenefitItem {
  icon: IconType;
  title: string;
  description: string;
}

interface BenefitsGridProps {
  id: string;        // e.g., "benefits-office"
  title: string;     // e.g., "Benefits of Office Cleaning"
  items: BenefitItem[];  // must be 4 items
  badges?: string[];     // optional chips under grid
}

const BenefitsGrid: React.FC<BenefitsGridProps> = ({ id, title, items, badges }) => {
  return (
    <section aria-labelledby={id} className="col-span-full">
      <h3 id={id} className="text-base font-semibold text-slate-900">{title}</h3>

      <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 auto-rows-fr">
          {items.map(({ icon: Icon, title, description }, i) => (
            <article
              key={i}
              className="h-full rounded-xl border border-emerald-100 bg-white/90 backdrop-blur p-5 shadow-sm"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                {Icon ? <Icon className="h-5 w-5" /> : null}
              </div>
              <h4 className="font-semibold text-slate-900">{title}</h4>
              <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>

        {badges && badges.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {badges.map((b, i) => (
              <span
                key={i}
                className="rounded-full bg-white text-emerald-700 border border-emerald-200 px-2.5 py-1 text-xs font-medium shadow-sm"
              >
                {b}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BenefitsGrid;