import React from 'react';
import { Field, Option } from './types';
import { Minus, Plus } from 'lucide-react';

interface FieldRendererProps {
  field: Field;
  value: any;
  onChange: (value: any) => void;
  error?: string;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({ field, value, onChange, error }) => {
  const renderField = () => {
    switch (field.type) {
      case 'checkbox':
        return (
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={!!value}
              onChange={(e) => onChange(e.target.checked)}
              className="mr-2 rounded border-gray-300 focus:ring-2 focus:ring-gray-900"
            />
            <span className="text-sm">{field.label}</span>
          </label>
        );

      case 'toggle':
        return (
          <div>
            <label className="block text-sm font-medium mb-2">{field.label}</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name={field.key}
                  checked={value === true}
                  onChange={() => onChange(true)}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name={field.key}
                  checked={value === false}
                  onChange={() => onChange(false)}
                  className="mr-2"
                />
                No
              </label>
            </div>
            {field.help && <p className="mt-1 text-xs text-gray-500">{field.help}</p>}
          </div>
        );

      case 'counter':
        return (
          <div>
            <label className="block text-sm font-medium mb-2">{field.label}</label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onChange(Math.max((field.min || 0), (value || 0) - 1))}
                disabled={(value || 0) <= (field.min || 0)}
                className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="number"
                value={value || field.min || 0}
                onChange={(e) => onChange(parseInt(e.target.value) || field.min || 0)}
                min={field.min}
                max={field.max}
                step={field.step || 1}
                className="w-20 text-center rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <button
                type="button"
                onClick={() => onChange(Math.min((field.max || 999), (value || 0) + 1))}
                disabled={field.max && (value || 0) >= field.max}
                className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {field.help && <p className="mt-1 text-xs text-gray-500">{field.help}</p>}
          </div>
        );

      case 'number':
        return (
          <div>
            <label className="block text-sm font-medium mb-2">{field.label}</label>
            <input
              type="number"
              value={value || ''}
              onChange={(e) => onChange(e.target.value ? parseInt(e.target.value) : undefined)}
              min={field.min}
              max={field.max}
              step={field.step || 1}
              placeholder={field.help}
              className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            {field.help && <p className="mt-1 text-xs text-gray-500">{field.help}</p>}
          </div>
        );

      case 'select':
        return (
          <div>
            <label className="block text-sm font-medium mb-2">{field.label}</label>
            <select
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              {!field.required && <option value="">Select an option</option>}
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {field.help && <p className="mt-1 text-xs text-gray-500">{field.help}</p>}
          </div>
        );

      case 'multiselect':
        const selectedValues = Array.isArray(value) ? value : [];
        return (
          <div>
            <label className="block text-sm font-medium mb-2">{field.label}</label>
            <div className="space-y-2">
              {field.options?.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center gap-3 rounded-xl border p-3 cursor-pointer transition ${
                    selectedValues.includes(option.value)
                      ? 'border-gray-900 bg-gray-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option.value)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onChange([...selectedValues, option.value]);
                      } else {
                        onChange(selectedValues.filter((v: string) => v !== option.value));
                      }
                    }}
                    className="rounded border-gray-300 focus:ring-2 focus:ring-gray-900"
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
            {field.help && <p className="mt-1 text-xs text-gray-500">{field.help}</p>}
          </div>
        );

      case 'textarea':
        return (
          <div>
            <label className="block text-sm font-medium mb-2">{field.label}</label>
            <textarea
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              rows={3}
              placeholder={field.help}
              className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            {field.help && <p className="mt-1 text-xs text-gray-500">{field.help}</p>}
          </div>
        );

      case 'text':
        return (
          <div>
            <label className="block text-sm font-medium mb-2">{field.label}</label>
            <input
              type="text"
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder={field.help}
              className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            {field.help && <p className="mt-1 text-xs text-gray-500">{field.help}</p>}
          </div>
        );

      default:
        return <div>Unsupported field type: {field.type}</div>;
    }
  };

  return (
    <div className="space-y-1">
      {renderField()}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FieldRenderer;