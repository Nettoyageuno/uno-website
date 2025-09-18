import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/index';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonical }) => {
  const location = useLocation();
  const { locale } = useI18n();
  const currentUrl = canonical || `https://nettoyageuno.com${location.pathname}`;
  
  // Generate hreflang URLs
  const getHreflangUrl = (targetLocale: 'en-CA' | 'fr-CA') => {
    const currentPath = location.pathname;
    
    if (targetLocale === 'fr-CA') {
      // Convert to French URL
      if (currentPath.startsWith('/fr')) {
        return `https://nettoyageuno.com${currentPath}`;
      }
      return currentPath === '/' 
        ? 'https://nettoyageuno.com/fr' 
        : `https://nettoyageuno.com/fr${currentPath}`;
    } else {
      // Convert to English URL
      if (!currentPath.startsWith('/fr')) {
        return `https://nettoyageuno.com${currentPath}`;
      }
      return currentPath === '/fr' 
        ? 'https://nettoyageuno.com/' 
        : `https://nettoyageuno.com${currentPath.replace('/fr', '')}`;
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nettoyage Uno",
    "description": "Professional commercial cleaning services in Montréal",
    "url": "https://nettoyageuno.com",
    "telephone": "+1-514-xxx-xxxx",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Montréal",
      "addressRegion": "QC",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.5017,
      "longitude": -73.5673
    },
    "areaServed": [
      "Montréal", "Dorval", "Saint-Laurent", "Downtown Montréal", "Lachine"
    ],
    "serviceType": "Commercial Cleaning Services",
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale === 'fr-CA' ? 'fr_CA' : 'en_CA'} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Hreflang links */}
      <link rel="alternate" hreflang="en-CA" href={getHreflangUrl('en-CA')} />
      <link rel="alternate" hreflang="fr-CA" href={getHreflangUrl('fr-CA')} />
      <link rel="alternate" hreflang="x-default" href={getHreflangUrl('en-CA')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;