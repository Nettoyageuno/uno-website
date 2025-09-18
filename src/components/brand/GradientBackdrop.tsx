import React from 'react';

type Props = {
  variant?: 'hero' | 'cta';
  className?: string;
};

const GradientBackdrop: React.FC<Props> = ({ variant = 'hero', className = '' }) => {
  const ring = 'absolute inset-0 rounded-[inherit] ring-1 ring-black/10';
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* soft radial glow */}
      <div
        className="absolute -bottom-28 right-[-10%] h-[36rem] w-[36rem] rounded-full"
        style={{ background: 'radial-gradient(closest-side, rgba(52,211,153,.25), rgba(52,211,153,0))' }}
      />
      <div
        className="absolute -bottom-20 left-[-10%] h-[28rem] w-[28rem] rounded-full opacity-60"
        style={{ background: 'radial-gradient(closest-side, rgba(52,211,153,.18), rgba(52,211,153,0))' }}
      />
      <div className={ring} />
    </div>
  );
};

export default GradientBackdrop;