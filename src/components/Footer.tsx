import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import IconBadge from './IconBadge';
import { useI18n } from '../i18n/index';

const Footer: React.FC = () => {
  const { t, locale } = useI18n();

  // Get base path for current locale
  const getLocalePath = (path: string) => {
    return locale === 'fr-CA' ? `/fr${path}` : path;
  };

  return (
    <footer className="bg-warm-alt text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-gray-900 font-bold">NU</span>
              </div>
              <span className="text-lg font-semibold">Nettoyage Uno</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">
              {t('footer.sustainabilityNote')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li><Link to={getLocalePath('/services/office-cleaning')} className="text-gray-600 hover:text-gray-900 text-sm transition-colors">{t('footer.officeCleaning')}</Link></li>
              <li><Link to={getLocalePath('/services/building-cleaning')} className="text-gray-600 hover:text-gray-900 text-sm transition-colors">{t('footer.buildingMaintenance')}</Link></li>
              <li><Link to={getLocalePath('/services/warehouse-cleaning')} className="text-gray-600 hover:text-gray-900 text-sm transition-colors">{t('footer.warehouseCleaning')}</Link></li>
              <li><Link to={getLocalePath('/services/post-construction')} className="text-gray-600 hover:text-gray-900 text-sm transition-colors">{t('footer.postConstruction')}</Link></li>
              <li><Link to={getLocalePath('/services/specialized-add-ons')} className="text-gray-600 hover:text-gray-900 text-sm transition-colors">{t('footer.specializedServices')}</Link></li>
              <li><Link to={getLocalePath('/contact')} className="text-gray-600 hover:text-gray-900 text-sm transition-colors">{t('footer.contactUs')}</Link></li>
              <li><Link to={getLocalePath('/get-quote')} className="text-gray-600 hover:text-gray-900 text-sm transition-colors">{t('footer.getQuote')}</Link></li>
              <li><Link to={getLocalePath('/blog')} className="text-gray-600 hover:text-gray-900 text-sm transition-colors">{t('footer.blogInsights')}</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">{t('footer.serviceAreas')}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Downtown Montréal</li>
              <li>Dorval</li>
              <li>Saint-Laurent</li>
              <li>Lachine</li>
              <li>Greater Montréal Area</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="mr-3 flex-shrink-0">
                  <IconBadge icon={MapPin} color="indigo" size="sm" dark={true} />
                </div>
                <span className="text-gray-600 text-sm">Montréal, QC</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 flex-shrink-0">
                  <IconBadge icon={Phone} color="blue" size="sm" dark={true} />
                </div>
                <span className="text-gray-600 text-sm">(514) xxx-xxxx</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 flex-shrink-0">
                  <IconBadge icon={Mail} color="violet" size="sm" dark={true} />
                </div>
                <span className="text-gray-600 text-sm">info@nettoyageuno.com</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 flex-shrink-0">
                  <IconBadge icon={Clock} color="amber" size="sm" dark={true} />
                </div>
                <span className="text-gray-600 text-sm">{t('footer.emergencyService')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; 2025 Nettoyage Uno. {t('footer.allRightsReserved')}
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to={getLocalePath('/about')} className="text-gray-600 hover:text-gray-900 text-sm transition-colors">{t('footer.privacyPolicy')}</Link>
            <Link to={getLocalePath('/contact')} className="text-gray-600 hover:text-gray-900 text-sm transition-colors">{t('footer.termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;