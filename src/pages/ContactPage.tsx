import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, Leaf } from 'lucide-react';
import SEO from '../components/SEO';
import IconBadge from '../components/IconBadge';
import FadeInSection from '../components/FadeInSection';
import GradientBackdrop from '../components/brand/GradientBackdrop';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    honeypot: '' // Anti-spam field
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    return formData.name.trim() !== '' && 
           formData.email.trim() !== '' && 
           formData.message.trim() !== '' &&
           formData.honeypot === ''; // Anti-spam check
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      setError('Please complete all required fields.');
      return;
    }

    // Anti-spam: disable submit for 3 seconds
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 3000);

    // GTM tracking
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'form_submit',
        form_type: 'contact'
      });
    }

    console.log('CONTACT_SUBMIT', formData);
    setSubmitted(true);
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nettoyage Uno",
    "url": "https://nettoyageuno.com",
    "telephone": "+1-514-xxx-xxxx",
    "email": "info@nettoyageuno.com",
    "areaServed": "CA-QC",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "info@nettoyageuno.com",
        "telephone": "+1-514-xxx-xxxx",
        "areaServed": "CA-QC",
        "availableLanguage": ["en", "fr"]
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nettoyageuno.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://nettoyageuno.com/contact"
      }
    ]
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Contact Nettoyage Uno | Commercial Cleaning Montréal"
        description="Contact Nettoyage Uno for commercial cleaning in Montréal. Fast support, professional guidance, and sustainable options."
        keywords="contact commercial cleaning Montréal, cleaning company support, facility maintenance inquiries"
        canonical="https://nettoyageuno.com/contact"
      />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Hero Section */}
      <section className="relative uno-hero uno-noise py-16">
        <GradientBackdrop />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Contact Nettoyage Uno
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                We're here to answer questions and help you choose the right cleaning plan for your Montréal facility.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <FadeInSection>
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">General Inquiries</h2>
                
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Anti-spam honeypot field */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us about your facility and cleaning needs..."
                        className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>

                    {error && (
                      <div className="text-sm text-red-600" role="alert">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={!validateForm() || isSubmitting}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                        validateForm() && !isSubmitting
                          ? 'bg-gray-900 text-white hover:bg-gray-800'
                          : 'bg-gray-400 text-white cursor-not-allowed'
                      }`}
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                ) : (
                  <div 
                    className="bg-green-50 border border-green-200 rounded-lg p-6"
                    role="alert"
                    aria-live="polite"
                    tabIndex={0}
                  >
                    <h3 className="text-lg font-semibold text-green-900 mb-2">
                      Thanks! We typically reply within 24 hours.
                    </h3>
                    <p className="text-green-700 mb-6">
                      We've received your message and will get back to you soon with helpful information about our cleaning services.
                    </p>
                    
                    <div className="space-y-4">
                      <Link
                        to="/get-quote"
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        Get a Customized Quote
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                      
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Link
                          to="/services"
                          className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          View Services
                        </Link>
                        <Link
                          to="/why-partner"
                          className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Why Partner with Us
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </FadeInSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeInSection delay={0.2}>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Direct Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <IconBadge icon={Phone} color="blue" size="sm" />
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">(514) xxx-xxxx</div>
                      <div className="text-gray-600">Monday – Friday, 8 AM – 6 PM</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <IconBadge icon={Mail} color="violet" size="sm" />
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">info@nettoyageuno.com</div>
                      <div className="text-gray-600">We respond within 2 hours</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <IconBadge icon={MapPin} color="indigo" size="sm" />
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">Service Area</div>
                      <div className="text-gray-600">Montréal, Dorval, Saint-Laurent, Lachine</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <IconBadge icon={Clock} color="amber" size="sm" />
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">Emergency Service</div>
                      <div className="text-gray-600">24/7 availability</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Sustainable Options</h4>
                  <div className="flex items-start gap-3">
                    <IconBadge icon={Leaf} color="emerald" size="sm" />
                    <p className="text-sm text-gray-600">
                      Ask us about sustainable options and eco-certified products for your facility.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <section className="py-16 bg-gray-900 band-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-white mb-4">Ready for a Detailed Quote?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a customized cleaning proposal tailored to your facility's specific needs and schedule.
            </p>
            <Link
              to="/get-quote"
              className="btn-cta inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              Get a Customized Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;