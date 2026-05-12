export type ServiceCategory = "manicures" | "pedicures" | "enhancements";

export interface Service {
  slug: string;
  name: string;
  description?: string;
  regular?: number;
  gel?: number | null;
  price?: number;
  category: ServiceCategory;
}

export interface CategoryMeta {
  slug: ServiceCategory;
  /** URL segment under `/services/` (e.g. `nail-enhancements`). */
  routeSegment: string;
  title: string;
  description: string;
  intro: string;
}

export const services: Service[] = [
  // Manicures
  {
    slug: "classic-manicure",
    name: "Classic Manicure",
    description:
      "Nail shaping, cuticle care, hand massage, and polish of choice.",
    regular: 30,
    gel: 45,
    category: "manicures",
  },
  {
    slug: "signature-manicure",
    name: "Signature Manicure",
    description:
      "The Classic with a sugar scrub, hydrating mask, and hot towel wrap.",
    regular: 45,
    gel: 65,
    category: "manicures",
  },
  {
    slug: "luxury-manicure",
    name: "Luxury Manicure",
    description:
      "A longer service. Salt scrub, extended massage, and warm paraffin.",
    regular: 65,
    gel: 80,
    category: "manicures",
  },
  // Pedicures
  {
    slug: "classic-pedicure",
    name: "Classic Pedicure",
    description: "Foot soak, shaping, scrub, massage, and polish.",
    regular: 40,
    gel: 60,
    category: "pedicures",
  },
  {
    slug: "signature-pedicure",
    name: "Signature Pedicure",
    description:
      "The Classic with callus care, sugar scrub, hydrating mask, and hot towel wrap.",
    regular: 50,
    gel: 70,
    category: "pedicures",
  },
  {
    slug: "hot-stone-pedicure",
    name: "Hot Stone Pedicure",
    description: "Full spa pedicure with hot stone massage.",
    regular: 65,
    gel: 85,
    category: "pedicures",
  },
  {
    slug: "aromatherapy-pedicure",
    name: "Aromatherapy Pedicure",
    description:
      "Essential oil soak and massage with the scent you choose.",
    regular: 75,
    gel: 95,
    category: "pedicures",
  },
  {
    slug: "hemp-wellness-pedicure",
    name: "Hemp Wellness Pedicure",
    description:
      "Organic hemp soak for tired, tense, or inflamed feet.",
    regular: 75,
    gel: 95,
    category: "pedicures",
  },
  {
    slug: "cosmo-spa-pedicure",
    name: "Cosmo Spa Pedicure",
    description:
      "A longer pedicure using sixteen natural ingredients across six steps.",
    regular: 80,
    gel: 100,
    category: "pedicures",
  },
  {
    slug: "elorae-luxury-pedicure",
    name: "Eloraé Luxury Pedicure",
    description:
      "The longest service on the menu. Salt soak, organic oils, hot stones, and paraffin.",
    regular: 110,
    gel: 130,
    category: "pedicures",
  },
  {
    slug: "elorae-hemp-retreat",
    name: "Elorae Hemp Retreat",
    description: "Hemp used throughout — from the soak through the finish.",
    regular: 125,
    gel: 145,
    category: "pedicures",
  },
  // Enhancements
  {
    slug: "acrylic-full-set",
    name: "Acrylic Full Set",
    price: 55,
    gel: 75,
    category: "enhancements",
  },
  {
    slug: "acrylic-overlay",
    name: "Acrylic Overlay",
    price: 50,
    gel: 70,
    category: "enhancements",
  },
  {
    slug: "acrylic-fill",
    name: "Acrylic Fill",
    price: 35,
    gel: 55,
    category: "enhancements",
  },
  {
    slug: "hard-gel-full-set",
    name: "Hard Gel Full Set",
    price: 80,
    gel: null,
    category: "enhancements",
  },
  {
    slug: "hard-gel-overlay",
    name: "Hard Gel Overlay",
    price: 70,
    gel: null,
    category: "enhancements",
  },
  {
    slug: "hard-gel-fill",
    name: "Hard Gel Fill",
    price: 60,
    gel: null,
    category: "enhancements",
  },
  {
    slug: "soft-gel-extensions-short",
    name: "Soft Gel Extensions (Short)",
    price: 80,
    gel: null,
    category: "enhancements",
  },
  {
    slug: "soft-gel-extensions-medium",
    name: "Soft Gel Extensions (Medium)",
    price: 85,
    gel: null,
    category: "enhancements",
  },
  {
    slug: "soft-gel-extensions-long",
    name: "Soft Gel Extensions (Long)",
    price: 90,
    gel: null,
    category: "enhancements",
  },
];

export const categories: CategoryMeta[] = [
  {
    slug: "manicures",
    routeSegment: "manicures",
    title: "Manicures",
    description:
      "Shaping, cuticle care, massage, and polish—regular or gel—in our calm Las Vegas appointment-only studio.",
    intro:
      "We focus on careful prep and an unhurried pace so your manicure looks clean and lasts. Choose classic, signature, or luxury options with regular or gel polish—always in a private, low-noise space built for consistency.",
  },
  {
    slug: "pedicures",
    routeSegment: "pedicures",
    title: "Pedicures",
    description:
      "Spa pedicures from classic care to luxury soaks and hemp wellness—booking only at our Las Vegas nail studio.",
    intro:
      "Our pedicure menu moves from everyday foot care to longer spa experiences with masks, stones, and therapeutic soaks. Each service is paced for comfort, not turnover—we match the treatment to how your feet feel that day.",
  },
  {
    slug: "enhancements",
    routeSegment: "nail-enhancements",
    title: "Enhancements",
    description:
      "Acrylic, hard gel, and soft gel extensions and fills—with clear pricing and optional gel upgrades at Eloraé.",
    intro:
      "When you want length, structure, or a harder-wearing set, we build on thorough prep and professional products. Menu pricing is straightforward and gel add-ons are listed where they apply—we will talk through what fits your nails before we start.",
  },
];

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug || c.routeSegment === slug);
}

/** USD offer price for JSON-LD: max(regular, gel) for mani/pedi; base `price` for enhancements. */
export function schemaOfferPriceUsd(service: Service): number {
  if (service.category === "enhancements") {
    return service.price ?? 0;
  }
  return Math.max(service.regular ?? 0, service.gel ?? 0);
}

export function serviceCanonicalUrl(
  routeSegment: string,
  serviceSlug: string,
): string {
  return `https://www.eloraenails.com/services/${routeSegment}#${serviceSlug}`;
}

export function categoryPagePath(meta: CategoryMeta): string {
  return `/services/${meta.routeSegment}`;
}
