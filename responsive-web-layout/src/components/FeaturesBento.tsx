import React from 'react';
import { Columns3, Smartphone, Laptop, Sparkles, SlidersHorizontal, Ratio, Compass, MoveDiagonal } from 'lucide-react';
import { BentoFeature } from '../types.ts';

const BENTO_FEATURES: BentoFeature[] = [
  {
    id: 'feature-mq',
    title: 'Precision CSS Media Queries',
    category: 'Key Requirement 1',
    description: 'Declarative @media breakpoints targeting mobile (<640px), tablet (640-1023px), and desktop (≥1024px) for distinct structural layouts.',
    iconName: 'Smartphone',
    technique: 'Media Queries',
    colSpanDesktop: 'lg:col-span-2',
    metric: '3 Breakpoints',
  },
  {
    id: 'feature-nav',
    title: 'Adaptive Navigation System',
    category: 'Key Requirement 2',
    description: 'Horizontal link bar on desktop smoothly transforms into an accessible touch-friendly slide drawer with 44px+ targets on mobile.',
    iconName: 'Compass',
    technique: 'Flexbox',
    colSpanDesktop: 'lg:col-span-1',
    metric: '100% Accessible',
  },
  {
    id: 'feature-spacing',
    title: 'Mathematical Spacing & 8pt Grid',
    category: 'Key Requirement 3',
    description: 'Strict 8pt spacing rhythm where container outer padding exceeds inner element gaps, ensuring optical balance and clean vertical flow.',
    iconName: 'SlidersHorizontal',
    technique: 'CSS Grid',
    colSpanDesktop: 'lg:col-span-1',
    metric: '8px Harmonic Unit',
  },
  {
    id: 'feature-radius',
    title: 'Nested Radius Alignment Rule',
    category: 'Layout Craft',
    description: 'Mathematically computed inner radiuses: R_inner = R_outer - Padding. Eliminates awkward concentric border clipping.',
    iconName: 'Ratio',
    technique: 'CSS Grid',
    colSpanDesktop: 'lg:col-span-1',
    metric: 'R_in = R_out - P',
  },
  {
    id: 'feature-fluid-typo',
    title: 'Clamp-Based Fluid Typography',
    category: 'Responsive Typography',
    description: 'Headings scale fluidly using CSS clamp() formulas, avoiding abrupt font jumping across intermediate viewport sizes.',
    iconName: 'MoveDiagonal',
    technique: 'Fluid Typography',
    colSpanDesktop: 'lg:col-span-2',
    metric: 'clamp(2rem, 4vw, 4.25rem)',
  },
  {
    id: 'feature-auto-fit',
    title: 'Intrinsic Re-Flow Grids',
    category: 'Modern CSS',
    description: 'Leverages repeat(auto-fit, minmax(280px, 1fr)) to automatically distribute columns without requiring extra breakpoints.',
    iconName: 'Columns3',
    technique: 'CSS Grid',
    colSpanDesktop: 'lg:col-span-1',
    metric: 'Auto-Fit Minmax',
  },
];

export const FeaturesBento: React.FC = () => {
  return (
    <section
      id="bento-grid"
      className="py-16 sm:py-20 lg:py-24 border-b border-stone-200 bg-stone-50/60"
    >
      <div className="custom-responsive-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 bg-stone-200/70 px-2.5 py-1 rounded-md mb-3 inline-block">
              Architecture Overview
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
              Responsive Bento Grid Layout
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-2 leading-relaxed">
              Demonstrating responsive multi-column spans, adaptive card density, and mathematical padding across viewport thresholds.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-stone-600 bg-white px-3 py-1.5 rounded-lg border border-stone-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Responsive Grid Spans</span>
          </div>
        </div>

        {/* Bento Grid with CSS Media Queries / Tailwind Responsive Classes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {BENTO_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              id={`bento-card-${idx}`}
              className={`bg-white rounded-2xl border border-stone-200/90 p-5 sm:p-6 lg:p-7 shadow-2xs flex flex-col justify-between hover:shadow-md hover:border-stone-300 transition-all ${feature.colSpanDesktop}`}
            >
              <div>
                {/* Card Top: Category and Metric Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold font-mono uppercase tracking-wider text-stone-700 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                    {feature.category}
                  </span>
                  {feature.metric && (
                    <span className="text-[11px] font-mono font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {feature.metric}
                    </span>
                  )}
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight mb-2.5">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Card Footer: Technique Badge & Status */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-medium text-stone-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                  Technique: <strong className="text-stone-800">{feature.technique}</strong>
                </span>

                <span className="text-[11px] font-mono text-stone-400">
                  responsive
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
