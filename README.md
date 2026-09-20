# Project 2: Responsive Web Layout

> **Frontend Development Internship Project**  
> Completed as part of the Frontend Development Internship.

---

## 📌 Project Overview

The objective of **Project 2: Responsive Web Layout** is to engineer a responsive webpage that fluidly adapts across different screen sizes and device viewports. 

Built strictly with frontend technologies, the project focuses on responsive architecture, CSS layout techniques, accessible adaptive navigation, and mathematical alignment principles.

---

## 🎯 Key Requirements & Implementation

| Requirement | Implementation Details |
| :--- | :--- |
| **CSS Media Queries** | Declarative `@media` rules declared in `src/index.css` supporting Mobile (`< 640px`), Tablet (`640px - 1023px`), Desktop (`≥ 1024px`), and Large Screens (`≥ 1280px`). |
| **Responsive Navigation** | Desktop horizontal navbar that transforms into a touch-friendly mobile drawer menu with 44px+ targets, backdrop overlay, and keyboard accessibility (`Escape` key support). |
| **Proper Spacing & Alignment** | Strict 8pt spatial grid system, mathematical container padding ($P_{\text{outer}} \ge \text{Gap}_{\text{inner}}$), concentric corner radius formula ($R_{\text{in}} = R_{\text{out}} - P$), and fluid typography using CSS `clamp()`. |
| **CSS Layout Techniques** | Practical demonstration and comparison of CSS Media Queries, intrinsic CSS Grid (`auto-fit`, `minmax`), and Flexbox wrapping. |

---

## 🚀 Key Features

1. **Interactive Viewport Inspector & Simulator Toolbar**:
   - Real-time display of window width and the active CSS media query rule.
   - One-click device preview modes: **Fluid (Full Width)**, **Mobile (375px)**, **Tablet (768px)**, and **Desktop (1200px)** for evaluation on any screen.

2. **Adaptive Hero Section**:
   - Split-layout on desktop shifting to a stacked mobile presentation.
   - Interactive *Responsive Grid Anatomy* diagram illustrating how columns collapse across device classes.

3. **Interactive CSS Layout Techniques Lab**:
   - Live interactive playground comparing **CSS Media Queries**, **Fluid CSS Grid (`repeat(auto-fit, minmax(...))`**, and **CSS Flexbox (`flex-wrap`)**.
   - Real-time container width slider ($320\text{px} - 1000\text{px}$) and rhythmic gap spacing controls ($8\text{px}, 16\text{px}, 24\text{px}, 32\text{px}$).
   - Live syntax panel showing the exact CSS code generated for each layout.

4. **Multi-Breakpoint Bento Grid**:
   - Asymmetric bento cards adapting from 1 column on mobile to 2 columns on tablet and 4 columns on large screens.
   - Highlights responsive web design principles and optical balance.

5. **Responsive Showcase & Case Studies**:
   - View mode switcher (**Grid View** vs. **List View**) to test how layout structures re-flow.
   - Category filtering and aspect-ratio preserved media cards.

6. **Spacing & Alignment Rules Guide**:
   - Visual architectural guide demonstrating container padding math, concentric radius math, and the 2:1 button aspect ratio.

7. **Responsive Contact / Feedback Form**:
   - Inputs stacked in a single vertical column on mobile for touch accessibility, re-aligning into balanced multi-column rows on larger screens.

8. **Semantic Multi-Column Footer**:
   - Responsive multi-column layout collapsing gracefully from 4 columns (desktop) to 2 columns (tablet) to 1 column (mobile), with a smooth *Back to top* action.

---

## 🛠️ Tech Stack & Key Skills

- **Core Technologies**: React 19, TypeScript, HTML5, CSS3
- **Styling & Layout**: Tailwind CSS, Custom CSS Media Queries, CSS Grid, CSS Flexbox
- **Typography & Spacing**: CSS `clamp()`, 8pt Harmonic Grid, WCAG AA Compliant Contrast
- **Icons**: Lucide React
- **Build Tooling**: Vite

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Local Setup

```bash
# 1. Clone the repository or navigate to the project directory
cd responsive-web-layout

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
