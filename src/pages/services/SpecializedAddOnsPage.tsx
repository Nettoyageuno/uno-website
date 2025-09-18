import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Droplets, Wind, Zap, AlertCircle, Settings, Wrench } from 'lucide-react';
import SEO from '../../components/SEO';
import ColorChip from '../../components/ui/ColorChip';
import SoftPanel from '../../components/ui/SoftPanel';
import MotionImage from '../../components/ui/MotionImage';
import Reveal from '../../components/motion/Reveal';
import { CheckCircle2 } from 'lucide-react';
const SpecializedAddOnsPage: React.FC = () => {
  const services = [
    'Carpet and upholstery deep cleaning',
    'Interior and exterior window cleaning',
    'Deep sanitization and disinfection',
    'Floor stripping, waxing, and polishing',
    'Emergency spill cleanup',
    'Event preparation and cleanup',
    'Graffiti removal and surface restoration',
    'Pressure washing for outdoor areas',
    'Odor elimination services'
  ];

  const specializedServices = [
    {
      icon: Droplets,
      title: 'Deep Sanitization',
      description: 'Comprehensive disinfection using hospital-grade products for health-critical environments.',
      details: ['Electrostatic disinfection', 'High-touch surface treatment', 'Air quality improvement', 'Pathogen elimination']
    },
    {
      icon: Wind,
      title: 'Carpet & Upholstery Care',
      description: 'Professional carpet cleaning and upholstery maintenance to extend the life of your investments.',
      details: ['Steam cleaning', 'Stain removal', 'Fabric protection', 'Odor elimination']
    },
    {
      icon: Zap,
      title: 'Pressure Washing', 
      description: 'High-pressure cleaning for outdoor areas, storefronts, loading docks, and specialized stain removal.',
      details: [
        'Outdoor areas and storefronts',
        'Loading docks and walkways', 
        'Gum and stain removal',
        'Oil spot treatment',
        'Surface restoration'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Specialty Projects',
      description: 'Custom solutions for unique cleaning challenges and one-time special requirements.',
      details: ['Event preparation', 'Move-in/move-out cleaning', 'Seasonal deep cleaning', 'Renovation cleanup']
    }
  ];

  const faqs = [
    {
      question: 'How often should carpets be professionally cleaned in an office?',
      answer: 'Most office carpets should be professionally cleaned every 6-12 months, depending on traffic. High-traffic areas may need quarterly cleaning, while low-traffic areas can go longer between deep cleanings.'
    },
    {
      question: 'What type of disinfection do you use for deep sanitization?',
      answer: 'We use hospital-grade disinfectants and electrostatic spraying equipment for comprehensive coverage. Our products are EPA-approved and effective against viruses, bacteria, and other pathogens while being safe for office environments.'
    },
    {
      question: 'Do you provide emergency cleaning services?',
      answer: 'Yes, we offer 24/7 emergency cleaning response for situations like water damage, spills, vandalism, or any urgent cleaning needs that can\'t wait for regular service.'
    },
    {
      question: 'Can these services be added to our regular cleaning contract?',
      answer: 'Absolutely. Many of our specialized services can be scheduled regularly (like quarterly carpet cleaning) or added on an as-needed basis to your existing cleaning contract.'
    },
    {
      question: 'Do you clean windows on high-rise buildings?',
      answer: 'We provide interior window cleaning as part of our regular services. For exterior high-rise window cleaning, we work with certified partners who specialize in high-rise access and safety equipment.'
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Specialized Cleaning Add-On Services | Montréal | Nettoyage Uno"
        description="Specialized cleaning add-ons in Montréal: carpet cleaning, window cleaning, deep sanitization, emergency cleanup. Custom solutions for unique needs."
        keywords="specialized cleaning Montréal, carpet cleaning, window cleaning, deep sanitization"
        canonical="https://nettoyageuno.com/services/specialized-add-ons"
      />

      {/* Hero Section */}
      <section className="relative bg-warm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-16 h-16 text-gray-700" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight reveal">
              Specialized Cleaning Add-On Services
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Complement your routine program with on-demand and scheduled specialty services. From floor refinishing to window care, we handle the projects that keep your property looking professional.
            </p>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 reveal">Specialized Service Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When your facility has unique cleaning needs, our specialized services provide the expertise and equipment to handle any challenge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <Reveal key={index} delay={0.05 * index}>
                <div className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              </Reveal>
            ))}
          </div>
          
          <div className="mt-16">
            <div className="aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden">
              <Reveal>
                <MotionImage
                  src="/images/services/addons.svg"
                  alt="Specialized add-ons such as pressure washing and detailing"
                  className="rounded-2xl"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 bg-warm-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 reveal">Complete Specialized Service List</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our specialized add-on services can be scheduled regularly or requested as needed to complement your regular cleaning program.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-gray-200">
                <ul className="uno-checklist">
                  <li>
                    <CheckCircle2 className="uno-check-icon" />
                    <span>{service}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              <strong>Also available:</strong> For ventilation work, see our partner service:{' '}
              <Link
                to="/services/duct-ventilation-cleaning"
                className="text-gray-900 underline hover:text-gray-700 transition-colors"
              >
                Duct &amp; Ventilation Cleaning
              </Link>.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Specialized Capabilities</h4>
            <div className="flex flex-wrap justify-center gap-2">
              <ColorChip icon={Settings} color="emerald">Custom Solutions</ColorChip>
              <ColorChip icon={Zap} color="indigo">Emergency Response</ColorChip>
              <ColorChip icon={Wrench} color="violet">Specialized Equipment</ColorChip>
              <ColorChip icon={AlertCircle} color="amber">Problem Solving</ColorChip>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 reveal">How We Handle Specialized Requests</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every specialized cleaning challenge is unique. Here's how we ensure you get exactly the service you need.
            </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-lg font-bold text-xl flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">We evaluate your specific challenge and determine the best approach, equipment, and timeline.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-lg font-bold text-xl flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Plan</h3>
              <p className="text-gray-600">We create a detailed plan with timeline, equipment needed, and cost estimate for your approval.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-lg font-bold text-xl flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Execution</h3>
              <p className="text-gray-600">Our trained specialists complete the work using appropriate equipment and techniques for optimal results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-warm-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 reveal">Specialized Cleaning Questions</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4">Need a Specialized Cleaning Solution?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether it's a one-time deep cleaning project or ongoing specialized maintenance, we'll create a custom solution for your Montréal facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn-cta inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              Discuss Your Needs
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

export default SpecializedAddOnsPage;