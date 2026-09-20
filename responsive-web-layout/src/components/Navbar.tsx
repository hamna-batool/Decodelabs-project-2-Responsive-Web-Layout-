import React, { useState, useEffect } from 'react';
import { Menu, X, Layers, Compass, ArrowRight, LayoutGrid, Sliders, BookOpen, Search } from 'lucide-react';
import { NavItem } from '../types.ts';

const NAV_ITEMS: NavItem[] = [
  { id: 'nav-overview', label: 'Overview', href: '#overview' },
  { id: 'nav-techniques', label: 'CSS Layouts', href: '#techniques', badge: 'Lab' },
  { id: 'nav-grid', label: 'Bento Grid', href: '#bento-grid' },
  { id: 'nav-showcase', label: 'Responsive Showcase', href: '#showcase' },
  { id: 'nav-spacing', label: 'Spacing Math', href: '#spacing-alignment' },
  { id: 'nav-contact', label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for elevated header style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.replace('#', ''));
    }
  };

  return (
    <header
      id="main-site-header"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200/80'
          : 'bg-stone-50/90 backdrop-blur-xs border-b border-stone-200/50'
      }`}
    >
      <nav
        id="primary-navigation"
        aria-label="Main Navigation"
        className="custom-responsive-container"
      >
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo and Brand Title */}
          <a
            id="brand-logo-link"
            href="#overview"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#overview');
            }}
            className="flex items-center gap-2.5 text-stone-900 group focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded-md p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-stone-900 text-stone-50 flex items-center justify-center font-bold text-lg shadow-xs group-hover:bg-stone-800 transition-colors">
              <Layers className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight leading-none text-stone-900">
                ResponsiveWeb
              </span>
              <span className="text-[11px] text-stone-500 font-mono font-medium tracking-tight">
                CSS Layout System
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.id}
                  id={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'text-stone-950 font-semibold bg-stone-200/60'
                      : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="text-[10px] font-mono uppercase bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Action Button */}
            <a
              id="cta-explore-layouts"
              href="#techniques"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#techniques');
              }}
              className="hidden sm:inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 px-3.5 py-2 rounded-lg transition-colors shadow-2xs"
            >
              <Sliders className="w-3.5 h-3.5 text-stone-700" />
              <span>Interactive Lab</span>
            </a>

            <a
              id="cta-primary-nav"
              href="#showcase"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#showcase');
              }}
              className="hidden md:inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 px-4 py-2 rounded-lg transition-colors shadow-2xs group"
            >
              <span>View Grid</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Mobile / Tablet Menu Button (touch target >= 44x44) */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-drawer"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg border border-stone-300 bg-white text-stone-800 hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 transition-colors shadow-2xs"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-stone-900" />
              ) : (
                <Menu className="w-5 h-5 text-stone-900" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile & Tablet Drawer Modal */}
      {isOpen && (
        <div
          id="mobile-navigation-overlay"
          className="fixed inset-0 top-[calc(2.25rem+4rem)] sm:top-[calc(2.25rem+4.5rem)] z-50 bg-stone-950/40 backdrop-blur-xs lg:hidden flex flex-col"
          onClick={() => setIsOpen(false)}
        >
          <div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="w-full bg-white border-b border-stone-300 shadow-xl p-5 sm:p-6 animate-in slide-in-from-top-2 duration-150 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-1 mb-4">
              <span className="text-xs font-semibold uppercase font-mono tracking-wider text-stone-400">
                Navigation Sections
              </span>
              <div className="divide-y divide-stone-100">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={`mobile-${item.id}`}
                    id={`mobile-${item.id}`}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="flex items-center justify-between py-3.5 px-2 text-stone-800 hover:text-stone-950 font-medium text-base hover:bg-stone-50 rounded-lg transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.badge ? (
                      <span className="text-xs font-mono uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                        {item.badge}
                      </span>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-stone-400" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Drawer Action Buttons */}
            <div className="pt-4 border-t border-stone-200 flex flex-col gap-2.5">
              <a
                href="#techniques"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#techniques');
                }}
                className="w-full py-3 px-4 bg-stone-900 text-white rounded-lg font-semibold text-center text-sm shadow-xs flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors"
              >
                <Sliders className="w-4 h-4 text-emerald-400" />
                <span>Open CSS Layout Techniques Lab</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full py-2.5 px-4 bg-stone-100 text-stone-800 rounded-lg font-medium text-center text-sm border border-stone-300 hover:bg-stone-200 transition-colors"
              >
                Send Layout Feedback
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
