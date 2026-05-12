import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categories,
  getCategoryBySlug,
  getServicesByCategory,
  schemaOfferPriceUsd,
  serviceCanonicalUrl,
  type CategoryMeta,
} from "@/lib/services";

const SITE = "https://www.eloraenails.com";
const OG_IMAGE = {
  url: `${SITE}/og-image.png`,
  width: 1200,
  height: 630,
  alt: "Eloraé Nails - Luxury Nail Art Studio",
};

const SQUARE_BOOKING_URL =
  "https://app.squareup.com/appointments/book/76x67b4ir98faf/S8DT74QG3VD0F/start";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.routeSegment }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categoryParam } = await params;
  const meta = getCategoryBySlug(categoryParam);

  if (!meta) {
    return {
      title: "Services | Eloraé Nails Las Vegas",
      description:
        "Manicures, pedicures, and nail enhancements at Eloraé Nails — a private appointment-only studio in Las Vegas.",
      alternates: {
        canonical: `${SITE}/services/${categoryParam}`,
      },
      openGraph: {
        title: "Services | Eloraé Nails Las Vegas",
        description:
          "Manicures, pedicures, and nail enhancements at Eloraé Nails — a private appointment-only studio in Las Vegas.",
        type: "website",
      },
    };
  }

  const canonical = `${SITE}/services/${meta.routeSegment}`;
  const pageTitle = `${meta.title} | Eloraé Nails Las Vegas`;

  return {
    title: pageTitle,
    description: meta.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: pageTitle,
      description: meta.description,
      url: canonical,
      siteName: "Eloraé Nails",
      images: [OG_IMAGE],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: meta.description,
      images: [`${SITE}/og-image.png`],
    },
  };
}

function offerCatalogJsonLd(meta: CategoryMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: meta.title,
    itemListElement: getServicesByCategory(meta.slug).map((service) => ({
      "@type": "Offer",
      price: String(schemaOfferPriceUsd(service)),
      priceCurrency: "USD",
      url: serviceCanonicalUrl(meta.routeSegment, service.slug),
      itemOffered: {
        "@type": "Service",
        name: service.name,
        ...(service.description !== undefined
          ? { description: service.description }
          : {}),
      },
    })),
  };
}

function breadcrumbJsonLd(meta: CategoryMeta) {
  const canonical = `${SITE}/services/${meta.routeSegment}`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: meta.title,
        item: canonical,
      },
    ],
  };
}

export default async function ServiceCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categoryParam } = await params;
  const meta = getCategoryBySlug(categoryParam);

  if (!meta) {
    notFound();
  }

  const servicesList = getServicesByCategory(meta.slug);
  const offerLd = offerCatalogJsonLd(meta);
  const crumbs = breadcrumbJsonLd(meta);

  return (
    <main className="bg-cream min-h-screen pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      <div className="max-w-[1000px] mx-auto px-8 lg:px-16">
        <p className="text-[0.7rem] tracking-[0.3em] uppercase text-rose mb-4 text-center">
          Services
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal mb-8 text-center">
          {meta.title}
        </h1>
        <p className="text-charcoal text-lg leading-relaxed max-w-3xl mx-auto text-center mb-16">
          {meta.intro}
        </p>

        <div className="border-t border-blush mb-16">
          {meta.slug === "enhancements"
            ? servicesList.map((service) => (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-8 py-4 border-b border-blush items-center scroll-mt-36 transition-all duration-300 md:hover:pl-4 md:hover:bg-gradient-to-r md:hover:from-blush/30 md:hover:to-transparent"
                >
                  <div className="text-center sm:text-left">
                    <h2 className="font-serif text-lg text-charcoal">
                      {service.name}
                    </h2>
                  </div>
                  <div className="text-center sm:text-right whitespace-nowrap">
                    <span className="font-serif text-xl text-charcoal">
                      ${service.price}
                    </span>
                    {service.gel != null && (
                      <>
                        <span className="text-warm-gray mx-2">|</span>
                        <span className="text-charcoal text-sm">
                          w/ Gel{" "}
                          <span className="font-serif text-xl">${service.gel}</span>
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ))
            : servicesList.map((service) => (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-8 py-6 border-b border-blush items-center scroll-mt-36 transition-all duration-300 md:hover:pl-4 md:hover:bg-gradient-to-r md:hover:from-blush/30 md:hover:to-transparent"
                >
                  <div className="text-center sm:text-left">
                    <h2 className="font-serif text-xl text-charcoal mb-1">
                      {service.name}
                    </h2>
                    <p className="text-warm-gray text-sm">
                      {service.description}
                      {service.slug === "hemp-wellness-pedicure" ? (
                        <>
                          {" "}
                          For background on cannabidiol from a clinical reference library, see{" "}
                          <a
                            href="https://medlineplus.gov/druginfo/natural/1609.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-rose/90 underline underline-offset-4 decoration-rose/40 hover:text-rose"
                          >
                            MedlinePlus (NIH)
                          </a>
                          .
                        </>
                      ) : null}
                    </p>
                  </div>
                  <div className="text-center sm:text-right whitespace-nowrap">
                    <span className="text-charcoal text-sm">
                      Regular{" "}
                      <span className="font-serif text-xl">${service.regular}</span>
                    </span>
                    <span className="text-warm-gray mx-2">|</span>
                    <span className="text-charcoal text-sm">
                      Gel{" "}
                      <span className="font-serif text-xl">${service.gel}</span>
                    </span>
                  </div>
                </div>
              ))}
        </div>

        <section className="max-w-3xl mx-auto text-center sm:text-left mb-16 space-y-5 text-warm-gray leading-relaxed">
          <p>
            <Link
              href="/faq"
              className="text-rose underline-offset-4 hover:underline decoration-rose/60"
            >
              Read our common questions before your first visit
            </Link>
          </p>
          <p>
            <Link
              href="/terms"
              className="text-rose underline-offset-4 hover:underline decoration-rose/60"
            >
              Booking, deposit, and cancellation details are in our policies
            </Link>
            .
          </p>
        </section>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href={SQUARE_BOOKING_URL}
            className="btn btn-primary inline-block text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Online
          </a>
          <a
            href="sms:+17026132115"
            className="text-sm tracking-wide text-charcoal border-b border-charcoal/30 pb-0.5 hover:border-rose hover:text-rose transition-colors"
          >
            Text Us
          </a>
        </div>
      </div>
    </main>
  );
}
