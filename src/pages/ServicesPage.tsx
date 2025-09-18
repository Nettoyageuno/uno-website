import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Warehouse, ConstructionIcon as Construction, Sparkles, Wind, ArrowRight, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import IconBadge from '../components/IconBadge';
import FadeInSection from '../components/FadeInSection';
import GradientBackdrop from '../components/brand/GradientBackdrop';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Building,
      title: 'Office & Corporate Cleaning',
      description: 'Reliable maintenance for offices, corporate buildings, and professional spaces. Flexible day or night scheduling that works around your operations.',
      features: ['Daily office maintenance', 'Conference room cleaning', 'Kitchen and break room service', 'Reception area care', 'Restroom sanitization'],
      ecoNote: 'We use environmentally safe products and methods whenever possible.',
      link: '/services/office-cleaning'
    },
    {
      icon: Building,
      title: 'Building & Condo Common Area Cleaning',
      description: 'Professional maintenance for lobbies, hallways, elevators, and shared spaces in residential and commercial buildings.',
      features: ['Lobby and entrance cleaning', 'Hallway maintenance', 'Elevator cleaning', 'Parking area service', 'Garbage room management'],
      ecoNote: 'Eco-certified products protect both residents and the environment.',
      link: '/services/building-cleaning'
    },
    {
      icon: Warehouse,
      title: 'Warehouse & Industrial Cleaning',
      description: 'Large-scale cleaning solutions for warehouses and industrial operations with safety-focused protocols and flexible scheduling.',
      features: ['Floor maintenance', 'Equipment cleaning', 'Loading dock service', 'Warehouse organization', 'Safety compliance'],
      ecoNote: 'Sustainable practices that meet industrial safety and environmental standards.',
      link: '/services/warehouse-cleaning'
    },
    {
      icon: Construction,
      title: 'Post-Construction Cleaning',
      description: 'Complete cleanup services that transform construction sites into move-in ready spaces for businesses and residents.',
      features: ['Debris removal', 'Dust elimination', 'Window and fixture cleaning', 'Floor preparation', 'Final inspection'],
      ecoNote: 'Responsible disposal and recycling of construction materials.',
      link: '/services/post-construction'
    },
    {
      icon: Sparkles,
      title: 'Specialized Add-Ons',
      description: 'Custom cleaning solutions for unique needs including carpet care, window cleaning, and deep sanitization services.',
      features: ['Carpet and upholstery cleaning', 'Window cleaning', 'Deep sanitization', 'Emergency cleanup', 'Special event preparation'],
      ecoNote: 'Green cleaning methods for specialized services when available.',
      link: '/services/specialized-add-ons'
    },
    {
      icon: Wind,
      title: 'Duct & Ventilation Cleaning',
      description: 'Professional HVAC duct and ventilation cleaning for healthier air and better system performance.',
      features: ['Supply & return duct cleaning', 'Air handler units & rooftop units', 'HEPA-filtered containment', 'Coils and plenums', 'Post-renovation cleanup'],
      ecoNote: 'Improved air quality through thorough, chemical-free cleaning methods.',
      link: '/services/duct-ventilation-cleaning'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative uno-hero uno-noise py-16">
        <GradientBackdrop />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Our Cleaning Services in Montréal
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                From daily office cleaning to large-scale industrial maintenance, Nettoyage Uno delivers reliable, tailored services that keep your spaces running smoothly—with sustainable practices built into every plan.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <motion.div 
                  className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        <IconBadge 
                          icon={service.icon} 
                          color={index === 0 ? 'indigo' : index === 1 ? 'blue' : index === 2 ? 'teal' : index === 3 ? 'amber' : index === 4 ? 'violet' : 'emerald'} 
                          size="md" 
                        />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-lg mb-4">
                      <h4 className="font-medium text-gray-900 mb-1 text-sm">Industry Challenge:</h4>
                      <p className="text-gray-600 text-xs">
                        {index === 0 && "Maintaining professional appearance during business hours while ensuring employee health and client impressions."}
                        {index === 1 && "Balancing resident access needs with thorough cleaning of high-traffic common areas."}
                        {index === 2 && "Working safely around machinery and production schedules while maintaining industry-specific compliance."}
                        {index === 3 && "Meeting tight project deadlines while ensuring spaces are truly move-in ready for occupancy."}
                        {index === 4 && "Handling unique cleaning requirements that standard services can't address effectively."}
                        {index === 5 && "Improving indoor air quality and HVAC efficiency without disrupting business operations."}
                      </p>
                    </div>
                    <div className="flex items-start mb-6 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                      <div className="mr-3 mt-0.5">
                        <IconBadge icon={Leaf} color="emerald" size="sm" />
                      </div>
                      <p className="text-emerald-700 text-sm">{service.ecoNote}</p>
                    </div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link 
                        to={service.link}
                        className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                      >
                        Learn More About This Service
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </motion.div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-gray-300" />
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>


      {/* Service Areas */}
      <section className="py-16 bg-warm-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving Greater Montréal</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our local team provides reliable commercial cleaning services throughout the Montréal area with the personalized attention your business deserves.
              </p>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {['Downtown Montréal', 'Dorval', 'Saint-Laurent', 'Lachine', 'West Island'].map((area, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <motion.div 
                  className="py-4 px-3 bg-white rounded-lg shadow-sm"
                  whileHover={{ y: -2, boxShadow: "0 4px 12px -2px rgb(0 0 0 / 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-gray-700 font-medium">{area}</span>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 uno-cta uno-noise">
        <GradientBackdrop variant="cta" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-white mb-4">Looking for a Flexible Cleaning Plan?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a customized proposal within 24 hours. We'll work with you to create the perfect cleaning solution for your Montréal business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contact" 
                  className="btn-cta inline-flex items-center justify-center px-8 py-3 text-base font-medium"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/services/specialized-add-ons" 
                  className="btn-cta-amber inline-flex items-center justify-center px-8 py-3 text-base font-medium"
                >
                  See Add-On Services
                </Link>
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;