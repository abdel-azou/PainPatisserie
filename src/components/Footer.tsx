import React from 'react';
import { ChefHat, Instagram, Facebook, Clock, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chocolate text-white py-16" itemScope itemType="https://schema.org/Bakery">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <ChefHat className="w-8 h-8 text-gold" aria-hidden="true" />
              <span className="text-2xl font-bold font-playfair" itemProp="name">
                Pain Pâtisserie 
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md" itemProp="description">
  Découvrez notre <strong>boulangerie-pâtisserie artisanale à Evere</strong>, où nous 
  perpétuons l'art du <strong>pain frais</strong>, des <strong>viennoiseries</strong> et 
  des <strong>pâtisseries fines</strong> depuis 1987. Nos spécialités comprennent les 
  <strong>trompe-l'œil pâtissiers</strong> aux <strong>fruits frais et secs</strong>,
  les délicieux <strong>gâteaux au chocolat</strong> fondants, et nos incontournables 
  <strong>tartes aux fraises</strong> et <strong>framboises</strong> de saison. Savourez 
  l'onctuosité de nos créations au <strong>moka</strong> et à la <strong>vanille</strong> 
  de Madagascar, ou laissez-vous tenter par notre <strong>tarte aux pommes</strong> traditionnelle 
  et notre <strong>sablé breton</strong>. Notre <strong>tarte au fromage</strong> et notre 
  <strong>cheesecake</strong> new-yorkais raviront les amateurs de douceurs crémeuses, 
  tout comme notre <strong>tarte au flan</strong> à l'ancienne. Ne manquez pas notre 
  <strong>gâteau 3 chocolats</strong> signature et nos entremets exotiques aux 
  <strong>fruits de la passion</strong>. Une expérience gustative authentique à Evere.
</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/painpatisserie/?hl=fr" 
                aria-label="Suivez-nous sur Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-chocolate transition-all duration-300"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a 
                href="https://www.facebook.com/painpatisserie/?locale=fr_FR" 
                aria-label="Visitez notre page Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-chocolate transition-all duration-300"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Hours Section */}
          <div>
            <h3 className="text-lg font-semibold font-playfair mb-6 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-gold" aria-hidden="true" /> 
              Horaires d'ouverture
            </h3>
            <meta itemProp="openingHours" content="Mo,We,Th,Fr,Sa,Su 06:00-20:00" />
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Lundi</span>
                <span>06:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Mardi</span>
                <span className="text-red-300 font-medium">Fermé</span>
              </li>
              <li className="flex justify-between">
                <span>Mercredi</span>
                <span>06:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Jeudi</span>
                <span>06:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Vendredi</span>
                <span>06:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi</span>
                <span>06:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span>06:00 - 20:00</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-playfair mb-6">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', id: 'home' },
                { name: 'Nos Pâtisseries', id: 'gallery' },
                { name: 'Pain Artisanal', id: 'about' },
                { name: 'Trompe-l\'œil', id: 'gallery' },
                { name: 'À Propos', id: 'about' },
                { name: 'Contact & Commandes', id: 'contact' }
              ].map((link) => (
                <li key={link.id + link.name}>
                  <a 
                    href={`#${link.id}`}
                    className="text-gray-300 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div itemScope itemType="https://schema.org/LocalBusiness">
            <h3 className="text-lg font-semibold font-playfair mb-6 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-gold" aria-hidden="true" /> 
              Contact
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="sr-only">Adresse</span>
                <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">Chaussée de Louvain 906</span><br />
                  <span itemProp="postalCode">1140</span> <span itemProp="addressLocality">Evere</span><br />
                  <span itemProp="addressCountry">Belgique</span>
                </span>
              </li>
              <li className="pt-2 flex items-center">
                <Phone className="w-4 h-4 mr-2 text-gold" aria-hidden="true" />
                <a 
                  href="tel:+32472250578"
                  className="hover:text-gold transition-colors duration-300"
                  itemProp="telephone"
                >
                  0472 25 05 78
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-gold" aria-hidden="true" />
                <a 
                  href="mailto:contact@painpatisserie.be"
                  className="hover:text-gold transition-colors duration-300"
                  itemProp="email"
                >
                  contact@painpatisserie.be
                </a>
              </li>
              <li className="pt-3">
                <a 
                  href="https://goo.gl/maps/YS7DjuczPmZqD9Qe6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-gold/20 hover:bg-gold/40 rounded text-white transition-all"
                >
                  Itinéraire Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-gray-300 flex flex-col md:flex-row md:justify-between">
          <p>&copy; 2025 Pain Pâtisserie. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="/mentions-legales" className="hover:text-gold">Mentions légales</a>
            <a href="/politique-de-confidentialite" className="hover:text-gold">Politique de confidentialité</a>
          </div>
        </div>
      </div>
      
      {/* Structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
      {
        "@context": "https://schema.org",
        "@type": "Bakery",
        "name": "Pain Patisserie",
        "image": "/comptoir.jpeg",
        "url": "https://painpatisserie.be",
        "telephone": "+32472250578",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Chaussée de Louvain 906",
          "addressLocality": "Evere",
          "postalCode": "1140",
          "addressCountry": "BE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 50.867813,
          "longitude": 4.4086958
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "06:00",
            "closes": "20:00"
          }
        ],
        "servesCuisine": "Boulangerie et pâtisserie artisanale",
        "description": "Boulangerie-pâtisserie artisanale à Evere proposant pains artisanaux, viennoiseries, pâtisseries fines et trompe-l'œil aux fruits frais et secs.",
        "keywords": "boulangerie Evere, pâtisserie Bruxelles, pain artisanal, trompe-l'œil pâtissier, viennoiseries Evere"
      }
      `}} />
    </footer>
  );
};

export default Footer;