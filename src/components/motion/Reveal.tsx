import React from 'react';

const Reveal: React.FC<{ children: React.ReactNode; delayMs?: number }> = ({ children }) => {
  return (
    <div className="opacity-0 translate-y-3 animate-[fadeInUp_500ms_ease-out_forwards]">
      {children}
    </div>
  );
};

export default Reveal;