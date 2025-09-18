@@ .. @@
 import React from 'react';
 import { Link } from 'react-router-dom';
 import { Sparkles, CheckCircle, ArrowRight, Droplets, Wind, Zap, AlertCircle } from 'lucide-react';
 import SEO from '../../components/SEO';
+import IconBadge from '../../components/IconBadge';

 const SpecializedAddOnsPage: React.FC = () => {
 }
@@ .. @@
             {specializedServices.map((service, index) => (
               <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                 <div className="flex items-center mb-4">
-                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
-                    <service.icon className="w-6 h-6 text-gray-700" />
-                  </div>
+                  <div className="mr-4">
+                    <IconBadge 
             )
             )
             }
+                      icon={service.icon} 
+                      color={index === 0 ? 'emerald' : index === 1 ? 'amber' : index === 2 ? 'blue' : 'violet'} 
+                      size="md" 
+                    />
+                  </div>
                   <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                 </div>