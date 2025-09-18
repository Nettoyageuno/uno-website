import React from 'react';

type Props = { children: React.ReactNode; className?: string };

const FadeInSection: React.FC<Props> = ({ children, className }) => {
  // Minimal passthrough wrapper (animation can be added later)
  return <div className={className}>{children}</div>;
};

export default FadeInSection;