import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './i18n/index';
import ThemeSwitcher from './components/ui/ThemeSwitcher';
import { initTheme } from './utils/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import OfficeCleaningPage from './pages/services/OfficeCleaningPage';
import BuildingCleaningPage from './pages/services/BuildingCleaningPage';
import WarehouseCleaningPage from './pages/services/WarehouseCleaningPage';
import PostConstructionPage from './pages/services/PostConstructionPage';
import SpecializedAddOnsPage from './pages/services/SpecializedAddOnsPage';
import DuctVentCleaningPage from './pages/services/DuctVentCleaningPage';
import IndustriesPage from './pages/IndustriesPage';
import WhyPartnerPage from './pages/WhyPartnerPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GetQuotePage from './pages/GetQuotePage';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';
import BlogCategoryPage from './pages/BlogCategoryPage';
import BlogTagPage from './pages/BlogTagPage';
import SEO from './components/SEO';
import GlobalSchema from './components/GlobalSchema';

function App() {
  React.useEffect(() => { initTheme(); }, []);

  return (
    <Router>
      <I18nProvider>
        <GlobalSchema />
        <div className="min-h-screen flex flex-col rounded-site">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* English Routes */}
              <Route path="/" element={
                <>
                  <SEO 
                    title="Commercial Cleaning Services in Montréal | Nettoyage Uno"
                    description="Trusted commercial cleaning partner in Montréal. Office cleaning, warehouse cleaning, post-construction cleanup. Local team, custom plans, 24h proposals."
                    keywords="commercial cleaning Montréal, janitorial services, office cleaning, warehouse cleaning, building maintenance"
                  />
                  <HomePage />
                </>
              } />
              <Route path="/services" element={
                <>
                  <SEO 
                    title="Commercial Cleaning Services | Office, Warehouse & More | Nettoyage Uno"
                    description="Complete commercial cleaning services in Montréal: office cleaning, building maintenance, warehouse cleaning, post-construction cleanup, and specialized add-ons."
                    keywords="commercial cleaning services, office cleaning Montréal, warehouse cleaning, janitorial services"
                  />
                  <ServicesPage />
                </>
              } />
              <Route path="/services/office-cleaning" element={
                <>
                  <SEO 
                    title="Office & Corporate Cleaning Services Montréal | Nettoyage Uno"
                    description="Professional office cleaning services in Montréal. Daily maintenance, deep cleaning, corporate buildings. Local team, flexible scheduling, custom plans."
                    keywords="office cleaning Montréal, corporate cleaning, commercial janitorial services"
                  />
                  <OfficeCleaningPage />
                </>
              } />
              <Route path="/services/building-cleaning" element={
                <>
                  <SEO 
                    title="Building & Condo Common Area Cleaning | Montréal | Nettoyage Uno"
                    description="Building and condo common area cleaning in Montréal. Lobbies, hallways, elevators, parking areas. Professional maintenance for residential and commercial buildings."
                    keywords="building cleaning Montréal, condo cleaning, common area maintenance"
                  />
                  <BuildingCleaningPage />
                </>
              } />
              <Route path="/services/warehouse-cleaning" element={
                <>
                  <SEO 
                    title="Warehouse & Industrial Cleaning Services Montréal | Nettoyage Uno"
                    description="Professional warehouse and industrial cleaning in Montréal. Large facilities, specialized equipment, safety compliance. Custom schedules for industrial operations."
                    keywords="warehouse cleaning Montréal, industrial cleaning, facility maintenance"
                  />
                  <WarehouseCleaningPage />
                </>
              } />
              <Route path="/services/post-construction" element={
                <>
                  <SEO 
                    title="Post-Construction Cleaning Services Montréal | Nettoyage Uno"
                    description="Post-construction cleanup in Montréal. Construction debris removal, detailed cleaning, move-in ready preparation. Commercial and residential projects."
                    keywords="post-construction cleaning Montréal, construction cleanup, debris removal"
                  />
                  <PostConstructionPage />
                </>
              } />
              <Route path="/services/specialized-add-ons" element={
                <>
                  <SEO 
                    title="Specialized Cleaning Add-On Services | Montréal | Nettoyage Uno"
                    description="Specialized cleaning add-ons in Montréal: carpet cleaning, window cleaning, deep sanitization, emergency cleanup. Custom solutions for unique needs."
                    keywords="specialized cleaning Montréal, carpet cleaning, window cleaning, deep sanitization"
                  />
                  <SpecializedAddOnsPage />
                </>
              } />
              <Route path="/services/duct-ventilation-cleaning" element={
                <>
                  <SEO 
                    title="Duct & Ventilation Cleaning Services Montréal | Nettoyage Uno"
                    description="Professional HVAC duct and ventilation cleaning for healthier air and better system performance. HEPA-filtered cleaning with detailed reporting."
                    keywords="duct cleaning Montréal, ventilation cleaning, HVAC cleaning, air quality improvement"
                  />
                  <DuctVentCleaningPage />
                </>
              } />
              <Route path="/industries" element={
                <>
                  <SEO 
                    title="Industries We Serve | Commercial Cleaning Montréal | Nettoyage Uno"
                    description="Commercial cleaning services for various industries in Montréal: healthcare, manufacturing, retail, hospitality, and more. Industry-specific cleaning protocols."
                    keywords="commercial cleaning industries Montréal, healthcare cleaning, retail cleaning"
                  />
                  <IndustriesPage />
                </>
              } />
              <Route path="/why-partner" element={
                <>
                  <SEO 
                    title="Why Partner with Nettoyage Uno | Commercial Cleaning Montréal"
                    description="Partner with Montréal's trusted commercial cleaning team. In-house staff, client portal, responsive service, local expertise. Your reliable cleaning partner."
                    keywords="commercial cleaning partner Montréal, reliable cleaning services"
                  />
                  <WhyPartnerPage />
                </>
              } />
              <Route path="/about" element={
                <>
                  <SEO 
                    title="About Nettoyage Uno | Commercial Cleaning Company Montréal"
                    description="Learn about Nettoyage Uno, Montréal's trusted commercial cleaning partner. Local team, professional service, commitment to excellence since our founding."
                    keywords="commercial cleaning company Montréal, about Nettoyage Uno"
                  />
                  <AboutPage />
                </>
              } />
              <Route path="/contact" element={
                <>
                  <SEO 
                    title="Contact Nettoyage Uno | Commercial Cleaning Montréal"
                    description="Contact Nettoyage Uno for commercial cleaning in Montréal. Fast support, professional guidance, and sustainable options."
                    keywords="contact commercial cleaning Montréal, cleaning company support, facility maintenance inquiries"
                  />
                  <ContactPage />
                </>
              } />
              <Route path="/get-quote" element={
                <>
                  <SEO 
                    title="Get a Customized Cleaning Quote | Nettoyage Uno Montréal"
                    description="Request a customized commercial cleaning quote for your Montréal facility. Tailored plans, flexible schedules, and sustainable practices."
                    keywords="custom commercial cleaning quote Montréal, eco-friendly office cleaning Montréal, tailored cleaning plans"
                  />
                  <GetQuotePage />
                </>
              } />
              <Route path="/blog" element={
                <>
                  <SEO 
                    title="Insights & Updates | Commercial Cleaning Blog | Nettoyage Uno"
                    description="Expert insights on commercial cleaning, facility management, and industry trends for Montréal businesses. Tips, guides, and updates from cleaning professionals."
                    keywords="commercial cleaning blog, facility management tips, cleaning industry insights"
                  />
                  <BlogIndexPage />
                </>
              } />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/blog/category/:category" element={<BlogCategoryPage />} />
              <Route path="/blog/tag/:tag" element={<BlogTagPage />} />

              {/* French Routes */}
              <Route path="/fr" element={
                <>
                  <SEO 
                    title="Services de Nettoyage Commercial à Montréal | Nettoyage Uno"
                    description="Partenaire de nettoyage commercial de confiance à Montréal. Nettoyage de bureaux, entrepôts, post-construction. Équipe locale, plans personnalisés, propositions 24h."
                    keywords="nettoyage commercial Montréal, services de conciergerie, nettoyage bureaux, nettoyage entrepôts, entretien immeubles"
                  />
                  <HomePage />
                </>
              } />
              <Route path="/fr/services" element={
                <>
                  <SEO 
                    title="Services de Nettoyage Commercial | Bureaux, Entrepôts et Plus | Nettoyage Uno"
                    description="Services complets de nettoyage commercial à Montréal: nettoyage bureaux, entretien immeubles, nettoyage entrepôts, post-construction, et services spécialisés."
                    keywords="services nettoyage commercial, nettoyage bureaux Montréal, nettoyage entrepôts, services conciergerie"
                  />
                  <ServicesPage />
                </>
              } />
              <Route path="/fr/services/office-cleaning" element={
                <>
                  <SEO 
                    title="Services de Nettoyage de Bureaux et Corporatif Montréal | Nettoyage Uno"
                    description="Services professionnels de nettoyage de bureaux à Montréal. Entretien quotidien, nettoyage en profondeur, immeubles corporatifs. Équipe locale, horaires flexibles, plans personnalisés."
                    keywords="nettoyage bureaux Montréal, nettoyage corporatif, services conciergerie commerciale"
                  />
                  <OfficeCleaningPage />
                </>
              } />
              <Route path="/fr/services/building-cleaning" element={
                <>
                  <SEO 
                    title="Nettoyage Aires Communes Immeubles et Condos | Montréal | Nettoyage Uno"
                    description="Nettoyage aires communes immeubles et condos à Montréal. Halls, corridors, ascenseurs, stationnements. Entretien professionnel pour immeubles résidentiels et commerciaux."
                    keywords="nettoyage immeubles Montréal, nettoyage condos, entretien aires communes"
                  />
                  <BuildingCleaningPage />
                </>
              } />
              <Route path="/fr/services/warehouse-cleaning" element={
                <>
                  <SEO 
                    title="Services de Nettoyage Entrepôts et Industriel Montréal | Nettoyage Uno"
                    description="Nettoyage professionnel entrepôts et industriel à Montréal. Grandes installations, équipement spécialisé, conformité sécurité. Horaires personnalisés pour opérations industrielles."
                    keywords="nettoyage entrepôts Montréal, nettoyage industriel, entretien installations"
                  />
                  <WarehouseCleaningPage />
                </>
              } />
              <Route path="/fr/services/post-construction" element={
                <>
                  <SEO 
                    title="Services de Nettoyage Post-Construction Montréal | Nettoyage Uno"
                    description="Nettoyage post-construction à Montréal. Enlèvement débris construction, nettoyage détaillé, préparation emménagement. Projets commerciaux et résidentiels."
                    keywords="nettoyage post-construction Montréal, nettoyage construction, enlèvement débris"
                  />
                  <PostConstructionPage />
                </>
              } />
              <Route path="/fr/services/specialized-add-ons" element={
                <>
                  <SEO 
                    title="Services de Nettoyage Spécialisés | Montréal | Nettoyage Uno"
                    description="Services spécialisés de nettoyage à Montréal: nettoyage tapis, vitres, désinfection profonde, nettoyage urgence. Solutions personnalisées pour besoins uniques."
                    keywords="nettoyage spécialisé Montréal, nettoyage tapis, nettoyage vitres, désinfection profonde"
                  />
                  <SpecializedAddOnsPage />
                </>
              } />
              <Route path="/fr/services/duct-ventilation-cleaning" element={
                <>
                  <SEO 
                    title="Services de Nettoyage Conduits et Ventilation Montréal | Nettoyage Uno"
                    description="Nettoyage professionnel conduits HVAC et ventilation pour air plus sain et meilleure performance système. Nettoyage filtré HEPA avec rapports détaillés."
                    keywords="nettoyage conduits Montréal, nettoyage ventilation, nettoyage HVAC, amélioration qualité air"
                  />
                  <DuctVentCleaningPage />
                </>
              } />
              <Route path="/fr/industries" element={
                <>
                  <SEO 
                    title="Industries Desservies | Nettoyage Commercial Montréal | Nettoyage Uno"
                    description="Services de nettoyage commercial pour diverses industries à Montréal: santé, manufacturier, détail, hôtellerie, et plus. Protocoles de nettoyage spécifiques aux industries."
                    keywords="industries nettoyage commercial Montréal, nettoyage santé, nettoyage détail"
                  />
                  <IndustriesPage />
                </>
              } />
              <Route path="/fr/why-partner" element={
                <>
                  <SEO 
                    title="Pourquoi Choisir Nettoyage Uno | Nettoyage Commercial Montréal"
                    description="Partenaire avec l'équipe de nettoyage commercial de confiance de Montréal. Personnel interne, portail client, service réactif, expertise locale. Votre partenaire de nettoyage fiable."
                    keywords="partenaire nettoyage commercial Montréal, services nettoyage fiables"
                  />
                  <WhyPartnerPage />
                </>
              } />
              <Route path="/fr/about" element={
                <>
                  <SEO 
                    title="À Propos de Nettoyage Uno | Entreprise Nettoyage Commercial Montréal"
                    description="Découvrez Nettoyage Uno, partenaire de nettoyage commercial de confiance de Montréal. Équipe locale, service professionnel, engagement vers l'excellence depuis notre fondation."
                    keywords="entreprise nettoyage commercial Montréal, à propos Nettoyage Uno"
                  />
                  <AboutPage />
                </>
              } />
              <Route path="/fr/contact" element={
                <>
                  <SEO 
                    title="Contactez Nettoyage Uno | Nettoyage Commercial Montréal"
                    description="Contactez Nettoyage Uno pour nettoyage commercial à Montréal. Support rapide, conseils professionnels, et options durables."
                    keywords="contact nettoyage commercial Montréal, support entreprise nettoyage, demandes entretien installations"
                  />
                  <ContactPage />
                </>
              } />
              <Route path="/fr/get-quote" element={
                <>
                  <SEO 
                    title="Obtenez une Soumission de Nettoyage Personnalisée | Nettoyage Uno Montréal"
                    description="Demandez une soumission personnalisée de nettoyage commercial pour vos installations de Montréal. Plans adaptés, horaires flexibles, et pratiques durables."
                    keywords="soumission nettoyage commercial personnalisée Montréal, nettoyage bureaux écologique Montréal, plans nettoyage adaptés"
                  />
                  <GetQuotePage />
                </>
              } />
              <Route path="/fr/blog" element={
                <>
                  <SEO 
                    title="Conseils et Mises à Jour | Blogue Nettoyage Commercial | Nettoyage Uno"
                    description="Conseils d'experts sur nettoyage commercial, gestion installations, et tendances industrie pour entreprises de Montréal. Conseils, guides, et mises à jour de professionnels du nettoyage."
                    keywords="blogue nettoyage commercial, conseils gestion installations, insights industrie nettoyage"
                  />
                  <BlogIndexPage />
                </>
              } />
              <Route path="/fr/blog/:slug" element={<BlogPostPage />} />
              <Route path="/fr/blog/category/:category" element={<BlogCategoryPage />} />
              <Route path="/fr/blog/tag/:tag" element={<BlogTagPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <ThemeSwitcher />
      </I18nProvider>
    </Router>
  );
}

export default App;