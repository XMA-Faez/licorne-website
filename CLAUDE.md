# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Licorne Website is a business services website for a Dubai-based company formation and PRO services firm. Built with Next.js 16, React 19, Tailwind CSS 4, and Motion (Framer Motion).

## Commands

```bash
npm run dev      # Development server with Turbopack (http://localhost:3000)
npm run build    # Production build with Turbopack
npm run lint     # ESLint
npm run start    # Start production server
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router, Turbopack enabled
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Animations**: Motion (framer-motion) for page transitions and UI animations
- **UI Components**: Radix UI primitives (Dialog, Navigation Menu) via shadcn-style components
- **Fonts**: Inter (sans) + Instrument_Serif (serif) via next/font

### Directory Structure

```
app/
├── (home)/components/    # Homepage-specific sections (Hero, Services, FAQ, etc.)
├── services/
│   ├── _components/      # Private reusable service components (AnimatedSection, ProcessTimeline, FAQAccordion)
│   ├── components/       # Shared service components (ServicePage, ServiceCta)
│   └── [service-name]/   # Individual service pages using ServicePage template
├── [page-name]/          # Static pages (about, contact, faq, etc.)
└── layout.tsx            # Root layout with Header/Footer

components/
├── ui/                   # Base UI primitives (Button, Card, Sheet, NavigationMenu)
├── cards/                # Card variants (Feature, Testimonial, Service, ProcessStep)
├── sections/             # Reusable page sections
└── layout/               # Layout components (Header, Footer, Section, SectionHeading)

lib/
└── utils.ts              # cn() utility for className merging (clsx + tailwind-merge)
```

### Design System

Custom color palette defined in `app/globals.css` using Tailwind 4 `@theme`:
- **Primary**: Gold tones (`gold-*`, `primary-*`)
- **Secondary**: Navy tones (`navy-*`, `secondary-*`)
- **Base**: Stone neutrals (`base-*`)
- **Semantic**: `text`, `text-secondary`, `background`, `border`, etc.

Utility classes: `glass`, `gradient-text`, `bg-dots-pattern`, `card-elevated`, `card-premium`

### Service Pages Pattern

Service pages use a data-driven template (`app/services/components/ServicePage.tsx`). Each service page exports a config object with:
- `hero`: title, description, image
- `overview`: eyebrow, title, description, highlights
- `stats`: value/label pairs
- `deliverables`: service items
- `process`: step-by-step timeline
- `faqs`: Q&A items
- `cta`: call-to-action config

### Path Aliases

`@/*` maps to project root (configured in `tsconfig.json`).

## Styling Rules

- **Instrument_Serif font**: Never apply bold/font-weight styles.
- Use semantic color tokens (`text-secondary`, `bg-primary`, `border-base-200`) over raw colors.
- Components use the `cn()` utility from `@/lib/utils` for conditional classes.
