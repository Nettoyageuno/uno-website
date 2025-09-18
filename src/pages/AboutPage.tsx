import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MapPin, Star, ArrowRight, CheckCircle, Clock, Shield, BarChart3, Handshake, Leaf } from 'lucide-react';
import IconBadge from '../components/IconBadge';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: BarChart3,
      title: 'Professionalism',
      description: 'Clear communication, accountability, and reliable service in every interaction.'
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'Every client is treated as a valued partner, not just another contract.'
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Proudly based in Montréal, serving the city and surrounding regions with deep local knowledge.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Eco-certified products and sustainable practices integrated into our services.'
    }
  ];

  const stats = [
    { number: '5+', label: 'Years Serving Montréal' },
    { number: '200+', label: 'Business Partners' },
    { number: '24/7', label: 'Emergency Response' },
    { number: '100%', label: 'Satisfaction Guarantee' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-warm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              About Nettoyage Uno
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              A Montréal-based commercial cleaning company built on professionalism, partnership, and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our mission is simple: to make facility managers' and property managers' jobs easier. We take ownership of every cleaning detail, so you can focus on what matters most — running your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nettoyage Uno was founded with a simple belief: commercial cleaning should be more than just a service - it should be a partnership. Too many businesses struggle with unreliable cleaning companies that treat facilities as just another job rather than understanding the unique needs of each business.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We started Nettoyage Uno in Montréal because we saw an opportunity to do cleaning differently. By focusing on partnership rather than just service delivery, we've built relationships with businesses who trust us to maintain their most important asset - their professional environment.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we serve businesses across greater Montréal, from small offices in Downtown to large warehouses in Saint-Laurent. Every client partnership teaches us something new, and we use that knowledge to continually improve our service for all our business partners.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-warm-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide every interaction, every cleaning visit, and every business relationship we build in Montréal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <IconBadge 
                    icon={value.icon} 
                    color={index === 0 ? 'indigo' : index === 1 ? 'blue' : index === 2 ? 'amber' : 'emerald'} 
                    size="lg" 
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <Users className="w-32 h-32 text-gray-300" />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our In-House Team</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our in-house team is fully trained, vetted, and managed directly by us — never subcontracted. You'll always know who is in your building, and you can trust the same consistent faces week after week.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Thoroughly Vetted Staff</h3>
                    <p className="text-gray-600">Background checks, references, and ongoing training for all team members.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Local Knowledge</h3>
                    <p className="text-gray-600">Understanding of Montréal business culture and facility requirements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Ongoing Training</h3>
                    <p className="text-gray-600">Regular training on cleaning techniques, safety protocols, and customer service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Commitment */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Committed to Montréal</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to serve the Montréal business community and contribute to the success of local enterprises across the city.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Focus</h3>
              <p className="text-gray-600">Serving Downtown Montréal, Dorval, Saint-Laurent, Lachine, and the greater Montréal area.</p>
            </div>
            
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Partner</h3>
              <p className="text-gray-600">Supporting local businesses and contributing to Montréal's economic growth and success.</p>
            </div>
            
            <div className="text-center p-6">
              <Star className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Commitment</h3>
              <p className="text-gray-600">Maintaining the highest standards in everything we do, from service delivery to client communication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 band-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Work with a Team That Treats You as a Partner</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the difference of working with a local team that values professionalism, accountability, and partnership above all else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn-cta inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              Start Your Partnership
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="btn-cta-amber inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;