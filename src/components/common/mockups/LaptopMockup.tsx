import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import type { DeviceMockupItem } from '../../../types';

interface LaptopMockupProps {
  mockup: DeviceMockupItem;
  className?: string;
}

export const LaptopMockup: React.FC<LaptopMockupProps> = ({ mockup, className = '' }) => {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(mockup.image) && !imageError;
  const isFullLaptopPhoto = mockup.image?.includes('macbook-air') || mockup.image?.includes('laptop-');
  const alreadyHasBrowserBar = mockup.image?.includes('-screen');

  // If the user supplied an image that already has the full laptop frame
  if (isFullLaptopPhoto && showImage) {
    return (
      <div className={`relative select-none ${className}`}>
        <img
          src={mockup.image}
          alt={mockup.title}
          className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
        />
      </div>
    );
  }

  return (
    <div className={`relative select-none ${className}`}>
      {/* MacBook Screen Lid with Aluminum Outer Rim & Shadow */}
      <div className="relative rounded-t-[18px] sm:rounded-t-[24px] bg-[#0c0d10] dark:bg-[#07080a] p-2 sm:p-2.5 pb-0 shadow-[0_15px_35px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.7)] border border-neutral-600/60 dark:border-neutral-800">
        {/* Top Centered FaceTime Camera Dot */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#050607] border border-neutral-700/80 flex items-center justify-center">
            <div className="w-0.5 h-0.5 rounded-full bg-emerald-950/60" />
          </div>
        </div>

        {/* Unified 16:10 Display Glass Panel */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[4px] bg-[#1a1c21] flex flex-col shadow-inner">
          {/* Safari macOS Dark Browser Navigation Bar */}
          {!alreadyHasBrowserBar && (
            <div className="h-7 sm:h-8 shrink-0 flex items-center justify-between px-2.5 sm:px-3 bg-gradient-to-b from-[#25282e] to-[#1c1e23] border-b border-black/50 text-xs text-neutral-300 z-10">
              {/* Left: Navigation Controls (< > Bookmarks AA) */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <button className="hover:text-white transition-colors" aria-label="Back">
                    <Icon icon="mdi:chevron-left" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button className="hover:text-white transition-colors opacity-40 cursor-default" aria-label="Forward">
                    <Icon icon="mdi:chevron-right" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-neutral-400 pl-1 border-l border-white/10">
                  <Icon icon="mdi:book-open-page-variant-outline" className="w-3 h-3 hover:text-white transition-colors cursor-pointer" />
                  <span className="text-[10px] font-sans font-semibold tracking-tighter hover:text-white cursor-pointer select-none">AA</span>
                </div>
              </div>

              {/* Center: Safari Address Pill with Lock & Reload */}
              <div className="flex items-center justify-between gap-1.5 px-3 py-0.5 sm:py-1 rounded-md bg-[#111316] border border-white/10 text-[9px] sm:text-xs text-neutral-300 max-w-[200px] sm:max-w-[320px] w-full shadow-inner">
                <Icon icon="mdi:lock" className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-neutral-400 shrink-0" />
                <span className="truncate text-center flex-1 font-sans text-neutral-200 text-[10px] sm:text-[11px]">
                  {mockup.url || 'agrolink-eight.vercel.app'}
                </span>
                <Icon icon="mdi:reload" className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-neutral-400 shrink-0 hover:text-white cursor-pointer" />
              </div>

              {/* Right: Actions (Share, New Tab, Tabs) */}
              <div className="flex items-center gap-2 sm:gap-2.5 text-neutral-400">
                <Icon icon="mdi:export-variant" className="w-3 h-3 sm:w-3.5 sm:h-3.5 hover:text-white transition-colors cursor-pointer hidden sm:inline" />
                <Icon icon="mdi:plus" className="w-3 h-3 sm:w-3.5 sm:h-3.5 hover:text-white transition-colors cursor-pointer" />
                <Icon icon="mdi:tab" className="w-3 h-3 sm:w-3.5 sm:h-3.5 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
          )}

          {/* Webpage Content Viewport */}
          <div className="relative flex-1 w-full overflow-hidden bg-white dark:bg-neutral-950">
            {showImage ? (
              <img
                src={mockup.image}
                alt={mockup.title}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              /* High-fidelity Fallback */
              <div className="w-full h-full p-4 bg-white text-neutral-900 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                  <span className="text-sm font-heading font-bold text-emerald-700">AgroLink</span>
                  <div className="flex items-center gap-3 text-xs text-neutral-600">
                    <span>Home</span>
                    <span>Marketplace</span>
                    <span className="text-emerald-700 font-semibold underline">About</span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-semibold">Register</span>
                  </div>
                </div>
                <div className="my-auto">
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[9px] font-semibold uppercase">Our Mission</span>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-neutral-950 mt-1">Bridging the gap from <span className="text-emerald-700">soil to soul</span>.</h3>
                  <p className="text-xs text-neutral-600 max-w-sm mt-1">Connecting smallholder farmers directly to modern buyers with transparent pricing.</p>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-100">
                  <div className="p-2 rounded bg-neutral-50"><p className="text-sm font-bold text-emerald-700">45%</p><p className="text-[9px] text-neutral-500">Better Earnings</p></div>
                  <div className="p-2 rounded bg-neutral-50"><p className="text-sm font-bold text-emerald-700">24h</p><p className="text-[9px] text-neutral-500">Field to Fork</p></div>
                </div>
              </div>
            )}

            {/* Subtle Screen Reflection Glare */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.015] to-white/[0.05]" />
          </div>
        </div>

        {/* Lower Screen Bezel with authentic "MacBook Air" branding */}
        <div className="w-full py-1 sm:py-1.5 bg-[#0c0d10] dark:bg-[#07080a] flex items-center justify-center">
          <span className="text-[8px] sm:text-[9.5px] font-sans tracking-[0.25em] text-[#717378] uppercase select-none font-medium">
            MacBook Air
          </span>
        </div>
      </div>

      {/* Aluminum Base & Opening Notch */}
      <div className="relative h-2.5 sm:h-3.5 bg-gradient-to-b from-[#b8bcc6] via-[#9ea2ad] to-[#797d87] dark:from-[#2e3037] dark:via-[#1e2025] dark:to-[#121316] rounded-b-xl shadow-lg border-t border-[#d8dce6]/80 dark:border-white/10">
        {/* Centered Thumb Opening Indent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-1 sm:h-1.5 bg-[#61656e] dark:bg-[#0a0b0d] rounded-b-md" />
      </div>
    </div>
  );
};
