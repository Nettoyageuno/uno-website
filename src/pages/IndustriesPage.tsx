import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Heart, ShoppingCart, Utensils, GraduationCap, Factory, ArrowRight, CheckCircle, Shield, Leaf } from 'lucide-react';
import IconBadge from '../components/IconBadge';
import MotionImage from '../components/ui/MotionImage';
import Reveal from '../components/motion/Reveal';

const IndustriesPage: React.FC = () => {
  const industries = [
    {
      icon: Building,
      title: 'Corporate Offices',
      description: 'Professional environments require consistent maintenance that supports productivity while accommodating busy schedules and client visits.',
      needs: ['Flexible scheduling to minimize disruption', 'Conference room readiness', 'Executive floor service', 'Reception area excellence'],
      ecoNote: 'We prioritize eco-safe products to support your company\'s sustainability commitments.',
      challenge: 'Maintaining professional appearance during business hours while ensuring employee health and client impressions.'
    },
    {
      icon: Heart,
      title: 'Healthcare Facilities',
      description: 'Medical environments demand specialized protocols that prioritize patient safety and regulatory compliance above all else.',
      needs: ['Infection control compliance', 'Medical waste handling', 'Waiting room maintenance', 'Exam room sanitization'],
      ecoNote: 'Hospital-grade products that are both effective and environmentally responsible.',
      challenge: 'Meeting strict health regulations while maintaining sterile environments during patient care hours.'
    },
    {
      icon: ShoppingCart,
      title: 'Retail & Shopping Centers',
      description: 'Customer-facing spaces require maintenance that protects your brand reputation while accommodating high traffic and operating hours.',
      needs: ['Customer area excellence', 'Display maintenance', 'Fitting room service', 'Food court compliance'],
      ecoNote: 'Eco-friendly solutions that align with modern consumer values and corporate responsibility.',
      challenge: 'Maintaining welcoming spaces during peak shopping hours without disrupting customer experience.'
    },
    {
      icon: Utensils,
      title: 'Restaurants & Food Service',
      description: 'Food service facilities require compliance-ready cleaning that meets health department standards and operational demands.',
      needs: ['Kitchen deep cleaning', 'Dining area maintenance', 'Equipment sanitization', 'Grease management'],
      ecoNote: 'Food-safe, environmentally conscious products that protect both customers and staff.',
      challenge: 'Meeting health department standards while working around food preparation and service schedules.'
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'Learning environments need maintenance that creates healthy spaces for students and staff while working around academic schedules.',
      needs: ['Classroom readiness', 'Cafeteria compliance', 'Library care', 'Laboratory safety'],
      ecoNote: 'Safe, non-toxic products that protect students and support institutional sustainability goals.',
      challenge: 'Creating healthy learning environments while accommodating class schedules and special events.'
    },
    {
      icon: Factory,
      title: 'Manufacturing & Industrial',
      description: 'Industrial facilities require safety-focused maintenance that supports operations while meeting regulatory compliance standards.',
      needs: ['Production area safety', 'Equipment maintenance', 'Compliance documentation', 'Waste management'],
      ecoNote: 'Industrial-grade solutions that meet environmental regulations and corporate ESG requirements.',
      challenge: 'Working safely around machinery and production schedules while maintaining industry-specific compliance.'
    }
  ];

  const expertiseAreas = [
    {
      icon: CheckCircle,
      title: 'Compliance Ready',
      description: 'We understand industry regulations and maintain documentation required for inspections and audits.',
      color: 'emerald' as const
    },
    {
      icon: Building,
      title: 'Custom Protocols',
      description: 'We develop cleaning protocols specifically tailored to your industry\'s requirements and facility needs.',
      color: 'blue' as const
    },
    {
      icon: Shield,
      title: 'Safety & Training',
      description: 'Our team receives industry-specific training to understand your environment and regulatory requirements.',
      color: 'violet' as const
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-warm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Industry-Specific Cleaning Expertise in Montréal
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              From corporate offices to industrial warehouses, Nettoyage Uno adapts to your industry's compliance standards, operational needs, and sustainability goals.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Image */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[21/9] bg-gray-100 rounded-2xl overflow-hidden">
            <Reveal>
              <MotionImage
                src="/images/industries/collage.svg"
                alt="Industries we serve across Greater Montréal"
                className="rounded-2xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-start gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <IconBadge 
                        icon={industry.icon} 
                        color={index === 0 ? 'indigo' : index === 1 ? 'emerald' : index === 2 ? 'blue' : index === 3 ? 'amber' : index === 4 ? 'violet' : 'teal'} 
                        size="md" 
                      />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{industry.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Deliver:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {industry.needs.map((need, needIndex) => (
                        <div key={needIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                          {need}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Industry Challenge:</h4>
                    <p className="text-gray-600 text-sm">{industry.challenge}</p>
                  </div>

                  <div className="flex items-start p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div className="mr-3 mt-0.5">
                      <IconBadge icon={Leaf} color="emerald" size="sm" />
                    </div>
                    <p className="text-emerald-700 text-sm">{industry.ecoNote}</p>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <industry.icon className="w-24 h-24 text-gray-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-warm-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry-Specific Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our Montréal team understands the regulatory requirements, safety protocols, and quality standards that matter in your industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg">
                <div className="flex justify-center mb-4">
                  <IconBadge icon={area.icon} color={area.color} size="lg" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 band-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner with Industry Experts?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We understand the regulations, standards, and expectations of your industry. Let's build a cleaning plan that works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn-cta inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              Get Industry-Specific Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/why-partner" 
              className="btn-cta-amber inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              Why Choose Nettoyage Uno
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;