---
name: GigSaver Core
colors:
  surface: '#fcf8ff'
  surface-dim: '#dbd8e5'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2fe'
  surface-container: '#efecf9'
  surface-container-high: '#e9e6f3'
  surface-container-highest: '#e4e1ed'
  on-surface: '#1b1b23'
  on-surface-variant: '#464555'
  inverse-surface: '#302f39'
  inverse-on-surface: '#f2effb'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#4849da'
  primary: '#4343d5'
  on-primary: '#ffffff'
  primary-container: '#5d5fef'
  on-primary-container: '#faf7ff'
  inverse-primary: '#c1c1ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#0056b9'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c6ee1'
  on-tertiary-container: '#f8f8ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c1c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2e2bc2'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#fcf8ff'
  on-background: '#1b1b23'
  surface-variant: '#e4e1ed'
typography:
  h1:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
  numeric-display:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1'
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
  gutter: 24px
  margin-page: 32px
---

## Brand & Style

The design system is engineered for the modern freelancer—individuals who manage complex, fluctuating income streams and require a tool that feels both empowering and precise. The brand personality is **Encouraging, Methodical, and Intelligent**. It aims to reduce the "financial anxiety" often associated with gig work by providing a calm, organized interface that celebrates growth.

The visual style is **Corporate / Modern** with a lean toward **Minimalism**. It utilizes a structured card-based layout to compartmentalize data points, ensuring that the interface remains readable even when information density is high. Subtle gradients and soft shadows are used to create a tactile sense of depth without overwhelming the user's focus.

## Colors

This design system uses a primary "Vibrant Purple" as the anchor for brand identity and primary actions. To ensure high usability in a financial context, a semantic palette is employed: **Emerald Green** (#10B981) represents positive cash flow, growth, and completion, while a **Soft Blue** (#3B82F6) is used for informative highlights and secondary metrics.

The background uses a cool-toned **Lavender Gray** (#F8F9FE) to differentiate from pure white surfaces, reducing eye strain during long sessions. Neutral tones are strictly cool-skewed to maintain a fresh, modern aesthetic.

## Typography

The system utilizes **Manrope** for headlines and data displays to provide a refined, trustworthy geometric feel that excels in numeric presentation. **Inter** is used for body copy and UI labels due to its exceptional legibility at small sizes and its neutral, utilitarian character. 

Weight is used strategically to create hierarchy: bold weights for financial totals and regular weights for descriptive text. Letter spacing is slightly tightened on headings to maintain a compact, premium look.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop, centered within a max-width container to maintain readability. It utilizes a 12-column system for flexible card widths (e.g., 3-column stats, 8-column charts, 4-column sidebars).

Spacing follows an 8px rhythmic scale. Cards are separated by a standard 24px gutter. Internal card padding is consistently 24px to provide "breathing room" for dense data. This generous use of white space ensures the "clean" aesthetic requested while allowing for high-information density.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. The base canvas is the Lavender-Gray background. Elements are layered as follows:

1.  **Level 0 (Background):** #F8F9FE.
2.  **Level 1 (Cards):** Pure white (#FFFFFF) with a very soft, diffused shadow (0px 4px 20px rgba(93, 95, 239, 0.04)). The shadow is subtly tinted with the primary purple to maintain color harmony.
3.  **Level 2 (Interactive/Floating):** Higher elevation with a more pronounced shadow for elements like active dropdowns or the primary "Add" button.

This system avoids heavy borders, relying instead on subtle color shifts and soft shadows to define boundaries.

## Shapes

The shape language is defined by **Rounded (0.5rem)** corners. This level of radius strikes a balance between professional precision and approachable softness. 

-   **Standard Cards/Inputs:** 16px (rounded-lg) for a substantial, modern feel.
-   **Buttons/Small Chips:** 8px (rounded) for crisp alignment with text.
-   **Special Feature Cards:** 24px (rounded-xl) to draw attention to unique tools like "Smart Savings."
-   **Progress Bars:** Fully pill-shaped to denote fluid movement and completion.

## Components

### Buttons
Primary buttons use a solid #5D5FEF fill with white text. Secondary buttons use a light purple tint or a ghost style with a 1px border. All buttons have a height of 44px or 48px to ensure a large touch target.

### Cards
The primary container for all data. Cards must have a 16px border radius, white background, and the "Level 1" soft shadow. Content inside cards should follow the 24px internal padding rule.

### Input Fields
Inputs are borderless or use a very faint light-gray border, with a light-gray background (#F1F5F9). On focus, they transition to a white background with a 2px purple stroke.

### Chips & Badges
Used for status (e.g., "Completed," "Pending"). They use high-reactivity colors (Green for growth, Red for expenses) with a 10% opacity background of the same hue to keep the text legible but the visual weight low.

### Data Visualization
Charts should use smooth splines (curved lines) rather than jagged angles. The primary data line should use the #5D5FEF purple, while secondary comparison lines use dashed strokes or the emerald green.