const services = {
  manicures: [
    {
      name: "Classic Manicure",
      description: "Nail shaping, cuticle care, relaxing hand massage, polish of choice",
      regular: "$30",
      gel: "$45",
    },
    {
      name: "Signature Manicure",
      description: "Elevated care with sugar scrub, hydrating mask, hot towel wrap",
      regular: "$45",
      gel: "$65",
    },
    {
      name: "Luxury Manicure",
      description: "Premium salt scrub, extended massage, warm paraffin treatment",
      regular: "$65",
      gel: "$80",
    },
  ],
  pedicures: [
    {
      name: "Classic Pedicure",
      description: "Essential care with foot soak, shaping, scrub, massage, polish",
      regular: "$40",
      gel: "$60",
    },
    {
      name: "Signature Pedicure",
      description: "Deep callus care, sugar scrub, hydrating mask, hot towel wrap",
      regular: "$50",
      gel: "$70",
    },
    {
      name: "Hot Stone Pedicure",
      description: "Tension-melting hot stone massage with full spa treatment",
      regular: "$65",
      gel: "$85",
    },
    {
      name: "Aromatherapy Pedicure",
      description: "Essential oil soak, stress-relieving massage, custom scent experience",
      regular: "$75",
      gel: "$95",
    },
    {
      name: "Hemp Wellness Pedicure",
      description: "Organic hemp-infused soak, anti-inflammatory relief, deep relaxation",
      regular: "$75",
      gel: "$95",
    },
    {
      name: "Cosmo Spa Pedicure",
      description: "16 natural ingredients, callus softening, aromatherapy soak with essential oil blend",
      regular: "$80",
      gel: "$100",
    },
    {
      name: "Luxury Pedicure",
      description: "Our most indulgent — salt soak, organic oils, hot stones, paraffin",
      regular: "$110",
      gel: "$130",
    },
    {
      name: "Elorae Hemp Retreat",
      description: "Ultimate therapeutic experience with Hemp treatment throughout",
      regular: "$125",
      gel: "$145",
    },
  ],
  enhancements: [
    { name: "Acrylic Full Set", price: "$55", gel: "$75" },
    { name: "Acrylic Overlay", price: "$50", gel: "$70" },
    { name: "Acrylic Fill", price: "$35", gel: "$55" },
    { name: "Hard Gel Full Set", price: "$80", gel: null },
    { name: "Hard Gel Overlay", price: "$70", gel: null },
    { name: "Hard Gel Fill", price: "$60", gel: null },
    { name: "Soft Gel Extensions (Short)", price: "$80", gel: null },
    { name: "Soft Gel Extensions (Medium)", price: "$85", gel: null },
    { name: "Soft Gel Extensions (Long)", price: "$90", gel: null },
  ],
  extras: [
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
  ],
  soakOff: [
    { name: "Gel / Dip Removal (with service)", price: "$10" },
    { name: "Gel / Dip Removal (standalone)", price: "$15" },
    { name: "Acrylic / Hard Gel / Extensions (with service)", price: "$15" },
    { name: "Acrylic / Hard Gel / Extensions (standalone)", price: "$25" },
  ],
};

export default function Services() {
  return (
    <section id="services" className="py-28 px-8 lg:px-16 bg-cream">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[0.7rem] tracking-[0.3em] uppercase text-rose mb-4">Services</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal">
            What We Offer
          </h2>
        </div>

        {/* Manicures */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl text-charcoal mb-6 text-center">Manicures</h3>
          <div className="border-t border-blush">
            {services.manicures.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-8 py-6 border-b border-blush items-center transition-all duration-300 md:hover:pl-4 md:hover:bg-gradient-to-r md:hover:from-blush/30 md:hover:to-transparent"
              >
                <div className="text-center sm:text-left">
                  <h4 className="font-serif text-xl text-charcoal mb-1">{service.name}</h4>
                  <p className="text-warm-gray text-sm">{service.description}</p>
                </div>
                <div className="text-center sm:text-right whitespace-nowrap">
                  <span className="text-charcoal text-sm">Regular <span className="font-serif text-xl">{service.regular}</span></span>
                  <span className="text-warm-gray mx-2">|</span>
                  <span className="text-charcoal text-sm">Gel <span className="font-serif text-xl">{service.gel}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pedicures */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl text-charcoal mb-6 text-center">Pedicures</h3>
          <div className="border-t border-blush">
            {services.pedicures.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-8 py-6 border-b border-blush items-center transition-all duration-300 md:hover:pl-4 md:hover:bg-gradient-to-r md:hover:from-blush/30 md:hover:to-transparent"
              >
                <div className="text-center sm:text-left">
                  <h4 className="font-serif text-xl text-charcoal mb-1">{service.name}</h4>
                  <p className="text-warm-gray text-sm">{service.description}</p>
                </div>
                <div className="text-center sm:text-right whitespace-nowrap">
                  <span className="text-charcoal text-sm">Regular <span className="font-serif text-xl">{service.regular}</span></span>
                  <span className="text-warm-gray mx-2">|</span>
                  <span className="text-charcoal text-sm">Gel <span className="font-serif text-xl">{service.gel}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nail Enhancements */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl text-charcoal mb-6 text-center">Nail Enhancements</h3>
          <div className="border-t border-blush">
            {services.enhancements.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-8 py-4 border-b border-blush items-center transition-all duration-300 md:hover:pl-4 md:hover:bg-gradient-to-r md:hover:from-blush/30 md:hover:to-transparent"
              >
                <div className="text-center sm:text-left">
                  <h4 className="font-serif text-lg text-charcoal">{service.name}</h4>
                </div>
                <div className="text-center sm:text-right whitespace-nowrap">
                  <span className="font-serif text-xl text-charcoal">{service.price}</span>
                  {service.gel && (
                    <>
                      <span className="text-warm-gray mx-2">|</span>
                      <span className="text-charcoal text-sm">w/ Gel <span className="font-serif text-xl">{service.gel}</span></span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Length & Shape + Add-Ons in two columns */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Extras */}
          <div>
            <h3 className="font-serif text-xl text-charcoal mb-6 text-center">Length, Shape & Add-Ons</h3>
            <div className="border-t border-blush">
              {services.extras.map((service, index) => (
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
              {services.soakOff.map((service, index) => (
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
