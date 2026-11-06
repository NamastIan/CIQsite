---
version: alpha
name: Simon Sinek Optimism
description: A warm, editorial, and high-contrast brand system balancing calm neutrals with a vivid orange accent.
colors:
  primary: "#ff5900"
  secondary: "#2a1e2a"
  tertiary: "#f7fffc"
  neutral: "#f0ecdb"
  surface: "#ffffff"
  on-surface: "#2a1e2a"
  error: "#b42318"
  muted-surface: "#f7f5ea"
  border: "#e5e7eb"
  inverted-surface: "#1f2a1f"
typography:
  headline-display:
    fontFamily: Advercase
    fontSize: 68px
    fontWeight: 400
    lineHeight: 70.875px
    letterSpacing: 0px
  headline-lg:
    fontFamily: Advercase
    fontSize: 50px
    fontWeight: 400
    lineHeight: 50.625px
    letterSpacing: 0px
  headline-md:
    fontFamily: Advercase
    fontSize: 37px
    fontWeight: 400
    lineHeight: 44px
    letterSpacing: 0px
  headline-sm:
    fontFamily: Advercase
    fontSize: 27px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: 0px
  body-lg:
    fontFamily: Advercase
    fontSize: 20px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: 0px
  body-md:
    fontFamily: Google Sans Flex
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: Google Sans Flex
    fontSize: 13.5px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  label-lg:
    fontFamily: Google Sans Flex
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0px
  label-md:
    fontFamily: Google Sans Flex
    fontSize: 15.75px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0px
  label-sm:
    fontFamily: Google Sans Flex
    fontSize: 13.5px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  nav:
    fontFamily: Google Sans Flex
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  overline:
    fontFamily: Google Sans Flex
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.08em
  caption:
    fontFamily: Google Sans Flex
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0px
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 11px
  xl: 12px
  full: 9999px
spacing:
  xs: 6px
  sm: 14px
  md: 28px
  lg: 46px
  xl: 72px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.tertiary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: "12px 11px"
    minHeight: "41px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "12px 11px"
    minHeight: "41px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
  chip:
    backgroundColor: "{colors.muted-surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
---
# Simon Sinek Optimism

## Overview
This system feels thoughtful, editorial, and optimistic rather than corporate or sterile. It pairs a warm cream base with a sharp orange accent and a deep plum text color, creating a calm but motivating tone suited to leadership content, education, and personal development. The layout is spacious and image-led, with oversized serif headlines doing most of the emotional work.

## Colors
- **Primary (#ff5900):** A vivid tangerine orange used for brand marks, key links, and the strongest call to action. It should feel energetic, hopeful, and slightly handcrafted.
- **Secondary (#2a1e2a):** A deep plum-brown used for primary text, navigation, and dark UI accents. It gives the system its serious, grounded editorial contrast.
- **Tertiary (#f7fffc):** An off-white highlight used for button text and light foreground details on accent surfaces. It keeps contrast soft and approachable.
- **Neutral (#f0ecdb):** The signature warm background tone that supports the site’s calm, paper-like atmosphere. Use it for large surfaces and section backdrops.
- **Surface (#ffffff):** Clean white for content containers, overlays, and areas that need maximum clarity against the warm palette.
- **On-surface (#2a1e2a):** The primary content color for readable text on light backgrounds.
- **Muted-surface (#f7f5ea):** A slightly lighter cream for subtle panels, chips, and secondary surfaces.
- **Border (#e5e7eb):** A restrained cool border tone for cards, separators, and low-emphasis outlines.
- **Inverted-surface (#1f2a1f):** A deep forest-leaning dark tone suitable for hero backdrops and contrast-rich feature sections.
- **Error (#b42318):** Reserved for validation and destructive states; it should remain rare and functional.

## Typography
Headlines use **Advercase**, a distinctive serif-like display face with a literary, slightly typewriter-adjacent personality. The strongest hierarchy is carried by large, light-weight headings: `headline-display` for hero statements, `headline-lg` and `headline-md` for section leads, and `headline-sm` for smaller promotional headings. Body copy is split between Advercase for more expressive editorial paragraphs and Google Sans Flex for interface text, labels, and utility content.

Navigation and button labels rely on Google Sans Flex for clarity and modernity, with medium weight for primary actions. Labels and nav text are restrained, generally sentence case rather than all caps, while the only notable letter-spacing treatment is the `overline` style, which uses modest tracking for small uppercase-like emphasis. Overall, typography mixes expressive personality with highly legible UI text.

## Layout
The layout favors wide, breathable sections with strong horizontal alignment and generous vertical separation. Large hero blocks sit on a warm neutral canvas, with content typically arranged in a two-column composition: text on one side, product imagery on the other. Spacing follows a loose but consistent rhythm based on `xs` 6px, `sm` 14px, `md` 28px, `lg` 46px, and `xl` 72px, which creates a comfortable editorial cadence without feeling rigid.

Use generous section padding, especially around hero and promotional areas, and keep card interiors compact at around 16px. Content should feel centered and expansive rather than tightly boxed, with ample negative space around major headlines and calls to action.

## Elevation & Depth
The design is mostly flat, relying on color contrast and tonal layering instead of heavy shadow systems. Depth appears through stacked sections, warm-on-dark contrast in the hero, and subtle borders rather than pronounced drop shadows. Cards should stay understated, with `border` defining structure and only minimal lift when necessary.

This restraint keeps the experience calm and editorial. When depth is needed, use color separation and soft tonal transitions before introducing shadow.

## Shapes
The shape language is soft and approachable, with rounded corners used selectively rather than everywhere. Primary buttons are noticeably pill-like with `rounded.lg`, while secondary actions are closer to small-radius rectangles. Cards use a modest `rounded.md` value, which keeps the system friendly without becoming overly playful.

Overall, the geometry feels gentle, modern, and slightly handcrafted, matching the brand’s human-centered tone.

## Components
Buttons should be simple and high-contrast. `button-primary` is the main CTA: orange background, light text, medium weight, and compact padding around `12px 11px` with a minimum height of `41px`. It should feel inviting and decisive. `button-secondary` is transparent with a dark outline and text, used for lower-priority actions or secondary navigation. `button-link` is text-only, underlined, and very lightweight for legal links and inline actions.

Cards should use `card` styling: warm neutral background, subtle border, 8px radius, and modest padding. They should feel like content containers rather than elevated modules. Inputs should be clean and unobtrusive, with white or light surfaces, dark text, moderate padding, and the same restrained rounded corners as cards.

Chips and small pills should be soft, compact, and lightly tinted, using the muted cream palette and `rounded.full`. Navigation items should stay text-first, with minimal chrome and no heavy button treatment. Links should remain understated and readable, preserving the editorial quality of the page.

## Do's and Don'ts
- Do keep the orange accent reserved for primary actions, brand moments, and key links.
- Do use large serif headlines to establish hierarchy and mood.
- Do preserve generous whitespace around hero content and major section breaks.
- Do keep cards and form fields visually light, with subtle borders instead of shadows.
- Don't introduce saturated secondary colors that compete with the orange.
- Don't make buttons overly tall, glossy, or aggressively shadowed.
- Don't replace the editorial serif tone with a generic sans-serif across headings.
- Don't crowd the layout with dense grids or tight, dashboard-like spacing.
