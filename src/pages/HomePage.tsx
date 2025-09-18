import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building, Warehouse, ConstructionIcon as Construction, Sparkles, ShieldCheck, Users, Clock, MapPin, CheckCircle } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';
import IconBadge from '../components/IconBadge';
import Reveal from '../components/motion/Reveal';
import MotionImage from '../components/ui/MotionImage';
import AnimatedImage from '../components/media/AnimatedImage';
import ParallaxHero from '../components/media/ParallaxHero';
import { useI18n } from '../i18n/index';
import GradientBackdrop from '../components/brand/GradientBackdrop';

const HomePage: React.FC = () => {
  const { t, locale } = useI18n();

  // Get base path for current locale
  const getLocalePath = (path: string) => {
    return locale === 'fr-CA' ? `/fr${path}` : path;
  };

  const services = [
    {
      icon: Building,
      title: t('nav.officeCleaningNav'),
      description: 'Professional cleaning that keeps your workplace productive and welcoming.',
      link: getLocalePath('/services/office-cleaning')
    },
    {
      icon: Building,
      title: t('nav.buildingCleaningNav'),
      description: 'Maintain beautiful shared spaces that residents and visitors appreciate.',
      link: getLocalePath('/services/building-cleaning')
    },
    {
      icon: Warehouse,
      title: t('nav.warehouseCleaningNav'),
      description: 'Large-scale cleaning solutions designed for industrial operations.',
      link: getLocalePath('/services/warehouse-cleaning')
    },
    {
      icon: Construction,
      title: t('nav.postConstructionNav'),
      description: 'Transform construction sites into move-in ready spaces.',
      link: getLocalePath('/services/post-construction')
    },
    {
      icon: Sparkles,
      title: t('nav.specializedAddOnsNav'),
      description: 'Custom solutions for unique cleaning challenges and special projects.',
      link: getLocalePath('/services/specialized-add-ons')
    }
  ];

  const whyPartner = [
    {
      icon: Users,
      title: 'In-House Team',
      description: 'All our cleaning staff are employees, not subcontractors. This means consistent quality and accountability on every visit.'
    },
    {
      icon: Clock,
      title: 'Responsive Service',
      description: 'We respond quickly to your needs and concerns. Emergency cleanups, schedule changes, and special requests are handled promptly.'
    },
    {
      icon: ShieldCheck,
      title: 'Client Portal',
      description: 'Track your service schedule, submit requests, and communicate with your cleaning team through our dedicated client portal.'
    },
    {
      icon: MapPin,
      title: 'Local Montréal Focus',
      description: 'We know Montréal businesses and their unique needs. Our local team provides personalized service you can count on.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Site Walkthrough',
      description: 'We visit your facility to understand your space, needs, and expectations.'
    },
    {
      number: '02',
      title: 'Custom Plan',
      description: 'We create a detailed cleaning plan and proposal tailored to your requirements.'
    },
    {
      number: '03',
      title: 'Service Launch',
      description: 'Our team begins service with a detailed orientation and quality checklist.'
    },
    {
      number: '04',
      title: 'Ongoing Review',
      description: 'Regular check-ins ensure our service continues to meet your evolving needs.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <ParallaxHero image="/images/hero-mtl-office.jpg" alt="Modern Montréal office lobby" className="relative uno-hero uno-noise">
        <GradientBackdrop />
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t('home.heroTitle')}
          </h1>
          <FadeInSection delay={0.2}>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('home.heroSubtitle')}
            </p>
          </FadeInSection>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={getLocalePath('/contact')} 
                className="btn-cta inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                {t('home.requestSiteVisit')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={getLocalePath('/contact')} 
                className="btn-cta-amber inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                {t('home.talkToUs')}
              </Link>
            </motion.div>
          </div>
        </div>
      </ParallaxHero>

      {/* Service Preview Cards */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.servicesTitle')}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('home.servicesSubtitle')}
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Reveal key={index}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={service.link}
                    className="group block p-6 card hover-lift transition-all duration-300"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <service.icon className="w-12 h-12 text-gray-700 mb-4 group-hover:text-gray-900 transition-colors" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    <div className="mt-4 flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
          
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 bg-warm-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.whyPartnerTitle')}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('home.whyPartnerSubtitle')}
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPartner.map((item, index) => (
              <Reveal key={index} delay={0.05 * index}>
                <div className="text-center">
                  <motion.div 
                    className="inline-flex items-center justify-center mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <IconBadge 
                      icon={item.icon} 
                      color={index === 0 ? 'indigo' : index === 1 ? 'blue' : index === 2 ? 'violet' : 'amber'} 
                      size="lg" 
                    />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Outline */}
      <section className="py-16 bg-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.processTitle')}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('home.processSubtitle')}
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Reveal key={index}>
                <div className="relative">
                  <div className="text-center">
                    <motion.div 
                      className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-lg font-bold text-lg mb-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 300 }}
                    >
                      {step.number}
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-8 h-px bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-warm-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12">
                <motion.div 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  <span className="text-gray-700 font-medium">24h Proposal Guarantee</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  <span className="text-gray-700 font-medium">Fully Insured & Bonded</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  <span className="text-gray-700 font-medium">Local Montréal Team</span>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 uno-cta uno-noise">
        <GradientBackdrop variant="cta" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4">{t('home.readyToPartnerTitle')}</h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('home.readyToPartnerSubtitle')}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={getLocalePath('/contact')} 
                className="btn-cta inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                {t('home.getCustomQuote')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

export default HomePage;