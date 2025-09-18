import type { Schedule } from '../components/forms/FrequencySelector';

const dayName: Record<string,string> = {
  mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat', sun: 'Sun'
};

export function humanizeSchedule(s: Schedule): string {
  switch (s.base) {
    case 'one-time': return 'One-time';
    case 'monthly': return 'Monthly';
    case 'quarterly': return 'Quarterly';
    case '3x/week': return `${s.timesPerWeek ?? 3}×/week`;
    case 'weekly': return s.days?.length ? `Weekly on ${s.days.map(d=>dayName[d]).join(', ')}` : 'Weekly';
    case 'nightly': return s.days?.length === 7 ? 'Nightly (7 days)' : 'Nightly (Mon–Fri)';
    case 'custom':
      return `${s.timesPerWeek ?? ''}×/week on ${s.days?.map(d=>dayName[d]).join(', ') || 'chosen days'}`;
    default: return 'Custom';
  }
}
export type { Schedule };