import React from 'react';

type Props = { logoSrc: string; alt: string; href?: string; note?: string };
export default function PartnerBanner({ logoSrc, alt, href, note }: Props){
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
      <img src={logoSrc} alt={alt} className="h-8 w-auto object-contain" />
      <div className="text-sm text-gray-700">
        <strong>In partnership with</strong> {alt}. {note || 'Certified expertise delivered with Nettoyage Uno oversight.'}
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer nofollow">{content}</a> : content;
}