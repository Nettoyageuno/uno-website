import React from 'react';
import { Link } from 'react-router-dom';
import { Building, ArrowRight, Clock, Shield, Users, Home, Sparkles, Coffee, Heart, Zap } from 'lucide-react';
import SEO from '../../components/SEO';
import MotionImage from '../../components/ui/MotionImage';
import Reveal from '../../components/motion/Reveal';
import BenefitsRow from '../../components/sections/BenefitsRow';
import SoftPanel from '../../components/ui/SoftPanel';
import { CheckCircle2 } from 'lucide-react';

const BuildingCleaningPage: React.FC = () => {
  const services = [
    'Lobby and entrance cleaning',
    'Elevator cleaning and maintenance',
    'Hallway and corridor maintenance',
    'Stairwell cleaning and sanitization',
    'Mailroom and package area service',
    'Parking garage cleaning',
    'Glass door and window cleaning',
    'Common room and amenity cleaning',
    'Garbage room management',
    'Emergency spill cleanup',
    'Seasonal deep cleaning projects'
  ];

  const faqs = [
    {
      question: 'How do you coordinate cleaning around resident schedules?',
      answer: 'We work with building management to schedule cleaning during low-traffic periods when possible. For daily maintenance, we focus on areas that can be cleaned while residents go about their normal routines.'
    },
    {
      question: 'Do you handle garbage collection and recycling?',
      answer: 'Yes, we can manage garbage room cleaning and organization as part of our building services. We work with your waste management schedule to ensure areas stay clean and odor-free.'
    },
    {
      question: 'Can you clean amenity areas like fitness centers and party rooms?',
      answer: 'Absolutely. Common amenity areas require specialized attention to maintain hygiene and appearance standards. We adapt our cleaning protocols to each type of amenity space.'
    },
    {
      question: 'How do you handle elevator cleaning without disrupting service?',
      answer: 'We use efficient techniques that allow elevators to remain in service during most cleaning activities. Deep cleaning can be scheduled during low-usage periods with advance notice.'
    },
    {
      question: 'Do you provide emergency cleaning for building issues?',
      answer: 'Yes, we offer 24/7 emergency response for spills, vandalism, water damage, or any urgent cleaning needs that affect resident safety or building appearance.'
    }
  ];

  const buildingTypes = [
    {
      title: 'Residential Condos',
      description: 'Lobby, amenity, and common area maintenance for condo buildings',
      focus: 'Resident satisfaction and property value protection'
    },
    {
      title: 'Mixed-Use Buildings', 
      description: 'Commercial and residential spaces requiring flexible scheduling',
      focus: 'Coordinating commercial and residential needs'
    },
    {
      title: 'Commercial Buildings',
      description: 'Professional building maintenance for business tenants',
      focus: 'Professional appearance and tenant satisfaction'
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Building & Condo Common Area Cleaning | Montréal | Nettoyage Uno"
        description="Building and condo common area cleaning in Montréal. Lobbies, hallways, elevators, parking areas. Professional maintenance for residential and commercial buildings."
        keywords="building cleaning Montréal, condo cleaning, common area maintenance"
        canonical="https://nettoyageuno.com/services/building-cleaning"
      />

      {/* Hero Section */}
      <section className="relative bg-warm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Building className="w-16 h-16 text-gray-700" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight reveal">
              Building & Condo Common Area Cleaning
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Professional maintenance for lobbies, hallways, elevators, and shared spaces in Montréal buildings. Create welcoming environments that residents and tenants appreciate.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 reveal">Common Area Excellence</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Building common areas are the first impression residents and visitors have of your property. Professional maintenance protects property values while creating spaces people are proud to call home or conduct business in.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our building cleaning services focus on the high-traffic areas that matter most - lobbies, elevators, hallways, and amenity spaces. We understand that different buildings have different needs, from luxury condos to family-friendly residential buildings.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Working with property managers across Montréal, we've developed efficient systems that maintain professional standards while respecting resident routines and building operations.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Building Cleaning Services</h3>
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
                  title="Benefits of Professional Building Maintenance"
                  items={[
                    {
                      icon: 'Heart',
                      title: 'Resident Satisfaction',
                      body: 'Well-maintained common areas contribute to resident happiness and building pride.'
                    },
                    {
                      icon: 'Users',
                      title: 'Property Value',
                      body: 'Clean buildings protect and enhance property values over time.'
                    },
                    {
                      icon: 'Shield',
                      title: 'Safety & Health',
                      body: 'Regular sanitization creates safer environments for residents and visitors.'
                    },
                    {
                      icon: 'Sparkles',
                      title: 'Professional Image',
                      body: 'Clean areas create positive first impressions for all visitors.'
                    }
                  ]}
                  badges={['Resident Care', 'Property Value', 'Safety Focus', 'Professional Image']}
                />
              </div>
            </div>

            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <Reveal>
                <MotionImage
                  src="/images/services/building.svg"
                  alt="Building common area maintenance in Montréal"
                  className="rounded-2xl"
                />
              </Reveal>
            </div>
          </div>

          <div className="mt-16">
            <SoftPanel title="Building Types We Serve">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {buildingTypes.map((type, index) => (
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 reveal">Building Cleaning Questions</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Enhance Your Building's Common Areas?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Create spaces that residents and tenants appreciate every day. Get a building maintenance proposal tailored to your property's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn-cta inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              Get Building Quote
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

export default BuildingCleaningPage;