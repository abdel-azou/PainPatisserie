import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section 
      id="about" 
      className="py-24 bg-[#faf7f2] relative overflow-hidden"
      ref={ref}
      itemScope 
      itemType="https://schema.org/Bakery"
    >
      {/* SEO-optimized structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
  {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Pain Patisserie",
    "description": "Boulangerie-pâtisserie artisanale proposant pains, viennoiseries, pâtisseries,trompe-loeil et spécialités internationales comme des tacos, msemen et pastilla.",
    "image": "/comptoir.jpeg",
    "servesCuisine": ["Belgian", "French", "International"],
    "priceRange": "$$",
    "telephone": "+32472250578",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chaussée de Louvain 906",
      "addressLocality": "Evere",
      "postalCode": "1140",
      "addressCountry": "BE"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "06:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Tuesday",
        "closes": "00:00",
        "opens": "00:00"
      }
    ]
  }
`}} />

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-gold/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-chocolate/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual column */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 border border-gold/30"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 border border-gold/30"></div>
            
            {/* Main image */}
            <motion.div
              className="relative z-10 overflow-hidden rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <img 
                src="/comptoir.jpeg" 
                alt="Pain Patisserie - Comptoir de pâtisseries artisanales et viennoiseries belges" 
                className="w-full h-auto"
                itemProp="image"
              />
            </motion.div>
            
            {/* Inset image */}
            <motion.div
              className="absolute -bottom-10 -right-10 w-2/3 overflow-hidden rounded-lg shadow-xl border-4 border-[#faf7f2] z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3 } }
              }}
            >
              <img 
                src="/trompeoeil3.jpeg" 
                alt="Trompe-l'œil pâtissier aux fruits rouges - spécialité Pain Patisserie" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
          
          {/* Content column - SEO optimized with proper heading structure */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: 30 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
            }}
          >
            {/* Semantic heading structure */}
            <div className="mb-8">
              <h4 className="text-gold uppercase tracking-widest text-sm font-medium mb-3">Notre Histoire</h4>
              <h2 className="text-3xl md:text-4xl font-playfair text-chocolate mb-5" itemProp="name">
                Pain Patisserie
              </h2>
              <div className="w-20 h-1 bg-gold"></div>
            </div>
            
            {/* SEO-optimized content with semantic HTML and relevant keywords */}
            <div className="prose prose-lg text-chocolate-light" itemProp="description">
              <p className="mb-4">
                <strong>Bienvenue dans l'univers d'excellence de notre boulangerie-pâtisserie artisanale</strong>, là où la passion et l'innovation se savourent à chaque bouchée. Sous la direction de notre chef pâtissier talentueux, nous transformons les ingrédients frais et de qualité supérieure en véritables œuvres d'art gourmandes.
              </p>
              
              <p className="mb-4">
                Découvrez nos <em>créations uniques</em>, du <mark className="bg-transparent text-gold">pain frais croustillant</mark> et nos <mark className="bg-transparent text-gold">viennoiseries traditionnelles</mark>, jusqu'à nos <mark className="bg-transparent text-gold">pâtisseries fines</mark> qui subliment les sens. Nous sommes fiers de vous présenter des pièces emblématiques, incluant nos surprenants <strong>trompe-l'œil à base de fruits frais et de fruits secs</strong>, une tendance maîtrisée avec brio qui défie les perceptions et ravit les papilles, dans l'esprit des grandes maisons.
              </p>
              
              <p className="mb-4">
                Chaque gâteau, chaque douceur est une invitation à une expérience gustative inoubliable, fruit d'un <mark className="bg-transparent text-gold">savoir-faire artisanal exigeant</mark> et d'une recherche constante d'équilibre des saveurs. 
              </p>
              
              <blockquote className="italic border-l-4 border-gold pl-4 my-6">
                "La vie est incertaine. Mangez d'abord le dessert."
                <footer className="text-sm mt-2 text-chocolate-light/80">— Ernestine Ulmer, crédo que nous aimons cultiver</footer>
              </blockquote>
              
              <p className="mb-0 font-medium">
                Venez découvrir la quintessence de la <mark className="bg-transparent text-gold">pâtisserie belge artisanale</mark> et laissez-vous surprendre par notre maîtrise et notre créativité. Notre établissement propose également une sélection de <mark className="bg-transparent text-gold">spécialités internationales</mark> comme des tacos, msemen fourrés, pastilla et diverses préparations salées pour satisfaire toutes vos envies.
              </p>
            </div>
            
            {/* Call to action with enticing keywords */}
            <div className="mt-10">
              <a href="#gallery" className="inline-flex items-center px-6 py-3 bg-chocolate text-white hover:bg-gold transition-colors duration-300 group">
                <span>Découvrir nos créations artisanales</span>
                <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Certification badges for trust signals - good for SEO */}
            <div className="mt-10 flex flex-wrap gap-6 items-center">
              <div className="text-chocolate opacity-80 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <span className="text-sm">Produits 100% Artisanaux</span>
              </div>
              <div className="text-chocolate opacity-80 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <span className="text-sm">Ingrédients Locaux</span>
              </div>
              <div className="text-chocolate opacity-80 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <span className="text-sm">Depuis 1987</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;