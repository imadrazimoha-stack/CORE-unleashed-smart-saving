---
name: Smart Savings Design System
colors:
  surface: '#fcf8ff'
  surface-dim: '#dcd8e5'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#f0ecf9'
  surface-container-high: '#eae6f4'
  surface-container-highest: '#e4e1ee'
  on-surface: '#1b1b24'
  on-surface-variant: '#464555'
  inverse-surface: '#302f39'
  inverse-on-surface: '#f3effc'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#831ada'
  on-secondary: '#ffffff'
  secondary-container: '#9e41f5'
  on-secondary-container: '#fffbff'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb8ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6800b4'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#fcf8ff'
  on-background: '#1b1b24'
  surface-variant: '#e4e1ee'
typography:
  h1:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  numeral-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 32px
  sidebar-width: 280px
  navbar-height: 72px
  gutter: 24px
  grid-columns: '12'
---

## Brand & Style
The design system is engineered for a sophisticated fintech environment, balancing the rigorous reliability of a traditional financial institution with the agility of a modern wealth-tech platform. The brand personality is professional yet encouraging, focusing on the emotional rewards of financial growth.

The visual style blends **Modern Corporate** structure with **Glassmorphism** accents. It utilizes high-transparency layers to create a sense of depth and openness, reflecting financial transparency. The interface relies on generous whitespace, a strict "less but better" approach to data density, and soft, organic lighting to maintain a calm user experience during complex financial decision-making.

## Colors
The palette is anchored by a deep Blue-to-Indigo gradient that represents stability and digital-first innovation. Purple is utilized sparingly as an accent color to highlight "premium" features or smart insights.

- **Primary:** A transition from Azure Blue to Royal Indigo. Used for primary actions, progress bars, and brand touchpoints.
- **Secondary:** Amethyst Purple. Used for secondary CTAs and algorithmic "smart" suggestions.
- **Success/Warning:** Emerald Green specifically for "Savings Growth" and Amber Orange for "Expense Alerts," ensuring immediate semantic recognition.
- **Surface:** The background remains a cool neutral off-white to allow glass effects and gradients to stand out without competing for attention.

## Typography
This design system pairs **Manrope** for headlines and financial numerals with **Inter** for functional UI text and body copy. 

**Manrope** provides a modern, geometric flair that excels in large displays and currency formatting, adding a sense of precision. **Inter** ensures maximum legibility in dense data tables and small labels. For financial figures, use tabular lining figures to ensure vertical alignment in columns and lists.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. A persistent 280px left sidebar anchors the navigation, while the main content area utilizes a 12-column responsive grid with a maximum container width of 1440px.

Spacing is based on an 8px rhythmic scale. Cards and modules should utilize a 24px gutter to maintain a clean, airy feel. Large financial dashboards should favor "comfortable" density over "compact" to reduce cognitive load and emphasize clarity.

## Elevation & Depth
Depth is achieved through **Soft Ambient Shadows** and **Glassmorphism**. 

1.  **Level 0 (Base):** The neutral background (#F8FAFC).
2.  **Level 1 (Cards):** Pure white background with a 16% opacity shadow (Blur: 32px, Y: 8px) tinted with the primary indigo hex. 
3.  **Level 2 (Glass Overlays):** Used for the sidebar and top navbar. Background is 70% white with a 20px backdrop blur and a 1px inner border of 10% white to simulate the edge of the glass.
4.  **Level 3 (Modals):** High-contrast elevation with a darker shadow to focus attention, paired with a background backdrop blur that desaturates the content behind it.

## Shapes
A consistent **16px (1rem) corner radius** is applied to all primary card components and containers to evoke a sense of approachability and modernism. 

Secondary elements like buttons and input fields use a **rounded-lg (8px)** radius to provide a slight visual distinction from the larger containers they sit within. Avatars and status "pills" utilize a full-round (pill) shape to denote interactive or status-driven content.

## Components
-   **Buttons:** Primary buttons feature the Indigo-Blue gradient with a subtle white inner glow. Secondary buttons use a Ghost style with a 1px border.
-   **Cards:** The signature component. White background, 16px radius, soft ambient shadow. For "Insight" cards, use a glassmorphic background with a subtle primary-colored glow behind the glass.
-   **Navigation:** The left sidebar uses high-contrast iconography and active states highlighted by a vertical indigo pill on the leading edge.
-   **Data Visualization:** Charts should use rounded line caps and soft gradients for area fills. Avoid harsh grid lines; use light gray dotted lines for axes.
-   **Input Fields:** Minimalist design with a 1px light gray border that transitions to a 2px Indigo border on focus.
-   **Savings Progress:** Utilize thick, rounded progress bars with the primary gradient to signify accumulation and growth.