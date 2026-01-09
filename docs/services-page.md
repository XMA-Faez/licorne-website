# Services Page Documentation

## Overview

The services section consists of two main page types:
1. **Services Index Page** (`/services`) - Overview of all services with category grouping
2. **Individual Service Pages** (`/services/[slug]`) - Detailed service information

## Architecture

### File Structure

```
app/services/
├── _components/           # Private components (not routes)
│   ├── AnimatedSection.tsx
│   ├── AnimatedCounter.tsx
│   ├── FAQAccordion.tsx
│   ├── FeaturedServiceCard.tsx
│   ├── ProcessTimeline.tsx
│   ├── ServiceCardEnhanced.tsx
│   ├── ServiceCategorySection.tsx
│   └── index.ts
├── components/            # Shared service components
│   ├── ServicePage.tsx    # Template for individual services
│   └── ServiceCta.tsx     # CTA section component
├── [service-slug]/        # Individual service pages
│   └── page.tsx
├── layout.tsx             # Services layout with metadata
└── page.tsx               # Services index page
```

## Components

### Animation Components

#### AnimatedSection
Wrapper component that animates children on scroll.

```tsx
<AnimatedSection delay={0.2}>
  <div>Content fades in when scrolled into view</div>
</AnimatedSection>
```

#### AnimatedHeading
Animated section header with eyebrow, title, and optional accent.

```tsx
<AnimatedHeading
  eyebrow="Our Services"
  title="Start Your Business in"
  titleAccent="Dubai"
  centered={false}
  light={false}
/>
```

#### AnimatedCounter
Number counter animation for statistics.

```tsx
<AnimatedCounter
  value="500+"
  label="Companies Formed"
  valueClassName="text-4xl font-serif"
  labelClassName="text-sm text-text-secondary"
/>
```

#### StatsRow
Row of animated statistics.

```tsx
<StatsRow
  stats={[
    { value: "500+", label: "Companies Formed" },
    { value: "40+", label: "Free Zones" },
  ]}
  variant="light" // or "dark"
  layout="horizontal" // or "grid"
/>
```

### Service Cards

#### FeaturedServiceCard
Large hero-style card with background image for primary services.

```tsx
<FeaturedServiceCard
  title="Mainland Company Setup"
  description="Full description..."
  href="/services/mainland-company-setup"
  image={HeroImage}
  badge="Most Popular"
/>
```

#### ServiceCardEnhanced
Standard service card with hover effects.

```tsx
<ServiceCardEnhanced
  title="Visa & Immigration"
  description="Description..."
  href="/services/visa-immigration"
  index={0} // For stagger animation
/>
```

### Section Components

#### ServiceCategorySection
Groups services by category with alternating backgrounds.

```tsx
<ServiceCategorySection
  eyebrow="Business Operations"
  title="Keep Your Business"
  titleAccent="Running"
  services={[...]}
  variant="dark" // or "light"
  columns={2}
/>
```

#### FAQAccordion
Interactive accordion with smooth animations.

```tsx
<FAQAccordion
  eyebrow="Common Questions"
  title="Frequently Asked Questions"
  items={[
    { question: "...", answer: "..." }
  ]}
/>
```

#### ProcessTimeline
Visual timeline showing process steps.
- Horizontal on desktop
- Vertical on mobile

```tsx
<ProcessTimeline
  eyebrow="How It Works"
  title="Your Path to Success"
  items={[
    { step: "01", title: "Consultation", description: "..." }
  ]}
/>
```

## Service Categories

Services are organized into logical categories:

1. **Company Formation** (Featured)
   - Mainland Company Setup
   - Free Zone Company Setup

2. **Visas & Immigration**
   - Visa & Immigration
   - Golden Visa UAE

3. **Business Operations**
   - PRO & Government Services
   - Bank Account Opening
   - Office Solutions
   - Accounting & VAT

4. **Licensing & Changes**
   - Trade License Services
   - Company Liquidation

## Styling Conventions

### Colors
- Primary (Gold): `text-primary`, `bg-primary`
- Secondary (Navy): `text-secondary`, `bg-secondary`
- Text: `text-text-secondary` for body, `text-secondary` for headings

### Typography (Font Tokens)
- `font-primary` (Instrument Serif): Applied globally to h1-h6 headings
- `font-secondary` (Inter): Applied to body, use class for specific text elements
- Accent words in titles: Use `text-primary` for gold color (inherits heading font)
- Body text: `font-secondary text-text-secondary leading-relaxed`

### Animations
- All animations use `motion/react` (Framer Motion)
- Standard easing: `[0.25, 0.1, 0.25, 1]`
- Stagger delay: 0.1s between items
- Viewport trigger: `{ once: true, margin: "-50px" }`

### Section Spacing
- Standard: `py-24 lg:py-32`
- Container: `max-w-7xl mx-auto px-6`

### Background Patterns
- Light sections: Cross pattern SVG at 5% opacity
- Dark sections: Grain texture + overlay image

## Adding New Services

1. Create new folder: `app/services/[new-service]/`
2. Create `page.tsx` with service data
3. Use `ServicePage` template component
4. Add service to appropriate category in `app/services/page.tsx`
