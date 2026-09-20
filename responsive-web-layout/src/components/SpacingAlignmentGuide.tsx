import React from 'react';
import { Ruler, LayoutTemplate, Box, AlignLeft, CheckCircle2 } from 'lucide-react';

export const SpacingAlignmentGuide: React.FC = () => {
  return (
    <section
      id="spacing-alignment"
      className="py-16 sm:py-20 lg:py-24 border-b border-stone-200 bg-stone-50/40"
    >
      <div className="custom-responsive-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-stone-700 bg-stone-200/80 px-2.5 py-1 rounded-md mb-3">
            <Ruler className="w-3.5 h-3.5 text-stone-700" />
            <span>Spacing & Alignment Rules</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight mb-3">
            Mathematical Precision & Alignment
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Every margin, padding, and alignment parameter follows mathematical scales:
            an 8pt spatial grid, baseline line-height harmony, and optical hierarchy.
          </p>
        </div>

        {/* 3 Interactive Spatial Rule Demonstrations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Rule 1: Padding Math */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-800 mb-4">
                <Box className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                1. Container Padding Math
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Outer container padding must always equal or exceed the inner gap between children to prevent visual claustrophobia.
              </p>

              {/* Visual Graphic */}
              <div className="bg-stone-50 p-6 rounded-xl border border-dashed border-stone-300 relative text-center mb-4">
                <span className="absolute top-1 left-2 text-[10px] font-mono text-stone-400">Outer: 24px (P)</span>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-2.5 rounded-lg border border-stone-200 text-xs font-mono text-stone-700">Child A</div>
                  <div className="bg-white p-2.5 rounded-lg border border-stone-200 text-xs font-mono text-stone-700">Child B</div>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 font-semibold block mt-2">Inner Gap: 12px (&le; 24px)</span>
              </div>
            </div>

            <div className="text-xs font-mono text-stone-500 pt-3 border-t border-stone-100 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Outer Padding &ge; Inner Gap</span>
            </div>
          </div>

          {/* Rule 2: Concentric Nested Radius */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-800 mb-4">
                <LayoutTemplate className="w-5 h-5 text-sky-600" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                2. Nested Radius Formula
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                When a rounded card sits inside a padded rounded frame, the inner corner radius must follow the formula <code>R_in = R_out - P</code>.
              </p>

              {/* Visual Graphic */}
              <div
                style={{ borderRadius: '20px', padding: '12px' }}
                className="bg-stone-100 border border-stone-300 relative mb-4"
              >
                <div
                  style={{ borderRadius: '8px', padding: '12px' }}
                  className="bg-white border border-stone-200 text-center text-xs font-mono text-stone-700"
                >
                  Inner Radius = 20px - 12px = 8px
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-stone-500 pt-3 border-t border-stone-100 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Perfect concentric corners</span>
            </div>
          </div>

          {/* Rule 3: Responsive Button Padding */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-800 mb-4">
                <AlignLeft className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                3. Button 2:1 Aspect Ratio
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Button horizontal padding is exactly 2x vertical padding (e.g. py-3 px-6 or py-2.5 px-5), ensuring balanced optical weight and touch safety.
              </p>

              {/* Visual Graphic */}
              <div className="bg-stone-50 p-5 rounded-xl border border-dashed border-stone-300 flex flex-col items-center justify-center gap-2 mb-4">
                <div className="py-2.5 px-5 bg-stone-900 text-white rounded-lg text-xs font-semibold font-mono shadow-xs">
                  py-2.5 (10px) • px-5 (20px)
                </div>
                <span className="text-[10px] font-mono text-stone-500">
                  Touch target &ge; 44px on mobile
                </span>
              </div>
            </div>

            <div className="text-xs font-mono text-stone-500 pt-3 border-t border-stone-100 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Optical horizontal balance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
