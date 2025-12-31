const faqs = [
  {
    question: "What is the difference between gel nails and acrylic nails?",
    answer: "Gel nails use a gel-based polish that is cured under UV or LED light, resulting in a glossy, flexible finish that looks natural. Acrylic nails are created by mixing a liquid monomer with a powder polymer to form a hard protective layer over your natural nails. Gel nails are generally lighter and more flexible, while acrylics are stronger and better for adding length. Our team can help you decide which option is best for your lifestyle and nail goals.",
  },
  {
    question: "What are Gel-X extensions and how long do they last?",
    answer: "Gel-X extensions are a popular nail enhancement using soft gel tips that are applied with a special gel adhesive and cured under LED light. Unlike traditional acrylics, Gel-X is lighter, more flexible, and causes less damage to your natural nails. Gel-X extensions typically last 3-4 weeks with proper care. They're perfect for clients who want instant length and a natural look without the drilling or harsh chemicals. We offer Gel-X in various shapes including almond, coffin, stiletto, and square.",
  },
  {
    question: "How often should I get a pedicure?",
    answer: "For optimal foot health and nail maintenance, we recommend getting a pedicure every 4-6 weeks. Regular pedicures help prevent ingrown toenails, remove dead skin, and keep your feet soft and healthy. If you're on your feet a lot or have dry skin, you may benefit from more frequent visits. Our spa pedicures include exfoliation, callus removal, massage, and your choice of polish or gel.",
  },
  {
    question: "What is dip powder and is it better than gel polish?",
    answer: "Dip powder nails (also called SNS nails) involve dipping your nails into colored acrylic powder and sealing with a clear protective polish. Dip powder typically lasts 3-4 weeks and is known for being durable and chip-resistant. Unlike gel polish, dip powder doesn't require UV light to cure. Both options have their benefits: gel polish offers more flexibility and a wider color range, while dip powder provides extra strength. We can recommend the best option based on your nail condition and preferences.",
  },
  {
    question: "Do you offer nail art and custom designs?",
    answer: "Yes! We specialize in custom nail art and creative designs. From simple accent nails to intricate hand-painted designs, 3D nail art, chrome finishes, and French tips, our team can bring your vision to life. Browse our gallery for inspiration or bring in reference photos. Nail art pricing varies based on complexity and time required. We recommend booking extra time for detailed designs.",
  },
  {
    question: "What is a hot stone pedicure and what are the benefits?",
    answer: "A hot stone pedicure incorporates heated basalt stones into your pedicure massage. The warmth from the stones helps relax tired muscles, improve blood circulation, relieve tension, and soften the skin. Hot stone pedicures are especially beneficial for those who spend long hours on their feet, athletes, or anyone seeking deep relaxation. Our hot stone pedicure includes a full spa pedicure service plus an extended massage with heated stones.",
  },
  {
    question: "How long does a gel manicure last?",
    answer: "A professional gel manicure typically lasts 2-3 weeks without chipping or peeling. The longevity depends on factors like your nail growth rate, daily activities, and how well you care for your nails at home. To extend the life of your gel manicure, avoid using your nails as tools, wear gloves when cleaning, apply cuticle oil daily, and avoid prolonged water exposure. We use high-quality products for maximum durability and shine.",
  },
  {
    question: "Is your nail salon clean and sanitary?",
    answer: "Absolutely. Hygiene and sanitation are our top priorities. We follow strict sterilization protocols exceeding Nevada state requirements. All metal tools are sterilized in hospital-grade autoclaves, disposable items like files and buffers are single-use, and pedicure basins are thoroughly disinfected between each client. Our technicians are licensed and certified, and we maintain a clean, organized environment. Your health and safety matter to us.",
  },
  {
    question: "Do I need an appointment or do you accept walk-ins?",
    answer: "While we welcome walk-ins when availability allows, we highly recommend booking an appointment to guarantee your preferred time and technician. You can easily book online 24/7 through our booking system or call us. Appointments ensure minimal wait time and allow us to prepare for any special services you may need.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-cream min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[0.7rem] tracking-[0.3em] uppercase text-rose mb-4">Questions & Answers</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-warm-gray max-w-xl mx-auto">
            Find answers to common questions about our nail services, pricing, and policies.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-blush pb-8">
              <h2 className="font-serif text-xl text-charcoal mb-4">
                {faq.question}
              </h2>
              <p className="text-warm-gray text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-20 text-center">
          <h3 className="font-serif text-2xl text-charcoal mb-4">Still Have Questions?</h3>
          <p className="text-warm-gray mb-8">We're happy to help! Reach out to us directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17025550123"
              className="btn"
            >
              Call Us
            </a>
            <a
              href="mailto:hello@eloraenails.com"
              className="btn"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Book CTA */}
        <div className="mt-20 text-center py-16 border-t border-blush">
          <h3 className="font-serif text-2xl text-charcoal mb-4">Ready to Book?</h3>
          <p className="text-warm-gray mb-8">Experience the Elorae difference.</p>
          <a href="/#booking" className="btn btn-primary">
            Book Online
          </a>
        </div>
      </div>
    </main>
  );
}
