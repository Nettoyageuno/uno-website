import { ServiceSchema } from './types';

export const SERVICE_SCHEMAS: Record<string, ServiceSchema> = {
  'office': {
    name: 'Office & Corporate Cleaning',
    slug: 'office',
    defaultFrequency: 'weekly',
    fields: [
      {
        key: 'floors',
        type: 'counter',
        label: 'Number of floors',
        help: 'How many floors need cleaning?',
        min: 1,
        max: 50,
        defaultValue: 1
      },
      {
        key: 'restrooms',
        type: 'counter',
        label: 'Number of restrooms',
        help: 'Include all washrooms and powder rooms',
        min: 1,
        max: 20,
        defaultValue: 2
      },
      {
        key: 'schedule',
        type: 'select',
        label: 'Preferred cleaning time',
        required: true,
        options: [
          { value: 'day', label: 'During business hours' },
          { value: 'evening', label: 'After hours (evenings)' },
          { value: 'overnight', label: 'Overnight' }
        ],
        defaultValue: 'evening'
      },
      {
        key: 'services',
        type: 'multiselect',
        label: 'Services needed',
        options: [
          { value: 'kitchen', label: 'Kitchen/breakroom service' },
          { value: 'meetings', label: 'Meeting rooms' },
          { value: 'waste', label: 'Waste & recycling' },
          { value: 'supplies', label: 'Supply restocking' }
        ],
        defaultValue: ['waste']
      },
      {
        key: 'access',
        type: 'textarea',
        label: 'Building access/notes',
        help: 'Security procedures, key access, parking, etc.'
      }
    ]
  },

  'building': {
    name: 'Building & Condo Common Areas',
    slug: 'building',
    defaultFrequency: 'weekly',
    fields: [
      {
        key: 'elevators',
        type: 'counter',
        label: 'Number of elevators',
        min: 0,
        max: 10,
        defaultValue: 1
      },
      {
        key: 'lobbies',
        type: 'counter',
        label: 'Number of lobbies',
        min: 1,
        max: 5,
        defaultValue: 1
      },
      {
        key: 'stairwells',
        type: 'counter',
        label: 'Number of stairwells',
        min: 1,
        max: 10,
        defaultValue: 2
      },
      {
        key: 'units',
        type: 'number',
        label: 'Units in building',
        help: 'Total residential/commercial units (optional)',
        min: 1,
        step: 1
      },
      {
        key: 'quietHours',
        type: 'textarea',
        label: 'Quiet hours / condo rules',
        help: 'Any building-specific restrictions or requirements'
      }
    ]
  },

  'warehouse': {
    name: 'Warehouse & Industrial Cleaning',
    slug: 'warehouse',
    defaultFrequency: 'weekly',
    fields: [
      {
        key: 'squareFeet',
        type: 'number',
        label: 'Square feet',
        help: 'Approximate total area to be cleaned',
        required: true,
        min: 1000,
        step: 1000,
        defaultValue: 10000
      },
      {
        key: 'dockDoors',
        type: 'counter',
        label: 'Dock doors',
        min: 0,
        max: 50,
        defaultValue: 2
      },
      {
        key: 'productionZones',
        type: 'counter',
        label: 'Production zones',
        min: 0,
        max: 20,
        defaultValue: 1
      },
      {
        key: 'shifts',
        type: 'select',
        label: 'Shift schedule',
        required: true,
        options: [
          { value: '1', label: '1 shift (day only)' },
          { value: '2', label: '2 shifts (day + evening)' },
          { value: '3', label: '3 shifts (24/7 operation)' }
        ],
        defaultValue: '1'
      },
      {
        key: 'specialAreas',
        type: 'multiselect',
        label: 'Special areas',
        options: [
          { value: 'highDust', label: 'High-dust zones' },
          { value: 'forklift', label: 'Forklift lanes' },
          { value: 'spill', label: 'Spill stations' }
        ]
      },
      {
        key: 'safety',
        type: 'textarea',
        label: 'Safety/induction requirements',
        help: 'PPE requirements, safety training, site-specific protocols'
      }
    ]
  },

  'postconstruction': {
    name: 'Post-Construction Cleaning',
    slug: 'postconstruction',
    defaultFrequency: 'one-time',
    fields: [
      {
        key: 'constructionActive',
        type: 'toggle',
        label: 'Construction still on-site',
        help: 'Are contractors still working on the project?',
        defaultValue: false
      },
      {
        key: 'phases',
        type: 'multiselect',
        label: 'Cleaning phases needed',
        required: true,
        options: [
          { value: 'rough', label: 'Rough clean' },
          { value: 'detail', label: 'Detail clean' },
          { value: 'final', label: 'Final turnover' }
        ],
        defaultValue: ['detail', 'final']
      },
      {
        key: 'extras',
        type: 'multiselect',
        label: 'Additional services',
        options: [
          { value: 'windows', label: 'Window tracks' },
          { value: 'cabinets', label: 'Inside cabinets' },
          { value: 'fixtures', label: 'Fixture polish' }
        ]
      },
      {
        key: 'handover',
        type: 'textarea',
        label: 'GC/PM contact + handover date',
        help: 'General contractor contact info and target completion date'
      }
    ]
  },

  'addons': {
    name: 'Specialized Add-Ons',
    slug: 'addons',
    fields: [
      {
        key: 'services',
        type: 'multiselect',
        label: 'Services needed',
        required: true,
        options: [
          { value: 'carpet', label: 'Carpet cleaning' },
          { value: 'windows', label: 'Window cleaning' },
          { value: 'floors', label: 'Floor waxing' },
          { value: 'pressure', label: 'Pressure washing' },
          { value: 'graffiti', label: 'Graffiti removal' },
          { value: 'odor', label: 'Odor treatment' }
        ]
      },
      {
        key: 'areas',
        type: 'textarea',
        label: 'Areas to target',
        help: 'Describe specific areas or items that need attention'
      }
    ]
  },

  'pressure': {
    name: 'Pressure Washing',
    slug: 'pressure',
    defaultFrequency: 'annual',
    fields: [
      {
        key: 'surfaces',
        type: 'multiselect',
        label: 'Surfaces to clean',
        required: true,
        options: [
          { value: 'pavers', label: 'Pavers' },
          { value: 'facades', label: 'Building façades' },
          { value: 'parking', label: 'Parking areas' },
          { value: 'loading', label: 'Loading bays' }
        ]
      },
      {
        key: 'zones',
        type: 'counter',
        label: 'Total areas/spots',
        help: 'Number of distinct zones to be cleaned',
        min: 1,
        max: 50,
        defaultValue: 1
      },
      {
        key: 'waterAccess',
        type: 'select',
        label: 'Water access available?',
        required: true,
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'unknown', label: 'Unknown' }
        ],
        defaultValue: 'unknown'
      },
      {
        key: 'surfaceNotes',
        type: 'textarea',
        label: 'Surface type / sealing',
        help: 'Material details, existing sealers, special considerations'
      }
    ]
  },

  'ductvents': {
    name: 'Duct & Ventilation Cleaning',
    slug: 'ductvents',
    defaultFrequency: 'annual',
    fields: [
      {
        key: 'systems',
        type: 'counter',
        label: 'Number of HVAC systems (AHU/RTU)',
        help: 'Count AHUs/RTUs to be cleaned',
        required: true,
        min: 1,
        max: 20,
        defaultValue: 1
      },
      {
        key: 'floors',
        type: 'number',
        label: 'Floors served',
        help: 'Number of floors served by HVAC systems',
        min: 1,
        step: 1
      },
      {
        key: 'lastCleaned',
        type: 'select',
        label: 'Last time ducts were cleaned',
        options: [
          { value: 'unknown', label: 'Unknown' },
          { value: '<3m', label: '<3 months' },
          { value: '3-12m', label: '3–12 months' },
          { value: '1-2y', label: '1–2 years' },
          { value: '2+y', label: '2+ years' }
        ],
        defaultValue: 'unknown'
      },
      {
        key: 'postConstruction',
        type: 'toggle',
        label: 'Post-construction or renovation',
        help: 'Recent construction or renovation work?',
        defaultValue: false
      },
      {
        key: 'accessNotes',
        type: 'textarea',
        label: 'Access notes (windows/doors/loading)',
        help: 'Describe access requirements, loading dock availability, etc.'
      }
    ]
  }
};

export const getDefaultValues = (schema: ServiceSchema): Record<string, any> => {
  const defaults: Record<string, any> = {};
  
  schema.fields.forEach(field => {
    if (field.defaultValue !== undefined) {
      defaults[field.key] = field.defaultValue;
    } else {
      switch (field.type) {
        case 'counter':
          defaults[field.key] = field.min || 0;
          break;
        case 'number':
          defaults[field.key] = field.min || 0;
          break;
        case 'toggle':
          defaults[field.key] = false;
          break;
        case 'multiselect':
          defaults[field.key] = [];
          break;
        case 'select':
          defaults[field.key] = field.options?.[0]?.value || '';
          break;
        default:
          defaults[field.key] = '';
      }
    }
  });
  
  return defaults;
};