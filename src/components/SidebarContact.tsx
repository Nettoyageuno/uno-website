import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

const SidebarContact: React.FC = () => (
  <aside className="space-y-4">
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <h3 className="font-semibold text-gray-900 mb-2">Get in Touch</h3>
      <ul className="text-sm text-gray-700 space-y-2">
        <li className="flex items-center"><Phone className="w-4 h-4 mr-2"/> (514) xxx-xxxx</li>
        <li className="flex items-center"><Mail className="w-4 h-4 mr-2"/> info@nettoyageuno.com</li>
        <li className="flex items-start"><MapPin className="w-4 h-4 mr-2 mt-0.5"/> Montréal, QC & surrounding areas</li>
        <li className="flex items-center"><Clock className="w-4 h-4 mr-2"/> Mon–Fri, 8 AM–6 PM</li>
      </ul>
    </div>

    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <h4 className="font-semibold text-gray-900 mb-1">Emergency Service</h4>
      <p className="text-sm text-gray-700">24/7 availability for urgent cleaning needs.</p>
    </div>

    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
      <div className="flex items-start">
        <ShieldCheck className="w-5 h-5 text-emerald-700 mr-2 mt-0.5"/>
        <div>
          <h4 className="font-semibold text-gray-900">Our Guarantee</h4>
          <p className="text-sm text-gray-700">
            You'll receive a detailed proposal within 24 hours of your site visit. Clear plan, no pressure.
          </p>
        </div>
      </div>
    </div>
  </aside>
);

export default SidebarContact;