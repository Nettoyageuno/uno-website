import React from 'react';

const GlobalSchema: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nettoyage Uno",
    "description": "Professional commercial cleaning services in Montréal",
    "url": "https://nettoyageuno.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://nettoyageuno.com/logo.png"
    },
    "telephone": "+1-514-xxx-xxxx",
    "email": "info@nettoyageuno.com",
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
      {
        "@type": "City",
        "name": "Montréal",
        "addressRegion": "QC",
        "addressCountry": "CA"
      },
      {
        "@type": "City", 
        "name": "Dorval",
        "addressRegion": "QC",
        "addressCountry": "CA"
      },
      {
        "@type": "City",
        "name": "Saint-Laurent", 
        "addressRegion": "QC",
        "addressCountry": "CA"
      },
      {
        "@type": "City",
        "name": "Lachine",
        "addressRegion": "QC", 
        "addressCountry": "CA"
      }
    ],
    "serviceType": "Commercial Cleaning Services",
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-18:00",
    "sameAs": [
      "https://nettoyageuno.com"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nettoyage Uno",
    "url": "https://nettoyageuno.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://nettoyageuno.com/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </>
  );
};

export default GlobalSchema;