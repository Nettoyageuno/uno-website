import React from 'react';

interface ParallaxHeroProps {
  image?: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
}

const ParallaxHero: React.FC<ParallaxHeroProps> = ({ 
  image, 
  alt, 
  children, 
  className = '' 
}) => {
  return (
    <section className={`band-navy py-16 sm:py-24 relative overflow-hidden ${className}`}>
      {image && (
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxHero;