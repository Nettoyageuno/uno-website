export type FieldType = 
  | 'checkbox' 
  | 'counter' 
  | 'number' 
  | 'select' 
  | 'multiselect' 
  | 'textarea' 
  | 'toggle' 
  | 'text' 
  | 'monthrange';

export interface Option {
  value: string;
  label: string;
}

export interface Field {
  key: string;
  type: FieldType;
  label: string;
  help?: string;
  required?: boolean;
  options?: Option[];
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: any;
}

export type FrequencyOption = 
  | 'one-time' 
  | 'weekly' 
  | 'bi-weekly' 
  | 'monthly' 
  | 'quarterly' 
  | 'annual' 
  | 'semi-annual';

export interface ServiceSchema {
  name: string;
  slug: string;
  defaultFrequency?: FrequencyOption;
  fields: Field[];
}

export interface FormValues {
  [key: string]: any;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  frequency: string;
  facilitySize?: number;
  details: FormValues;
}