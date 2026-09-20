import React, { useState } from 'react';
import { Sliders, Code2, MoveHorizontal, Check, RefreshCw, Eye, Sparkles } from 'lucide-react';

type Technique = 'media-queries' | 'css-grid' | 'flexbox';

export const LayoutTechniquesLab: React.FC = () => {
  const [activeTechnique, setActiveTechnique] = useState<Technique>('media-queries');
  const [containerWidth, setContainerWidth] = useState<number>(850);
  const [flexJustify, setFlexJustify] = useState<'flex-start' | 'center' | 'space-between' | 'space-around'>('space-between');
  const [itemCount, setItemCount] = useState<number>(6);
  const [customGap, setCustomGap] = useState<number>(16);

  const getActiveCode = () => {
    switch (activeTechnique) {
      case 'media-queries':
        return `/* CSS Media Queries Technique */
.layout-container {
  display: grid;
  grid-template-columns: 1fr; /* Mobile default */
  gap: ${customGap}px;
}

@media (min-width: 640px) {
  .layout-container {
    grid-template-columns: repeat(2, 1fr); /* Tablet */
  }
}

@media (min-width: 1024px) {
  .layout-container {
    grid-template-columns: repeat(3, 1fr); /* Desktop */
  }
}`;
      case 'css-grid':
        return `/* Intrinsic CSS Grid (Auto-Fit + MinMax) */
.layout-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${customGap}px;
  align-items: stretch;
}

/* Items automatically wrap and expand to fill available space */`;
      case 'flexbox':
        return `/* CSS Flexbox Wrapping & Alignment */
.layout-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: ${flexJustify};
  align-items: center;
  gap: ${customGap}px;
}

.layout-item {
  flex: 1 1 200px; /* grow, shrink, basis */
}`;
    }
  };

  return (
    <section
      id="techniques"
      className="py-16 sm:py-20 lg:py-24 border-b border-stone-200 bg-white"
    >
      <div className="custom-responsive-container">
        {/* Section Header with mathematical spacing */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/80 mb-3">
            <Sliders className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Layout Lab</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight mb-3">
            CSS Layout Techniques in Action
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Test how different responsive CSS algorithms handle viewport resizing, alignment, and spacing.
            Adjust the width slider to simulate fluid resizing right inside the browser.
          </p>
        </div>

        {/* Technique Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-stone-200 pb-3">
          <button
            id="tab-media-queries"
            type="button"
            onClick={() => setActiveTechnique('media-queries')}
            className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTechnique === 'media-queries'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <span>1. CSS Media Queries</span>
            {activeTechnique === 'media-queries' && <Check className="w-4 h-4 text-emerald-400" />}
          </button>

          <button
            id="tab-css-grid"
            type="button"
            onClick={() => setActiveTechnique('css-grid')}
            className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTechnique === 'css-grid'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <span>2. Fluid CSS Grid (auto-fit)</span>
            {activeTechnique === 'css-grid' && <Check className="w-4 h-4 text-emerald-400" />}
          </button>

          <button
            id="tab-flexbox"
            type="button"
            onClick={() => setActiveTechnique('flexbox')}
            className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTechnique === 'flexbox'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <span>3. Flexbox Wrapping & Alignment</span>
            {activeTechnique === 'flexbox' && <Check className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>

        {/* Layout Simulation Playground */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Controls & Code (Left/Top on mobile, 4 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Interactive Dimension & Spacing Controls */}
            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider font-mono mb-4 flex items-center justify-between">
                <span>Layout Parameters</span>
                <span className="text-stone-500 font-normal lowercase text-xs">interactive</span>
              </h3>

              {/* Width Slider */}
              <div className="mb-4">
                <div className="flex justify-between text-xs font-semibold text-stone-700 mb-1.5">
                  <span className="flex items-center gap-1">
                    <MoveHorizontal className="w-3.5 h-3.5 text-stone-500" />
                    Container Width:
                  </span>
                  <span className="font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80">
                    {containerWidth}px
                  </span>
                </div>
                <input
                  type="range"
                  min={320}
                  max={1000}
                  step={10}
                  value={containerWidth}
                  onChange={(e) => setContainerWidth(Number(e.target.value))}
                  className="w-full accent-stone-900 cursor-pointer h-2 bg-stone-200 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                  <span>320px (Mobile)</span>
                  <span>640px (Tablet)</span>
                  <span>1000px (Desktop)</span>
                </div>
              </div>

              {/* Gap Slider */}
              <div className="mb-4">
                <div className="flex justify-between text-xs font-semibold text-stone-700 mb-1.5">
                  <span>Rhythmic Gap Spacing:</span>
                  <span className="font-mono text-stone-800 bg-stone-200/70 px-2 py-0.5 rounded">
                    {customGap}px
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[8, 16, 24, 32].map((gapVal) => (
                    <button
                      key={gapVal}
                      type="button"
                      onClick={() => setCustomGap(gapVal)}
                      className={`py-1.5 text-xs font-mono rounded font-medium border transition-colors ${
                        customGap === gapVal
                          ? 'bg-stone-900 text-white border-stone-900'
                          : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                      }`}
                    >
                      {gapVal}px
                    </button>
                  ))}
                </div>
              </div>

              {/* Flexbox Specific Alignment Options */}
              {activeTechnique === 'flexbox' && (
                <div className="pt-3 border-t border-stone-200">
                  <span className="text-xs font-semibold text-stone-700 block mb-2">
                    justify-content Alignment:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {(['flex-start', 'center', 'space-between', 'space-around'] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setFlexJustify(mode)}
                        className={`text-xs py-1.5 px-2 rounded font-mono text-left transition-colors border ${
                          flexJustify === mode
                            ? 'bg-stone-900 text-white border-stone-900 font-semibold'
                            : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Live Generated CSS Code Panel */}
            <div className="bg-stone-900 text-stone-100 rounded-xl p-4 border border-stone-800 font-mono text-xs overflow-x-auto shadow-sm">
              <div className="flex items-center justify-between border-b border-stone-800 pb-2 mb-3 text-stone-400">
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span>Generated CSS Rule</span>
                </span>
                <span className="text-[10px] text-stone-500">Live Code</span>
              </div>
              <pre className="text-stone-300 leading-relaxed font-mono whitespace-pre-wrap text-[11px] sm:text-xs">
                {getActiveCode()}
              </pre>
            </div>
          </div>

          {/* Live Preview Container (Right on desktop, 7 cols) */}
          <div className="lg:col-span-7 bg-stone-100/70 p-4 sm:p-6 rounded-2xl border border-stone-200/80 overflow-x-auto">
            <div className="flex items-center justify-between mb-3 text-xs text-stone-600 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="font-semibold text-stone-800">Visual Layout Sandbox</span>
              </div>
              <span className="text-stone-500">Target Width: {containerWidth}px</span>
            </div>

            {/* Scaled Preview Frame */}
            <div
              style={{
                width: '100%',
                maxWidth: `${containerWidth}px`,
                margin: '0 auto',
                transition: 'max-width 0.2s ease-out',
              }}
              className="bg-white rounded-xl border border-stone-300 p-4 sm:p-6 shadow-sm transition-all"
            >
              {/* Dynamic Items Container based on selected technique */}
              {activeTechnique === 'media-queries' && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns:
                      containerWidth < 500
                        ? '1fr'
                        : containerWidth < 800
                        ? 'repeat(2, 1fr)'
                        : 'repeat(3, 1fr)',
                    gap: `${customGap}px`,
                  }}
                >
                  {Array.from({ length: itemCount }).map((_, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-stone-50 border border-stone-200 flex flex-col justify-between hover:border-emerald-400 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-stone-700 bg-stone-200/60 px-2 py-0.5 rounded">
                          Item #{idx + 1}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-700">
                          {containerWidth < 500 ? '1-col' : containerWidth < 800 ? '2-col' : '3-col'}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600">
                        Adjusted by CSS Media Query breakpoint trigger.
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeTechnique === 'css-grid' && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: `${customGap}px`,
                  }}
                >
                  {Array.from({ length: itemCount }).map((_, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-sky-50/70 border border-sky-200 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded">
                          Grid #{idx + 1}
                        </span>
                        <span className="text-[10px] font-mono text-sky-600">auto-fit</span>
                      </div>
                      <p className="text-xs text-sky-900">
                        Minmax(180px, 1fr) fluidly wraps without discrete media queries.
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeTechnique === 'flexbox' && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: flexJustify,
                    gap: `${customGap}px`,
                  }}
                >
                  {Array.from({ length: itemCount }).map((_, idx) => (
                    <div
                      key={idx}
                      style={{ flex: '1 1 180px', maxWidth: '280px' }}
                      className="p-4 rounded-lg bg-amber-50/70 border border-amber-200 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                          Flex #{idx + 1}
                        </span>
                        <span className="text-[10px] font-mono text-amber-700">wrap</span>
                      </div>
                      <p className="text-xs text-amber-900">
                        flex: 1 1 180px aligned with {flexJustify}.
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Explanation Note */}
            <div className="mt-4 p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Layout Insight:</strong> Notice how CSS Media Queries let you define exact column changes at strategic breakpoints, while CSS Grid <code>auto-fit</code> handles fluid content re-flow dynamically based on available container dimensions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
