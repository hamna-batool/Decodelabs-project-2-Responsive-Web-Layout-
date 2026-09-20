import React, { useEffect, useState } from 'react';
import { Monitor, Smartphone, Tablet, Maximize2, Sparkles, SlidersHorizontal } from 'lucide-react';
import { DeviceMode } from '../types.ts';

interface BreakpointTesterProps {
  deviceMode: DeviceMode;
  onDeviceModeChange: (mode: DeviceMode) => void;
}

export const BreakpointTester: React.FC<BreakpointTesterProps> = ({
  deviceMode,
  onDeviceModeChange,
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine current active media query category
  const activeBreakpoint =
    deviceMode === 'mobile'
      ? { name: 'Mobile (< 640px)', code: '@media (max-width: 639px)', badge: 'xs / sm' }
      : deviceMode === 'tablet'
      ? { name: 'Tablet (640px - 1023px)', code: '@media (min-width: 640px) and (max-width: 1023px)', badge: 'md' }
      : deviceMode === 'desktop'
      ? { name: 'Desktop (≥ 1024px)', code: '@media (min-width: 1024px)', badge: 'lg / xl' }
      : windowWidth < 640
      ? { name: 'Mobile (< 640px)', code: '@media (max-width: 639px)', badge: 'xs / sm' }
      : windowWidth < 1024
      ? { name: 'Tablet (640px - 1023px)', code: '@media (min-width: 640px) and (max-width: 1023px)', badge: 'md' }
      : windowWidth < 1280
      ? { name: 'Desktop (1024px - 1279px)', code: '@media (min-width: 1024px)', badge: 'lg' }
      : { name: 'Large Desktop (≥ 1280px)', code: '@media (min-width: 1280px)', badge: 'xl / 2xl' };

  return (
    <aside
      id="breakpoint-tester-bar"
      aria-label="Responsive Viewport Inspector"
      className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-200 text-xs px-3 sm:px-6 py-2.5 transition-all shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        {/* Left: Current Active Media Query Display */}
        <div className="flex items-center flex-wrap gap-2">
          <div className="flex items-center gap-1.5 bg-stone-800/80 px-2.5 py-1 rounded-md border border-stone-700 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-stone-400">Viewport:</span>
            <span className="font-semibold text-white">
              {deviceMode === 'fluid' ? `${windowWidth}px` : deviceMode === 'mobile' ? '375px' : deviceMode === 'tablet' ? '768px' : '1200px'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-stone-300">
            <span className="bg-emerald-950/80 text-emerald-300 font-mono px-2 py-0.5 rounded border border-emerald-800/60 font-semibold">
              {activeBreakpoint.badge}
            </span>
            <span className="hidden sm:inline font-medium text-stone-300">
              {activeBreakpoint.name}
            </span>
            <span className="hidden lg:inline text-stone-400 font-mono text-[10px]">
              {activeBreakpoint.code}
            </span>
          </div>
        </div>

        {/* Right: Viewport Simulator Quick Switcher */}
        <div className="flex items-center gap-1.5 bg-stone-950/60 p-1 rounded-lg border border-stone-800">
          <span className="text-stone-400 px-1.5 text-[11px] font-medium hidden sm:inline flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3 text-stone-400" />
            Simulate:
          </span>

          <button
            id="mode-fluid-btn"
            type="button"
            onClick={() => onDeviceModeChange('fluid')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors ${
              deviceMode === 'fluid'
                ? 'bg-stone-700 text-white font-medium shadow-xs'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-850'
            }`}
            title="Fluid Browser Width"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Fluid</span>
          </button>

          <button
            id="mode-mobile-btn"
            type="button"
            onClick={() => onDeviceModeChange('mobile')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors ${
              deviceMode === 'mobile'
                ? 'bg-amber-600 text-white font-medium shadow-xs'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-850'
            }`}
            title="Simulate Mobile Device (375px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile (375px)</span>
          </button>

          <button
            id="mode-tablet-btn"
            type="button"
            onClick={() => onDeviceModeChange('tablet')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors ${
              deviceMode === 'tablet'
                ? 'bg-sky-600 text-white font-medium shadow-xs'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-850'
            }`}
            title="Simulate Tablet Device (768px)"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span>Tablet (768px)</span>
          </button>

          <button
            id="mode-desktop-btn"
            type="button"
            onClick={() => onDeviceModeChange('desktop')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors ${
              deviceMode === 'desktop'
                ? 'bg-emerald-600 text-white font-medium shadow-xs'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-850'
            }`}
            title="Simulate Desktop Device (1200px)"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop (1200px)</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
