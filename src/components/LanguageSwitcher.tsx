import React from 'react';
import { useI18n } from '../i18n/index';

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale, t } = useI18n();

  const toggleLanguage = () => {
    const newLocale = locale === 'en-CA' ? 'fr-CA' : 'en-CA';
    setLocale(newLocale);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded px-2 py-1"
      aria-label={`Switch to ${locale === 'en-CA' ? 'French' : 'English'}`}
    >
      {locale === 'en-CA' ? 'FR' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;