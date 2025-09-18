import React from 'react';
import { Link } from 'react-router-dom';
import { Wind, ArrowRight, Clock, Shield, Users, Gauge, Sparkles, Filter, Heart, Zap } from 'lucide-react';
import SEO from '../../components/SEO';
import MotionImage from '../../components/ui/MotionImage';
import Reveal from '../../components/motion/Reveal';
import PartnerBanner from '../../components/ui/PartnerBanner';
import BenefitsRow from '../../components/sections/BenefitsRow';
import SoftPanel from '../../components/ui/SoftPanel';
import { CheckCircle2 } from 'lucide-react';

const DuctVentCleaningPage: React.FC = () => {
  const services = [
    'Supply and return duct cleaning',
    'Air handler unit (AHU) cleaning',
    'Rooftop unit (RTU) maintenance',
    'Coil cleaning and maintenance',
    'Plenum and duct access cleaning',
    'HEPA-filtered containment during work',
    'Vent and diffuser cleaning',
    'System performance assessment',
    'Post-cleaning air quality testing',
    'Detailed reporting with before/after photos',
    'Post-renovation HVAC cleanup'
  ];

  const faqs = [
    {
      question: 'How often should commercial HVAC ducts be cleaned?',
      answer: 'Most commercial systems benefit from cleaning every 2-3 years under normal conditions. High-dust environments, post-construction situations, or systems with contamination issues may need more frequent attention.'
    },
    {
      question: 'Will duct cleaning improve our energy efficiency?',
      answer: 'Clean ducts and components can improve airflow and system efficiency. While results vary by system condition, removing dust and debris from coils and airways typically supports better HVAC performance.'
    },
    {
      question: 'How do you contain dust and debris during cleaning?',
      answer: 'We use HEPA-filtered negative air machines to contain dust and debris during the cleaning process. This prevents contamination of clean areas and protects your indoor air quality during the work.'
    },
    {
      question: 'Can you clean ducts without disrupting business operations?',
      answer: 'We work with your facility manager to minimize disruption. Depending on your system design, we may be able to clean sections while maintaining partial HVAC operation, or schedule work during off-hours.'
    },
    {
      question: 'Do you provide documentation for building management or insurance?',
      answer: 'Yes, we provide detailed reports including before/after photos, system assessment notes, and documentation suitable for building management records or insurance requirements.'
    }
  ];

  const systemTypes = [
    {
      title: 'Office Buildings',
      description: 'Multi-zone HVAC systems serving corporate and professional spaces',
      focus: 'Air quality improvement and system efficiency'
    },
    {
      title: 'Industrial Facilities', 
      description: 'Large-scale systems with specialized filtration and ventilation needs',
      focus: 'Dust control and regulatory compliance'
    },
    {
      title: 'Healthcare Facilities',
      description: 'Critical air quality systems requiring specialized protocols',
      focus: 'Infection control and air purity standards'
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Duct & Ventilation Cleaning Services Montréal | Nettoyage Uno"
        description="Professional HVAC duct and ventilation cleaning for healthier air and better system performance. HEPA-filtered cleaning with detailed reporting."
        keywords="duct cleaning Montréal, ventilation cleaning, HVAC cleaning, air quality improvement"
        canonical="https://nettoyageuno.com/services/duct-ventilation-cleaning"
      />

      {/* Hero Section */}
      <section className="relative bg-warm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Wind className="w-16 h-16 text-gray-700" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight reveal">
              Duct & Ventilation Cleaning Services
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Professional HVAC duct and ventilation cleaning for healthier air and better system performance. HEPA-filtered containment and detailed reporting for your Montréal facility.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Banner */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PartnerBanner 
            logoSrc="/images/partners/ductpro-mtl-logo.png"
            alt="DuctPro MTL"
            note="NADCA-certified duct cleaning delivered with Nettoyage Uno quality oversight."
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 reveal">Healthier Air, Better Performance</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                HVAC ducts accumulate dust, debris, and contaminants over time, which can affect both air quality and system efficiency. Professional duct cleaning removes these buildups using specialized equipment and proven techniques.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our certified partner uses NADCA-approved methods with HEPA-filtered equipment to thoroughly clean your ventilation system while protecting your facility from dust and debris during the process.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether your system needs routine maintenance cleaning or post-construction cleanup, we provide thorough service with detailed documentation for your facility management records.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Duct & Ventilation Services</h3>
              <ul className="uno-checklist mb-8">
                {services.map((service, index) => (
                  <li key={index}>
                    <CheckCircle2 className="uno-check-icon" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-8">
                <BenefitsRow
                  title="Benefits of Professional Duct Cleaning"
                  items={[
                    {
                      icon: 'Heart',
                      title: 'Improved Air Quality',
                      body: 'Remove dust and contaminants for healthier indoor environments.'
                    },
                    {
                      icon: 'Gauge',
                      title: 'System Efficiency',
                      body: 'Clean systems operate more efficiently and use less energy.'
                    },
                    {
                      icon: 'Filter',
                      title: 'HEPA Containment',
                      body: 'Professional containment prevents contamination during cleaning.'
                    },
                    {
                      icon: 'Shield',
                      title: 'Professional Standards',
                      body: 'NADCA-certified methods with detailed documentation.'
                    }
                  ]}
                  badges={['Air Quality', 'System Performance', 'HEPA Standards', 'Professional Certified']}
                />
              </div>
            </div>

            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <Reveal>
                <MotionImage
                  src="/images/services/duct-vent.svg"
                  alt="HVAC duct and ventilation cleaning in Montréal"
                  className="rounded-2xl"
                />
              </Reveal>
            </div>
          </div>

          <div className="mt-16">
            <SoftPanel title="System Types We Clean">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {systemTypes.map((type, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">{type.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                    <p className="text-xs text-gray-500">
                      <span className="font-medium">Focus:</span> {type.focus}
                    </p>
                  </div>
                ))}
              </div>
            </SoftPanel>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 reveal">Duct Cleaning Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 band-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Improve Your Building's Air Quality?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Professional HVAC cleaning that supports healthier indoor environments and better system performance. Get a duct cleaning assessment for your Montréal facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn-cta inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              Schedule HVAC Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="btn-cta-amber inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DuctVentCleaningPage;