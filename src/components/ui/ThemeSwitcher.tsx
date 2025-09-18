import React from 'react';
import { getTheme, setTheme, UnoTheme } from '../../utils/theme';

const themes: UnoTheme[] = ['sage','french','teal','evergreen','indigo','terracotta'];

const ThemeSwitcher: React.FC = () => {
  const [t, setT] = React.useState<UnoTheme>(getTheme());
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    const val = e.target.value as UnoTheme;
    setT(val); setTheme(val);
  };
  if (import.meta.env.PROD) return null; // hide in production
  return (
    <div className="fixed z-50 bottom-4 right-4 rounded-lg border border-gray-200 bg-white/95 shadow-md backdrop-blur px-3 py-2">
      <label className="mr-2 text-sm text-gray-600">Theme</label>
      <select value={t} onChange={onChange} className="text-sm border-gray-300 rounded-md">
        {themes.map(x => <option key={x} value={x}>{x}</option>)}
      </select>
    </div>
  );
};
export default ThemeSwitcher;