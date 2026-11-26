import React, { useState } from 'react';
import type { DeviceMockupItem } from '../../../types';

interface TabletMockupProps {
  mockup: DeviceMockupItem;
  className?: string;
}

export const TabletMockup: React.FC<TabletMockupProps> = ({ mockup, className = '' }) => {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(mockup.image) && !imageError;

  return (
    <div className={`relative select-none ${className}`}>
      {showImage ? (
        <img
          src={mockup.image}
          alt={mockup.title}
          onError={() => setImageError(true)}
          className="w-full h-auto object-contain block drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.75)] transition-transform duration-300"
        />
      ) : (
        <div className="w-full aspect-[233/352] rounded-[24px] sm:rounded-[32px] bg-neutral-900 flex flex-col items-center justify-center p-4 text-center shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
          <span className="text-white text-xs font-semibold">{mockup.title}</span>
          <span className="text-neutral-400 text-[10px] mt-1">{mockup.subtitle}</span>
        </div>
      )}
    </div>
  );
};
