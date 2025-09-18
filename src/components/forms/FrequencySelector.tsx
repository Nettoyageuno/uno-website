import React, { useMemo, useState } from 'react';

export type Day = 'mon'|'tue'|'wed'|'thu'|'fri'|'sat'|'sun';
export type Base =
  | 'one-time'
  | 'weekly'
  | '3x/week'
  | 'nightly'
  | 'monthly'
  | 'quarterly'
  | 'custom';

export type Schedule = {
  base: Base;
  days?: Day[];          // for weekly/custom/nightly
  timesPerWeek?: number; // for 3x/week or custom
};

const dayOrder: Day[] = ['mon','tue','wed','thu','fri','sat','sun'];
const dayLabel: Record<Day,string> = { mon:'Mon', tue:'Tue', wed:'Wed', thu:'Thu', fri:'Fri', sat:'Sat', sun:'Sun' };

type Props = {
  value: Schedule | null;
  onChange: (s: Schedule) => void;
};

const FrequencySelector: React.FC<Props> = ({ value, onChange }) => {
  const [base, setBase] = useState<Base>(value?.base ?? 'one-time');
  const [days, setDays] = useState<Day[]>(value?.days ?? []);
  const [tpw, setTpw] = useState<number>(value?.timesPerWeek ?? 3);

  const update = (b=base, d=days, t=tpw) => onChange({ base: b, days: d, timesPerWeek: t });

  const handleBase = (b: Base) => {
    setBase(b);
    if (b === 'nightly') {
      const d: Day[] = ['mon','tue','wed','thu','fri'];
      setDays(d); update(b, d, 5);
    } else if (b === 'one-time' || b === 'monthly' || b === 'quarterly') {
      setDays([]); update(b, [], undefined as any);
    } else if (b === '3x/week') {
      setDays([]); setTpw(3); update(b, [], 3);
    } else {
      update(b);
    }
  };

  const toggleDay = (d: Day) => {
    const set = new Set(days);
    set.has(d) ? set.delete(d) : set.add(d);
    const next = Array.from(set).sort((a,b)=>dayOrder.indexOf(a)-dayOrder.indexOf(b));
    setDays(next); update(base, next, tpw);
  };

  const showDays = base === 'weekly' || base === 'custom' || base === 'nightly';
  const showTpw  = base === '3x/week' || base === 'custom';

  return (
    <div className="space-y-3">
      <select
        className="border rounded-lg px-3 py-2 w-full md:w-auto"
        value={base}
        onChange={(e)=>handleBase(e.target.value as Base)}
      >
        <option value="one-time">One-time</option>
        <option value="weekly">Weekly</option>
        <option value="3x/week">3× / week</option>
        <option value="nightly">Nightly (Mon–Fri)</option>
        <option value="monthly">Monthly</option>
        <option value="quarterly">Quarterly</option>
        <option value="custom">Custom</option>
      </select>

      {showTpw && (
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-700">Times per week</label>
          <input
            type="number"
            min={1}
            max={7}
            className="border rounded-lg px-3 py-1 w-24"
            value={tpw}
            onChange={(e)=>{ const n = Number(e.target.value||1); setTpw(n); update(base, days, n); }}
          />
        </div>
      )}

      {showDays && (
        <div className="flex flex-wrap gap-2">
          {dayOrder.map((d)=>(
            <button
              key={d}
              type="button"
              onClick={()=>toggleDay(d)}
              className={`px-3 py-1 rounded-lg border ${days.includes(d) ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-gray-700 border-gray-300'}`}
              aria-pressed={days.includes(d)}
            >
              {dayLabel[d]}
            </button>
          ))}
          {base === 'nightly' && (
            <button
              type="button"
              onClick={()=>{ const all: Day[] = ['mon','tue','wed','thu','fri','sat','sun']; setDays(all); update('nightly', all, 7); }}
              className="px-3 py-1 rounded-lg border bg-white text-gray-700 border-gray-300"
            >
              Set to 7 days
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FrequencySelector;
export type { Schedule as FrequencySchedule };