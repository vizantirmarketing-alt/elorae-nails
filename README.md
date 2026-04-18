# Eloraé Nails

Private luxury nail studio website for Eloraé Nails in Las Vegas. Built by Vizantir Design Studio.

**Live site:** https://www.eloraenails.com

---

## Features

- Single-page design built for fast load times and mobile-first experience
- Smooth scroll and refined motion throughout
- Integrated online booking via Square Appointments
- Google Maps embed for studio location
- Google Analytics 4 and Microsoft Clarity for traffic and behavior tracking
- LocalBusiness and FAQ structured data for rich search results
- 100 SEO score, 100 Best Practices on PageSpeed (desktop)

---

## Tech Stack

- **Framework:** Next.js 16.x+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP, Lenis
- **Booking:** Square Appointments
- **Hosting:** Vercel
- **Analytics:** Google Analytics 4, Microsoft Clarity

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/vizantirmarketing-alt/elorae-nails.git
cd elorae-nails
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the project root:

```env
# Analytics
NEXT_PUBLIC_GA_ID=your_ga4_measurement_id
NEXT_PUBLIC_CLARITY_ID=your_clarity_id
```

### 4. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 to view the site.

---

## Project Structure

```
app/                  # Next.js App Router pages and layout
components/           # UI components (Hero, Services, Booking, Contact, etc.)
src/components/       # Analytics components (MicrosoftClarity)
public/               # Static assets, logos, images
```

---

## Key Components

| Component | Description |
|-----------|-------------|
| `Hero` | Full-screen hero with booking CTA |
| `About` | Studio standards and positioning |
| `Services` | Service menu with pricing |
| `Booking` | Booking policies and Square Appointments integration |
| `Gallery` | Work gallery with Instagram link |
| `FAQ` | Accordion FAQ section |
| `Contact` | Location, phone, email, Google Maps embed |
| `Footer` | Links and studio branding |

---

## Deployment

Deployed automatically to Vercel on push to `main`. Environment variables must be configured in Vercel project settings.

---

## Notes

- Built by Vizantir Design Studio for Eloraé Nails
- Booking CTAs link to Square Appointments
- Do not commit `.env.local` to the repo
