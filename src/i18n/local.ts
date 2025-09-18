export type Locale = 'en' | 'fr';

export const strings = {
  en: {
    quote: {
      heroTitle: 'Request a Site Visit & Quote',
      heroSubtitle:
        'Tell us about your facility and schedule. We\'ll build a custom plan and pricing that fits your operations in Montréal.',
      contact: 'Get in Touch',
      phone: 'Phone',
      email: 'Email',
      serviceArea: 'Service Area',
      emergency: 'Emergency Service',
      guaranteeTitle: 'Our Guarantee',
      guaranteeBody:
        'You\'ll receive a detailed proposal within 24 hours of your site visit. Clear plan, no pressure.',
      review: 'Review',
      form: {
        fullName: 'Full Name',
        company: 'Company Name',
        email: 'Email Address',
        phone: 'Phone Number',
        serviceType: 'Service Type',
        facilitySize: 'Facility Size (sq ft)',
        frequency: 'How often?',
        items: 'What should we include?',
        notes: 'Notes / extras',
        eco: 'Prioritize eco-friendly products and sustainable practices',
        submit: 'Send Request'
      }
    }
  },
  // FR-CA (can adjust wording later)
  fr: {
    quote: {
      heroTitle: 'Demander une visite et un devis',
      heroSubtitle:
        'Parlez-nous de vos installations et de votre horaire. Nous proposerons un plan et un prix adaptés à vos opérations à Montréal.',
      contact: 'Nous joindre',
      phone: 'Téléphone',
      email: 'Courriel',
      serviceArea: 'Secteur desservi',
      emergency: 'Service d\'urgence',
      guaranteeTitle: 'Notre garantie',
      guaranteeBody:
        'Vous recevrez une proposition détaillée dans les 24 h suivant la visite des lieux. Plan clair, sans pression.',
      review: 'Aperçu',
      form: {
        fullName: 'Nom complet',
        company: 'Nom de l\'entreprise',
        email: 'Adresse courriel',
        phone: 'Numéro de téléphone',
        serviceType: 'Type de service',
        facilitySize: 'Superficie (pi²)',
        frequency: 'Fréquence',
        items: 'Éléments à inclure',
        notes: 'Notes / extras',
        eco: 'Privilégier des produits et pratiques écoresponsables',
        submit: 'Envoyer la demande'
      }
    }
  }
} as const;

export function getStrings(locale: Locale = 'en') {
  return strings[locale] ?? strings.en;
}