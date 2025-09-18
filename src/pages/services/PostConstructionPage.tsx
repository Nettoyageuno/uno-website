import React from 'react';
import { Link } from 'react-router-dom';
import { ConstructionIcon as Construction, ArrowRight, Clock, Shield, Sparkles, Truck, ClipboardCheck, Zap } from 'lucide-react';
import SEO from '../../components/SEO';
import MotionImage from '../../components/ui/MotionImage';
import Reveal from '../../components/motion/Reveal';
import BenefitsRow from '../../components/sections/BenefitsRow';
import { CheckCircle2 } from 'lucide-react';

const PostConstructionPage: React.FC = () => {
  const services = [
    'Construction debris removal',
    'Dust elimination and detail cleaning',
    'Window and glass cleaning',
    'Floor cleaning and preparation',
    'Fixture and surface cleaning',
    'Paint and adhesive residue removal',
    'Cabinet & window-track detailing, adhesive removal',
    'Final inspection and touch-ups',
    'Move-in preparation',
    'HVAC vent cleaning',
    'Bathroom and kitchen deep cleaning'
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: 'Move-In Ready',
      description: 'Transform construction sites into clean, professional spaces ready for immediate occupancy.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'We work efficiently to meet your project deadlines and move-in schedules.'
    },
    {
      icon: Shield,
      title: 'Detailed Process',
      description: 'Systematic approach ensures nothing is missed in the transition from construction to occupancy.'
    },
    {
      icon: Truck,
      title: 'Complete Cleanup',
      description: 'From debris removal to final detailing, we handle every aspect of post-construction cleanup.'
    }
  ];

  const faqs = [
    {
      question: 'What is included in post-construction cleaning?',
      answer: 'Post-construction cleaning includes removing all construction debris, detailed cleaning of all surfaces, window cleaning, floor preparation, fixture cleaning, and final inspection. We ensure the space is completely move-in ready.'
    },
    {
      question: 'How soon after construction can you start cleaning?',
      answer: 'We can begin as soon as construction work is complete and the area is safe to enter. We coordinate with your project manager to schedule cleaning at the optimal time in your construction timeline.'
    },
    {
      question: 'Do you remove construction debris and materials?',
      answer: 'Yes, we handle construction debris removal as part of our post-construction service. This includes wood scraps, drywall pieces, packaging materials, and other construction waste.'
    },
    {
      question: 'Can you work with tight project deadlines?',
      answer: 'Absolutely. We understand construction timelines are often tight. We can scale our team size and work extended hours if needed to meet your move-in deadline.'
    },
    {
      question: 'Do you provide post-construction cleaning for both commercial and residential projects?',
      answer: 'Yes, we serve both commercial and residential post-construction projects in Montréal. From office buildings to condo developments, we adapt our approach to the specific type of space.'
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Post-Construction Cleaning in Montréal | Nettoyage Uno"
        description="Rough, final, and touch-up cleans with HEPA and detail work. Turnover-ready results in Montréal."
        keywords="post-construction cleaning Montréal, construction cleanup, debris removal"
        canonical="https://nettoyageuno.com/services/post-construction"
      />

      {/* Hero Section */}
      <section className="relative bg-warm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Construction className="w-16 h-16 text-gray-700" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight reveal">
              Post-Construction Cleaning Services
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Professional post-construction cleanup in Montréal that transforms construction sites into move-in ready spaces. HEPA filtration and dust-control plan for handover readiness. Trusted by general contractors, site supers, and developers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 reveal">Complete Construction Cleanup</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Construction projects create amazing new spaces, but they also leave behind dust, debris, and surfaces that need professional attention before anyone can move in. Post-construction cleaning is a specialized service that requires the right equipment, experience, and attention to detail.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Montréal team has extensive experience with post-construction cleanup for commercial buildings, residential developments, office renovations, and retail spaces. We work with general contractors, property developers, and business owners to ensure every project concludes with a space that's ready for immediate use.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Construction dust and debris can be challenging to remove completely. Our systematic approach ensures we address every surface, from overhead fixtures to baseboards, leaving your new space truly ready for occupancy.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Low-odor products for punch-list and early occupancy days.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Post-Construction Services</h3>
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
                  title="Benefits of Post-Construction Cleaning"
                  items={[
                    {
                      icon: 'Sparkles',
                      title: 'Move-In Ready',
                      body: 'Transform construction sites into clean, professional spaces ready for immediate occupancy.'
                    },
                    {
                      icon: 'Clock',
                      title: 'Fast Turnaround',
                      body: 'We work efficiently to meet your project deadlines and move-in schedules.'
                    },
                    {
                      icon: 'Shield',
                      title: 'Detailed Process',
                      body: 'Systematic approach ensures nothing is missed in the transition from construction to occupancy.'
                    },
                    {
                      icon: 'Truck',
                      title: 'Complete Cleanup',
                      body: 'From debris removal to final detailing, we handle every aspect of post-construction cleanup.'
                    }
                  ]}
                  badges={['Turnover Ready', 'Detail Focused', 'Fast Turnaround', 'Project Coordination']}
                />
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Three-Phase Cleanup Process</h4>
                <div className="space-y-3 text-gray-600">
                  <div>
                    <span className="font-medium">Phase 1: Rough Clean</span>
                    <p className="text-sm">Remove large debris, dust, and construction materials</p>
                  </div>
                  <div>
                    <span className="font-medium">Phase 2: Detail Clean</span>
                    <p className="text-sm">Clean all surfaces, fixtures, windows, and floors thoroughly</p>
                  </div>
                  <div>
                    <span className="font-medium">Phase 3: Final Touch-Up</span>
                    <p className="text-sm">Final inspection and touch-up cleaning for move-in readiness</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Project Coordination</h4>
                <p className="text-gray-600 text-sm">
                  We work closely with your project managers and contractors to coordinate cleanup timing and ensure the space is ready exactly when you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-stone">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 reveal">Post-Construction Cleaning Questions</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Complete Your Construction Project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us handle the final step in your construction process. Get a detailed post-construction cleaning quote that fits your project timeline and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn-cta inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              Book Your Turnover Crew
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

export default PostConstructionPage;