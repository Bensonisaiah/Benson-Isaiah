import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { heroMockupsConfig } from '../../../data/mockups';
import { LaptopMockup } from './LaptopMockup';
import { TabletMockup } from './TabletMockup';
import { PhoneMockup } from './PhoneMockup';

type ActiveDeviceFocus = 'all' | 'laptop' | 'tablet' | 'phone';

interface DeviceClusterProps {
  className?: string;
}

export const DeviceCluster: React.FC<DeviceClusterProps> = ({ className = '' }) => {
  const [focus, setFocus] = useState<ActiveDeviceFocus>('all');

  /* Which project is currently featured in caption */
  const captionMap: Record<ActiveDeviceFocus, { href: string; label: string }> = {
    all: { href: 'https://stud-guide.vercel.app', label: 'StudGuide (stud-guide.vercel.app ↗)' },
    laptop: { href: 'https://stud-guide.vercel.app', label: 'StudGuide Desktop (stud-guide.vercel.app ↗)' },
    tablet: { href: 'https://stud-guide.vercel.app', label: 'StudGuide iPad (stud-guide.vercel.app ↗)' },
    phone: { href: 'https://stud-guide.vercel.app', label: 'StudGuide Mobile (stud-guide.vercel.app ↗)' },
  };
  const caption = captionMap[focus];

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Device Viewport Selector Tabs */}
      <div className="flex items-center gap-1 p-1 rounded-full bg-neutral-200/80 dark:bg-neutral-900/90 border border-neutral-300/80 dark:border-white/10 backdrop-blur-md mb-4 shadow-sm z-30 flex-wrap justify-center">
        {(
          [
            { key: 'all', icon: 'mdi:devices', label: 'All Devices' },
            { key: 'laptop', icon: 'mdi:laptop', label: 'Desktop' },
            { key: 'tablet', icon: 'mdi:tablet', label: 'iPad' },
            { key: 'phone', icon: 'mdi:cellphone', label: 'Mobile' },
          ] as const
        ).map(({ key, icon, label }) => (
          <button
            key={key}
            onClick={() => setFocus(key)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-body font-medium transition-all ${
              focus === key
                ? 'bg-white dark:bg-white/15 text-neutral-950 dark:text-white shadow-sm font-semibold'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
            }`}
            aria-label={`Focus ${label} view`}
          >
            <Icon icon={icon} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Main 3D Floating Stage Container */}
      <div
        className={`relative w-full max-w-[680px] lg:max-w-[740px] h-[320px] sm:h-[370px] md:h-[400px] lg:h-[420px] flex justify-center ${
          focus === 'all' ? 'items-start pt-2' : 'items-center'
        }`}
      >
        {/* Ambient Backlight Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200/50 via-emerald-500/5 to-indigo-500/5 dark:from-emerald-600/10 dark:via-indigo-600/5 dark:to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        {/* ─── 1. LAPTOP (MacBook Air) — central main device ─── */}
        <div
          className={`transition-all duration-500 ease-out ${
            focus === 'all'
              ? 'relative z-10 w-[88%] sm:w-[90%] max-w-[540px] animate-float-laptop'
              : focus === 'laptop'
              ? 'relative z-30 w-full max-w-[640px]'
              : 'opacity-0 absolute pointer-events-none scale-95'
          }`}
        >
          <LaptopMockup mockup={heroMockupsConfig.laptop} />
        </div>

        {/* ─── 2. iPad — floating left-bottom, portrait ─── */}
        <div
          className={`transition-all duration-500 ease-out ${
            focus === 'all'
              ? 'absolute left-0 sm:-left-2 bottom-0 z-20 w-[28%] sm:w-[30%] max-w-[185px] animate-float-tablet hover:z-30 hover:scale-105 cursor-pointer'
              : focus === 'tablet'
              ? 'relative z-30 w-[55%] max-w-[310px]'
              : 'opacity-0 absolute pointer-events-none'
          }`}
          onClick={() => focus !== 'tablet' && setFocus('tablet')}
          title="Click to focus iPad"
        >
          <TabletMockup mockup={heroMockupsConfig.tablet} />
        </div>

        {/* ─── 3. iPhone — floating right-bottom ─── */}
        <div
          className={`transition-all duration-500 ease-out ${
            focus === 'all'
              ? 'absolute right-0 sm:-right-2 bottom-0 z-25 w-[18%] sm:w-[20%] max-w-[120px] sm:max-w-[140px] animate-float-phone hover:z-30 hover:scale-105 cursor-pointer'
              : focus === 'phone'
              ? 'relative z-30 w-[40%] max-w-[220px]'
              : 'opacity-0 absolute pointer-events-none'
          }`}
          onClick={() => focus !== 'phone' && setFocus('phone')}
          title="Click to focus Mobile"
        >
          <PhoneMockup mockup={heroMockupsConfig.phone} />
        </div>
      </div>

      {/* Caption & Live URL indicator */}
      <div className="flex items-center gap-2 mt-3 text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 font-body">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <a
          href={caption.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors underline decoration-dotted"
        >
          Featured: {caption.label}
        </a>
      </div>
    </div>
  );
};
