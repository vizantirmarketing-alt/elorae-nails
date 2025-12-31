# 💅 Elorae Nails Development Guidelines
## 🗓️ Last Updated: December 2024

Welcome to the Elorae Nails codebase. This document defines how the project is structured, how new features should be added, and how both developers and AI tools (like Cursor or Copilot Agents) should interact with the repository.

The goal: build a premium, immersive nail studio website with signature interactions that feels like a $15k+ build.

---

## ⚙️ 1. Core Rules

### System Instruction for AI and Developers:

- Always follow the Elorae Nails folder structure.
- **Each section has its own component file** inside the components folder.
- **Shared components (Navigation, Footer, Cursor, LenisProvider) have their own files.**
- Never bundle unrelated code into one file.
- Preserve naming consistency (e.g., `Hero.tsx`, `Services.tsx`, `Gallery.tsx`).
- Ensure all imports remain clean, modular, and use the `@/` alias for absolute imports.
- **This is a Next.js 14 App Router project** — use `app/` directory for routes.
- **GSAP + ScrollTrigger is required** for all scroll-based animations.
- **Lenis is required** for smooth scroll behavior.

### ⚠️ AI Safety Block (Pin this in Cursor):

```
Do not create, edit, move, or delete any folders or files other than the one explicitly mentioned in this prompt.
Only modify the exact file specified. Do not generate new components, pages, layouts, or assets unless directly instructed.
Preserve the current folder structure, imports, and exports exactly as they are.
Your task is limited strictly to updating the existing code inside the specified file while keeping all other parts of the project untouched.
```

Pin or reference this block inside Cursor or any AI-assisted IDE session before making automated edits.

---

## 🎨 2. Design System

### Color Palette (CSS Variables in globals.css):

```css
:root {
  --color-cream: #FAF7F4;
  --color-blush: #E8DCD5;
  --color-mauve: #C9B8B1;
  --color-rose: #B89B94;
  --color-charcoal: #2C2826;
  --color-warm-gray: #6B6361;
  --color-gold: #C4A87C;
}
```

### Typography:

| Type | Font | Weights | Usage |
|------|------|---------|-------|
| Display | Cormorant Garamond | 300, 400, 500, 600 | Headings, titles, accent text |
| Body | Montserrat | 300, 400, 500 | Paragraphs, labels, navigation |

### Font Import (globals.css):
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap');
```

### Typography Scale:

| Element | Size | Weight | Letter Spacing |
|---------|------|--------|----------------|
| Hero Title | clamp(3.5rem, 10vw, 8rem) | 300 | — |
| Section Title | clamp(2.5rem, 6vw, 4rem) | 300 | — |
| Eyebrow Label | 0.7rem - 0.75rem | 400 | 0.3em |
| Body Text | 0.95rem - 1rem | 300 | 0.02em |
| Nav Links | 0.75rem | 400 | 0.15em |
| Button Text | 0.7rem | 400 | 0.2em |

---

## 🧭 3. Folder Structure

```
elorae-nails/
 ├─ app/
 │   ├─ layout.tsx              # Root layout (fonts, metadata, LenisProvider)
 │   ├─ page.tsx                # Main single-page site
 │   ├─ globals.css             # CSS variables, base styles, Lenis CSS
 │   │
 │   ├─ terms/
 │   │   └─ page.tsx            # Terms & Conditions page
 │   ├─ faq/
 │   │   └─ page.tsx            # FAQ page
 │   ├─ blog/
 │   │   └─ page.tsx            # Blog page
 │   │
 │   ├─ components/
 │   │   ├─ LenisProvider.tsx   # ✅ Smooth scroll wrapper
 │   │   ├─ Navbar.tsx          # ✅ Fixed navigation bar
 │   │   ├─ Hero.tsx            # Hero section
 │   │   ├─ About.tsx           # About section with image
 │   │   ├─ Gallery.tsx         # Nail art gallery grid
 │   │   ├─ Services.tsx        # Services list section
 │   │   ├─ Booking.tsx         # Booking CTA section
 │   │   ├─ Contact.tsx         # Contact info section
 │   │   ├─ Footer.tsx          # Site footer
 │   │   └─ Icons.tsx           # SVG icon components
 │   │
 │   └─ lib/
 │       └─ gsap.ts             # GSAP configuration and utilities
 │
 ├─ public/
 │   └─ images/                 # Portfolio and branding images
 │       ├─ gallery/
 │       │   └─ [nail-art].jpg
 │       └─ about/
 │           └─ [portrait].jpg
 │
 ├─ tailwind.config.ts          # Tailwind with brand colors
 ├─ package.json
 └─ README.md
```

---

## 💅 4. Signature Interactions (CRITICAL)

These interactions define the premium feel. They must be implemented exactly as specified.

### 1. Hero Entrance (`components/Hero.tsx`)

```tsx
'use client';

// Requirements:
// - Staggered fade-in for tagline, title, subtitle, CTA
// - Background gradient with subtle grain overlay
// - Scroll indicator animation at bottom
```

**Behavior:**
- Tagline: Fade up, delay 0.2s
- Title: Fade up, delay 0.4s
- Subtitle: Fade up, delay 0.6s
- CTA: Fade up, delay 0.8s
- Scroll line: Pulse animation infinite

### 2. Smooth Scroll (`components/LenisProvider.tsx`)

```tsx
'use client';

// Requirements:
// - Lenis instance wraps entire app
// - Duration: 1.2s
// - Easing: exponential decay
// - Connected to GSAP ticker for ScrollTrigger sync
// - Cleanup on unmount
```

**Configuration:**
```tsx
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  smoothWheel: true,
});
```

### 3. Gallery Hover Reveal (`components/Gallery.tsx`)

```tsx
'use client';

// Requirements:
// - Grid of nail art images
// - On hover:
//   1. Image scales up (1.08x)
//   2. Smooth transition
// - Staggered reveal on scroll entry
```

**Animation Sequence:**
1. Scroll into view → opacity 0 → 1, y: 40 → 0
2. Hover → image scale 1.08
3. Stagger: 0.1s between items

### 4. Service List Hover (`components/Services.tsx`)

```tsx
'use client';

// Requirements:
// - Clean vertical list with prices
// - On hover:
//   1. Padding-left increases (indent effect)
//   2. Background gradient appears from left
// - Staggered reveal on scroll
```

---

## 📄 5. Page Structure

### `app/page.tsx` (Single Page Site)

```tsx
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Booking />
      <Contact />
    </main>
  );
}
```

### `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Elorae Nails | Luxury Nail Art Studio",
  description: "Private nail studio in Las Vegas. Nail artistry in an intimate setting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
```

---

## 🧱 6. Component Specifications

### Navigation (`components/Navbar.tsx`)

| Property | Value |
|----------|-------|
| Position | Fixed, top: 0, z-index: 50 |
| Padding (default) | 1.5rem 4rem |
| Padding (scrolled) | 1rem 4rem |
| Background (scrolled) | cream/95 + backdrop-blur |
| Logo | "ELORAE" (tracking: 0.15em) |
| Links | About, Gallery, Services, Book |
| Link Style | Uppercase, 0.75rem, underline on hover |

### Hero (`components/Hero.tsx`)

| Property | Value |
|----------|-------|
| Height | 100vh |
| Background | Subtle image grid at 15% opacity |
| Eyebrow | "Private Nail Studio · Las Vegas" (tracking: 0.4em) |
| Title | "Elorae" + italic "Nails" in rose |
| Subtitle | "Nail artistry in an intimate setting" (italic) |
| CTA | "Book Your Appointment" - charcoal bg, cream text |

### About (`components/About.tsx`)

| Property | Value |
|----------|-------|
| Background | Gradient blush → cream |
| Layout | Two-column, image left, content right |
| Image | Aspect ratio 4:5, decorative border offset |
| Label | "Hey, I'm Elorae" |
| Title | "Nails are my craft, not just my job" |
| Signature | "— Elorae" in rose, italic |

### Gallery (`components/Gallery.tsx`)

| Property | Value |
|----------|-------|
| Background | Charcoal |
| Grid | 4 columns on desktop, 2 on mobile |
| Gap | 3px |
| Item Aspect | 1:1 square |
| CTA | "@eloraenails" Instagram link |

### Services (`components/Services.tsx`)

| Service | Price | Duration |
|---------|-------|----------|
| Gel Manicure | $55 | 75 min |
| Full Set — Soft Gel Extensions | $95 | 2 hrs |
| Fill / Maintenance | $65 | 90 min |
| Nail Art | $10+ | per nail |
| Soak Off / Removal | $15 | 30 min |

**Hover Effect:**
- Background: gradient from left (blush/30 → transparent)
- Padding-left: 0 → 1rem

### Booking (`components/Booking.tsx`)

| Property | Value |
|----------|-------|
| Background | Gradient cream → blush |
| Title | "Ready for your appointment?" |
| CTAs | "Book Online" (primary) / "DM on Instagram" |
| Info | Deposit: $25, Cancellation: 24 hrs, New Clients: Always welcome |

### Contact (`components/Contact.tsx`)

| Property | Value |
|----------|-------|
| Background | Charcoal |
| Contact Methods | Text link, Email link |
| Location | Sola Salon Studios address |
| Social | Instagram, TikTok icons |

---

## 🎬 7. Animation Specifications

### GSAP Context Pattern (Required for all components)

```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    // All GSAP animations here
  }, ref);

  return () => ctx.revert(); // Critical cleanup
}, []);
```

### Scroll Reveal

```tsx
gsap.from(".element", {
  scrollTrigger: {
    trigger: ".element",
    start: "top 80%",
  },
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});
```

### Stagger Children

```tsx
gsap.from(".item", {
  scrollTrigger: {
    trigger: ".list",
    start: "top 75%",
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: "power3.out",
});
```

### Scroll Indicator Pulse

```tsx
gsap.to(".scroll-line", {
  opacity: 1,
  duration: 1,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
});
```

---

## 🖼️ 8. Image Requirements

### Gallery Images (`/public/images/gallery/`)

| Image | Style | Size |
|-------|-------|------|
| nail-art-1.jpg | High-quality nail photo | Square, 800x800px |
| nail-art-2.jpg | High-quality nail photo | Square, 800x800px |
| nail-art-3.jpg | High-quality nail photo | Square, 800x800px |
| ... | 8 images total | Square format |

**Requirements:**
- Square aspect ratio (1:1)
- Bright, well-lit photos
- Clean backgrounds
- High resolution for retina

### About Image (`/public/images/about/`)

| Image | Style |
|-------|-------|
| portrait.jpg | Professional headshot or working shot |

---

## 📱 9. Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| 1024px (lg) | Two-column layouts adjust |
| 768px (md) | Stack all layouts, hide desktop nav links |
| 640px (sm) | Reduce typography, increase padding |

### Mobile Adjustments:

```css
@media (max-width: 768px) {
  /* Stack about layout */
  .about-grid { grid-template-columns: 1fr; }
  
  /* Reduce gallery columns */
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  
  /* Stack service items */
  .service-item { grid-template-columns: 1fr; text-align: center; }
  
  /* Stack booking info */
  .booking-info { flex-direction: column; }
}
```

---

## 🧰 10. Debugging Reference

| Problem | Check File |
|---------|------------|
| Smooth scroll not working | `components/LenisProvider.tsx` |
| Scroll animations not firing | `lib/gsap.ts` ScrollTrigger registration |
| Gallery hover broken | `components/Gallery.tsx` hover states |
| Nav not shrinking | `components/Navbar.tsx` scroll listener |
| Colors wrong | `globals.css` or `tailwind.config.ts` |
| Fonts not loading | `globals.css` @import statement |
| GSAP memory leaks | Missing `ctx.revert()` cleanup |

---

## ✅ 11. Quality Checklist

Before considering the build complete:

- [ ] Lenis smooth scroll feels buttery on all pages
- [ ] Hero content reveals with staggered animation
- [ ] Navigation shrinks and adds blur on scroll
- [ ] About section has proper two-column layout
- [ ] Gallery items stagger in on scroll
- [ ] Gallery hover shows scale effect
- [ ] Services list has hover indent effect
- [ ] Booking buttons have proper hover states
- [ ] Contact links work (text, email, social)
- [ ] All CTAs have hover states with transforms
- [ ] Mobile: layouts stack properly, touch-friendly
- [ ] All GSAP animations have proper cleanup
- [ ] No layout shifts or janky transitions
- [ ] Terms, FAQ, Blog pages styled consistently
- [ ] Footer shows "Site by Vizantir"

---

## 🚀 12. Deployment

### Vercel Settings:
- Framework: Next.js
- Node: 20.x
- Build command: `next build`
- Output directory: `.next`

### Domain:
- Primary: `eloraenails.com` (or client domain)
- Add to Vercel project settings

### Environment Variables:
- None required for static site
- Add booking endpoint if using external service

---

## 📝 13. Content Reference

### Copy:

**Hero Eyebrow:** "Private Nail Studio · Las Vegas"

**Hero Title:** "Elorae Nails"

**Hero Subtitle:** "Nail artistry in an intimate setting"

**Hero CTA:** "Book Your Appointment"

**About Label:** "Hey, I'm Elorae"

**About Title:** "Nails are my craft, not just my job"

**About Body:**
> I've been obsessed with nail art since I was 16, practicing on anyone who'd sit still long enough. Now I get to do it every day in my own private studio.
>
> My space is just me — no rush, no noise, no chaos. Just good music, good conversation (or peaceful quiet if you prefer), and my full attention on creating something beautiful for you.
>
> Whether you want clean and classic or full-on nail art, I'm here to make it happen. I genuinely love what I do, and I think that shows in the work.

**Gallery Title:** "Recent Creations"

**Gallery CTA:** "@eloraenails"

**Services Title:** "What I Offer"

**Services Note:** "Custom nail art priced during consultation. Inspo photos always welcome!"

**Booking Title:** "Ready for your appointment?"

**Booking Subtitle:** "DM me on Instagram for the fastest response, or book directly online. Can't wait to create something beautiful for you."

**Booking CTAs:** "Book Online" / "DM on Instagram"

**Contact Title:** "Let's connect"

**Contact Subtitle:** "Questions? Want to discuss a custom design? Reach out anytime."

**Location:**
> Sola Salon Studios
> 4825 S Fort Apache Rd, Suite 120
> Las Vegas, NV 89147
> By appointment only

---

## 🎨 14. Future Enhancements

Optional features to add for even more premium feel:

- [ ] Custom magnetic cursor that follows mouse
- [ ] Text-splitting animation for hero title (letter by letter)
- [ ] Lightbox modal for gallery images
- [ ] Before/after slider for nail transformations
- [ ] Testimonials section with client reviews
- [ ] Scroll progress indicator
- [ ] Instagram feed integration
- [ ] Online booking widget embed (Vagaro, Square, etc.)

---

*Elorae Nails — Nail Artistry in an Intimate Setting*

*Site by [Vizantir](https://vizantir.com)*
