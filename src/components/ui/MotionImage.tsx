import React from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackClassName?: string;
};

const MotionImage: React.FC<Props> = ({ className = '', fallbackClassName = '', ...rest }) => {
  const [err, setErr] = React.useState(false);

  return (
    <div className={`relative h-full w-full overflow-hidden ${className ? '' : ''}`}>
      {!err ? (
        <img
          {...rest}
          loading="lazy"
          decoding="async"
          onError={() => setErr(true)}
          className={`h-full w-full object-cover ${className}`}
        />
      ) : (
        <div
          aria-hidden="true"
          className={`h-full w-full ${fallbackClassName || 'bg-gradient-to-br from-gray-100 to-gray-200'} rounded-2xl flex items-center justify-center text-gray-500 text-sm`}
        >
          Image unavailable
        </div>
      )}
    </div>
  );
};

export default MotionImage;