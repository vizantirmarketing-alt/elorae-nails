# Elorae Nails

Premium single-page website for a private nail studio. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Single-page design** with smooth scroll navigation
- **Responsive** across all devices
- **Optimized for solo/duo suite businesses**
- Clean, premium aesthetic with warm color palette
- Separate pages for Terms, FAQ, and Blog

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles + Tailwind
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── terms/page.tsx    # Terms & Conditions
│   ├── faq/page.tsx      # FAQ
│   └── blog/page.tsx     # Blog
├── components/
│   ├── Navbar.tsx        # Navigation with scroll effect
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Gallery.tsx       # Portfolio gallery
│   ├── Services.tsx      # Services list
│   ├── Booking.tsx       # Booking CTA
│   ├── Contact.tsx       # Contact info
│   ├── Footer.tsx        # Footer
│   └── Icons.tsx         # SVG icons
└── public/               # Static assets (add images here)
```

## Customization

### Colors

Edit `tailwind.config.ts` to update the color palette:

```ts
colors: {
  cream: "#FAF7F4",
  blush: "#E8DCD5",
  mauve: "#C9B8B1",
  rose: "#B89B94",
  charcoal: "#2C2826",
  "warm-gray": "#6B6361",
  gold: "#C4A87C",
}
```

### Images

Replace placeholder gradients with actual images:

1. Add images to `/public/` folder
2. Use Next.js `Image` component in place of placeholder divs
3. Gallery images should be square (1:1 ratio)
4. About image should be portrait (4:5 ratio)

### Content

- Update services and pricing in `components/Services.tsx`
- Edit contact info in `components/Contact.tsx`
- Modify booking links in `components/Booking.tsx`
- Update FAQ in `app/faq/page.tsx`
- Update terms in `app/terms/page.tsx`

## Deployment

This project is ready for deployment on Vercel:

```bash
npm install -g vercel
vercel
```

## License

Private project for Vizantir / client use.
