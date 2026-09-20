import React from 'react';
import { Layers, ArrowUp, Github, Code, Compass, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="custom-responsive-container py-12 sm:py-16">
        {/* Responsive Multi-Column Layout: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12">
          {/* Column 1: Brand & Synopsis */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 text-white mb-3">
              <div className="w-8 h-8 rounded-lg bg-white text-stone-900 flex items-center justify-center font-bold">
                <Layers className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="font-bold text-lg text-white">
                ResponsiveWeb
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-4">
              A comprehensive showcase of modern responsive design: pure CSS media queries, adaptive navigation, and mathematical spatial alignment.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-stone-800/80 px-2.5 py-1 rounded border border-stone-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Mobile-First Certified</span>
            </div>
          </div>

          {/* Column 2: Core Breakpoints */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-200 mb-3">
              CSS Breakpoints
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-mono text-stone-400">
              <li>
                <span className="text-white">&lt; 640px</span> — Mobile Stack
              </li>
              <li>
                <span className="text-white">640px - 1023px</span> — Tablet Grid
              </li>
              <li>
                <span className="text-white">&ge; 1024px</span> — Desktop Spread
              </li>
              <li>
                <span className="text-white">&ge; 1280px</span> — Bento Matrix
              </li>
            </ul>
          </div>

          {/* Column 3: Layout Techniques */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-200 mb-3">
              Layout Techniques
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#techniques" className="hover:text-white transition-colors">CSS Media Queries</a>
              </li>
              <li>
                <a href="#techniques" className="hover:text-white transition-colors">Fluid CSS Grid auto-fit</a>
              </li>
              <li>
                <a href="#techniques" className="hover:text-white transition-colors">Flexbox Wrapping &amp; Alignment</a>
              </li>
              <li>
                <a href="#spacing-alignment" className="hover:text-white transition-colors">8pt Spatial Rhythm</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Jump */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-200 mb-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">Overview</a>
              </li>
              <li>
                <a href="#techniques" className="hover:text-white transition-colors">Layout Lab</a>
              </li>
              <li>
                <a href="#bento-grid" className="hover:text-white transition-colors">Bento Grid</a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Feedback</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            <span>Project 2: Responsive Web Layout • Frontend Engineering</span>
          </div>

          <button
            id="back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors border border-stone-700 text-xs font-medium"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
