export type CategoryColor = 'emerald' | 'blue' | 'indigo' | 'violet' | 'amber' | 'teal' | 'gray';

export const getCategoryColor = (category: string): CategoryColor => {
  switch (category.toLowerCase()) {
    case 'sustainability': return 'emerald';
    case 'office':
    case 'cleaning tips': return 'blue';
    case 'warehouse':
    case 'operations': return 'indigo';
    case 'condo':
    case 'case studies': return 'violet';
    case 'post-construction':
    case 'industry updates': return 'amber';
    case 'add-ons':
    case 'specialized': return 'teal';
    default: return 'gray';
  }
};

export const getCategoryIcon = (category: string) => {
  if (category.toLowerCase() === 'sustainability') {
    return true; // Indicates should show leaf icon
  }
  return false;
};