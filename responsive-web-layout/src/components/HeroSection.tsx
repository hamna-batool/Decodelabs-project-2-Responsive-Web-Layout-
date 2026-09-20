import React from 'react';
import { ArrowRight, CheckCircle2, Layout, Smartphone, Tablet, Monitor, Sparkles, Code2, Compass } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="overview"
      className="relative w-full border-b border-stone-200/80 bg-gradient-to-b from-stone-50 via-white to-stone-100/40 overflow-hidden"
    >
      <div className="custom-responsive-container">
        <div className="mq-layout-hero">
          {/* Left Column: Heading, Value proposition, and Action Buttons */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            {/* Project Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/70 border border-stone-300/80 text-stone-800 text-xs font-mono font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Project 2 • Responsive Web Layout</span>
            </div>

            {/* Fluid Hero Title */}
            <h1 className="mq-fluid-hero-title font-extrabold text-stone-950 mb-4 tracking-tight">
              Adaptive CSS Layouts <br className="hidden sm:inline" />
              <span className="text-stone-700">Built for Every Screen.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-600 mb-6 sm:mb-8 leading-relaxed max-w-xl">
              Engineered with pure CSS media queries, fluid typography, responsive navigation,
              and mathematical alignment. Seamlessly transitions across mobile, tablet, and desktop viewports.
            </p>

            {/* Key Requirements Checklist Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8">
              <div className="flex items-center gap-2 text-stone-700 text-xs sm:text-sm font-medium bg-stone-100/80 p-2.5 rounded-lg border border-stone-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>CSS Media Queries (3 Breakpoints)</span>
              </div>
              <div className="flex items-center gap-2 text-stone-700 text-xs sm:text-sm font-medium bg-stone-100/80 p-2.5 rounded-lg border border-stone-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Adaptive Mobile Drawer & Desktop Nav</span>
              </div>
              <div className="flex items-center gap-2 text-stone-700 text-xs sm:text-sm font-medium bg-stone-100/80 p-2.5 rounded-lg border border-stone-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mathematical Spacing & 8pt Rhythm</span>
              </div>
              <div className="flex items-center gap-2 text-stone-700 text-xs sm:text-sm font-medium bg-stone-100/80 p-2.5 rounded-lg border border-stone-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fluid Flexbox & CSS Grid Alignment</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                id="hero-explore-btn"
                href="#techniques"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-semibold text-sm shadow-md transition-all group"
              >
                <span>Explore Layout Techniques</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="hero-bento-btn"
                href="#bento-grid"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 rounded-xl font-semibold text-sm shadow-xs transition-colors"
              >
                <Layout className="w-4 h-4 text-stone-600" />
                <span>View Responsive Bento</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Anatomy Card of Responsive Breakpoints */}
          <div className="w-full">
            <div className="bg-white rounded-2xl border border-stone-200 shadow-lg p-5 sm:p-6 lg:p-7 relative">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-mono text-stone-500 font-semibold">
                    Responsive Grid Anatomy
                  </span>
                </div>
                <span className="text-[11px] font-mono bg-stone-100 text-stone-700 px-2 py-0.5 rounded">
                  auto-re-flow
                </span>
              </div>

              {/* Visualized Device Breakpoints Grid */}
              <div className="space-y-4">
                {/* Desktop Layer Preview */}
                <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/80">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-800">
                      <Monitor className="w-4 h-4 text-emerald-600" />
                      <span>Desktop Layout (≥ 1024px)</span>
                    </div>
                    <span className="text-[10px] font-mono text-stone-500">4 Columns • 32px Gaps</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-8 rounded bg-emerald-100 border border-emerald-300/80 flex items-center justify-center text-[10px] font-mono font-medium text-emerald-800">Col 1</div>
                    <div className="h-8 rounded bg-emerald-100 border border-emerald-300/80 flex items-center justify-center text-[10px] font-mono font-medium text-emerald-800">Col 2</div>
                    <div className="h-8 rounded bg-emerald-100 border border-emerald-300/80 flex items-center justify-center text-[10px] font-mono font-medium text-emerald-800">Col 3</div>
                    <div className="h-8 rounded bg-emerald-100 border border-emerald-300/80 flex items-center justify-center text-[10px] font-mono font-medium text-emerald-800">Col 4</div>
                  </div>
                </div>

                {/* Tablet Layer Preview */}
                <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/80">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-800">
                      <Tablet className="w-4 h-4 text-sky-600" />
                      <span>Tablet Layout (640px - 1023px)</span>
                    </div>
                    <span className="text-[10px] font-mono text-stone-500">2 Columns • 24px Gaps</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-8 rounded bg-sky-100 border border-sky-300/80 flex items-center justify-center text-[10px] font-mono font-medium text-sky-800">Col 1 & 2 Folded</div>
                    <div className="h-8 rounded bg-sky-100 border border-sky-300/80 flex items-center justify-center text-[10px] font-mono font-medium text-sky-800">Col 3 & 4 Folded</div>
                  </div>
                </div>

                {/* Mobile Layer Preview */}
                <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/80">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-800">
                      <Smartphone className="w-4 h-4 text-amber-600" />
                      <span>Mobile Layout (&lt; 640px)</span>
                    </div>
                    <span className="text-[10px] font-mono text-stone-500">1 Column Stack • 16px Gaps</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1.5">
                    <div className="h-7 rounded bg-amber-100 border border-amber-300/80 flex items-center justify-center text-[10px] font-mono font-medium text-amber-800">Full Width Stack</div>
                  </div>
                </div>
              </div>

              {/* Code Snippet Tag */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <div className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Code2 className="w-3.5 h-3.5 text-stone-400" />
                  <span>@media (min-width: 640px) | (min-width: 1024px)</span>
                </div>
                <span className="text-emerald-700 font-semibold text-[11px]">Live in CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
