---
name: Financial Dashboard System
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#464555'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#712ae2'
  on-secondary: '#ffffff'
  secondary-container: '#8a4cfc'
  on-secondary-container: '#fffbff'
  tertiary: '#454853'
  on-tertiary: '#ffffff'
  tertiary-container: '#5d606b'
  on-tertiary-container: '#d9dbe8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5a00c6'
  tertiary-fixed: '#e0e2ef'
  tertiary-fixed-dim: '#c3c6d2'
  on-tertiary-fixed: '#181b24'
  on-tertiary-fixed-variant: '#434751'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 32px
  xl: 48px
  container-padding: 24px
  gutter: 24px
---

## Brand & Style

This design system is built for precision, clarity, and trust within the modern fintech space. The visual personality is **Corporate / Modern**, emphasizing a clean, high-density layout that manages complex data without overwhelming the user. 

The style prioritizes clarity through a monochromatic foundation punctuated by vibrant indigo and violet accents. It evokes a sense of professional reliability while feeling contemporary through the use of soft geometry and breathable whitespace. The aesthetic is designed to feel like a premium, high-performance tool rather than a generic utility.

## Colors

The palette is anchored by a deep Indigo primary color, used for high-priority actions and brand presence. A secondary Violet is utilized for supplementary data visualizations and progress indicators. 

The background uses a cool, off-white slate to reduce eye strain and provide a sophisticated canvas for cards. Semantic colors for status indicators (Success Green, Warning Amber) are intentionally desaturated in their background variants to maintain the professional, understated aesthetic of the dashboard.

## Typography

The design system utilizes **Manrope** for its refined, balanced character. It provides the perfect middle ground between a technical sans-serif and a humanist typeface, ensuring financial figures are highly legible while maintaining a trustworthy tone.

Headlines use tighter letter spacing and heavier weights to create a strong hierarchy. Body text is set with generous line height to improve readability in data-heavy environments. Data labels use an uppercase style with increased letter spacing to distinguish them from interactive elements.

## Layout & Spacing

This design system employs a **fluid 12-column grid** for main dashboard views, allowing content to scale across desktop resolutions while maintaining strict alignment. A baseline 8px grid governs all internal component spacing to ensure mathematical harmony.

Cards and containers are separated by 24px gutters. Inside components, a 16px or 24px internal padding is standard to prevent data from feeling cramped. For high-density tables, vertical cell padding may be reduced to 12px.

## Elevation & Depth

Visual hierarchy is established through **Ambient Shadows** and **Tonal Layers**. Instead of harsh borders, surfaces are defined by extremely soft, diffused shadows with a subtle indigo tint (`rgba(79, 70, 229, 0.06)`).

The background surface is the lowest layer. Active cards sit on a "Level 1" elevation with a 4px blur shadow. Hover states or floating modals utilize "Level 2" elevation with a 12px blur shadow to create a distinct sense of "lifting" off the interface. Thin, 1px low-contrast borders (`#E2E8F0`) are used sparingly to define table rows and input fields without adding visual noise.

## Shapes

The shape language uses **Level 2 (Rounded)** settings. Standard UI components like buttons and input fields use a 0.5rem (8px) radius. Large dashboard cards and primary containers use a more pronounced 1rem (16px) or 1.5rem (24px) radius to soften the technical nature of the data. 

Status badges and tags follow a pill-shaped convention (full radius) to distinguish them from structural elements like cards and buttons.

## Components

### Cards
Cards are the primary container unit. They feature a white background, Level 1 shadow, and 16px-24px corner radius. Title areas within cards should be clearly demarcated with a subtle divider or consistent 24px top padding.

### Tables
Tables prioritize data density. Headers are set in `label-caps` with a light grey background tint. Rows should have a subtle hover effect (a 2% darkening of the background) rather than hard borders between every cell to maintain a clean aesthetic.

### Status Badges
*   **Completed:** Success Green text on a 10% opacity Green background. Pill-shaped.
*   **Pending:** Warning Amber text on a 10% opacity Amber background. Pill-shaped.
*   Text should be `body-sm` bold for maximum legibility at small sizes.

### Navigation Elements
The sidebar navigation uses a clean, vertical list. Active items are indicated by a 4px vertical bar on the left edge in the primary Indigo color, accompanied by a subtle Indigo tint across the entire menu item background. Icons are line-style with a 2px stroke weight.

### Buttons
Primary buttons are solid Indigo with white text. Secondary buttons use a light Indigo surface (`tertiary_color_hex`) with Indigo text. All buttons feature an 8px corner radius.