# Design Brief

## Purpose
Premium, professional SaaS project management platform — enterprise-grade interface for teams managing complex work. Inspired by Linear, Vercel, and Stripe.

## Tone
Refined minimalism. Clean lines, intentional spacing, confident energy. No decoration unless it serves function. Enterprise-ready clarity.

## Differentiation
Intentional opacity layering for depth. Generous whitespace. Micro-interactions with purpose (150ms transitions). Data-centric elegance without embellishment.

## Color Palette

| Role | Light OKLCH | Dark OKLCH | Usage |
|------|---|---|---|
| Primary (Indigo) | `0.55 0.22 260` | `0.65 0.24 260` | CTAs, active states, primary accents |
| Success (Emerald) | `0.62 0.19 145` | `0.55 0.21 145` | Task complete, status ok |
| Warning (Amber) | `0.70 0.21 75` | `0.62 0.22 75` | Caution, overdue, risk |
| Destructive (Red) | `0.55 0.24 25` | `0.62 0.22 25` | Delete, critical, error |
| Info (Sky) | `0.60 0.20 240` | `0.52 0.22 240` | Info panels, notifications |
| Neutral Surface | `0.98 0` | `0.11 0` | Background, card, sidebar layers |

## Typography
Display: General Sans (400, 700) — modern, professional, distinctive. Body: General Sans (400, 700) — refined legibility. Mono: JetBrains Mono (400, 700) — technical clarity.

## Elevation & Depth
Subtle shadow hierarchy: xs (1px offset) → sm (focus) → md (popovers) → lg (modals). Sidebar marginally darker than background. Cards use `border + shadow-xs` for layered depth.

## Structural Zones
Header: `bg-card border-b` — topbar with title, actions, notifications. Sidebar: `bg-sidebar` — slightly darker, clear hierarchy for nav. Content: `bg-background` — clean slate. Sections: `bg-card` with `border + shadow-xs`. Alternating: `bg-muted/5` for rhythm.

## Spacing & Rhythm
Grid: 4px baseline. Tokens: sm (8px), md (16px), lg (24px), xl (32px). Card padding: 16px. Section gaps: 24px. Responsive reflow at sm/md/lg breakpoints.

## Component Patterns
Cards: `bg-card border border-border shadow-xs rounded-lg`. Buttons: Primary (filled indigo), Secondary (outlined), Ghost (text). Forms: Clear labels, `bg-input` fields, visible focus rings. Status badges: Semantic colors with matching foreground contrast. Dialogs: `bg-popover shadow-lg` with overlay.

## Motion
Transitions: 150ms for hover/focus, 200ms for page changes, 300ms for complex animations. Cubic-bezier: `(0.4, 0, 0.2, 1)` for smoothness. No excessive bounce or elastic effects.

## Constraints
Accessibility first: AA+ contrast in light/dark. Keyboard navigation. Visible focus rings (2px offset). Mobile-first responsive. No color-only information. Semantic HTML. Touch targets ≥44px.

## Signature Detail
Layered surface depth through intentional border + shadow combinations. Premium whitespace rhythm creates visual breathing room. Indigo accent used sparingly for maximum impact on interactive elements.
