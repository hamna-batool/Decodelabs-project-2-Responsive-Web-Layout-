import React, { useState } from 'react';
import { LayoutGrid, List, ArrowUpRight, Filter, Eye, Layers, Maximize, Smartphone } from 'lucide-react';
import { ShowcaseProject } from '../types.ts';

const SHOWCASE_ITEMS: ShowcaseProject[] = [
  {
    id: 'showcase-1',
    title: 'Adaptive Dashboard Shell',
    category: 'Application Layout',
    summary: 'Collapsible left sidebar for desktop transforming into bottom tab navigation on mobile devices with sticky header.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    columns: { mobile: '1 col', tablet: '2 col', desktop: '3 col' },
    tags: ['Media Queries', 'CSS Grid', 'Sidebar'],
  },
  {
    id: 'showcase-2',
    title: 'Fluid Product E-Commerce Catalog',
    category: 'Grid Re-flow',
    summary: 'Auto-fill CSS grid that scales from 1 card per row on small phones to 4 cards per row on ultra-wide desktop displays.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    columns: { mobile: '1 col', tablet: '2 col', desktop: '4 col' },
    tags: ['Auto-Fit', 'MinMax', 'Cards'],
  },
  {
    id: 'showcase-3',
    title: 'Editorial Multi-Column Magazine',
    category: 'Content Layout',
    summary: 'Classic 12-column asymmetric grid with responsive text column wrapping and floating pull-quotes.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    columns: { mobile: '1 col', tablet: '2 col', desktop: '3 col' },
    tags: ['Editorial', 'Typography', 'Flexbox'],
  },
  {
    id: 'showcase-4',
    title: 'Responsive Split Hero Presentation',
    category: 'Marketing Layout',
    summary: 'Two-column 50/50 desktop split shifting seamlessly into a vertical column with stacked primary call-to-actions.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80',
    columns: { mobile: '1 col stack', tablet: '1 col stack', desktop: '2 col split' },
    tags: ['Hero Split', 'Media Queries', 'Clamp'],
  },
  {
    id: 'showcase-5',
    title: 'Adaptive Data Table & Card Matrix',
    category: 'Data Density',
    summary: 'Full-width multi-cell table on desktop that collapses into individually formatted swipeable cards on mobile.',
    imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80',
    columns: { mobile: 'Card list', tablet: 'Compact table', desktop: 'Full table' },
    tags: ['Tables', 'Card Flip', 'Responsive'],
  },
  {
    id: 'showcase-6',
    title: 'Interactive Multi-Breakpoint Gallery',
    category: 'Media Showcase',
    summary: 'Masonry-style photo stream maintaining strict aspect ratios with responsive gap spacing across viewport widths.',
    imageUrl: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop&q=80',
    columns: { mobile: '1 col', tablet: '2 col', desktop: '3 col' },
    tags: ['Aspect Ratio', 'Masonry', 'CSS Grid'],
  },
];

export const ShowcaseGrid: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const allTags = ['All', 'Media Queries', 'CSS Grid', 'Flexbox', 'Sidebar', 'Auto-Fit'];

  const filteredItems = selectedTag === 'All'
    ? SHOWCASE_ITEMS
    : SHOWCASE_ITEMS.filter((item) => item.tags.includes(selectedTag));

  return (
    <section
      id="showcase"
      className="py-16 sm:py-20 lg:py-24 border-b border-stone-200 bg-white"
    >
      <div className="custom-responsive-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 bg-stone-100 px-2.5 py-1 rounded-md mb-3 inline-block">
              Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
              Responsive Layout Showcase
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-2 leading-relaxed max-w-2xl">
              Inspect how distinct page archetypes adapt their column structure, element ordering, and visual density.
            </p>
          </div>

          {/* View Mode Controls (Grid vs List) */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-stone-100 p-1 rounded-xl border border-stone-200">
            <button
              id="view-grid-btn"
              type="button"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
            <button
              id="view-list-btn"
              type="button"
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'list'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>List View</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 text-xs scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-stone-400 shrink-0 ml-1" />
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-full font-medium transition-colors whitespace-nowrap ${
                selectedTag === tag
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Dynamic Display (Grid or List) */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-stone-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image container with fixed aspect ratio */}
                  <div className="relative aspect-video w-full overflow-hidden bg-stone-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded font-semibold uppercase">
                      {item.category}
                    </div>
                  </div>

                  {/* Card Content with proper padding math */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight group-hover:text-stone-700 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    {/* Breakpoint Column Behavior Pill Grid */}
                    <div className="bg-stone-50 rounded-lg p-2.5 border border-stone-100 text-[11px] font-mono mb-4 space-y-1">
                      <div className="flex justify-between text-stone-600">
                        <span>Mobile (&lt;640px):</span>
                        <strong className="text-stone-900">{item.columns.mobile}</strong>
                      </div>
                      <div className="flex justify-between text-stone-600">
                        <span>Tablet (640-1023px):</span>
                        <strong className="text-stone-900">{item.columns.tablet}</strong>
                      </div>
                      <div className="flex justify-between text-stone-600">
                        <span>Desktop (≥1024px):</span>
                        <strong className="text-stone-900">{item.columns.desktop}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags Footer */}
                <div className="px-5 sm:px-6 pb-5 pt-0 flex flex-wrap gap-1.5 border-t border-stone-100 pt-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* List Mode */
          <div className="divide-y divide-stone-200 border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
            {filteredItems.map((item) => (
              <article
                key={`list-${item.id}`}
                id={`list-${item.id}`}
                className="p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-stone-50/80 transition-colors"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-full sm:w-28 h-20 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold bg-stone-100 px-1.5 py-0.5 rounded mr-2">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 max-w-xl mt-1">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Responsive Column tags */}
                <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                  <div className="text-right hidden lg:block text-xs font-mono text-stone-500">
                    <div>Mobile: {item.columns.mobile}</div>
                    <div>Desktop: {item.columns.desktop}</div>
                  </div>
                  <div className="flex gap-1">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-stone-600 bg-stone-100 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
