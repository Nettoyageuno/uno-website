import React from 'react';
import { Link } from 'react-router-dom';
import { Building, ArrowRight, Clock, Shield, Users, CheckCircle, Sparkles, Coffee, Briefcase, Zap } from 'lucide-react';
import SEO from '../../components/SEO';
import MotionImage from '../../components/ui/MotionImage';
import Reveal from '../../components/motion/Reveal';
import BenefitsRow from '../../components/sections/BenefitsRow';
import { CheckCircle2 } from 'lucide-react';

const OfficeCleaningPage: React.FC = () => {
  const services = [
    'Daily office maintenance and tidying',
    'Restroom cleaning and sanitization',
    'Kitchen and break room service',
    'Conference room preparation',
    'Reception area care',
    'Waste and recycling management',
    'Floor cleaning and maintenance',
    'Desk and workstation cleaning',
    'High-touch surface disinfection',
    'Supply restocking',
    'Meeting room setup assistance'
  ];

  const faqs = [
    {
      question: 'Can you clean during business hours without disrupting work?',
      answer: 'Yes, we specialize in discreet daytime cleaning that allows your team to continue working normally. We focus on common areas, restrooms, and kitchens during business hours, saving detailed desk cleaning for after hours when preferred.'
    },
    {
      question: 'How do you handle confidential documents and office security?',
      answer: 'Our team is fully bonded and trained in office security protocols. We never disturb papers or documents on desks, and all staff understand confidentiality requirements for professional environments.'
    },
    {
      question: 'What supplies do you provide vs. what should we stock?',
      answer: 'We bring all cleaning supplies and equipment. For restrooms, we can restock paper towels, toilet paper, and soap if you prefer, or you can maintain your own supplies - whatever works best for your office operations.'
    },
    {
      question: 'Can you adjust cleaning frequency during busy or slow periods?',
      answer: 'Absolutely. Many of our office clients adjust frequency seasonally or around major projects. We can scale service up or down with advance notice to match your business needs and budget.'
    },
    {
      question: 'Do you provide specialized cleaning for medical or legal offices?',
      answer: 'Yes, we understand the specific requirements for professional service offices including confidentiality, specialized sanitization for medical spaces, and the professional appearance standards these businesses require.'
    }
  ];

  const scheduleOptions = [
    {
      title: 'Daily Service',
      description: 'Full office maintenance every business day',
      ideal: 'High-traffic offices, medical practices, customer-facing businesses'
    },
    {
      title: 'Weekly Service', 
      description: 'Comprehensive weekly cleaning with trash service',
      ideal: 'Small to medium offices, professional services, consulting firms'
    },
    {
      title: 'Bi-Weekly Service',
      description: 'Regular maintenance every two weeks',
      ideal: 'Low-traffic offices, remote-work businesses, storage facilities'
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Office & Corporate Cleaning Services Montréal | Nettoyage Uno"
        description="Professional office cleaning services in Montréal. Daily maintenance, deep cleaning, corporate buildings. Local team, flexible scheduling, custom plans."
        keywords="office cleaning Montréal, corporate cleaning, commercial janitorial services"
        canonical="https://nettoyageuno.com/services/office-cleaning"
      />

      {/* Hero Section */}
      <section className="relative bg-warm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Building className="w-16 h-16 text-gray-700" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight reveal">
              Office & Corporate Cleaning Services
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Professional office cleaning in Montréal that keeps your workplace productive, healthy, and welcoming. Flexible day or evening schedules that work around your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 reveal">Professional Office Maintenance</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A clean office environment directly impacts employee productivity, client impressions, and workplace morale. Professional office cleaning goes beyond basic tidying to create spaces where people enjoy working and clients feel confident in your business.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Montréal office cleaning team understands the unique needs of corporate environments. We work efficiently around your business operations, whether you prefer daytime maintenance or after-hours deep cleaning.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From single offices to multi-floor corporate buildings, we tailor our approach to your specific workplace culture, security requirements, and professional standards.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Cleaning Services</h3>
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
                  title="Benefits of Professional Office Cleaning"
                  items={[
                    {
                      icon: 'Users',
                      title: 'Employee Health',
                      body: 'Regular sanitization creates healthier work environments and reduces sick days.'
                    },
                    {
                      icon: 'Briefcase',
                      title: 'Professional Image',
                      body: 'Clean offices create positive impressions for clients and visitors.'
                    },
                    {
                      icon: 'Zap',
                      title: 'Productivity Focus',
                      body: 'Employees perform better in clean, organized environments.'
                    },
                    {
                      icon: 'Clock',
                      title: 'Flexible Scheduling',
                      body: 'Service that works around your business operations and hours.'
                    }
                  ]}
                  badges={['Professional Standards', 'Employee Focused', 'Flexible Timing', 'Health & Safety']}
                />
              </div>
            </div>

            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <Reveal>
                <MotionImage
                  src="/images/services/office.svg"
                  alt="Professional office cleaning service in Montréal"
                  className="rounded-2xl"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Options */}
      <section className="py-16 bg-warm-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 reveal">Flexible Scheduling Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work around your business schedule with cleaning options that fit your operations and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scheduleOptions.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Ideal for:</span> {option.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-stone">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 reveal">Office Cleaning Questions</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Elevate Your Office Environment?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Create a workplace your team loves and clients respect. Get a custom office cleaning proposal that fits your schedule and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn-cta inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              Get Your Office Quote
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

export default OfficeCleaningPage;