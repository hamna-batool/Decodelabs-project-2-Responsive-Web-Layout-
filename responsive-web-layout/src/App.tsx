import React, { useState } from 'react';
import { DeviceMode } from './types.ts';
import { BreakpointTester } from './components/BreakpointTester.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { LayoutTechniquesLab } from './components/LayoutTechniquesLab.tsx';
import { FeaturesBento } from './components/FeaturesBento.tsx';
import { ShowcaseGrid } from './components/ShowcaseGrid.tsx';
import { SpacingAlignmentGuide } from './components/SpacingAlignmentGuide.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('fluid');

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 flex flex-col font-sans antialiased selection:bg-stone-900 selection:text-white">
      {/* Top Viewport Breakpoint Inspector & Mode Switcher */}
      <BreakpointTester
        deviceMode={deviceMode}
        onDeviceModeChange={setDeviceMode}
      />

      {/* Main Content Area: Supports Fluid and Simulated Widths */}
      <div
        className={`w-full transition-all duration-300 ${
          deviceMode === 'mobile'
            ? 'max-w-[375px] mx-auto my-6 shadow-2xl border-4 border-stone-800 rounded-3xl overflow-hidden bg-white'
            : deviceMode === 'tablet'
            ? 'max-w-[768px] mx-auto my-6 shadow-2xl border-4 border-stone-800 rounded-2xl overflow-hidden bg-white'
            : deviceMode === 'desktop'
            ? 'max-w-[1200px] mx-auto my-6 shadow-2xl border-2 border-stone-700 rounded-xl overflow-hidden bg-white'
            : 'w-full bg-white'
        }`}
      >
        {/* Device Frame Notch Indicator for Mobile Simulation */}
        {deviceMode === 'mobile' && (
          <div className="bg-stone-900 py-1 flex items-center justify-center">
            <div className="w-20 h-3 bg-stone-800 rounded-full" />
          </div>
        )}

        {/* Responsive Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content">
          <HeroSection />
          <LayoutTechniquesLab />
          <FeaturesBento />
          <ShowcaseGrid />
          <SpacingAlignmentGuide />
          <ContactSection />
        </main>

        {/* Responsive Footer */}
        <Footer />
      </div>
    </div>
  );
}
