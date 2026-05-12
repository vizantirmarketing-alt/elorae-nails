import Link from "next/link";
import {
  categories,
  categoryPagePath,
  getServicesByCategory,
} from "@/lib/services";

const extras = [
  { name: "Medium Length", price: "+$10" },
  { name: "Long Length", price: "+$15" },
  { name: "Extra Long Length", price: "+$20" },
  { name: "Oval / Round Shape", price: "+$5" },
  { name: "Almond / Coffin / Ballerina Shape", price: "+$10" },
  { name: "Stiletto Shape", price: "+$15" },
  { name: "Callus Treatment", price: "+$10" },
  { name: "Nail Repair", price: "+$5" },
  { name: "Paraffin Hands", price: "+$15" },
  { name: "Paraffin Feet", price: "+$20" },
  { name: "Extended Massage (10 min)", price: "+$10" },
];

const soakOff = [
  { name: "Gel / Dip Removal (with service)", price: "$10" },
  { name: "Gel / Dip Removal (standalone)", price: "$15" },
  { name: "Acrylic / Hard Gel / Extensions (with service)", price: "$15" },
  { name: "Acrylic / Hard Gel / Extensions (standalone)", price: "$25" },
];

const [manicureMeta, pedicureMeta, enhancementMeta] = categories;

export default function Services() {
  const manicures = getServicesByCategory("manicures");
  const pedicures = getServicesByCategory("pedicures");
  const enhancements = getServicesByCategory("enhancements");

  return (
    <section id="services" className="py-28 px-8 lg:px-16 bg-cream">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[0.7rem] tracking-[0.3em] uppercase text-rose mb-4">Services</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal">
            What We Offer
          </h2>
          <p className="text-warm-gray text-sm max-w-2xl mx-auto mt-6 leading-relaxed">
            All nail services here are performed by Nevada-licensed professionals. Licensing and education standards are overseen by the{" "}
            <a
              href="https://nvcosmetologyboard.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose/90 underline underline-offset-4 decoration-rose/40 hover:text-rose"
            >
              Nevada State Board of Cosmetology
            </a>
            .
          </p>
        </div>

        {/* Manicures */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl text-charcoal mb-6 text-center">
            <Link
              href={categoryPagePath(manicureMeta)}
              className="transition-colors hover:text-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose/40 rounded-sm"
            >
              Manicures
            </Link>
          </h3>
          <div className="border-t border-blush">
            {manicures.map((service) => (
              <div
                key={service.slug}
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-8 py-6 border-b border-blush items-center transition-all duration-300 md:hover:pl-4 md:hover:bg-gradient-to-r md:hover:from-blush/30 md:hover:to-transparent"
              >
                <div className="text-center sm:text-left">
                  <h4 className="font-serif text-xl text-charcoal mb-1">{service.name}</h4>
                  <p className="text-warm-gray text-sm">{service.description}</p>
                </div>
                <div className="text-center sm:text-right whitespace-nowrap">
                  <span className="text-charcoal text-sm">Regular <span className="font-serif text-xl">${service.regular}</span></span>
                  <span className="text-warm-gray mx-2">|</span>
                  <span className="text-charcoal text-sm">Gel <span className="font-serif text-xl">${service.gel}</span></span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link
              href={categoryPagePath(manicureMeta)}
              className="text-sm tracking-wide text-rose border-b border-rose/30 pb-0.5 hover:border-rose transition-colors"
            >
              View all manicures →
            </Link>
          </p>
        </div>

        {/* Pedicures */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl text-charcoal mb-6 text-center">
            <Link
              href={categoryPagePath(pedicureMeta)}
              className="transition-colors hover:text-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose/40 rounded-sm"
            >
              Pedicures
            </Link>
          </h3>
          <div className="border-t border-blush">
            {pedicures.map((service) => (
              <div
                key={service.slug}
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-8 py-6 border-b border-blush items-center transition-all duration-300 md:hover:pl-4 md:hover:bg-gradient-to-r md:hover:from-blush/30 md:hover:to-transparent"
              >
                <div className="text-center sm:text-left">
                  <h4 className="font-serif text-xl text-charcoal mb-1">{service.name}</h4>
                  <p className="text-warm-gray text-sm">{service.description}</p>
                </div>
                <div className="text-center sm:text-right whitespace-nowrap">
                  <span className="text-charcoal text-sm">Regular <span className="font-serif text-xl">${service.regular}</span></span>
                  <span className="text-warm-gray mx-2">|</span>
                  <span className="text-charcoal text-sm">Gel <span className="font-serif text-xl">${service.gel}</span></span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link
              href={categoryPagePath(pedicureMeta)}
              className="text-sm tracking-wide text-rose border-b border-rose/30 pb-0.5 hover:border-rose transition-colors"
            >
              View all pedicures →
            </Link>
          </p>
        </div>

        {/* Nail Enhancements */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl text-charcoal mb-6 text-center">
            <Link
              href={categoryPagePath(enhancementMeta)}
              className="transition-colors hover:text-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose/40 rounded-sm"
            >
              Nail Enhancements
            </Link>
          </h3>
          <div className="border-t border-blush">
            {enhancements.map((service) => (
              <div
                key={service.slug}
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-8 py-4 border-b border-blush items-center transition-all duration-300 md:hover:pl-4 md:hover:bg-gradient-to-r md:hover:from-blush/30 md:hover:to-transparent"
              >
                <div className="text-center sm:text-left">
                  <h4 className="font-serif text-lg text-charcoal">{service.name}</h4>
                </div>
                <div className="text-center sm:text-right whitespace-nowrap">
                  <span className="font-serif text-xl text-charcoal">${service.price}</span>
                  {service.gel != null && (
                    <>
                      <span className="text-warm-gray mx-2">|</span>
                      <span className="text-charcoal text-sm">w/ Gel <span className="font-serif text-xl">${service.gel}</span></span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link
              href={categoryPagePath(enhancementMeta)}
              className="text-sm tracking-wide text-rose border-b border-rose/30 pb-0.5 hover:border-rose transition-colors"
            >
              View all nail enhancements →
            </Link>
          </p>
        </div>

        {/* Length & Shape + Add-Ons in two columns */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Extras */}
          <div>
            <h3 className="font-serif text-xl text-charcoal mb-6 text-center">Length, Shape & Add-Ons</h3>
            <div className="border-t border-blush">
              {extras.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between py-3 border-b border-blush items-center"
                >
                  <span className="text-warm-gray text-sm">{service.name}</span>
                  <span className="font-serif text-lg text-charcoal">{service.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soak Off */}
          <div>
            <h3 className="font-serif text-xl text-charcoal mb-6 text-center">Removal</h3>
            <div className="border-t border-blush">
              {soakOff.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between py-3 border-b border-blush items-center"
                >
                  <span className="text-warm-gray text-sm">{service.name}</span>
                  <span className="font-serif text-lg text-charcoal">{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-warm-gray text-sm italic">
          Nail art priced during consultation. Inspo photos always welcome!
        </p>
      </div>
    </section>
  );
}
