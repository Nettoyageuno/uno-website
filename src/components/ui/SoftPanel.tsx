import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const SoftPanel: React.FC<Props> = ({ title, children, className }) => {
  return (
    <aside
      className={
        "rounded-xl border border-emerald-100 bg-emerald-50/50 shadow-sm p-5 " +
        (className || "")
      }
    >
      <h3 className="text-base font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="text-gray-700">{children}</div>
    </aside>
  );
};

export default SoftPanel;