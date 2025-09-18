import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import enTranslations from './en.json';
import frTranslations from './fr.json';

export type Locale = 'en-CA' | 'fr-CA';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations = {
  'en-CA': enTranslations,
  'fr-CA': frTranslations,
};

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Detect locale from URL path
  const getLocaleFromPath = (pathname: string): Locale => {
    return pathname.startsWith('/fr') ? 'fr-CA' : 'en-CA';
  };

  const [locale, setLocaleState] = useState<Locale>(getLocaleFromPath(location.pathname));

  // Update locale when path changes
  useEffect(() => {
    const newLocale = getLocaleFromPath(location.pathname);
    if (newLocale !== locale) {
      setLocaleState(newLocale);
    }
  }, [location.pathname, locale]);

  const setLocale = (newLocale: Locale) => {
    const currentPath = location.pathname;
    let newPath: string;

    if (newLocale === 'fr-CA') {
      // Switch to French
      if (currentPath.startsWith('/fr')) {
        return; // Already on French path
      }
      newPath = currentPath === '/' ? '/fr' : `/fr${currentPath}`;
    } else {
      // Switch to English
      if (!currentPath.startsWith('/fr')) {
        return; // Already on English path
      }
      newPath = currentPath === '/fr' ? '/' : currentPath.replace('/fr', '');
    }

    navigate(newPath);
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let value: any = translations[locale];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found in current locale
        value = translations['en-CA'];
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found in fallback either
          }
        }
        break;
      }
    }

    if (typeof value !== 'string') {
      return key;
    }

    // Replace parameters in the string
    if (params) {
      return Object.entries(params).reduce((str, [paramKey, paramValue]) => {
        return str.replace(new RegExp(`{${paramKey}}`, 'g'), String(paramValue));
      }, value);
    }

    return value;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};