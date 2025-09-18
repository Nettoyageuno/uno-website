import React from 'react';

interface AnimatedImageProps {
  src?: string;
  alt: string;
  aspect?: '16/9' | 'square' | 'video';
  overlay?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ 
  src, 
  alt, 
  aspect = '16/9', 
  overlay = false, 
  className = '',
  children 
}) => {
  const aspectClasses = {
    '16/9': 'aspect-video',
    'square': 'aspect-square',
    'video': 'aspect-video'
  };

  return (
    <div className={`card hover-lift overflow-hidden ${aspectClasses[aspect]} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          {children || (
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-500 text-xs font-medium">{alt}</span>
            </div>
          )}
        </div>
      )}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      )}
    </div>
  );
};

export default AnimatedImage;