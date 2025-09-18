import * as React from 'react';
import { Shield, Clock, Sparkles, Users, Briefcase, Zap, Building2, Boxes, Heart, Gauge, Filter, HardHat, Settings, Truck } from 'lucide-react';

type IconName = 'Users'|'Briefcase'|'Zap'|'Clock'|'Shield'|'Sparkles'|'Building2'|'Boxes'|'Heart'|'Gauge'|'Filter'|'HardHat'|'Settings'|'Truck';

type BenefitItem = {
  icon: IconName | string;
  title: string;
  body: string;
};

const iconMap = {
  Users, Briefcase, Zap, Clock, Shield, Sparkles, Building2, Boxes, Heart, Gauge, Filter, HardHat, Settings, Truck,
} as const;

type Props = {
  title: string;
  items: BenefitItem[];
  badges?: string[];
};

/**
 * Horizontal "Benefits of …" row:
 * - 1→2→4 responsive grid
 * - equal-height cards
 * - keeps site's SoftPanel + IconBadge styling
 */
const BenefitsRow: React.FC<Props> = ({ title, items, badges }) => {
  return (
    <section className="mt-10">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>

      <div className="rounded-2xl border border-emerald-100/60 bg-emerald-50/40 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => {
            const Icon =
              (iconMap as any)[it.icon] ??
              Shield; // fallback to Shield if name not in map
            return (
              <article key={i} className="h-full rounded-xl border border-emerald-100 bg-white/90 backdrop-blur p-4 shadow-sm">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-1">{it.title}</h4>
                <p className="text-sm text-slate-600 leading-6">{it.body}</p>
              </article>
            );
          })}
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

export default BenefitsRow;