import React from 'react';
import { Link } from 'react-router-dom';
import { Warehouse, ArrowRight, Clock, Shield, Users, Truck, Sparkles, Settings, HardHat, Zap } from 'lucide-react';
import SEO from '../../components/SEO';
import MotionImage from '../../components/ui/MotionImage';
import Reveal from '../../components/motion/Reveal';
import BenefitsRow from '../../components/sections/BenefitsRow';
import SoftPanel from '../../components/ui/SoftPanel';
import { CheckCircle2 } from 'lucide-react';

const WarehouseCleaningPage: React.FC = () => {
  const services = [
    'Floor sweeping and scrubbing',
    'Loading dock cleaning',
    'Equipment and machinery cleaning',
    'Office area maintenance within warehouse',
    'Break room and restroom service',
    'High-bay and overhead cleaning',
    'Debris removal and organization',
    'Safety compliance cleaning',
    'Inventory area maintenance',
    'Emergency spill response',
    'Warehouse window cleaning'
  ];

  const faqs = [
    {
      question: 'Can you work around our warehouse operations and shift schedules?',
      answer: 'Yes, we specialize in flexible scheduling that accommodates warehouse operations. We can clean during off-shifts, weekends, or coordinate with your production schedule to minimize disruption to your operations.'
    },
    {
      question: 'Do you have experience with industrial safety requirements?',
      answer: 'Absolutely. Our team is trained in warehouse safety protocols including lockout/tagout procedures, PPE requirements, and working safely around industrial equipment and machinery.'
    },
    {
      question: 'How do you handle large warehouse spaces efficiently?',
      answer: 'We use industrial-grade equipment designed for large spaces and can scale our team size based on your facility size and schedule requirements. Our approach maximizes efficiency while maintaining thorough cleaning standards.'
    },
    {
      question: 'Can you clean around inventory and active storage areas?',
      answer: 'Yes, we work carefully around stored inventory and active warehouse areas. We coordinate with your team to understand which areas need access and which should be avoided during cleaning operations.'
    },
    {
      question: 'Do you provide specialized cleaning for food-grade or pharmaceutical warehouses?',
      answer: 'Yes, we understand the specific requirements for food-grade and pharmaceutical facilities including specialized sanitization, documentation requirements, and compliance with industry regulations.'
    }
  ];

  const warehouseTypes = [
    {
      title: 'Distribution Centers',
      description: 'High-traffic facilities requiring flexible cleaning schedules',
      focus: 'Operational efficiency and safety compliance'
    },
    {
      title: 'Manufacturing Facilities', 
      description: 'Production environments with specialized cleaning needs',
      focus: 'Safety protocols and regulatory compliance'
    },
    {
      title: 'Storage Warehouses',
      description: 'Long-term storage facilities requiring regular maintenance',
      focus: 'Dust control and organized appearance'
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Warehouse & Industrial Cleaning Services Montréal | Nettoyage Uno"
        description="Professional warehouse and industrial cleaning in Montréal. Large facilities, specialized equipment, safety compliance. Custom schedules for industrial operations."
        keywords="warehouse cleaning Montréal, industrial cleaning, facility maintenance"
        canonical="https://nettoyageuno.com/services/warehouse-cleaning"
      />

      {/* Hero Section */}
      <section className="relative bg-warm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Warehouse className="w-16 h-16 text-gray-700" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight reveal">
              Warehouse & Industrial Cleaning Services
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Large-scale cleaning solutions for warehouses and industrial operations in Montréal. Safety-focused protocols, flexible scheduling, and specialized equipment for industrial environments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 reveal">Industrial-Scale Solutions</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Warehouse and industrial facilities require specialized cleaning approaches that prioritize safety while maintaining operational efficiency. These environments demand equipment and expertise that goes beyond standard commercial cleaning.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team understands industrial operations and works around your production schedules, safety protocols, and regulatory requirements. From small distribution centers to large manufacturing facilities, we adapt our approach to your specific industry and operational needs.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Safety is our top priority in industrial environments. Our staff receives specialized training in warehouse safety, equipment protocols, and emergency procedures to ensure everyone stays safe while maintaining your facility.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Warehouse Cleaning Services</h3>
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
                  title="Benefits of Professional Warehouse Cleaning"
                  items={[
                    {
                      icon: 'HardHat',
                      title: 'Safety Compliance',
                      body: 'Maintain safe working conditions and regulatory compliance standards.'
                    },
                    {
                      icon: 'Settings',
                      title: 'Equipment Care',
                      body: 'Proper cleaning extends equipment life and operational efficiency.'
                    },
                    {
                      icon: 'Truck',
                      title: 'Operational Flow',
                      body: 'Clean warehouses support efficient workflow and productivity.'
                    },
                    {
                      icon: 'Clock',
                      title: 'Flexible Scheduling',
                      body: 'Service scheduled around your industrial operations.'
                    }
                  ]}
                  badges={['Safety First', 'Equipment Care', 'Operational Excellence', 'Flexible Timing']}
                />
              </div>
            </div>

            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <Reveal>
                <MotionImage
                  src="/images/services/warehouse.svg"
                  alt="Industrial warehouse cleaning in Montréal"
                  className="rounded-2xl"
                />
              </Reveal>
            </div>
          </div>

          <div className="mt-16">
            <SoftPanel title="Warehouse Types We Serve">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {warehouseTypes.map((type, index) => (
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
      <section className="py-16 bg-stone">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 reveal">Warehouse Cleaning Questions</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Warehouse Operations?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Professional warehouse cleaning that supports your operations while maintaining safety and efficiency. Get a custom industrial cleaning proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn-cta inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              Get Warehouse Quote
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

export default WarehouseCleaningPage;