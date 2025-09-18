import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Clock, ShieldCheck, MapPin, Star, CheckCircle, ArrowRight, Phone, Zap, Monitor, Leaf } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';
import Counter from '../components/Counter';
import IconBadge from '../components/IconBadge';
import MotionImage from '../components/ui/MotionImage';
import Reveal from '../components/motion/Reveal';
import GradientBackdrop from '../components/brand/GradientBackdrop';

const WhyPartnerPage: React.FC = () => {
  const reasons = [
    {
      icon: Users, 
      title: 'In-House Staff You Can Trust',
      description: 'No subcontractors. Our trained, vetted in-house team delivers consistent quality with direct accountability to you.',
      details: [
        'Background checked and bonded staff',
        'Consistent team members for your account',
        'Direct accountability and communication',
        'Ongoing training and quality assurance'
      ]
    },
    {
      icon: Zap,
      title: 'Responsive Support',
      description: 'Direct communication, rapid response, no red tape. When you need us, we\'re there with solutions, not excuses.',
      details: [
        '2-hour response to service requests',
        '24/7 emergency cleaning availability',
        'Flexible scheduling around your operations',
        'Direct line to your account manager'
      ]
    },
    {
      icon: MapPin,
      title: 'Local Accountability',
      description: 'Montréal-based and fully committed to your facility. We\'re part of your community, not a distant corporate entity.',
      details: [
        'Local team with Montréal market knowledge',
        'Community investment and relationships',
        'Quick response times across the city',
        'Bilingual service in French and English'
      ]
    },
    {
      icon: Monitor,
      title: 'Transparent Client Portal',
      description: 'Track schedules, inspections, and communication in one place. Full transparency into your cleaning service.',
      details: [
        'Online service scheduling and requests',
        'Quality inspection reports and photos',
        'Direct communication with your cleaning team',
        'Service history and performance tracking'
      ]
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'Eco-certified products and processes that align with your company\'s environmental goals and corporate responsibility.',
      details: [
        'Environmentally safe cleaning products',
        'Waste reduction and recycling programs',
        'Energy-efficient equipment and methods',
        'Support for your sustainability reporting'
      ]
    }
  ];

  const guarantees = [
    {
      title: '24-Hour Proposal',
      description: 'You\'ll receive a detailed cleaning proposal within 24 hours of your site visit.'
    },
    {
      title: 'Satisfaction Guarantee',
      description: 'If you\'re not satisfied with any cleaning visit, we\'ll return within 24 hours at no charge.'
    },
    {
      title: 'Flexible Contracts',
      description: 'No long-term commitments required. We earn your business with quality service, not lengthy contracts.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative uno-hero uno-noise py-16">
        <GradientBackdrop />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Why Partner with Nettoyage Uno?
            </h1>
            <FadeInSection delay={0.2}>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Because we believe cleaning isn't just a service — it's a partnership. Every client receives the same standard of care, accountability, and transparency.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Cleaning Partner in Montréal</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Unlike large national companies who subcontract and treat clients as numbers, Nettoyage Uno provides true partnerships. Every client gets the same quality, communication, and attention.
              </p>
            </div>
          </FadeInSection>
          
          <div className="space-y-16">
            {reasons.map((reason, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} ${index % 2 === 1 ? 'bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-lg' : ''}`}>
                <FadeInSection className="flex-1" delay={index * 0.2}>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                        className="mr-4"
                      >
                        <IconBadge 
                          icon={reason.icon} 
                          color={index === 0 ? 'indigo' : index === 1 ? 'blue' : index === 2 ? 'amber' : index === 3 ? 'violet' : 'emerald'} 
                          size="lg" 
                        />
                      </motion.div>
                      <h2 className="text-3xl font-bold text-gray-900">{reason.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{reason.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {reason.details.map((detail, detailIndex) => (
                        <motion.div 
                          key={detailIndex} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 + detailIndex * 0.05 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </FadeInSection>
                
                <FadeInSection className="flex-1" delay={index * 0.2 + 0.1}>
                  <div className="flex-1">
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <reason.icon className="w-24 h-24 text-gray-300" />
                    </div>
                  </div>
                </FadeInSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-warm-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Guarantees to You</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                When you partner with Nettoyage Uno, you're not just hiring a cleaning service. You're gaining peace of mind with our comprehensive guarantees.
              </p>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <motion.div 
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center"
                  whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <IconBadge 
                      icon={Star} 
                      color="emerald" 
                      size="lg" 
                      className="mx-auto"
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{guarantee.title}</h3>
                  <p className="text-gray-600">{guarantee.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">In-House Staff vs. Subcontractors</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Many cleaning companies use subcontractors to cut costs, leading to inconsistent service and communication gaps. At Nettoyage Uno, every team member is our employee, ensuring accountability and quality control.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This means you get the same team members, consistent quality, and direct communication every time. When issues arise, we handle them immediately because we're accountable to you, not a third party.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Direct Employment Model</h3>
                    <p className="text-gray-600">All cleaning staff are Nettoyage Uno employees with full benefits and training.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Control</h3>
                    <p className="text-gray-600">Consistent standards and immediate issue resolution through direct management.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Sustainable Commercial Cleaning Montréal</h3>
                    <p className="text-gray-600">Environmental responsibility built into our operations and product selection.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <Reveal>
                <MotionImage
                  src="/images/company/team.svg"
                  alt="Our in-house team"
                  className="rounded-2xl"
                />
              </Reveal>
            </div>
            
            <div className="mt-8 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What Our Montréal Partners Say</h3>
              <blockquote className="text-gray-600 mb-4 italic">
                "Nettoyage Uno has been our cleaning partner for over two years. Their team is reliable, professional, and always responsive to our needs. The quality is consistently excellent."
              </blockquote>
              <footer className="text-sm text-gray-500">— Property Manager, Downtown Montréal Office Building</footer>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 uno-cta uno-noise">
        <GradientBackdrop variant="cta" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Difference?</h2>
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Partnership Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us show you how commercial cleaning can feel different — professional, consistent, and built around your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn-cta inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              Get a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="btn-cta-amber inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyPartnerPage;