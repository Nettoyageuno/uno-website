import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useI18n } from '../i18n/index';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const { t, locale } = useI18n();

  // Get base path for current locale
  const getLocalePath = (path: string) => {
    return locale === 'fr-CA' ? `/fr${path}` : path;
  };

  const isActivePath = (path: string) => {
    const localePath = getLocalePath(path);
    return location.pathname === localePath || location.pathname.startsWith(localePath + '/');
  };

  const services = [
    { name: t('nav.officeCleaningNav'), path: getLocalePath('/services/office-cleaning') },
    { name: t('nav.buildingCleaningNav'), path: getLocalePath('/services/building-cleaning') },
    { name: t('nav.warehouseCleaningNav'), path: getLocalePath('/services/warehouse-cleaning') },
    { name: t('nav.postConstructionNav'), path: getLocalePath('/services/post-construction') },
    { name: t('nav.specializedAddOnsNav'), path: getLocalePath('/services/specialized-add-ons') },
  ];

  return (
    <header className="bg-warm shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={getLocalePath('/')} className="flex items-center">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">NU</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Nettoyage Uno</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to={getLocalePath('/')} 
              className={`text-sm font-medium transition-colors ${
                isActivePath('/') && location.pathname === getLocalePath('/')
                  ? 'text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('nav.home')}
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link 
                to={getLocalePath('/services')}
                className={`flex items-center text-sm font-medium transition-colors ${
                  isActivePath('/services') 
                    ? 'text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('nav.services')}
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg border border-gray-200 rounded-md py-2 z-50">
                  <Link 
                    to={getLocalePath('/services')} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-medium"
                  >
                    {t('nav.allServices')}
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  {services.map((service) => (
                    <Link 
                      key={service.path}
                      to={service.path} 
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link 
                    to={getLocalePath('/services/duct-ventilation-cleaning')} 
                    className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {t('nav.ductVentCleaningNav')}
                    <span className="ml-2 rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">Partner</span>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to={getLocalePath('/industries')} 
              className={`text-sm font-medium transition-colors ${
                isActivePath('/industries') 
                  ? 'text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('nav.industries')}
            </Link>
            <Link 
              to={getLocalePath('/why-partner')} 
              className={`text-sm font-medium transition-colors ${
                isActivePath('/why-partner') 
                  ? 'text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('nav.whyPartner')}
            </Link>
            <Link 
              to={getLocalePath('/blog')} 
              className={`text-sm font-medium transition-colors ${
                isActivePath('/blog') 
                  ? 'text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('nav.blog')}
            </Link>
            <Link 
              to={getLocalePath('/about')} 
              className={`text-sm font-medium transition-colors ${
                isActivePath('/about') 
                  ? 'text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to={getLocalePath('/contact')} 
              className={`text-sm font-medium transition-colors ${
                isActivePath('/contact') 
                  ? 'text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('nav.contact')}
            </Link>
            <LanguageSwitcher />
            <Link 
              to={getLocalePath('/get-quote')} 
              className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              {t('nav.getQuote')}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <Link 
                to={getLocalePath('/')} 
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to={getLocalePath('/services')} 
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              {services.map((service) => (
                <Link 
                  key={service.path}
                  to={service.path} 
                  className="block px-8 py-1 text-sm text-gray-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
              <Link 
                to={getLocalePath('/industries')} 
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.industries')}
              </Link>
              <Link 
                to={getLocalePath('/why-partner')} 
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.whyPartner')}
              </Link>
              <Link 
                to={getLocalePath('/blog')} 
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.blog')}
              </Link>
              <Link 
                to={getLocalePath('/about')} 
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to={getLocalePath('/contact')} 
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <div className="px-4 py-2">
                <LanguageSwitcher />
              </div>
              <Link 
                to={getLocalePath('/get-quote')} 
                className="block px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-md mx-4 text-center hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.getQuote')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;